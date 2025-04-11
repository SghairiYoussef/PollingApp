# 🗳️ PollingApp

**PollingApp** is a full-stack web application that enables users to create, manage, and participate in polls seamlessly. Designed with a user-friendly interface and robust backend, it offers real-time voting capabilities and dynamic poll management.

## 🚀 Features

- **Create Polls**: Users can craft polls with custom questions and multiple options.
- **Vote in Real-Time**: Participate in polls and see live updates of voting results.
- **Responsive Design**: Ensures optimal viewing experience across devices.
- **Dynamic Poll Management**: Add or remove poll options on the fly.
- **Secure Backend**: Robust backend handling with error validations.

## 🛠️ Tech Stack

- **Frontend**: Angular, HTML, CSS, Bootstrap
- **Backend**: Spring Boot (Java)
- **Database**: MySQL
- **Others**: RESTful APIs, TypeScript

## 📂 Project Structure

```
PollingApp/
├── poll-app-front/     # Frontend Angular application
└── poll-app-back/      # Backend Spring Boot application
```

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js and npm
- Angular CLI
- Java 17+
- Maven
- PostgreSQL

### Installation

#### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd poll-app-back
   ```

2. Configure the database connection in `application.properties`:

   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/pollingapp
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

3. Build and run the backend:

   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

#### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd poll-app-front
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Angular development server:

   ```bash
   ng serve
   ```

4. Access the application at `http://localhost:4200`.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## 📬 Contact

For any inquiries or feedback:

- **Youssef Sghairi**
- Email: [youssef.sghairi@insat.rnu.tn](mailto:youssef.sghairi@insat.rnu.tn)
