import datetime
import os

import jwt


def create_access_token(result):
    # Returns new JWT Token.
    jwt_info = jwt.encode({
        "id": str(result["_id"]),
        "first_name": result["first_name"],
        "last_name": result["last_name"],
        "exp": datetime.datetime.utcnow() + datetime.timedelta(seconds=300)}, os.environ['SECRET_KEY'])

    return jwt_info


def refresh_token(token):
    # Refresh Token if the token hasn't expired.
    try:
        result = jwt.decode(token, os.environ['SECRET_KEY'], algorithms=["HS256"])
        jwt_info = jwt.encode({**result, "exp": datetime.datetime.utcnow() + datetime.timedelta(seconds=300)},
                              os.environ['SECRET_KEY'])

        return {"status": True, "data": jwt_info, "message": None}
    except jwt.exceptions.DecodeError:
        return {"status": False, "data": None, "message": "Unable to decode data !"}
    except jwt.ExpiredSignatureError:
        return {"status": False, "data": None, "message": "Token has expired !"}