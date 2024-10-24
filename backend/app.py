from flask import Flask
from flask_cors import CORS
from routes.auth import auth_bp
from config import Config
from database import init_db

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

# Initialize database
init_db()

# Register blueprints
app.register_blueprint(auth_bp, url_prefix='/api/auth')

if __name__ == '__main__':
    app.run(debug=True)