from flask import Flask, render_template
from data.read import Reader
import datetime, random



port = random.randrange(1000, 9999)
app = Flask(__name__)

@app.route("/")
def index():
    return "<h1>Hello Word</h1>"

@app.route("/test")
def test():
    rank_list = Reader.get_rank_list()
    rank_today_list = max(rank_list)
    print(rank_today_list)
    return render_template(
        'index.html', 
        rank_today_list = rank_today_list[:101],
        )


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=port)