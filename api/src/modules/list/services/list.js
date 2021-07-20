const axios = require('axios');

// This is fake services

const getList = async () => {
  const { data } = await axios.get(
    'https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json'
  );
  return data;
};

module.exports = {
  getAll: () => {
    return getList();
  },
  getHorns: async type => {
    const list = await getList();
    return list.filter(el => el.horns === type);
  }
};
