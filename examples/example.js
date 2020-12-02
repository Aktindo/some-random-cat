const random = require('../index')
random.Random.newCat()
.then(res => console.log(res))
.catch(e => console.error(e))