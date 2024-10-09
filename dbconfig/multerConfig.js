const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: './uploads/',  
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,  
    limits: { 
        fileSize: 10 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/;  
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());  
        const mimetype = filetypes.test(file.mimetype);  

        if (mimetype && extname) {
            return cb(null, true);  // Accept the file
        } else {
            cb(new Error('Error: File type not supported'));  // Reject the file with an error message
        }
    }
}).single('image');  // Accept only one file with the 'image' field name

module.exports = upload;
