# Movie Inventory Application

Welcome to the Movie Inventory Application! This project is a simple web application designed to manage a movie inventory. It allows users to add, view, update, and delete movie records.

## Live Demo

You can try out the live version of the application [here](https://movie-inventory-app.up.railway.app/).

## Features

- **Add Movies**: Add new movies to your inventory.
- **View Movies**: View a list of all movies in your inventory.
- **Update Movies**: Edit existing movie records.
- **Delete Movies**: Remove movies from your inventory.

## Technologies Used

- **Node.js**: JavaScript runtime for building the application.
- **Express**: Web framework for Node.js.
- **PostgreSQL**: Relational database management system for storing movie data.
- **EJS**: Templating engine for rendering HTML views.
- **Railway**: Deployment platform for hosting the application.

## Getting Started

To get a local copy of this project up and running, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/SamyyCh/movie-inventory-app.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd movie-inventory-app
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Set Up the Database**

   Ensure you have PostgreSQL installed and create a database. Update the database connection details in `config/database.js`.

5. **Run Database Migrations**

   Populate the database with initial data:

   ```bash
   node populatedb.js
   ```

6. **Start the Application**

   ```bash
   npm start
   ```

   The application should now be running at `http://localhost:3000`.

## Environment Variables

Ensure you have the following environment variables set in your `.env` file:

- `DATABASE_URL`: Connection string for PostgreSQL.
- `SECRET_KEY`: A secret key for session management.

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please open an issue or submit a pull request.

## Acknowledgments

This project is part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-nodejs-inventory-application). Special thanks to the contributors and community for their support.