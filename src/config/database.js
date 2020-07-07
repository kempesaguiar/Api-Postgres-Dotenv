/**
 * Arquivo: config/database.js
 * Descrição: Arquivo responsável pelas connectionStrings da Aplicação: PostgreSQL
 * Data: 07/07/2020
 * Autor: Kempes
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');
const { text } = require('express');

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('Base de dados conectado com sucesso');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};