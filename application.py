# Author: Gouthaman Balaraman
# http://gouthamanbalaraman.com/minimal-flask-login-example.html

from functools import wraps
from flask import Flask, Response, request, render_template

application = Flask(__name__)

def check_auth(username, password):
    """This function is called to check if a username /
    password combination is valid.
    """
    return username == 'cdg' and password == 'secretspypassword'

def authenticate():
    """Sends a 401 response that enables basic auth"""
    return Response(
    'Could not verify your access level for that URL.\n'
    'You have to login with proper credentials', 401,
    {'WWW-Authenticate': 'Basic realm="Login Required"'})

def requires_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth = request.authorization
        if not auth or not check_auth(auth.username, auth.password):
            return authenticate()
        return f(*args, **kwargs)
    return decorated

@app.route("/")
@requires_auth
def index():
    return render_template('index.html')

if __name__ == '__main__':
    application.run()
