# Threads Clone

## Description
Threads Clone is a social media platform aiming to replicate features for user interaction, including posts, comments, and following functionalities.

## Backend URL
The base URL for the backend API: `http://localhost:8080/`

## Demo

https://github.com/786Ayush/Threads-clone/assets/59289499/5e20d2a8-7a4d-469c-bb88-7276216d4235


## Technologies Used
- React.js
- Express.js
- MongoDB
- Node.js
- bcryptjs
- jsonwebtoken
- Redux
- Tailwind CSS
- React Icons

## Installation
1. Clone the repository:
    ```bash
    git clone <repository_url>
    ```
2. Navigate to the backend directory:
    ```bash
    cd backend
    ```
3. Install backend dependencies:
    ```bash
    npm install
    ```
4. Run the backend server:
    ```bash
    npm start
    ```

## Usage
### Authentication
For authentication and accessing protected routes:
- Obtain a token by signing up or logging in via `/auth/signup` or `/auth/login`.
- Include the obtained token in the Authorization header: `Bearer <token>`

### Endpoints
#### Auth Routes
- `POST /auth/signup`: Create a new user, returns user details with a token
- `POST /auth/login`: Login an existing user, returns user details with token

#### User Routes
- `GET /users/`: Get all users
- `GET /users/:id`: Get user details by ID
- `PUT /user/:id`: Update user details by ID
- `DELETE /user/:id`: Delete user by ID
- `GET /user/:userId/followers`: Get all followers of a user
- `GET /user/:userId/followings`: Get all followings of a user
- `POST /user/:userId/followers/add`: Add a follower in the user's data
- `POST /user/:userId/following/add`: Add a following in the user's data

#### Post Routes
- `GET /posts/`: Get all posts sorted by recently uploaded
- `GET /posts/:id`: Get post by ID
- `POST /posts/`: Create a new post
- `PUT /posts/:id`: Update a post by ID
- `DELETE /posts/:id`: Delete a post by ID
- `PUT /posts/:postId/likes`: Add or remove a like from a post

#### Comments Routes
- `POST /comments/:postId`: Create a new comment on a post by ID
- `DELETE /comments/:id`: Delete a comment by ID

## Contributors
- [Mrsingh-rishi](https://github.com/mrsingh-rishi)
- [786Ayush](https://github.com/786Ayush)

## Contact Information
For questions, support, or feedback, reach out to the maintainers:
- [Rishi Singh](rs3949472@gmail.com)
- [Ayush Gupta](guptaayush617@gmail.com)
