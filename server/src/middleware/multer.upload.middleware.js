// import multer from "multer"


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "../../public/temp/upload")
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
// })

// export const upload = multer({ storage: storage })



import multer from 'multer';
import path from 'path';



// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the destination folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${path.basename(file.originalname)}`);
  },
});

export const upload = multer({ storage });



// // API endpoint for file upload
// app.post('/upload', upload.single('file'), async (req, res) => {
//   try {
//     // Save file information to MongoDB
//     const newFile = new FileModel({
//       filename: req.file.filename,
//       // Add more fields as needed
//     });

//     const savedFile = await newFile.save();

//     res.status(200).json({ success: true, file: savedFile });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
