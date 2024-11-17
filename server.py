from flask import Flask, request, jsonify
import requests
from app import ai_route

app = Flask(__name__)

@app.route("/url")
def recieve_url():
    url = request.args.get('url')
    
    if url is None:
        return jsonify({
            'message':'error!'

        })

    dict_to_return = {
        'prediction' : ai_route(url)
    }

    return jsonify(dict_to_return)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000, debug=True)

