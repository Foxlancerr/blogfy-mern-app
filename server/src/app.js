import express from "express"
import cors from "cors"
import userRouter from "./routes/userRouter.js"
import profileRouter from "./routes/profileRouter.js"
import postRouter from "./routes/postRouter.js"
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
app.use("/", userRouter)
app.use("/", profileRouter)
app.use("/", postRouter)

// http://localhost:8000/api/v1/users/register

export { app }