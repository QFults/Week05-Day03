const fs = require('fs')
const axios = require('axios')
const inquirer = require('inquirer')

inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of a movie:'
  }
])
  .then(res => {
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${res.title}`)
      .then(resp => {
        fs.writeFile('movie.json', JSON.stringify(resp.data), err => {
          if (err) { console.log(err) }
        })
      })
      .catch(err => console.log(err))
  })
  .catch(err => console.log(err))