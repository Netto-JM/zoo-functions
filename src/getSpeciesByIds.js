const data = require('../data/zoo_data');

/* Faça com que a função getSpeciesByIds possa receber vários parâmetros;

Retorne um array vazio se a função não receber um id;

Retorne as seguintes informações do arquivo data:

Se a função receber apenas um id, retorne a espécie do animal referente a este id;

Se a função receber vários ids, retorne todas as espécies referente a esses ids.

O que será testado:

A função getSpeciesByIds, caso não receba nenhum parâmetro, deve retornar um array vazio;

A função getSpeciesByIds, caso receba como parâmetro um único ID, deve retornar um array com a espécie referente a esse ID;

A função getSpeciesByIds, caso receba mais de um ID, deve retornar um array com as espécies referentes aos IDs. */

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
}

module.exports = getSpeciesByIds;
