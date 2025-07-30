import os
from flask import Flask
from flask import render_template, redirect, send_file, abort
app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/assets/<image>")
def assets(image):
    try:
        file_path = os.path.join('static', image)
        return send_file(file_path)
    except FileNotFoundError:
        return abort(404)

print("Server starting: NWVBUG Homepage server")
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)