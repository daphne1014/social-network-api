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


// /api/thoughts/:userId
router
.route('/:userId')
.post(addThought);


// /api/thoughts/:id
router
.route('/:id')
.get(getThoughtById)
.put(addReaction);


// /api/thoughts/:userId/:thoughtId
router
.route('/:userId/:thoughtId')
.delete(removeThought)
.put(updateThought)


// /api/thoughts/:thoughtid/:reacionId
router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;