import requests
import pandas as pd
import numpy as np
import datetime
import csv
import os
from bs4 import BeautifulSoup
from forex_python.converter import CurrencyRates

def get_html(company_name):
    url = 'https://www.google.com.tw/search'
    keyword = {'q': company_name + ' stock'}
    html = requests.get(url, params=keyword).text
    return html

def get_market_cap(html):
    soup = BeautifulSoup(html, 'html.parser')
    market_cap = soup.findAll("td", {"align": "right"})[-1].text
    place = soup.findAll("h3", {"class": "r"})[0].find('span').text
    return market_cap, place

def get_currency_rate(x, y):
    if x == '':
        x = y
    c = CurrencyRates()
    r = c.get_rate(x, y)
    return r

def get_currency_rate2(x, y):
    try:
        # api_key = '14ee46c12ed9a7f8d68e7e92'
        api_key = '6f161473b3cc911c25577e57'
        url = 'https://v3.exchangerate-api.com/bulk/%s/%s' % (api_key, x)
        response = requests.get(url)
        data = response.json()
        r = data['rates'][y]
        return r
    except:
        return ''

def market_cap_format(market_cap_str):
    market_cap_str = market_cap_str.replace('.', '')
    market_cap_str = market_cap_str.replace('萬', '0' * 4)
    market_cap_str = market_cap_str.replace('億', '0' * 8)
    market_cap_str = market_cap_str.replace('兆', '0' * 12)
    market_cap_int = int(market_cap_str)
    return market_cap_int

def get_lift(i):
    if i > 0:
        return '+ ' + str(i)
    elif i < 0:
        return '- ' + str(i)
    else:
        return '+ ' + str(i)

company = pd.read_csv('company.csv')
currency = pd.read_csv('currency.csv')
currency_name = currency['name']
currency_symbol = currency['symbol']
company_list = company.values.tolist()

for i, j in enumerate(company_list):
    try:
        name = j[0]
        html = get_html(name)
        market_cap, exchange = get_market_cap(html)
        company_list[i].append(market_cap)
        company_list[i].append(exchange)
        print(company_list[i])
    except:
        company_list[i].append('')
        company_list[i].append('')
        print(company_list[i])

for i, j in enumerate(company_list):
    company_list[i].append('')
    for k, l in enumerate(currency_name):
        if l in j[-2]:
            company_list[i][-1] = currency_symbol[k]
            print(company_list[i])
            break

for i, j in enumerate(company_list):
    try:
        company_list[i].append(get_currency_rate(j[-1], 'USD'))
        print(company_list[i])
    except:
        company_list[i].append(get_currency_rate2(j[-1], 'USD'))
        print(company_list[i])

for i, j in enumerate(company_list):
    try:
        company_list[i].append(market_cap_format(j[2]))
        print(company_list[i])
    except:
        company_list[i].append('')
        print(company_list[i])

for i, j in enumerate(company_list):
    try:
        company_list[i].append(int(j[-1] * j[-2]))
        print(company_list[i])
    except:
        company_list[i].append(0)
        print(company_list[i])

df = pd.DataFrame(columns=['rank', 'name', 'industry', 'exchange', 'code', 'rate', 'market_cap'])
for i in company_list:
    df = df.append({'name': i[0],
                    'industry': i[1],
                    'exchange': i[3],
                    'code': i[4],
                    'rate': i[5],
                    'market_cap': i[-1],
                   }, ignore_index=True)

df = df.replace('', np.nan, regex=True)
df = df.sort_values(by=['market_cap'], ascending=False)
df = df.reset_index(drop=True)
df['rank'] = df.index + 1
df['market_cap'].astype('int')
df = df.replace(np.nan, '')

now = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
path = 'datasets/' + now + '.csv'
df.to_csv(path, index=False)