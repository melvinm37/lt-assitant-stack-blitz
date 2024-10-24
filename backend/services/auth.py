import jwt
import bcrypt
from datetime import datetime, timedelta
from database import get_db
from config import Config
from utils.exceptions import AuthenticationError, ValidationError

class AuthService:
    @staticmethod
    def create_user(email: str, password: str, license_key: str, role: str = 'user'):
        db = get_db()
        
        # Validate license key
        if not AuthService.verify_license_key(license_key):
            raise ValidationError('Invalid license key')
            
        # Check if user exists
        if db.users.find_one({'email': email}):
            raise ValidationError('Email already registered')
            
        # Hash password
        salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
        
        user = {
            'email': email,
            'password': hashed_password,
            'role': role,
            'license_key': license_key,
            'created_at': datetime.utcnow(),
            'updated_at': datetime.utcnow()
        }
        
        db.users.insert_one(user)
        
        # Remove password before returning
        user.pop('password', None)
        return user

    @staticmethod
    def authenticate_user(email: str, password: str):
        db = get_db()
        user = db.users.find_one({'email': email})
        
        if not user or not bcrypt.checkpw(password.encode('utf-8'), user['password']):
            raise AuthenticationError('Invalid email or password')
            
        # Generate JWT token
        token = jwt.encode({
            'user_id': str(user['_id']),
            'email': user['email'],
            'role': user['role'],
            'exp': datetime.utcnow() + timedelta(seconds=Config.JWT_ACCESS_TOKEN_EXPIRES)
        }, Config.JWT_SECRET_KEY, algorithm='HS256')
        
        # Remove password before returning
        user.pop('password', None)
        user['_id'] = str(user['_id'])  # Convert ObjectId to string
        
        return token, user

    @staticmethod
    def verify_license_key(license_key: str) -> bool:
        # In a real application, you would verify against a license key database
        # For now, we'll accept any non-empty string that starts with a valid prefix
        valid_prefixes = ['FINANCE-', 'ADMIN-']
        return any(license_key.startswith(prefix) for prefix in valid_prefixes)