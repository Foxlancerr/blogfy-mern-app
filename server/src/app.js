import express from "express"
import cors from "cors"
import userRouter from "./routes/userRouter.js"
import profileRouter from "./routes/profileRouter.js"
import postBlogRouter from "./routes/postBlogRouter.js"
// import cookieParser from "cookie-parser"

const app = express()

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))
app.use(cors())

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
// app.use(express.static("public"))
// app.use(cookieParser())


//routes import
// import userRouter from './routes/user.routes.js'


//routes declaration
app.use("/api/v1/users/", userRouter)
app.use("/api/v1", profileRouter)
app.use("/api/v1", postBlogRouter)

// http://localhost:8000/api/v1/users/

export { app }

/**
 * @param {blog creation API}
 */
// post   "/api/v1/blogs/create"       blog creation
// get    "/api/v1/blogs/db"              veiw all blogs
// get    "/api/v1/blogs/db/:id"              veiw single blogs

/**
 * @param {user creation API}
 */
// post   "/api/v1/users/signup"      sign up user
// post   "/api/v1/users/signin"      sign in user