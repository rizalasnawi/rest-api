const { User }  = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


class UserController {

    static findAll (req, res ) {
        User.findAll ()
        .then ((users) => {
            res.status(200).json(users);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
    }

    static findOne (req, res) {
        User.findByPk(req.params.id)
        .then ((users) => {
            if(!users) {
                res.status(404).json({message : 'Id not found'})
            }
            res.status(200).json(users)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    }

    static createUser (req, res) {
        User.create({
            username : req.body.username,
            password : req.body.password
        })
        .then((users) => {
            res.status(201).json(users)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    }

    static deleteUser (req, res) {
        User.findByPk(req.params.id)
        .then((users) => {
            if(!users) {
                res.status(400).json({message : 'Id not found'});
            }

        User.destroy({
            where : {id : req.params.id}
        })
        .then(() =>  res.status(204).json({message : 'success deleted'}) )
        .catch((err) => res.status(400).json(err) )
        })
        .catch((err) => res.status(400).json(err))
    } 

    static updateUser (req, res) {
        User.findByPk(req.params.id)
        .then((users) => {
            if(!users){
                res.status(404).json({message : 'id not found'})
            }
            let obj =  {
                username : req.body.username,
                password : req.body.password
            }
            User.update(obj, { where : {id : req.params.id}
            })
            .then(() => {
                res.status(200).json({message : 'success updated'})
            })
            .catch((err) => {
                res.status(400).json(err)
            })
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    }

    static signup (req, res) {
        User.create({
            username : req.body.username,
            password : req.body.password,
            Role : req.body.Role
        })
        .then((users) => {
            res.status(201).json(users)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    }

    static signin (req, res) {
        User.findOne ({where : {username : req.body.username}})
        .then((users) => {
            if(users) {
              if(bcrypt.compareSync(req.body.password, users.password)) {
                  let payload  = {
                      username : users.username
                  }
                  let token = jwt.sign(payload, process.env.jwt);
                  req.headers.token = token
                  res.status(200).json({token : token, message : 'Berhasil'})
              } else {
                  res.status(400).json({message : 'Invalid password'})
              }
            } else {
                res.status(400).json({message : 'Invalid password'})
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    }
}



module.exports = UserController
