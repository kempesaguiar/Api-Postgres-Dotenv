/**
 * Arquivo: server.js
 * Descrição: Arquivo responsável por toda a configuração e execução da aplicação
 * Data: 07/07/2020
 * Autor: Kempes
 */

 const app = require('./src/app');

 const port = process.env.port || 3000;

 app.listen(port, () => {
     console.log('Aplicacao executando na porta', port);
 });