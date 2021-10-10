const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controllers');

// /api/thoughts
router
.route('/')
.get(getAllThought)
.post(addThought);

// /api/thoughts/:id
router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

// /api/thoughts/:thoughtid/:reacionId
router
.route('/:thoughtId/:reacionId')
.post(addReaction)
.delete(removeReaction);

module.exports = router;