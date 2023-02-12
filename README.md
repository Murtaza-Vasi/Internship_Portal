# ProShop

This is platform for finding internships as well as jobs. Here we are providing a very simple user interface for a good user experience.

# Features

- Authentication as student
- Authentication as recruiter
- Pagination
- Student Profile Page

# Technology Stack Used

- Backend:

  1. Node.js
  2. Express.js
  3. MongoDB

- Frontend:

  1. React.js
  2. Redux (for state management)
  3. Material-UI

# Usage

### ES Modules in Node

We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### How to run the project

1. First clone this repo into your local system
2. Create a .env file and add the following:

```
PORT = 5000
JWT_SECRET = abc123
MDB_CONNECT = your mongodb uri
```

3. Install the dependencies

```
npm install
cd frontend
npm install
```

4. Run the code

```
# The following command will run both frontend (port:- 3000) and backend (port:- 5000)

npm run dev

# Run backend only
npm run server
```
