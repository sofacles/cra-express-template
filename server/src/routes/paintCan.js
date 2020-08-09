const paintCanData = require('../paintCanData');

const getPaints = (req, res) => {
   res.send(paintCanData);
};

module.exports = {
    getPaints
};