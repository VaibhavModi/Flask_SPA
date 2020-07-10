# Pip install waitress

from flask import Flask, render_template, request, make_response

app = Flask(__name__)
app.url_map.strict_slashes = False
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0


@app.route('/#')
@app.route("/", methods=['GET', 'POST'])
def index():
    name = 'First Page'
    return render_template('index.html', name=name)


@app.route('/second', methods=['GET', 'POST'])
def second():
    name = "Second Page"
    return render_template('second.html', name=name)


if __name__ == '__main__':
    # from waitress import serve
    # serve(app, host="0.0.0.0", port=8080)
    app.run(debug=True)
