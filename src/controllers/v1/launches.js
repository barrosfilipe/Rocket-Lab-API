module.exports = {
  latest: async (req, res) => {
    const data = await global.db
      .collection('launches')
      .find({ upcoming: false })
      .project({ _id: 0 })
      .sort({ flight_number: -1 })
      .limit(1)
      .toArray();

    res.json(data[0]);
  },

  all: async (req, res) => {
    const data = await global.db
      .collection('launches')
      .find({})
      .project({ _id: 0 })
      .toArray();

    res.json(data);
  },

  one: async (req, res) => {
    const data = await global.db
      .collection('launches')
      .find({ flight_number: parseInt(req.params.flight_number, 10) })
      .project({ _id: 0 })
      .toArray();

    if (data.length === 0) {
      res.status(404).json({ error: 'Not found' });
      return;
    }

    res.json(data[0]);
  },

  /* TODO */
  upcoming: async (req, res) => {
    res.json({});
  },

  next: async (req, res) => {
    res.json({});
  },

  past: async (req, res) => {
    res.json({});
  }
};
