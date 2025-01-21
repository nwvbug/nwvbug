from flask import Flask
from flask import render_template, redirect
app = Flask(__name__)


@app.route("/")
def index():
    return redirect("https://github.com/nwvbug")


    

print("Server starting: NWVBUG Homepage server")
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)