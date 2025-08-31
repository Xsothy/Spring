# Spring Boot + Inertia.js + React + Refine.dev Demo

This project demonstrates a modern full-stack application combining:

- 🌱 **Spring Boot** - Robust backend framework
- 🔄 **Inertia.js** - Modern full-stack development approach
- ⚛️ **React** - Dynamic user interfaces  
- 🎨 **Refine.dev** - Enterprise-grade admin panels
- 🎯 **Ant Design** - Beautiful UI components

## Features

### Backend (Spring Boot)
- RESTful API for student management
- JPA/Hibernate for data persistence
- SQLite database
- Spring Security
- Bean validation
- Inertia4J integration

### Frontend (React + Refine.dev)
- Server-side rendered React components via Inertia.js
- Professional admin interface with Refine.dev
- CRUD operations for student management
- Responsive design with Ant Design
- Form validation and error handling

## Project Structure

```
├── src/main/java/                 # Spring Boot backend
│   └── com/example/demo/
│       ├── controllers/           # Inertia controllers
│       ├── models/               # JPA entities
│       ├── services/             # Business logic
│       ├── repositories/         # Data access
│       └── config/               # Configuration classes
├── src/main/resources/
│   ├── js/                       # React components
│   │   └── Pages/                # Inertia page components
│   │       ├── Home.jsx          # Landing page
│   │       └── Admin/            # Admin panel components
│   └── templates/                # Thymeleaf templates
│       └── app.html              # Main Inertia template
├── package.json                  # Frontend dependencies
├── webpack.config.js             # Build configuration
└── pom.xml                       # Maven dependencies
```

## Getting Started

### Prerequisites
- Java 21+
- Node.js 16+
- Maven 3.6+

### Installation

1. **Clone and setup backend:**
   ```bash
   cd /path/to/project
   ./mvnw clean install
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Build frontend assets:**
   ```bash
   npm run build
   ```

4. **Run the application:**
   ```bash
   ./mvnw spring-boot:run
   ```

5. **Access the application:**
   - Home page: http://localhost:8080
   - Admin panel: http://localhost:8080/admin

### Development

For development with automatic rebuilding:

```bash
# Terminal 1 - Frontend build watch
npm run dev

# Terminal 2 - Spring Boot with hot reload
./mvnw spring-boot:run
```

## API Endpoints

| Method | Endpoint                      | Description          |
|--------|-------------------------------|----------------------|
| GET    | `/`                          | Home page            |
| GET    | `/admin`                     | Admin dashboard      |
| GET    | `/admin/students/new`        | Create student form  |
| POST   | `/admin/students`            | Create student       |
| GET    | `/admin/students/edit/{id}`  | Edit student form    |
| POST   | `/admin/students/{id}`       | Update student       |
| GET    | `/admin/students/delete/{id}`| Delete student       |

## Key Technologies Integration

### Inertia.js Setup
- **Backend**: Inertia4J Spring integration provides seamless server-side rendering
- **Frontend**: @inertiajs/react handles client-side navigation and form submissions
- **Templates**: Single `app.html` template serves all React components

### Refine.dev Integration
- **Data Provider**: Custom provider that works with Inertia.js navigation
- **Components**: Professional CRUD interface with tables, forms, and navigation
- **Theming**: Ant Design integration for consistent UI/UX

### Student Management Features
- ✅ List all students with pagination and search
- ✅ Create new students with validation
- ✅ Edit existing student information
- ✅ Delete students with confirmation
- ✅ Responsive design for mobile and desktop

## Data Model

**Student Entity:**
```java
{
  "id": Long,           // Primary key
  "name": String,       // Student name (required, unique)
  "email": String,      // Email address (required, valid email)
  "sex": String,        // Gender (Male/Female/Other)
  "score": Integer      // Score (0-100)
}
```

## Security

- Spring Security configuration
- CSRF protection
- Input validation
- SQL injection prevention via JPA

## Browser Support

- Modern browsers with ES6+ support
- Responsive design for mobile devices
- Progressive enhancement approach

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Build and test
5. Submit a pull request

## Next Steps

Potential enhancements:
- [ ] User authentication and authorization
- [ ] File upload capabilities
- [ ] Email notifications
- [ ] Advanced search and filtering
- [ ] Data export functionality
- [ ] Real-time updates via WebSockets

## License

This project is for demonstration purposes and uses various open source technologies under their respective licenses.
