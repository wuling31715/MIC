from flask import Flask, render_template, redirect, request
from data.read import Reader
import datetime, random

app = Flask(__name__)
port = random.randrange(1000, 9999)
all_rank_list = Reader.get_rank_list()[::-1]

def get_date(date):
    return '%s/%s/%s' % (date[:4], date[4:6], date[6:8])

def get_date_list():
    date_list = list()
    for i, j in enumerate(all_rank_list):
        date_list.append(get_date(str(j[0])))
        all_rank_list[i][0] = get_date(str(j[0]))    
    return date_list


def get_rank_list(date, industry):
    rank_list = list()
    if industry == '全部':
        for i in all_rank_list:
            if i[0] == date:
                for j in i[1:]:
                    rank_list.append(j)
        return rank_list[:200]
    else:
        for i in all_rank_list:
            if i[0] == date:
                for j in i[1:]:
                    if j[2] == industry:
                        rank_list.append(j)
        return rank_list[:200]

def get_market_cap_list(date, industry):
    company_name_list = list()
    market_cap_list = list()
    if industry == '全部':
        for i in all_rank_list:
            if i[0] == date:
                for j in i[1:]:
                    company_name_list.append(j[1])
                    market_cap_list.append(j[-1])
        return company_name_list[:100], market_cap_list[:100]
    else:
        for i in all_rank_list:
            if i[0] == date:
                for j in i[1:]:
                    if j[2] == industry:
                        company_name_list.append(j[1])
                        market_cap_list.append(j[-1])
        return company_name_list[:100], market_cap_list[:100]

def get_industry_market_cap_list():
    industry_market_cap_list = list()
    for i in industry_list[1:]:
        tmp = list()
        for j in date_list[::-1]:
            tmp.append(sum(get_market_cap_list(j, i)[1]))
        industry_market_cap_list.append(tmp)        
    return industry_market_cap_list


date_max = get_date(str(all_rank_list[0][0]))
today = datetime.datetime.now().strftime("%Y/%m/%d")
industry_list = ['全部', '資訊硬體', '電商', '網路服務', '軟體', '半導體', '電信', '通訊設備', '材料', '工業', '電子', '機電設備', '資訊服務', '儲存']
date_list = get_date_list()
season_list = date_list[::(len(date_list) // 4)][:4]
industry_market_cap_list = get_industry_market_cap_list()

@app.route("/")
def index():
    date = date_max
    industry = '全部'
    rank_list = get_rank_list(date, industry)
    company_name_list, market_cap_list = get_market_cap_list(date, industry)
    return render_template(
        'index.html', 
        date = date,
        date_list = date_list,
        rank_list = rank_list,
        industry = industry,
        industry_list = industry_list,
        company_name_list = company_name_list,
        market_cap_list = market_cap_list,
        industry_market_cap_list = industry_market_cap_list,
        season_list = season_list,
        )

@app.route("/query", methods=['POST', 'GET'])
def query():
    date = request.args.get('date')
    industry = request.args.get('industry')
    anchor = request.args.get('anchor')
    rank_list = get_rank_list(date, industry)
    company_name_list, market_cap_list = get_market_cap_list(date, '全部')
    return render_template(
        'index.html', 
        anchor = anchor,
        date = date,
        date_list = date_list,
        rank_list = rank_list,
        industry = industry,
        industry_list = industry_list,
        company_name_list = company_name_list,
        market_cap_list = market_cap_list,
        industry_market_cap_list = industry_market_cap_list,
        season_list = season_list,
        )

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=port)