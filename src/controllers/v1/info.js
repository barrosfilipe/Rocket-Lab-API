module.exports = {
  index: async (req, res) => {
    const data = await global.db
      .collection('info')
      .find({})
      .project({ _id: 0 })
      .toArray();

    res.json(data[0]);
  }
};
