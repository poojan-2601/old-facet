from flask import Blueprint, request, jsonify
from flask_jwt_extended import get_current_user, jwt_required
from jsonschema import ValidationError, validate
from api_testing_tool import db
from api_testing_tool.helpers import create_id, validation_error, create_slug, get_project_id
from api_testing_tool.schema import payload_schema

payloads_blueprint = Blueprint('payloads', __name__)


@payloads_blueprint.route('/api/payload/new', methods = ['POST'])
@jwt_required()
def create_payloads():
    data = request.json

    name = create_slug(data.get("name"))
    project_id = get_project_id(data.get('project'))

    try:
        validate(data, payload_schema)
    except ValidationError as e:
        error = validation_error(e)
        return jsonify(error), 400

    db.payloads.insert_one({
        "_id": create_id(),
        "user": get_current_user()["_id"],
        "name": name,
        **data,
        "project": project_id
    })

    return jsonify({"msg": "Payload created Successfully!!"})

@payloads_blueprint.route('/api/payloads', methods=['GET'])
@payloads_blueprint.route('/api/payloads/<string:id>', methods=['GET'])
@jwt_required()
def get_payloads(id=0):
    try:
        project_id = get_project_id(request.args.get("project"))
        if id==0:
            project_payloads = db.payloads.find({"project" : project_id, "user":get_current_user()['_id']}, {"user": 0, "project":0})
            return jsonify({"payloads": list(project_payloads)})
        payload = db.payloads.find_one({"project" : project_id, "_id":id, "user":get_current_user()['_id']}, {"user": 0, "project":0})
        return jsonify(payload), 200
    except Exception as e:
        return jsonify(e), 400