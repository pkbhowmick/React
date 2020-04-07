from flask import Flask, render_template, jsonify, request
import jwt
import datetime
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secretkey'
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/register',methods=['GET','POST'])
def register():
    name = request.get_json()['name']
    token = jwt.encode({'user' : name, 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])
    return jsonify({"token" : str(token)})

@app.route('/sign-in',methods=['GET','POST'])
def signin():
    email = request.get_json()['email']
    password = request.get_json()['password']
    token = jwt.encode({'user' : email, 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])
    return jsonify({"token" : str(token)})

if __name__=='__main__':
    app.run(debug=True)
