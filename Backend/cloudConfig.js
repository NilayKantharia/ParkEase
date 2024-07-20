const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name : 'dbykv4cwf',
    api_key: '948556546782999',
    api_secret: 'VTnYClyRi1NqrK9lSbjS_QuqWWM',
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