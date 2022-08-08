const multer = require("multer");
const path = require("path");

console.log("inside multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
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

// var multipleFile = upload.files([{ name: "files", maxCount: 10 }]);

module.exports = upload;
