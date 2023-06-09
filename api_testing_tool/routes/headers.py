from flask import Blueprint,jsonify, request
from flask_jwt_extended import get_current_user, jwt_required
from jsonschema import ValidationError, validate
from api_testing_tool import db
from api_testing_tool.helpers import create_id, validation_error, create_slug, get_project_id
from api_testing_tool.schema import header_schema

headers_blueprint = Blueprint('headers', __name__)

@headers_blueprint.route('/api/headers',methods = ["GET"])
@headers_blueprint.route('/api/headers/<string:id>',methods = ["GET"])
@jwt_required()
def getHeaders(id=0):
    try:
        project_id = get_project_id(request.args.get("project"))
        if id==0:
            project_headers = db.headers.find({"project" : project_id}, {"project": 0, "user": 0})
            return jsonify({"headers" : list(project_headers)})
        header = db.headers.find_one({"project" : project_id, "_id":id}, {"project": 0, "user": 0})
        return jsonify(header), 200
    except Exception as e :
        return jsonify(e), 400


@headers_blueprint.route('/api/headers/new',methods = ["POST"])
@jwt_required()
def createHeaders():
    data = request.json
    project_id = get_project_id(data.get("project"))
    header = data.get("header")
    name = create_slug(data.get("name"))
    
    try:
        validate(data, header_schema)
    except ValidationError as e:
        error = validation_error(e)
        return jsonify(error), 400

    db.headers.insert_one({
        "_id" : create_id(),
        "project" : project_id,
        "header" : header,
        "name" : name,
        "user": get_current_user()["_id"]
    })
    return jsonify({"success": "header added succesfully"})