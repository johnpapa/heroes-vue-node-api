// @ts-check
const captains = console;

async function getHeroes(req, res) {
  try {
    const heroes = require('../../meta/heroes');
    return res.status(200).json(heroes);
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function postHero(req, res) {
  try {
    const heroes = require('../../meta/heroes');
    res.status(201).json(heroes[0]);
    captains.log('Hero created successfully!');
  } catch (error) {
    res.status(500).send(error);
  }
}

async function putHero(req, res) {
  try {
    const heroes = require('../../meta/heroes');
    captains.log('Hero updated successfully!');
    return res.status(200).json(heroes[0]);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteHero(req, res) {
  try {
    res.status(200).json({});
    captains.log('Hero deleted successfully!');
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getHeroes,
  postHero,
  putHero,
  deleteHero,
};
