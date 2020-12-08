const axios = require('axios')
class Random {
    /**
     * ⚠ Please do not instantiate this class. You can access it by doing require('some-random-cat').Random
     */

     
    /*
    * <warn>Static class</warn>
    */
    constructor() {
        throw new Error('You may not instantiate this class!')
    }


    /**
     * @returns {Promise<Pending>} URL for the at image.
     */
    static async newCat() {
        const res = await axios.get('https://api.thecatapi.com/v1/images/search?format=json')
        if (!res) throw new Error('Error fetching a random image from API.')
        let data = res.data[0].url
        return data
    }

    /**
     * @returns {Promise<Pending>} URL for the dog image.
     */
    static async newDog() {
        const res = await axios.get('https://dog.ceo/api/breeds/image/random')
        if (!res) throw new Error('Error fetching a random image from API.')
        let data = res.data.message
        return data
    }

    /**
     *  
     * @returns {Promise<Pending>} Returns an object too.
     */
    static async newJoke() {
        // https://apis.duncte123.me/joke
        const res = await axios.get('https://apis.duncte123.me/joke')
        if (!res) throw new Error('Error fetching a random joke from API.')
        else return res.data.data
    }

    /**
     * @param {String} sub The subreddit!
     * @returns {Promise<Pending>} Returns an object too.
     */

    static async newMeme(sub) {
        if (!sub) return Promise.reject("Error, you did not specify a subreddit!");
        const start = Date.now();
        const response = await fetch(
          `https://imageapi.fionn.cc/reddit/${sub.toLowerCase()}`
        ).then((res) => res.json());
        const responseTime = Date.now() - start;
        if (response.error || response.err)
          return Promise.reject("Error, probably due to an invalid subreddit!");
      
        return {
          img: response.img,
          res: responseTime,
          title: response.title,
          upvotes: response.upvotes,
          author: response.author,
          upvoteRatio: response.upvoteRatio,
          comments: response.comments,
          downvotes: response.downvotes
        };
    }

    /**
     * @param {Number} number The length of the string
     * @returns {Promise<Pending>} Returns an object too.
     */
    static async newString(number) {
        const res = await axios.get(`https://apis.duncte123.me/random-string/${number}`)
        if (!number) throw new TypeError('No number specified. Please specify a number!')
        if (!res) throw new Error('Error fetching a random string from API.')
        else return res.data.data
    }
    // https://apis.duncte123.me/random-string/
}

module.exports = Random