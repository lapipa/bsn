var request = require("request");

var options = {
  method: 'GET',
  url: 'https://v1.basketball.api-sports.io/seasons',
  headers: {
    'x-rapidapi-host': 'v1.basketball.api-sports.io',
    'x-rapidapi-key': '517267837f1d46171bf72d980e9cf94d'
  }
};


console.log("games")

options = {
  method: 'GET',
  url: 'https://v1.basketball.api-sports.io/games?season=2024&league=76&date=2024-04-27',
  headers: {
    'x-rapidapi-host': 'v1.basketball.api-sports.io',
    'x-rapidapi-key': '517267837f1d46171bf72d980e9cf94d'
  }
};

request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
});

