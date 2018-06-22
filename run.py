from flask import Flask, render_template, redirect
from data.read import Reader
import datetime, random

app = Flask(__name__)
port = random.randrange(1000, 9999)
today = datetime.datetime.now().strftime("%Y/%m/%d")

def get_date(date):
    return '%s/%s/%s' % (date[:4], date[4:6], date[6:8])

@app.route("/")
def index():
    rank_list = Reader.get_rank_list()
    rank_today_list = max(rank_list)    
    return render_template(
        'index.html', 
        today = today,
        rank_today_list = rank_today_list[:101],
        )

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=port)