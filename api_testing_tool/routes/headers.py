from email import header
import json
from flask import Blueprint,jsonify, request
from flask_jwt_extended import get_current_user, jwt_required
import jwt
from api_testing_tool import db
from api_testing_tool.helpers.utils import create_id

headers_blueprint = Blueprint('headers', __name__)

@headers_blueprint.route('/api/headers',methods = ["GET"])
@jwt_required()
def getHeaders():
    data = request.json
    project_id = data.get("project_id")
    project_headers = db.headers.find({"project_id" : project_id})
    return jsonify({"headers" : list(project_headers)})


@headers_blueprint.route('/api/create-headers',methods = ["POST"])
@jwt_required()
def createHeaders():
    data = request.json
    project_id = data.get("project_id")
    header = data.get("header")
    name = data.get("name")
    endpoint_id = data.get("endpoint_id")
    if db.headers.find_one({'project_id' : project_id,'endpoint_id': endpoint_id}) == None:
        db.headers.insert_one({
            "_id" : create_id(),
            "project_id" : project_id,
            "header" : header,
            "name" : name,
            "endpoint_id" : endpoint_id
        })
        return jsonify({"success": "header added succesfully"})
    else:
        return jsonify({"error" : "header exists for this endpoint in the project"})