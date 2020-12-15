// This snippet uses some-random-cat version 2.0

const somethingRandom = require('../index').Random // Replace ../index with the pacakge name: some-random-cat
somethingRandom.getDog()
.then(res => {
    console.log(res)
    return
}) // Get the result
.catch(e => {
    console.error(e)
    return
}) // Catch the error