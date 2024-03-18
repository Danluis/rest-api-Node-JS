const { Router } = require('express');
const router = Router();
const _ = require('underscore')

const movies = require('../sample.json')

// GET METHOD
router.get('/', (req, res) => {
    res.json(movies)
})

// POST METHOD
router.post('/', (req, res) => {
    const { title, director, year, rating } = req.body; 
    if (title && director && year && rating) {
        const id = movies.length + 1;
        const newMovie = { id, ...req.body };
        movies.push(newMovie);
        res.json(movies);
    } else {
        res.status(400).json({ error: 'Bad Request: Missing required fields' });
    }
});

// PUT METHOD
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year, rating } = req.body;
    if (title && director && year && rating) {
        const index = movies.findIndex(movie => movie.id == id);
        if (index !== -1) {
            movies[index] = { id, title, director, year, rating };
            res.json(movies[index]);
        } else {
            res.status(404).json({ error: 'Movie not found' });
        }
    } else {
        res.status(400).json({ error: 'Bad Request: Missing required fields' });
    }
});


// DELETE METHOD
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = movies.findIndex(movie => movie.id == id);
    if (index !== -1) {
        movies.splice(index, 1);
        res.json(movies);
    } else {
        res.status(404).json({ error: 'Movie not found' });
    }
});

module.exports = router;
