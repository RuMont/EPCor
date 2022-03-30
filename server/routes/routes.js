const express = require('express');
const router = express.Router();
const axios = require('axios');
const { api_token } = require('../../token.json');

router.route('/names').get(async (req, res) => {
    try {
        const result = await axios({
            method: 'get',
            url: 'https://apis2.dipucordoba.es/apisede/entities',
            headers: {
                Authorization: 'Bearer ' + api_token
            }
        })
        res.send(result.data.data);
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: 'Ha habido un error en el servidor' });
    }
});

router.route('/:id').get(async (req, res) => {
    try {
        const result = await axios({
            method: 'get',
            url: 'https://apis2.dipucordoba.es/apisede/bulletins',
            headers: {
                Authorization: 'Bearer ' + api_token,
                entity: req.params.id
            }
        })
        res.send(result.data.data);
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: 'Ha habido un error en el servidor' });
    }
});

module.exports = router;