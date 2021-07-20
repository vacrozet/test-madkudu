require('dotenv').config();
const { listServices } = require('../../services');

const handleError = require('../../../../error');

module.exports = async (req, res) => {
  const { continent, horns, weight, height } = req.body;
  try {
    let data = await listServices.getAll();
    if (continent) {
      data = data.filter(el => el.continent === continent);
    }
    if (horns) {
      data = data.filter(el => el.horns === horns);
    }
    if (weight && weight.min) {
      data = data.filter(el => el.weight >= weight.min);
    }
    if (weight && weight.max) {
      data = data.filter(el => el.weight <= weight.max);
    }
    if (height && height.min) {
      data = data.filter(el => el.height >= height.min);
    }
    if (height && height.max) {
      data = data.filter(el => el.height <= height.max);
    }
    return res.status(200).send(data);
  } catch (error) {
    return handleError(res, error);
  }
};
