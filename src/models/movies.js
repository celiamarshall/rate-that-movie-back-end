const knex = require('../../db/index')

function getAll(){
  return knex('movies') 
}

function getOne(movieId){
  return knex('movies').where({ id: movieId }).first()
}

function create({ title, year, director, rating, url }){
  return (
    knex('movies')
    .insert({ title, year, director, rating, url })
    .returning('*')
    .then(function([ data ]){
      return data
    })
  )
}

function update(movieId, { title, year, director, rating, url }){
  return (
    knex('movies')
    .update({ title, year, director, rating, url })
    .where({ id: movieId })
    .returning('*')
    .then(function([data]){
      return data
    })
  )
}

function remove(movieId){
  return (
    knex('movies')
    .del()
    .where({ id: movieId })
    .returning('*')
    .then(function([ data ]){
      delete data.id
      return data
    })
  )
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
}