module.exports = {
  all: async (req, res) => {
    const data = await global.db
      .collection('rockets')
      .find({})
      .project({ _id: 0 })
      .toArray();

    res.json(data);
  }
};
