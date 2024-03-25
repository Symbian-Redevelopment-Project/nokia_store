#!/usr/bin/python3

"""Add app to database

Made by Wunder Wungiel"""

import json
import os

import psycopg2
config = json.loads(open(os.path.join(os.path.dirname(os.path.realpath(__file__)), "config.json"), "r").read())

conn = psycopg2.connect(database=config["DB_NAME"],
    host=config["DB_HOST"],
    user=config["DB_USER"],
    password=config["DB_PASS"]
)

def main():

    print(" Adding app...\n")

    title = input(" Title: ")
    file = input(" File: ")
    category = input(" Category: ")
    description = input(" Description: ")
    publisher = input(" Publisher: ")
    version = input(" Version: ")
    img = input(" Img: ")

    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO apps (title, file, category, description, publisher, version, platform, img) VALUES (%s, %s, %s, %s, %s, %s, 's60', %s)",
        (title, file, category, description, publisher, version, img)
    )

    conn.commit()
    cursor.close()

    print(" Added!\n")

if __name__ == "__main__":
    main()