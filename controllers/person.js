const persons = require('../resources/Persons.json')

const results = [];

exports.listPersons = (req, res) => {
  
  console.log('Before Start: '+start)
  console.log('Before limit: '+limit)
  const limit = req.query.limit
  const start = req.query.start

  
  console.log('After Start: '+start)
  console.log('After limit: '+limit)

  for(i = start; i < start + limit; i++){
    results.push(persons[i]);
  }

  res.status(200).json({
    message: "Person fetched successfully!",
    persons: results,
    total: results.length
  });

}
