const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const db = require('../lib/db.js');
const userMiddleware = require('../middleware/users.js');


router.post('/sign-up', userMiddleware.validateRegister, (req, res, next) => {
    db.query(
        `SELECT * FROM users WHERE Benutzername = LOWER(${db.escape(
            req.body.username
        )});`,
        (err, result) => {
            if (result.length) {
                return res.status(409).send({
                    msg: 'This username is already in use!'
                });
            } else {
                db.query(
                    `select maxVerwendungen from einladungscode where idEinladungscode = LOWER(${db.escape(
                        req.body.einladungscode
                    )});`,
                    (err, result) => {
                        console.log(result[0]['maxVerwendungen'] + ":" + result.length)
                        if (result.length == 0 && result[0]['maxVerwendungen'] > 0) {
                            return res.status(409).send({
                                msg: 'Invalid Invitecode'
                            });
                        } else {
                            // username is available
                            bcrypt.hash(req.body.password, 10, (err, hash) => {
                                if (err) {
                                    return res.status(500).send({
                                        msg: err
                                    });
                                } else {
                                    // has hashed pw => add to database

                                    db.query(
                                        `call createSchueler(?,?,?,?,?)`, [req.body.username, req.body.name, req.body.vorname, hash, req.body.einladungscode],
                                        (err, result) => {
                                            if (err) {
                                                throw err;
                                                return res.status(400).send({
                                                    msg: err
                                                });
                                            }
                                            return res.status(201).send({
                                                msg: 'Registered!'
                                            });
                                        }
                                    );
                                }
                            });

                        }
                    }
                );
            }
        }
    );
});

router.post('/login', (req, res, next) => {
    db.query(
        `SELECT * FROM users WHERE Benutzername = ${db.escape(req.body.username)};`,
        (err, result) => {
            // user does not exists
            if (err) {
                throw err;
                return res.status(400).send({
                    msg: err
                });
            }
            if (!result.length) {
                return res.status(401).send({
                    msg: 'Username or password is incorrect!'
                });
            }
            // check password
            bcrypt.compare(
                req.body.password,
                result[0]['password'],
                (bErr, bResult) => {
                    // wrong password
                    if (bErr) {
                        throw bErr;
                        return res.status(401).send({
                            msg: 'Username or password is incorrect!1'
                        });
                    }
                    if (bResult) {
                        db.query(`Update users set LetzteAnmeldung=now() where UserId=${result[0]['UserId']}`)
                        const token = jwt.sign({
                            username: result[0].username,
                            userId: result[0].id
                        },
                            'SECRETKEY', {
                            expiresIn: '7d'
                        }
                        );
                        return res.status(200).send({
                            msg: 'Logged in!',
                            token,
                            user: result[0]
                        });
                    }
                    return res.status(401).send({
                        msg: 'Username or password is incorrect!2'
                    });
                }
            );
        }
    );
});

router.get('/kategorien', (req, res, next) => {
    db.query(`SELECT * FROM kategorie;`, (err, result) => {
        return res.status(200).send({
            kategorien: result
        });
    })
})



module.exports = router;