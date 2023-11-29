const mongoose = require('mongoose');
const shortId = require('shortid')
const Qrcode = require('qrcode')

const urlSchema = new mongoose.Schema({
    fullUrl:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        required:true,
        default: () => shortId.generate()
    },
    qr:{
        type:String,
        required:false,
    },
    clicks:{
        type:String,
        default:0
    },
})

module.exports = mongoose.model('Url',urlSchema);
