const express = require('express');

// initialize the router instance
const router = express.Router()

// routes
router.get('/', (req, res) => {
    res.end('hey');
})

router.get('/workouts', (req, res) => {
    
})

router.post('/workouts', (req, res) => {
    
})

router.get('/workouts/:id', (req, res) => {
    
})

router.post('/workouts/:id', (req, res) => {
    
})

router.delete('/workouts/:id', (req, res) => {
    
})

// export the router instance
module.exports = router;