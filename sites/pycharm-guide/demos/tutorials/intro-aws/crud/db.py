from pymongo import MongoClient


class MongoDBConnection:
    def __init__(self):
        self.connection = None

    def __enter__(self):
        self.connection = MongoClient(
            "mongodb+srv://<USERNAME>:<PASSWORD>@<DBHOST>/<DB_NAME>")

        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.connection.close()