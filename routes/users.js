import express from 'express'
import { v4 as uuid4 } from 'uuid'

const router = express.Router()

const users = []
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

router.get('/:id', (req, res) => {
  const { id } = req.params

  const foundUser = users.find((user) => user.id === id)

  res.send(foundUser)
})

export default router
