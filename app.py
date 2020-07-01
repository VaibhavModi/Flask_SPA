#Pip install waitress

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html',title='First Page',name='secret name')

@app.route('/second')
def second():
    name="Second Page"
    return render_template('second.html',name=name)

if __name__=='__main__':
    #from waitress import serve
    #serve(app, host="0.0.0.0", port=8080)
    app.run(debug=True)