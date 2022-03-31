from flask import Blueprint

projects_blueprint = Blueprint('projects', __name__)

@projects_blueprint.route('/projects')
def get_projects():
    pass