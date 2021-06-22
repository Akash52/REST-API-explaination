import express from 'express'
import { v4 as uuid4 } from 'uuid'

const router = express.Router()

let users = []
//Get our all users

router.get('/', (req, res) => {
  res.send(users)
  console.log(users)
})

//Create our user
//POST

router.post('/', (req, res) => {
  //console.log(req.body)
  const user = req.body
  users.push({ ...user, id: uuid4() })
  console.log(user.lastName)
  res.send('POST ROUTE REACHED !')
})

//Get Single USER

router.get('/:id', (req, res) => {
  const { id } = req.params
  const foundUser = users.find((user) => user.id === id)
  res.send(foundUser)
})

//Delete a single user

router.delete('/:id', (req, res) => {
  users = users.filter((user) => user.id !== req.params.id)

  res.send('User deleted succesfully')
})

//Update a user

router.patch('/:id', (req, res) => {
  const user = users.find((user) => user.id === req.params.id)

  user.username = req.body.name
  user.std = req.body.std

  res.send('User updated succesfully')
})

export default router
