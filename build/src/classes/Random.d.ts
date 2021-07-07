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
     * @type {string}
     */
    static getAdvice(): Promise<string | void>;
    /**
     * Get a random cat.
     * @type {string}
     */
    static getCat(): Promise<any>;
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
     * @type {string}
     */
    static getJoke(): Promise<string | void>;
    /**
     *
     * Get a random meme.
     * @type {object}
     * @param {string} sub The subreddit's name.
     * @returns {Promise<object | void>} Returns an object with a promise.
     */
    static getMeme(sub: string): Promise<object | void>;
    /**
     * Get a random pokemon.
     * @param {string} pokemon The name of the pokemon.
     * @returns {Promise<string | void>} Returns a string.
     */
    static getPokemon(pokemon: string): Promise<string | void>;
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