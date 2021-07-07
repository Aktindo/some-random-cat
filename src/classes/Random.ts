import * as axios from "axios";
import * as dotenv from "dotenv";

const defaultAxios = axios.default;
dotenv.config();

/**
 * Manages all the random methods and is the main module.
 * @static
 */
export class Random {
  /**
   * ⚠ Please do not instantiate this class.
   */
  constructor() {}

  /**
   * Get a random advice.
   * @type {string}
   */

  public static async getAdvice(): Promise<string | void> {
    const main = await defaultAxios.get("https://api.adviceslip.com/advice");
    const res = await main.data;

    if (!res) {
      throw new Error(
        "SomeRandomCat > Unable to access the json content of API"
      );
    }

    let content: string = res.slip.advice;
    return content;
  }

  /**
   * Get a random cat.
   * @type {string}
   */

  public static async getCat() {
    const res = await defaultAxios.get(
      "https://api.thecatapi.com/v1/images/search?format=json"
    );

    if (!res) {
      throw new Error(
        "SomeRandomCat > Error fetching a random image from API."
      );
    }

    let data = res.data[0].url;
    return data;
  }

  /**
   * Get a random dog.
   * @type {string}
   */
  public static async getDog(): Promise<string | void> {
    const res = await defaultAxios.get(
      "https://dog.ceo/api/breeds/image/random"
    );
    if (!res)
      throw new Error(
        "SomeRandomCat > Error fetching a random image from API."
      );
    let data = res.data.message;
    return data;
  }

  /**
   * Get a random fact.
   * @type {string}
   */

  public static async getFact(): Promise<string | void> {
    const main = await defaultAxios.get("https://bruhapi.xyz/fact");
    let content = main.data.res;
    return content;
  }

  /**
   * Get a random joke.
   * @type {string}
   */
  public static async getJoke(): Promise<string | void> {
    // https://apis.duncte123.me/joke
    const res = await defaultAxios.get("https://apis.duncte123.me/joke");
    if (!res)
      throw new Error("SomeRandomCat > Error fetching a random joke from API.");
    else return res.data.data;
  }

  /**
   *
   * Get a random meme.
   * @type {object}
   * @param {string} sub The subreddit's name.
   * @returns {Promise<object | void>} Returns an object with a promise.
   */

  public static async getMeme(sub: string): Promise<object | void> {
    try {
      const start = Date.now();
      const response = await defaultAxios.get(
        `https://imageapi.fionn.live/reddit/${sub.toLowerCase()}`
      );
      const responseTime = Date.now() - start;

      return {
        img: response.data.img,
        res: responseTime,
        title: response.data.title,
        upvotes: response.data.upvotes,
        author: response.data.author,
        upvoteRatio: response.data.upvoteRatio,
        comments: response.data.comments,
        downvotes: response.data.downvotes,
      };
    } catch (error) {
      throw new Error(
        "SomeRandomCat > There was an error trying to generate a meme.\n> " +
          error
      );
    }
  }

  /**
   * Get a random pokemon.
   * @param {string} pokemon The name of the pokemon.
   * @returns {Promise<string | void>} Returns a string.
   */
  public static async getPokemon(pokemon: string): Promise<string | void> {
    if (typeof pokemon !== "string") {
      throw new TypeError("SomeRandomCat > Please provide a pokemon name.");
    }
    const res = await defaultAxios
      .get("https://api.snowflakedev.xyz/api/pokemon?name=" + pokemon, {
        headers: {
          Authorization: process.env.SNOWFLAKE_API_TOKEN,
        },
      })
      .catch(() => {
        throw new Error("SomeRandomCat > Invalid Pokemon name provided.");
      });
    return res.data;
  }

  /**
   * Get a string.
   * @param {number} number The length of the string
   * @returns {Promise<string | void>} Returns a string.
   */
  public static async getString(number: number): Promise<string | void> {
    const res = await defaultAxios.get(
      `https://apis.duncte123.me/random-string/${number}`
    );
    if (!number)
      throw new TypeError(
        "SomeRandomCat > No number specified. Please specify a number!"
      );
    if (!res)
      throw new Error(
        "SomeRandomCat > Error fetching a random string from API."
      );
    else return res.data.data;
  }

  /**
   * Get a topic.
   * @returns {Promise<string | void>} Returns a string with the topic.
   */

  public static async getTopic(): Promise<string | void> {
    try {
      const main = await defaultAxios.get("http://bruhapi.xyz/topic");
      let content = main.data.res;
      return content;
    } catch (error) {
      throw new Error(
        "SomeRandomCat > Error while fetching a random topic.\n> " + error
      );
    }
  }
}
