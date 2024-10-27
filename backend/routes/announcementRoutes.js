// backend/routes/announcementRoutes.js
const express = require('express');
const router = express.Router();
const Announcement = require('../models/announcementModel');

// Create a new announcement
router.post('/announcements', async (req, res) => {
    const { title, content, author } = req.body;
    try {
        const newAnnouncement = new Announcement({ title, content, author });
        await newAnnouncement.save();
        res.status(201).json(newAnnouncement);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all announcements
router.get('/announcements', async (req, res) => {
    try {
        const announcements = await Announcement.find();
        res.status(200).json(announcements);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
