const path = require('path')
const igemwiki = require('igemwiki-api')({ year: 2016, teamName: 'Toronto' })
const Promise = require('bluebird')
const globby = require('globby')
const _ = require('lodash')

globby([
    './index.html',
    './templates/**/*.html',
    './css/**/*.css',
    './js/**/*.js'
  ]).then(function(filenames) {
      console.log(filenames)
  
      const absoluteFilenames = filenames.map(filename => path.resolve(__dirname, filename))
      console.log(absoluteFilenames)
  })