const persons = require('../resources/Persons.json')

const results = [];

exports.listPersons = (req, res) => {
  console.log(req.query)
  const pageSize = +req.query.pagesize
  const pageIndex = +req.query.pageindex

  if(pageSize && pageIndex) {
    
    for(i = pageIndex; i < pageIndex + pageSize; i++){
      results.push(persons[i]);
    }

    res.status(200).json({
      message: "Person fetched successfully!",
      persons: results,
      total: results.length
    });
  } else {
    // Return whole data
    res.status(200).json({
      message: "Person fetched successfully!",
      persons: persons,
      total: persons.length
    });
  }
}

