const mongoose = require('mongoose')
const { Schema } = mongoose

const komentarShema = new Shema({
	name: String, // String is shorthand for {type: String}
	isi Komentar: String
}, { timestamps: true })

const Komentar = mongoose.modek('komentar, komentarShema')
module.exports = komentar