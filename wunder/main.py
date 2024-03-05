import os
from flask import Flask, render_template, redirect, request
import psycopg2
from password import password

app = Flask(__name__)

conn = psycopg2.connect(database="ovistore",
    host="localhost",
    user="wunder",
    password=password
)


@app.route("/home")
def __root():
    return redirect("/home/")

@app.route("/app")
def __app():
    return redirect("/home/")

@app.route("/app/<id>")
def _app(id):

    app = {
        'id': id,
        'title': 'Opera Mini',
        'file': 'Opera Mini v7.10(32453).sisx',
        'description': '''The Opera Mini browser is a turbo-charged web browser for mobile devices. The Opera Mini browser uses Opera's servers to compress Web pages so they load faster. You also save money on data charges since Opera Mini uses a fraction of the data of other browsers.

Opera Mini has a new interface that gives your device a sleek, modern appearance. You can also share web content from Opera Mini on social networks.

Opera Mini is the ultimate browser.''',
        'category': 'Internet',
        'publisher': 'Opera Software',
        'version': '7.10.32453',
        'platform': 'Symbian',
        'screenshots': (f'{id}_0.png', f'{id}_1.png', f'{id}_2.png'),
        'size': round(os.stat(f'static/files/Opera Mini v7.10(32453).sisx').st_size / (1024 * 1024), 2)
    }

    return render_template("app_page.html", app=app)

@app.route("/")
@app.route("/home/")
def _root():
    apps = [
        {"title": "app1", "publisher": "publisher1", "category": "news", "img": "death_1-96x96.jpg"},
        {"title": "app2", "publisher": "publisher2", "category": "virus", "img": "logo_256-96x96.jpg"},
        {"title": "app3", "publisher": "publisher3", "category": "personalisation", "img": "GMR_Icon_256x256-96x96.png"},
        {"title": "app4", "publisher": "publisher4", "category": "games", "img": "skiresort_256x256_splash_en-96x96.jpg"},
        {"title": "app5", "publisher": "publisher1", "category": "apps", "img": "tenis_256x256_splash_en_TRIAL-96x96.jpg"},
    ]

    return render_template("index.html", apps=apps)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')