/**
 * Arquivo: src/routes/index.js
 * Descrição: Arquivo responsável pela chamada da API da aplicação
 * Data: 07/07/2020
 * Autor: Kempes
 */

 const express = require('express');

 const router = express.Router();

 router.get('/api', async (req, res) => {
    try{
        res.status(200).send({
            success: 'true',
            message: 'Seja bem-vindo(a) a API',
            version: '1.0.0',
        });

    }catch(err){
        res.status(400).send({ error: 'Erro' });
    }
 });

 module.exports = router;