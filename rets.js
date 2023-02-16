const rets = require('rets-client');

// Define RETS server and login credentials
const loginUrl = 'http://rets.trreb.ca:80/Login.ashx';
const username = 'your_username';
const password = 'your_password';
const version = 'RETS/1.7.2';

// Define search query parameters
const searchQuery = '(Status=A),(ListPrice=100000-500000),(PropertyType=RN)';

// Connect to the RETS server and authenticate
rets.getAutoLogoutClient(
  loginUrl,
  {
    username: username,
    password: password,
    version: version,
  },
  function (client) {
    // Search for the listings using the search query parameters
    client.search
      .query('Property', 'Listing', searchQuery, { limit: 10 })
      .then(function (searchData) {
        // Parse the search results to extract the desired information
        console.log(searchData.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
);
