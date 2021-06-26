# Pip install waitress

from flask import Flask, render_template, request, make_response
#from waitress import serve
from flask_mysqldb import MySQL


app = Flask(__name__)
app.url_map.strict_slashes = False
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'Students'

mysql = MySQL(app)

@app.route("/")
@app.route('/home', methods=['GET', 'POST'])
def home():
    title = 'Home'
    return render_template('index.html', title=title)

@app.route('/projects')
def projects():
    title = 'Projects'
    return render_template('projects.html',title=title)

@app.route('/blogs', methods=['GET', 'POST'])
def second():
    title = "Blogs"
    return render_template('blogs.html', title=title)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        userdetails = request.form
        fname = userdetails['fname']
        # cur = mysql.connection.cursor()
        # cur.execute("INSERT INTO student(idnum,name) VALUES(%i,%s)",(54252,'Testing1'))
        # mysql.connection.commit()
        # cur.close()
        # return "{name}"
    return render_template('contact.html')


if __name__ == '__main__':
    #serve(app, host="0.0.0.0", port=8080)
    app.run(debug=True)
