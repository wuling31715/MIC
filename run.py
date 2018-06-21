from flask import Flask, render_template
import datetime, random

port = random.randrange(1000, 9999)

app = Flask(__name__)

@app.route("/")
def index():
    return "<h1>Hello Word</h1>"

@app.route("/test")
def test():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=port)