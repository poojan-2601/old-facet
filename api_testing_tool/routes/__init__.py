from api_testing_tool import app

from .auth import auth_blueprint
app.register_blueprint(auth_blueprint)

from .projects import projects_blueprint
app.register_blueprint(projects_blueprint)

