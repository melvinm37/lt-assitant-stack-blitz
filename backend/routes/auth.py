from flask import Blueprint, request, jsonify
from services.auth import AuthService
from utils.decorators import handle_exceptions

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
@handle_exceptions
def register():
    data = request.get_json()
    user = AuthService.create_user(
        email=data['email'],
        password=data['password'],
        license_key=data['licenseKey']
    )
    return jsonify({'message': 'User registered successfully', 'user': user}), 201

@auth_bp.route('/login', methods=['POST'])
@handle_exceptions
def login():
    data = request.get_json()
    token, user = AuthService.authenticate_user(
        email=data['email'],
        password=data['password']
    )
    return jsonify({
        'token': token,
        'user': user
    }), 200

@auth_bp.route('/logout', methods=['POST'])
@handle_exceptions
def logout():
    # In a more complex system, you might want to invalidate the token here
    return jsonify({'message': 'Logged out successfully'}), 200

@auth_bp.route('/verify-license', methods=['POST'])
@handle_exceptions
def verify_license():
    data = request.get_json()
    is_valid = AuthService.verify_license_key(data['licenseKey'])
    return jsonify({'isValid': is_valid}), 200