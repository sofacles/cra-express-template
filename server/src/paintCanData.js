const { v4: uuidv4 } = require('uuid');

const paintCanData = [
  {
    _id: '0df50e7b6d817e28c315cb02',
    brand: 'Glidden',
    name: 'Misery',
    quantity: 'about a quart',
  },
  {
    _id: '0df50e7b6d817e28b315cb02',
    brand: 'Dunn-Edwards',
    name: 'Payday',
    quantity: 'less than a gallon',
  },
  {
    _id: '1df50e7b6d817e28b315cb02',
    brand: 'Behr',
    name: 'Mojave',
    quantity: 'less than a gallon',
  },
  {
    _id: '2df50e7b6d817e28b315cb02',
    brand: 'Sherwin-Williams',
    name: 'Avocado',
    quantity: 'less than a gallon',
  },
  {
    _id: '3df50e7b6d817e28b315cb02',
    brand: 'Miller',
    name: 'Myrtle',
    quantity: 'less than five gallons',
  },
  {
    _id: '4df50e7b6d817e28b315cb02',
    brand: 'Farrow & Ball',
    name: 'Saturn',
    quantity: 'less than a gallon',
  },
  {
    _id: '5df50e7b6d817e28b315cb02',
    brand: 'Farrow & Ball',
    name: 'asdffd',
    quantity: 'about a quart',
  },
  {
    _id: '6df50e7b6d817e28b315cb02',
    brand: 'Sherwin-Williams',
    name: 'Mesa',
    quantity: 'less than a gallon',
  },
  {
    _id: '7df50e7b6d817e28b315cb02',
    brand: 'Miller',
    name: 'Coffee',
    quantity: 'less than a gallon',
  },
  {
    _id: '8df50e7b6d817e28b315cb02',
    brand: 'Benjamin Moore',
    name: 'Envious',
    quantity: 'less than a gallon',
  },
];

const addPaint = (paintObj) => {
  paintObj._id = uuidv4();
  paintCanData.push(paintObj);
};

const getPaintData = () => paintCanData;

module.exports = { addPaint, getPaintData };
