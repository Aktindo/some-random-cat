"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
const axios = __importStar(require("axios"));
const dotenv = __importStar(require("dotenv"));
const defaultAxios = axios.default;
dotenv.config();
/**
 * Manages all the random methods and is the main module.
 * @static
 */
class Random {
    /**
     * ⚠ Please do not instantiate this class.
     */
    constructor() { }
    /**
     * Get a random advice.
     * @type {Advice}
     */
    static async getAdvice() {
        const main = await defaultAxios.get("https://api.adviceslip.com/advice");
        const res = await main.data;
        if (!res) {
            throw new Error("SomeRandomCat > Unable to access the json content of API");
        }
        let content = res.slip;
        return content;
    }
    /**
     * Get a random cat.
     * @type {Cat}
     */
    static async getCat() {
        const res = await defaultAxios.get("https://api.thecatapi.com/v1/images/search?format=json");
        if (!res) {
            throw new Error("SomeRandomCat > Error fetching a random image from API.");
        }
        let data = res.data[0];
        return data;
    }
    /**
     * Get a random dog.
     * @type {string}
     */
    static async getDog() {
        const res = await defaultAxios.get("https://dog.ceo/api/breeds/image/random");
        if (!res)
            throw new Error("SomeRandomCat > Error fetching a random image from API.");
        let data = res.data.message;
        return data;
    }
    /**
     * Get a random fact.
     * @type {string}
     */
    static async getFact() {
        const main = await defaultAxios.get("https://bruhapi.syntaxpwn.repl.co/fact");
        let content = main.data.res;
        return content;
    }
    /**
     * Get a random joke.
     * @type {Joke}
     */
    static async getJoke() {
        // https://apis.duncte123.me/joke
        const res = await defaultAxios.get("https://apis.duncte123.me/joke");
        if (!res)
            throw new Error("SomeRandomCat > Error fetching a random joke from API.");
        return res.data.data;
    }
    /**
     *
     * Get a random meme.
     * @type {Meme}
     * @param {string} sub The subreddit's name.
     * @returns {Promise<Meme | null>} Returns an object with a promise.
     */
    static async getMeme(sub) {
        try {
            const response = await defaultAxios.get(`https://imageapi.fionn.live/reddit/${sub.toLowerCase()}`);
            return response.data;
        }
        catch (error) {
            throw new Error("SomeRandomCat > There was an error trying to generate a meme.\n> " +
                error);
        }
    }
    /**
     * Get a string.
     * @param {number} number The length of the string
     * @returns {Promise<string | null>} Returns a string.
     */
    static async getString(number) {
        const res = await defaultAxios.get(`https://apis.duncte123.me/random-string/${number}`);
        if (!number)
            throw new TypeError("SomeRandomCat > No number specified. Please specify a number!");
        if (!res)
            throw new Error("SomeRandomCat > Error fetching a random string from API.");
        else
            return res.data.data;
    }
    /**
     * Get a topic.
     * @returns {Promise<string | null>} Returns a string with the topic.
     */
    static async getTopic() {
        try {
            const main = await defaultAxios.get("https://bruhapi.syntaxpwn.repl.co/topic");
            let content = main.data.res;
            return content;
        }
        catch (error) {
            throw new Error("SomeRandomCat > Error while fetching a random topic.\n> " + error);
        }
        return null;
    }
}
exports.Random = Random;
