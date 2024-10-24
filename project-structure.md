# Personal Finance Application Structure

## 1. System Architecture

### Frontend (React + TypeScript + ShadCN UI)
- Theme Configuration
  ```typescript
  colors: {
    forest: {
      DEFAULT: '#228B22',
      light: '#90EE90',
      dark: '#006400'
    },
    almond: {
      DEFAULT: '#FFEBCD',
      light: '#FFF8DC',
      dark: '#DEB887'
    }
  }
  ```

### Backend (Python Flask + PyMongo)
- RESTful API endpoints
- Vector search implementation
- Authentication middleware
- File storage system

### Database (MongoDB)
- Vector search enabled collections
- Proper indexing strategy
- Document relationships

## 2. Core Modules

### Authentication & Authorization
- User registration/login
- License key management
- API key generation
- Role-based access control (Admin, Manager, User)
- JWT token implementation

### CRM Module
- Contact management (Leads, Customers, Vendors)
- Status tracking and conversion workflow
- Vector search integration
- Relationship mapping
- Activity tracking

### Project Management
- Kanban board implementation
- Project timeline visualization
- Task management
- Resource allocation
- Project-Customer relationship
- Calendar integration

### Financial Management
- Chart of Accounts structure
- Double-entry accounting system
- Transaction management
- Journal entry system
- Financial reporting
- Vector search for transactions

### Document Management
- Document storage and retrieval
- Version control
- Document categorization
- Cross-reference with other modules
- Search functionality

## 3. Database Schema

### Users Collection
```json
{
  "_id": ObjectId,
  "email": String,
  "password": String(hashed),
  "role": String,
  "license_key": String,
  "api_keys": Array,
  "created_at": DateTime,
  "updated_at": DateTime
}
```

### Contacts Collection
```json
{
  "_id": ObjectId,
  "type": String(lead|customer|vendor),
  "name": String,
  "email": String,
  "phone": String,
  "status": String,
  "vector_embedding": Array,
  "created_at": DateTime,
  "updated_at": DateTime
}
```

### Projects Collection
```json
{
  "_id": ObjectId,
  "customer_id": ObjectId,
  "name": String,
  "status": String,
  "start_date": DateTime,
  "end_date": DateTime,
  "tasks": Array,
  "created_at": DateTime,
  "updated_at": DateTime
}
```

### Transactions Collection
```json
{
  "_id": ObjectId,
  "journal_type": String,
  "date": DateTime,
  "debit_account": String,
  "credit_account": String,
  "amount": Decimal128,
  "reference_type": String,
  "reference_id": ObjectId,
  "vector_embedding": Array,
  "proof_document": String,
  "created_at": DateTime,
  "updated_at": DateTime
}
```

### Chart of Accounts Collection
```json
{
  "_id": ObjectId,
  "account_number": String,
  "name": String,
  "type": String(A|L|C|I|E),
  "category": String,
  "subcategory": String,
  "is_active": Boolean
}
```

### Documents Collection
```json
{
  "_id": ObjectId,
  "name": String,
  "type": String,
  "path": String,
  "reference_type": String,
  "reference_id": ObjectId,
  "version": Number,
  "created_at": DateTime,
  "updated_at": DateTime
}
```

## 4. Implementation Steps

1. **Project Setup**
   - Initialize React project with Vite
   - Set up Flask backend
   - Configure MongoDB with vector search
   - Implement authentication system

2. **Core Infrastructure**
   - Database schema implementation
   - API endpoint structure
   - Authentication middleware
   - File storage system

3. **Module Implementation**
   - CRM module
   - Project management module
   - Financial management module
   - Document management module
   - Admin settings module

4. **UI Implementation**
   - Theme setup with ShadcN
   - Component library implementation
   - Module-specific interfaces
   - Responsive design

5. **Integration & Testing**
   - API integration
   - Module integration
   - Unit testing
   - End-to-end testing

6. **Deployment & Documentation**
   - Deployment configuration
   - User documentation
   - API documentation
   - System administration guide

## 5. Security Considerations

- Data encryption
- API security
- Input validation
- Role-based access control
- Audit logging
- Backup strategy

## 6. Performance Optimization

- Database indexing
- Caching strategy
- Query optimization
- Frontend optimization
- API response optimization