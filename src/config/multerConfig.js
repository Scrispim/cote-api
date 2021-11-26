import multer from "multer";
import path from 'path';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, cb) => {
            console.log(req.body)
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                file.key = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, file.key)
            })
        }
    })
}

const multerConfig = {
    dest: '../../tmp/uploads', //path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: storageTypes['local'],
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/jpg',
            'image/pjpeg',
            'image/png',
            'application/pdf',
            'text/csv'
        ];

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type"));
        }
    },

}

export default multerConfig;