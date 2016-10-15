'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  // mongo: { //localhost
  //   uri: 'mongodb://localhost/shopnx-dev'
  // },
  mongo: { //alibaba
    // uri: 'mongodb://101.201.81.214/shopnx-dev' // alibaba
    uri: 'mongodb://127.0.0.1/shopnx-dev' // localhost
  },

  seedDB: true
};
