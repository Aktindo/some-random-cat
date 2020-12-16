const config = require('../package.json')

class Util {
    constructor() {
        throw new Error('SomeRandomCat > You may not instantiate this class.')
    }

    static info = {
        version: config.version,
        author: config.author,
        repo: config.repository,
        description: config.description
    }
    
    static async test() {
        console.log('SomeRandomCat > Doing a test run...')
        console.log('SomeRandomCat > The package is all good. If you are facing any issue, please let us know in our support server.')
    }
}

module.exports = Util