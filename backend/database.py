from pymongo import MongoClient
from config import Config

client = None
db = None

def init_db():
    global client, db
    client = MongoClient(Config.MONGO_URI)
    db = client.finance_app
    
    # Create indexes
    db.users.create_index('email', unique=True)
    
    # Create admin user if not exists
    if not db.users.find_one({'email': 'admin@example.com'}):
        from services.auth import AuthService
        AuthService.create_user(
            email='admin@example.com',
            password='admin123',
            role='admin',
            license_key='ADMIN-KEY'
        )

def get_db():
    return db