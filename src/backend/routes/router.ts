import express from 'express';
import db from '../lib/db';

const router = express.Router();

router.get('/artikel', (req, res, next) => {
    db.query(`SELECT * FROM artikel;`, (err, result) => {
        return res.status(200).send({
            artikel: result
        });
    })
})

export default router;