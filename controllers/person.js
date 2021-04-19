const persons = require('../resources/Persons.json')

exports.listPersons = (req, res) => {

  const results = [];
  let filteredPersons = persons
  const limit = parseInt(req.query.limit)
  const start = parseInt(req.query.start)
  const name = req.query.name
  
  console.log("NAME: "+name);
  if (name !== undefined) {
    filteredPersons = filterByeName(name);
  } 

  if (start < 0 || limit < 0) {
    return res.status(400).json({
      message: "start and limit should be positive number!"
    });
  }

  const totalRows = start + limit;
  const lastIndex = totalRows > filteredPersons.length ? filteredPersons.length : totalRows 
  for(i = start; i < lastIndex ; i++) {
    results.push(filteredPersons[i]);
  }

  res.status(200).json({
    message: "Persons fetched successfully!",
    persons: results,
    total: filteredPersons.length
  });

}

function filterByeName(name) {
  let filteredPersons = []
  for(i = 0; i < persons.length ; i++) {
    if(persons[i]['name'] === name) {
      filteredPersons.push(persons[i])
    }
  }

  return filteredPersons;
}
