from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/register',methods=['GET','POST'])
def register():
    email = request.get_json()['email']
    return jsonify({"email" : email})

@app.route('/sign-in',methods=['POST'])
def signin():
    email = request.get_json()['email']
    password = request.get_json()['password']
    return jsonify({"email" : email,
                    "password": password})

if __name__=='__main__':
    app.run(debug=True)
