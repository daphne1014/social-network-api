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
.route('/thoughts')
.get(getAllThought)
.post(addThought);

// /api/thoughts/:id
router
.route('thoughts/:id')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

// /api/thoughts/:thoughtid/:reacionId
router
.route('/thoughts/:thoughtId/:reacionId')
.post(addReaction)
.delete(removeReaction);

module.exports = router;