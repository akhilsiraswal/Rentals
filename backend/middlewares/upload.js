const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/rooms/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.filename + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    if (file.mimetype == "image/jpg" || file.mimetype == "image/png") {
      callback(null, true);
    } else {
      console.log("image problem in middleware/upload.js");
      callback(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});

var multipleFile = upload.files([{ name: "files", maxCount: 10 }]);

module.exports = upload;
