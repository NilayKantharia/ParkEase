const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

cloudinary.config({
    cloud_name : 'dbykv4cwf' || process.env.CLOUD_NAME,
    api_key: '948556546782999' || process.env.CLOUD_API_KEY,
    api_secret: 'VTnYClyRi1NqrK9lSbjS_QuqWWM' || process.env.CLOUR_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'ParkEase',
        allowedFormats: ["png", "jpg", "jpeg"]
    }
});

module.exports = {
    cloudinary,
    storage
}