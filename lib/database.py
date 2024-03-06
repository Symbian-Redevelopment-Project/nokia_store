import psycopg2

password = "Jojek1324"

conn = psycopg2.connect(database="ovistore",
    host="localhost",
    user="wunder",
    password=password
)

class WrongCategoryError(Exception):
    pass

def get_apps(categoryId=None):

    cursor = conn.cursor()
    cursor.execute("SELECT id from apps_categories")
    categories = [result[0] for result in cursor.fetchall()]
    cursor.close()

    cursor = conn.cursor()
    if categoryId is None:
        cursor.execute("SELECT * FROM apps")
    else:
        if int(categoryId) not in categories:
            raise WrongCategoryError
        cursor.execute("SELECT * FROM apps WHERE category=%s", (categoryId,))
    
    results = cursor.fetchall()
    cursor.close()
    return results

def get_apps_categories():

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM apps_categories")
    results = cursor.fetchall()
    cursor.close()

    return results