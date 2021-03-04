const { writeFile } = require('fs')
const { get } = require('axios')
const { prompt } = require('inquirer')

prompt([
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of a movie:'
  }
])
  .then(({ title }) => {
    get(`http://www.omdbapi.com/?apikey=trilogy&t=${title}`)
      .then(({ data: movie }) => {
        writeFile('movie.json', JSON.stringify(movie), err => {
          if (err) { console.log(err) }
        })
      })
      .catch(err => console.log(err))
  })
  .catch(err => console.log(err))