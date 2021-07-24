import * as axios from "axios";
import * as dotenv from "dotenv";
import path from "path";

const defaultAxios = axios.default;
dotenv.config();

export interface Advice {
  id: number;
  advice: string;
}

export interface Cat {
  breeds: Array<any>;
  id: string;
  url: string;
  width: number;
  weight: number;
}

export interface Joke {
  title: string;
  body: string;
  url: string;
}

export interface Meme {
  endpoint: string;
  img: string;
  title: string;
  upvotes: number;
  downvotes: number;
  upvoteRatio: number;
  author: string;
  comments: number;
  text: string;
  post: string;
}

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
   * @type {Advice}
   */

  public static async getAdvice(): Promise<Advice | null> {
    const main = await defaultAxios.get("https://api.adviceslip.com/advice");
    const res = await main.data;

    if (!res) {
      throw new Error(
        "SomeRandomCat > Unable to access the json content of API"
      );
    }

    let content: Advice = res.slip;
    return content;
  }

  /**
   * Get a random cat.
   * @type {Cat}
   */

  public static async getCat(): Promise<Cat | null> {
    const res = await defaultAxios.get(
      "https://api.thecatapi.com/v1/images/search?format=json"
    );

    if (!res) {
      throw new Error(
        "SomeRandomCat > Error fetching a random image from API."
      );
    }

    let data = res.data[0];
    return data;
  }

  /**
   * Get a random dog.
   * @type {string}
   */
  public static async getDog(): Promise<string | null> {
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

  public static async getFact(): Promise<string | null> {
    const main = await defaultAxios.get(
      "https://bruhapi.syntaxpwn.repl.co/fact"
    );
    let content = main.data.res;
    return content;
  }

  /**
   * Get a random joke.
   * @type {Joke}
   */
  public static async getJoke(): Promise<Joke | null> {
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

  public static async getMeme(sub: string): Promise<Meme | null> {
    try {
      const response = await defaultAxios.get(
        `https://imageapi.fionn.live/reddit/${sub.toLowerCase()}`
      );

      return response.data;
    } catch (error) {
      throw new Error(
        "SomeRandomCat > There was an error trying to generate a meme.\n> " +
          error
      );
    }
  }

  /**
   * Get a string.
   * @param {number} number The length of the string
   * @returns {Promise<string | null>} Returns a string.
   */
  public static async getString(number: number): Promise<string | null> {
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
   * @returns {Promise<string | null>} Returns a string with the topic.
   */

  public static async getTopic(): Promise<string | null> {
    try {
      const main = await defaultAxios.get("http://bruhapi.xyz/topic");
      let content = main.data.res;

      return content;
    } catch (error) {
      throw new Error(
        "SomeRandomCat > Error while fetching a random topic.\n> " + error
      );
    }

    return null;
  }
}
