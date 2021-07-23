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
export declare class Random {
    /**
     * ⚠ Please do not instantiate this class.
     */
    constructor();
    /**
     * Get a random advice.
     * @type {Advice}
     */
    static getAdvice(): Promise<Advice | void>;
    /**
     * Get a random cat.
     * @type {Cat}
     */
    static getCat(): Promise<Cat>;
    /**
     * Get a random dog.
     * @type {string}
     */
    static getDog(): Promise<string | void>;
    /**
     * Get a random fact.
     * @type {string}
     */
    static getFact(): Promise<string | void>;
    /**
     * Get a random joke.
     * @type {Joke}
     */
    static getJoke(): Promise<Joke | void>;
    /**
     *
     * Get a random meme.
     * @type {object}
     * @param {string} sub The subreddit's name.
     * @returns {Promise<object | void>} Returns an object with a promise.
     */
    static getMeme(sub: string): Promise<Meme | void>;
    /**
     * Get a string.
     * @param {number} number The length of the string
     * @returns {Promise<string | void>} Returns a string.
     */
    static getString(number: number): Promise<string | void>;
    /**
     * Get a topic.
     * @returns {Promise<string | void>} Returns a string with the topic.
     */
    static getTopic(): Promise<string | void>;
}
//# sourceMappingURL=Random.d.ts.map