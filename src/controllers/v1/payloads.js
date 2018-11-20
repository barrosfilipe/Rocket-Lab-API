module.exports = {
  all: async (req, res) => {
    const data = await global.db
      .collection('payloads')
      .find({})
      .project({ _id: 0 })
      .toArray();

    res.json(data);
  },

  one: async (req, res) => {
    const data = await global.db
      .collection('payloads')
      .find({ name: req.params.name })
      .project({ _id: 0 })
      .limit(1)
      .toArray();

    if (data.length === 0) {
      res.status(404).json({ error: 'Not found' });
      return;
    }

    res.json(data[0]);
  }
};
