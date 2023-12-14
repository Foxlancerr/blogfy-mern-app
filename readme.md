# Complete Guide How To Use This Application

## Client Side

- Open client folder
- in terminal type

```
npm install
```

### Running the App

- In terminal type

```
npm run dev
```

## Client Side Local Routings

- Home: http://localhost:5173
- Blog: http://localhost:5173/blog
- BlogDetailsPage: http://localhost:5173/blog/:id
- Sign In: http://localhost:5173/signin
- Sign Up: http://localhost:5173/signup
- New Blog Create Page: http://localhost:5173/write

## Server Side

- Open server folder
- in terminal type

```
npm install
```

### Running the App

- In terminal type

```
npm run dev
```

## LOCAL Server Side Routings

### Blog Creation API

"http://localhost:3000/api/v1/users/signin"

- Method (GET) http://localhost:3000/api/v1/blogs/db veiw all blogs from DB
- Method (GET) http://localhost:3000/api/v1/blogs/db/:id veiw single blogs from DB
- Method (GET) http://localhost:3000/api/v1/blogs/json veiw all blogs from JSON
- Method (POST) http://localhost:3000/api/v1/blogs/create blog creation

### User Creation API

- Method (POST) http://localhost:3000/api/v1/users/signup sign up user
- Method (POST) http://localhost:3000/api/v1/users/signin sign in user

## Client Side VERCEL Routings

- Home: https://blogfy-mern-app-client.vercel.app/
- Blog: https://blogfy-mern-app-client.vercel.app/blog
- BlogDetailsPage: https://blogfy-mern-app-client.vercel.app/blog/:id
- Sign In: https://blogfy-mern-app-client.vercel.app/signin
- Sign Up: https://blogfy-mern-app-client.vercel.app/signup
- New Blog Create Page: https://blogfy-mern-app-client.vercel.app/write

## VERCEL Server Side Routings

### Blog Creation API

- Method (GET) https://blogfy-mern-app-server.vercel.app/api/v1/blogs/db veiw all blogs from DB
- Method (GET) https://blogfy-mern-app-server.vercel.app/api/v1/blogs/db/:id veiw single blogs from DB
- Method (GET) https://blogfy-mern-app-server.vercel.app/api/v1/blogs/json veiw all blogs from JSON
- Method (POST) https://blogfy-mern-app-server.vercel.app/api/v1/blogs/create blog creation

### User Creation API

- Method (POST) https://blogfy-mern-app-server.vercel.app/api/v1/users/signup sign up user
- Method (POST) https://blogfy-mern-app-server.vercel.app/api/v1/users/signin sign in user
