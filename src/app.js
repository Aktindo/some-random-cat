const axios = require('axios')
class Random {
    async newCat() {
        const res = await axios.get('https://api.thecatapi.com/v1/images/search?format=json')
        let data = res.data[0].url
        return data
    }
}

module.exports = Random