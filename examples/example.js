const SomeRandomCat = require('../index').Random; // Replace ../index with some-random-cat
SomeRandomCat.getCat() // Function for generating cat
.then(res => {
    console.log(res)
    return
})
.catch(e => {
    console.error(e)
    return
});