import express from "express"
import cors from "cors"
import userRouter from "./routes/userRouter.js"
import profileRouter from "./routes/profileRouter.js"
import postBlogRouter from "./routes/postBlogRouter.js"
import { upload } from "./middleware/multer.upload.middleware.js"
// import cookieParser from "cookie-parser"

const app = express()

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

app.get("/", (req, res) => {
    res.send("hello world!");
})

// multer testing
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        // Save file information to MongoDB
        const newFile = new FileModel({
            filename: req.file.filename,
            // Add more fields as needed
        });

        const savedFile = await newFile.save();

        res.status(200).json({ success: true, file: savedFile });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// http://localhost:3000/api/v1/users/

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