// @ts-check
const captains = console;

async function getVillains(req, res) {
  try {
    const villains = require('../../meta/villains');
    res.status(200).json(villains);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function postVillain(req, res) {
  try {
    const villains = require('../../meta/villains');
    res.status(201).json(villains[0]);
    captains.log('Villain created successfully!');
  } catch (error) {
    res.status(500).send(error);
  }
}

async function putVillain(req, res) {
  try {
    const villains = require('../../meta/villains');
    res.status(200).json(villains[0]);
    captains.log('Villain updated successfully!');
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteVillain(req, res) {
  try {
    res.status(200).json({});
    captains.log('Villain deleted successfully!');
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getVillains,
  postVillain,
  putVillain,
  deleteVillain,
};
