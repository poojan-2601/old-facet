from api_testing_tool import app

from .auth import auth_blueprint
app.register_blueprint(auth_blueprint)

from .projects import projects_blueprint
app.register_blueprint(projects_blueprint)

from .endpoints import endpoints_blueprint
app.register_blueprint(endpoints_blueprint)

from .headers import headers_blueprint
app.register_blueprint(headers_blueprint)

from .payloads import payloads_blueprint
app.register_blueprint(payloads_blueprint)

from .testcases import testcases_blueprint
app.register_blueprint(testcases_blueprint)

from .testsuites import testsuite_blueprint
app.register_blueprint(testsuite_blueprint)

from .testdata import testdata_blueprint
app.register_blueprint(testdata_blueprint)

from .engine import engine_blueprint
app.register_blueprint(engine_blueprint)

from .environmentTypes import envTypes_blueprint
app.register_blueprint(envTypes_blueprint)
