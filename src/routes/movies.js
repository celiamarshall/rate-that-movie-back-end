const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/movies')

router.get('/', ctrl.getAll)

router.get('/:movieId', ctrl.getOne)

router.post('/', ctrl.create)

router.put('/:movieId', ctrl.checkForMovie, ctrl.update)

router.delete('/:movieId', ctrl.checkForMovie, ctrl.remove)

module.exports = router
