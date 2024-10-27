// backend/models/announcementModel.js
const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
    author: { type: String, required: true }
});

const Announcement = mongoose.model('Announcement', announcementSchema);
module.exports = Announcement;
