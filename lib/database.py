import psycopg2
import os
import json

config = json.loads(open(os.path.join(os.path.dirname(os.path.realpath(__file__)), "..", "config.json"), "r").read())

conn = psycopg2.connect(database=config["DB_NAME"],
    host=config["DB_HOST"],
    user=config["DB_USER"],
    password=config["DB_PASS"]
)

class WrongCategoryError(Exception):
    pass

def format_results(results_list):

    results = {}
    for result_list in results_list:
        results[result_list[0]] = {
            "id": result_list[0],
            "title": result_list[1],
            "file": result_list[2],
            "category_name": get_category_name(result_list[3]),
            "category_id": result_list[3],
            "description": result_list[4].replace("postgres$#", "\n").strip(),
            "publisher": result_list[5],
            "version": result_list[6],
            "platform": result_list[7],
            "screenshots_count": result_list[8],
            'img': result_list[9]
        }
    
    return results

def get_apps(categoryId=None):

    cursor = conn.cursor()
    cursor.execute("SELECT * from apps_categories")
    categories = cursor.fetchall()
    categories_ids = [result[0] for result in categories]
    cursor.close()

    cursor = conn.cursor()
    if categoryId is None:
        cursor.execute("SELECT * FROM apps")
    else:
        if int(categoryId) not in categories_ids:
            raise WrongCategoryError
        cursor.execute("SELECT * FROM apps WHERE category=%s", (int(categoryId),))
    
    results_list = cursor.fetchall()
    cursor.close()

    return format_results(results_list)


def get_apps_categories():

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM apps_categories")
    results = cursor.fetchall()
    cursor.close()

    return results

def get_category_name(categoryId):

    cursor = conn.cursor()
    cursor.execute("SELECT name FROM apps_categories WHERE id=%s", (int(categoryId),))
    result = cursor.fetchall()[0][0]
    cursor.close()
    return result

def get_category_id(categoryName):

    cursor = conn.cursor()
    cursor.execute("SELECT id FROM apps_categories WHERE name=%s", (categoryName,))
    result = cursor.fetchall()[0][0]
    cursor.close()
    return result

def search(query):

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM apps WHERE LOWER(title) LIKE LOWER(%s)", ('%' + query + '%',))

    results_list = cursor.fetchall()
    cursor.close()

    return format_results(results_list)