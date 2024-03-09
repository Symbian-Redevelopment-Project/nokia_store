import os
from flask import Flask, render_template, redirect, request
from lib.database import WrongCategoryError, get_content, get_categories, get_category_name, search
import random
import math
from icecream import ic

app = Flask(__name__)

@app.route("/m/app/<int:id>/")
def _m_app(id):
    return _m_item_page(id, content_type="apps")
@app.route("/m/game/<int:id>/")
def _m_game(id):
    return _m_item_page(id, content_type="games")

def _m_item_page(id, content_type):

    app = get_content(content_type=content_type)[id]
    app['screenshots'] = [f'{id}_{i}.png' for i in range(app['screenshots_count'])]
    try:
        app['size'] = round(os.stat('static/files/' + app['file']).st_size / (1024 * 1024), 2)
    except FileNotFoundError:
        app['size'] = 0

    recommended = list(get_content(content_type=content_type, categoryId=app['category_id']).values())
    recommended = random.choices(recommended, k=10)
    recommended = [dict(t) for t in {tuple(d.items()) for d in recommended}]
    recommended = [d for d in recommended if d['id'] != app['id']]
    if not recommended:
        recommended = None

    if content_type == "apps":
        template = "m_app_page.html"
    elif content_type == "games":
        template = "m_game_page.html"

    return render_template(template, app=app, recommended=recommended)

@app.route("/m/app/<int:id>/images/")
def _m_app_images(id):
    return _m_item_images(id, "apps")
@app.route("/m/game/<int:id>/images/")
def _m_game_images(id):
    return _m_item_images(id, "games")

def _m_item_images(id, content_type):
    app = get_content(content_type=content_type)[id]

    if not app['screenshots_count'] > 0:
        if type == "apps":
            url = f"/m/app/{id}/"
        elif content_type == "games":
            url = f"/m/game/{id}/"

        return redirect(url)

    app['screenshots'] = [f'{id}_{i}.png' for i in range(app['screenshots_count'])]
    return render_template("m_app_images.html", app=app)

@app.route("/m/applications/browse")
def __m_applications_browse():
    return redirect("/m/applications/browse/")

@app.route("/m/applications/browse/")
def _m_applications_browse():
    categories = get_categories("apps")
    return render_template("m_applications_browse.html", categories=categories)

@app.route("/m/games/browse")
def __m_games_browse():
    return redirect("/m/applications/browse/")

@app.route("/m/games/browse/")
def _m_games_browse():
    categories = get_categories("games")
    return render_template("m_games_browse.html", categories=categories)

@app.route("/m/search")
def _m_search():

    query = request.args.get('q')
    if not query:
        return redirect("/m/home/")
    
    results = search(query)

    pageId = request.args.get('pageId')

    if not pageId:
        pageId = 1
    else:
        pageId = int(pageId)
    
    if (pageId * 10) > math.ceil(len(results) / 10) * 10:
        if pageId != 1:
            return redirect(f"/m/search/?q={query}&pageId=1")
        else:
            return render_template("m_applications_empty.html", category=None)
    else:
        if ((pageId + 1) * 10) < math.ceil(len(results) / 10) * 10:
            if pageId != 1:
                next_page = pageId + 1
            else:
                next_page = None
            if pageId != math.ceil(len(results) / 10):
                previous_page = pageId - 1
            else:
                previous_page = None
        else:
            next_page = None
            previous_page = None
    
    first_index = pageId - 1
    last_index = first_index + 10

    ids = list(results.keys())
    apps_to_show = ids[first_index:last_index]
    apps_to_show = [results[id] for id in apps_to_show]

    if not results:
        return ""
    else:
        return render_template("m_search.html", results=apps_to_show, search_query=query, next_page=next_page, previous_page=previous_page)
    
@app.route("/m/applications/")
def _m_applications():
    return _m_content("apps")

@app.route("/m/games/")
def _m_games():
    return _m_content("games")

def _m_content(content_type):

    if content_type == "apps":
        content_type_prefix = "applications"
    elif content_type == "games":
        content_type_prefix = "games"

    categoryId = request.args.get('categoryId')
    
    try:
        all_apps = get_content(categoryId, content_type)
    except WrongCategoryError:
        return redirect(f"/m/{content_type_prefix}/")

    pageId = request.args.get('pageId')

    if not pageId:
        pageId = 1
    else:
        pageId = int(pageId)
    
    if (pageId * 10) > math.ceil(len(all_apps) / 10) * 10:
        if pageId != 1:
            return redirect(f"/m/{content_type_prefix}/?pageId=1&categoryId={categoryId}")
        else:
            if categoryId:
                return render_template(f"m_{content_type_prefix}_empty.html", category=get_category_name(categoryId, content_type))
            else:
                return render_template(f"m_{content_type_prefix}_empty.html", category=None)
    else:
        ic((pageId + 1) * 10)
        ic(math.ceil(len(all_apps) / 10) * 10)
        if ((pageId + 1) * 10) <= math.ceil(len(all_apps) / 10) * 10:
            if pageId != math.ceil(len(all_apps) / 10):
                print("1")
                next_page = pageId + 1
            else:
                next_page = None
        else:
            next_page = None
        
        if pageId != 1:
            previous_page = pageId - 1
        else:
            previous_page = None
    
    if pageId == 1:
        first_index = 0
    else:
        first_index = (pageId * 10) - 10
    
    last_index = first_index + 10

    ic(first_index, last_index)

    ids = list(all_apps.keys())
    apps_to_show = ids[first_index:last_index]
    apps_to_show = [all_apps[id] for id in apps_to_show]

    if not categoryId:
        return render_template(f'm_{content_type_prefix}.html', apps=apps_to_show, category=None, category_id=categoryId, next_page=next_page, previous_page=previous_page)
    else:
        return render_template(f'm_{content_type_prefix}.html', apps=apps_to_show, category=get_category_name(categoryId, content_type), category_id=categoryId, next_page=next_page, previous_page=previous_page)

@app.route("/m")
@app.route("/m/home")
@app.route("/m/")
def __m_root():
    return redirect("/m/home/")

@app.route("/m/home/")
def _m_root():

    apps = get_content(content_type="apps")
    pageId = request.args.get('pageId')

    if not pageId:
        pageId = 1
    else:
        pageId = int(pageId)
    
    if (pageId * 10) > math.ceil(len(apps) / 10) * 10:
        if pageId != 1:
            return redirect(f"/m/search/?pageId=1")
    else:
        if ((pageId + 1) * 10) < math.ceil(len(apps) / 10) * 10:
            if pageId != 1:
                next_page = pageId + 1
            else:
                next_page = None
            if pageId != math.ceil(len(apps) / 10):
                previous_page = pageId - 1
            else:
                previous_page = None
        else:
            next_page = None
            previous_page = None
    
    first_index = pageId - 1
    last_index = first_index + 10

    ids = list(apps.keys())
    apps_to_show = ids[first_index:last_index]
    apps_to_show = [apps[id] for id in apps_to_show]
    
    return render_template("m_index.html", apps=apps_to_show, next_page=next_page, previous_page=previous_page)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')