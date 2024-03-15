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

def format_results(results_list, content_type):

    results = {}
    for result_list in results_list:
        results[result_list[0]] = {
            "id": result_list[0],
            "title": result_list[1],
            "file": result_list[2],
            "category_name": get_category_name(result_list[3], content_type),
            "category_id": result_list[3],
            "description": result_list[4].replace("postgres$#", "\n").strip(),
            "publisher": result_list[5],
            "version": result_list[6],
            "platform": result_list[7],
            "screenshots_count": result_list[8],
            "img": os.path.join(content_type, result_list[9]),
            "content_type": content_type
        }
    
    return results

def get_content(categoryId=None, content_type=None):

    categories = get_categories(content_type)
    categories_ids = [result[0] for result in categories]

    cursor = conn.cursor()
    if categoryId is None:
        query = f"SELECT * FROM {content_type}"
        cursor.execute(query)
    else:
        if int(categoryId) not in categories_ids:
            raise WrongCategoryError
        
        query = f"SELECT * FROM {content_type} WHERE category=%s ORDER BY title"

        cursor.execute(query, (int(categoryId),))
    
    results_list = cursor.fetchall()
    cursor.close()

    return format_results(results_list, content_type)

def get_categories(content_type):

    query = f"SELECT * FROM {content_type}_categories ORDER by name"

    cursor = conn.cursor()
    cursor.execute(query)
    results = cursor.fetchall()
    cursor.close()

    return results

def get_category_name(categoryId, content_type):
    
    query = f"SELECT name FROM {content_type}_categories WHERE id=%s"

    cursor = conn.cursor()
    cursor.execute(query, (int(categoryId),))
    result = cursor.fetchall()[0][0]
    cursor.close()
    return result

def get_category_id(categoryName, content_type):

    cursor = conn.cursor()

    cursor.execute(f"SELECT id FROM {content_type}_categories WHERE name=%s", (categoryName,))
    result = cursor.fetchall()[0][0]
    cursor.close()
    return result

def search(query, databases):

    if not databases:
        databases = ("apps", "games")

    results = {}

    for database in databases:
        cursor = conn.cursor()
        cursor.execute(f"SELECT * FROM {database} WHERE LOWER(title) LIKE LOWER(%s) ORDER BY title", ('%' + query + '%',))
        results_list = cursor.fetchall()
        cursor.close()

        results = results | format_results(results_list, database)

    return results