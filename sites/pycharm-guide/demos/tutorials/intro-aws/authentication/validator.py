import argon2
from argon2 import PasswordHasher
from marshmallow import Schema, fields, ValidationError, post_load

from . import db
from . import token


class UserLoginSchema(Schema):
    email = fields.Email(required=True)
    password = fields.Str(required=True)

    @post_load
    def validate_email_password(self, data, **kwargs):
        mongo = db.MongoDBConnection()
        with mongo:
            database = mongo.connection['myDB']
            collection = database['registrations']
            result = collection.find_one({"email": data["email"]})
            if result is None:
                raise ValidationError('Sorry! You have provided invalid email.')
            else:
                ph = PasswordHasher()
                try:
                    ph.verify(result['password'], data['password'])
                    data['token'] = token.create_access_token(result)
                except argon2.exceptions.VerifyMismatchError:
                    raise ValidationError('The password is invalid.')

        return data


class RefreshTokenSchema(Schema):
    token = fields.Str(required=True)

    @post_load
    def validate_token(self, data, **kwargs):
        refresh_token = token.refresh_token(data['token'])
        if refresh_token['status']:
            data['token'] = refresh_token['data']
        else:
            raise ValidationError(refresh_token['message'])

        return data