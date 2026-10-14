# HopeStep LearningApp – User Account Management System

## 📌 Project Overview

HopeStep LearningApp is a full-stack web application developed using **React, Spring Boot, and MySQL**. It demonstrates CRUD (Create, Read, Update, Delete) operations for managing user accounts in a learning application. It allows users to create and manage user accounts through the React frontend UI and the Spring Boot backend REST APIs.

The application provides a foundation for user account management, with a user interactive React frontend, a Spring Boot REST API backend, and a MySQL database for persistent data storage.


## 🚀 Technologies Used

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Tailwind CSS
- React Router

### Backend
- Java
- Spring Boot
- Spring Web / REST APIs
- Spring Data JPA


### Database
- MySQL
- MySQL Workbench

### Development Tools
- Visual Studio Code
- Eclipse IDE
- Maven
- Git and GitHub
- Postman

## ✨ Features

- Create new user accounts.
- Retrieve user account information.
- Update existing user details.
- Delete user accounts.
- Connect the React frontend to Spring Boot REST APIs.
- Store and manage user data in MySQL.
- Use a layered backend architecture with controllers, services, and entities.

## 🏗️ Application Architecture

```text
LearningApp
│
├── Frontend (React)
│   ├── User Interface
│   ├── Sign In / Registration
│   └── API Integration
│
├── Backend (Spring Boot)
│   ├── UserController
│   ├── UserService
│   └── User Entity
│
└── Database (MySQL)
    └── User Account Records
```

## Data Flow
```text
Data Flow

React Frontend UI
       |
       | HTTP Requests (REST API)
       v
Spring Boot Backend
       |
       | Spring Data JPA / Hibernate
       v
MySQL Database

```


## ⚙️ CRUD Operations

| Operation | HTTP Method | Endpoint |
|---|---|---|
| Create User | POST | `/addUser` |
| Read Users | GET | `/getUsers` |
| Update User | POST | `/updateUser` |
| Delete User | GET | `/deleteUser/{id}` |

*Note: These endpoints reflect the current backend implementation. Consider using `PUT` for updates and `DELETE` for deletions as a future REST API improvement.*

## 🛠️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_REPOSITORY_NAME
```

### 2. Configure MySQL

1. Create a MySQL database named `javatech`.
2. Update the database URL, username, and password in your Spring Boot `application.properties` file.

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/javatech
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

**Security:** Do not commit real database passwords or other credentials to GitHub.

### 3. Run the Spring Boot Backend

Open the backend project in Eclipse or your preferred Java IDE, then run the Spring Boot application.

The backend is configured to run at:

```text
http://localhost:8080
```

### 4. Run the React Frontend

Navigate to the frontend project directory:

```bash
npm install
npm run dev
```

Open the local URL displayed in your terminal. The frontend may run at:

```text
http://localhost:5174
```

Make sure the frontend API requests and backend CORS configuration use the correct ports.

## 🔮 Future Enhancements

- Implement backend authentication and authorization.
- Add form validation and improved error handling.
- Implement password hashing and secure credential management.
- Add user profile management.
- Improve REST API conventions.
- Add automated unit and integration tests.
- Deploy the frontend and backend to the cloud.

## 👩‍💻 Author

Developed as a full-stack learning project to practice React development, Java, Spring Boot REST APIs, MySQL integration, and CRUD operations.

