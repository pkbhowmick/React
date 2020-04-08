from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo
import jwt
import datetime
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

app.config['SECRET_KEY'] = 'secretkey'
app.config['MONGO_DBNAME'] = "ekyc"
app.config['MONGO_URI']= "mongodb://localhost:27017/ekyc"

mongo = PyMongo(app)

cors = CORS(app)
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/register',methods=['GET','POST'])
def register():
    users = mongo.db.users

    name = request.get_json()['name']
    email = request.get_json()['email']
    password = generate_password_hash(request.get_json()['password'])
    
    response = users.find_one({'email': email})

    if response:
        result = jsonify({"alert":"Email already registered"})
    else:
        user_id  = users.insert({
            'name': name,
            'email': email,
            'password': password,
        })
        new_user = users.find_one({'_id': user_id})
        
        token = jwt.encode({'user' : name, 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])
        result = jsonify({"token" : str(token)})
    
    return result

@app.route('/sign-in',methods=['GET','POST'])
def signin():
    users = mongo.db.users

    email = request.get_json()['email']
    password = request.get_json()['password']

    response = users.find_one({'email': email})
    if response:
        if check_password_hash(response['password'], password):
            token = jwt.encode({'user' : email, 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY']) 
            result =  jsonify({"token" : str(token)})
        else:
            result = jsonify({"error": "Invalid username/password"})
    else:
        result = jsonify({"result":"No results found"})
    return result

if __name__=='__main__':
    app.run(debug=True)
