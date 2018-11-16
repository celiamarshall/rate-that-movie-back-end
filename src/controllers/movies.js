const model = require('../models/movies')

function getAll(req, res, next){
  model.getAll()
  .then(function(data){
    res.send({ data })
  })
  .catch(next)
}

function getOne(req, res, next){
  model.getOne(parseInt(req.params.movieId))
  .then(function(data){
    if(data) {
      return res.send({ data })
    }
    else {
      throw ({ status: 404, message: 'Movie Not Found' })
    }
  })
  .catch(next)
}

function create(req, res, next){
  if(!req.body.title || !req.body.year || !req.body.rating || !req.body.url || !req.body.director){
    return next({ status: 400, message:'Bad Request'})
  }

  model.create(req.body)
  .then(function(data){
    res.status(201).send({ data })
  })
  .catch(next)
}

function update(req, res, next){
  if(!req.body.title || !req.body.year || !req.body.rating || !req.body.url || !req.body.director){
    return next({ status: 400, message:'Bad Request'})
  }

  model.update(parseInt(req.params.movieId), req.body)
  .then(function(data){
    res.send({ data })
  })
  .catch(next)
}

function remove(req, res, next){
  model.remove(parseInt(req.params.movieId))
  .then(function(data){
    res.send({ data })
  })
  .catch(next)
}

function checkForMovie(req, res, next){
  model.getOne(parseInt(req.params.movieId))
  .then(function(data){
    if(!data) {
      throw ({ status: 404, message: 'Movie Not Found' })
    }
    else {
      next()
    }
  })
  .catch(next)
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
  checkForMovie
}