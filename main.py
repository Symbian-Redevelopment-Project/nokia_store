import os
from flask import Flask, render_template, redirect, request
from lib.database import WrongCategoryError, get_apps, get_apps_categories, get_category_name, search
import random
import math

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def __root():
    return redirect("/home/")

@app.route("/app")
def __app():
    return redirect("/home/")

@app.route("/app/<int:id>")
def _app(id):

    app = get_apps()[id]
    app['screenshots'] = [f'{id}_{i}.png' for i in range(app['screenshots_count'])]
    app['size'] = round(os.stat('static/files/' + app['file']).st_size / (1024 * 1024), 2)

    main_category = "Applications"
    main_category_link = "/applications/"

    recommended = list(get_apps(categoryId=app['category_id']).values())
    recommended = random.choices(recommended, k=10)
    recommended = [dict(t) for t in {tuple(d.items()) for d in recommended}]
    recommended = [d for d in recommended if d['id'] != app['id']]
    if not recommended:
        recommended = None

    return render_template("app_page.html", app=app, main_category=main_category, main_category_link=main_category_link, recommended=recommended)

@app.route("/m/app/<int:id>/")
def _m_app(id):

    app = get_apps()[id]
    app['screenshots'] = [f'{id}_{i}.png' for i in range(app['screenshots_count'])]
    app['size'] = round(os.stat('static/files/' + app['file']).st_size / (1024 * 1024), 2)

    main_category = "Applications"
    main_category_link = "/m/applications/"

    recommended = list(get_apps(categoryId=app['category_id']).values())
    recommended = random.choices(recommended, k=10)
    recommended = [dict(t) for t in {tuple(d.items()) for d in recommended}]
    recommended = [d for d in recommended if d['id'] != app['id']]
    if not recommended:
        recommended = None

    return render_template("m_app_page.html", app=app, main_category=main_category, main_category_link=main_category_link, recommended=recommended)

@app.route("/m/app/<int:id>/images/")
def _m_app_images(id):
    app = get_apps()[id]

    if not app['screenshots_count'] > 0:
        return redirect("/m/app/id/")

    app['screenshots'] = [f'{id}_{i}.png' for i in range(app['screenshots_count'])]
    return render_template("m_app_images.html", app=app)


@app.route("/m/applications/browse")
def __m_applications_browse():
    return redirect("/m/applications/browse/")

@app.route("/m/applications/browse/")
def _m_applications_browse():
    categories = get_apps_categories()
    return render_template("m_applications_browse.html", categories=categories)

# @app.route("/m/applications")
# def __m_applications():
#     categoryId = request.args.get('categoryId')
#     return redirect(f"/m/applications/?categoryId={categoryId}")

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
def _m_applications(categoryId=None):
    if not categoryId:
        categoryId = request.args.get('categoryId')
    try:
        all_apps = get_apps(categoryId)
    except WrongCategoryError:
        return redirect("/m/applications/")

    pageId = request.args.get('pageId')

    if not pageId:
        pageId = 1
    else:
        pageId = int(pageId)
    
    if ((pageId * 10) - 9) > len(all_apps):
        if pageId != 1:
            return redirect(f"/m/applications/?pageId=1&categoryId={categoryId}")
        else:
            if categoryId:
                return render_template("m_applications_empty.html", category=get_category_name(categoryId))
            else:
                return render_template("m_applications_empty.html", category=None)
    
    first_index = pageId - 1
    last_index = first_index + 10

    ids = list(all_apps.keys())
    apps_to_show = ids[first_index:last_index]
    apps_to_show = [all_apps[id] for id in apps_to_show]

    if not categoryId:
        return render_template('m_applications.html', apps=apps_to_show, category=None)
    else:
        return render_template('m_applications.html', apps=apps_to_show, category=get_category_name(categoryId))

@app.route("/m")
@app.route("/m/home")
@app.route("/m/")
def __m_root():
    return redirect("/m/home/")

@app.route("/m/home/")
def _m_root():

    apps = get_apps()
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

@app.route("/home/")
def _root():

    apps = get_apps()
    pageId = request.args.get('pageId')

    categories = get_apps_categories()

    if not pageId:
        pageId = 1
    else:
        pageId = int(pageId)
    
    if ((pageId * 10) - 9) > len(apps):
        print((pageId * 10) - 9)
        return redirect(f"/home/?pageId=1")
    
    first_index = pageId - 1
    last_index = first_index + 10

    ids = list(apps.keys())
    apps_to_show = ids[first_index:last_index]
    apps_to_show = [apps[id] for id in apps_to_show]

    return render_template("index.html", apps=apps_to_show, categories=categories)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')