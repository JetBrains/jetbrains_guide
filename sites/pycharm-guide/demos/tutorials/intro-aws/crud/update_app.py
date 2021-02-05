import bson
import ujson
from bson import ObjectId

from .utils import db, validator


def lambda_handler(event, context):
    try:
        object_id = event["pathParameters"]["Id"]
    except TypeError:
        object_id = None

    body = ujson.loads(event['body'])
    result = validator.UserSchema()

    res = not bool(result.validate(body))
    if res:
        mongo = db.MongoDBConnection()
        with mongo:
            database = mongo.connection['myDB']
            collection = database['registrations']
            try:
                collection.update_one({"_id": ObjectId(object_id)}, {"$set": body})
            except bson.errors.InvalidId:
                return {
                    "statusCode": 400,
                    "body": ujson.dumps({
                        "message": "Error ! Please provide a valid ObjectId",
                        "data": None
                    })
                }

            return {
                "statusCode": 200,
                "body": ujson.dumps({
                    "message": "Data Updated Successfully !",
                    "data": result.dump(body)
                })
            }
    else:
        return {
            "statusCode": 400,
            "body": ujson.dumps({
                "message": "Error !",
                "data": result.validate(body)
            })
        }