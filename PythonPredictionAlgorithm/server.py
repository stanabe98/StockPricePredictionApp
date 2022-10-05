from flask import Flask, jsonify, request
from testalgo2 import stock_predictor

app = Flask(__name__)
@app.route('/<string:ticker>',methods=["GET"])
def prediction(ticker: str):
    pred = stock_predictor(ticker)
    return pred

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=8050)

