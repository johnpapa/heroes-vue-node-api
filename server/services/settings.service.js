// @ts-check
async function getSettings(req, res) {
  try {
    res.status(200).json({ name: 'Cosmos Core/SQL API' });
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getSettings,
};
