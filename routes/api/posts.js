const express = require('express');
const router = express.Router();

// @route GET api/posts/test
// @desc Test posts route
// @access Public
router.get('/test', (req, res) => {
    res.json({
        'status': 200,
        'msg': 'Test page',
    })
});

module.exports = router;