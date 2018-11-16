module.exports = {
  index: (req, res) => {
    res.json({
      name: 'Rocket-Lab-API',
      version: '1.0.0',
      description: 'An Open Source REST API for rocket, pad and launch data',
      github: 'https://github.com/barrosfilipe/Rocket-Lab-API',
      author: 'Filipe Barros <filipebarrossi@gmail.com>',
      license: 'MIT'
    });
  }
};
