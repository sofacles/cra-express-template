const { addPaint, getPaintData } = require('../paintCanData');

const getPaints = (req, res) => {
  res.send(getPaintData());
};

const postPaint = (req, res) => {
  const postedPaint = req.query;

  addPaint(postedPaint);
  return res.status(200).send({ status: 'okey doke' });
};

module.exports = {
  getPaints,
  postPaint,
};
