# Multilingual File Manager Application

This is a Multilingual File Manager Application built using Node.js, Express, MySQL, and i18next for internationalization. The application provides user registration, login, and file management functionalities with support for multiple languages.

## Features

- User registration and login
- File management: create, read, update, delete files
- Multilingual support using i18next
- Input data extraction from request body, query parameters, and headers

## Prerequisites

- Node.js (v14 or later)
- MySQL

## Setup

1. Clone the repository:

````bash
git clone https://github.com/your-username/multilingual-file-manager.git
cd multilingual-file-manager

2. Install dependencies:

```bash
npm install
````

3. Configure MySQL database:

   - Create a MySQL database.
   - Update the database configuration in the models/index.js file.

4. Initialize i18next localization files:
   - Add your localization files in the locales directory.

## Running the Application

1. Start the server:

```bash
node app.js
```

2. The server will run on <http://localhost:3000>.

## API Endpoints

### User Endpoints

    - Register a User:
    ```bash
    POST /api/users/register
    ```
        Request Body:
        ```json
        {
            "username": "testuser",
            "email": "testuser@example.com",
            "password": "password123"
        }
        ```

    - Login a User:
    ```bash
    POST /api/users/login
    ```
        Request Body:
        ```json
        {
            "email": "testuser@example.com",
            "password": "password123"
        }
        ```

### File Endpoints

    - Create a File:
    ```bash
    POST /api/files
    ```
        Request Body:
        ```json
        {
            "userId": 1,
            "name": "testfile.txt",
            "size": 1024,
            "type": "txt",
            "path": "/files/testfile.txt",
        }
        ```

    - Get All Files:
    ```bash
    GET /api/files
    ```
    - Get a File by ID:
    ```bash
    GET /api/files/:id
    ```

    - Update a File:
    ```bash
    PUT /api/files/:id
    ```
        Request Body:
        ```json
        {
            "name": "updatedfile.txt",
            "size": 2048,
            "type": "txt",
            "path": "/files/updatedfile.txt",
        }
        ```
    - Delete a File:
    ```bash
    DELETE /api/files/:id
    ```

## Running Tests

1. Run the tests:

```bash
npm test
```

or

```bash
npm test -- --detectOpenHandles
```

## Authors

- [Long Deng](https://github.com/longmaker2)
- [Daniel Burongu](https://github.com/danielburongu)
