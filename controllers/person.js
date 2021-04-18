const persons = require('../resources/Persons.json')

exports.listPersons = (req, res) => {

  const results = [];

  const limit = req.query.limit
  const start = req.query.start

  for(i = start; i < start + limit; i++){
    results.push(persons[i]);
  }

  res.status(200).json({
    message: "Persons fetched successfully!",
    persons: results,
    total: persons.length
  });

}
