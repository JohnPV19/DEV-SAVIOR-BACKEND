const express = require("express");
const router = express.Router();

const Post = require("../models/Post.model");

router.get('/search', async (req, res) => {
    try {
        const query = req.query.query.toLowerCase();

        // Perform a case-insensitive search in the data
        const results = await Post.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { bodyText: { $regex: query, $options: 'i' } }
            ]
        });

        res.json(results);
    } catch (error) {
        console.error('Error fetching search results:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
