export declare class Random {
    /**
     * ⚠ Please do not instantiate this class.
     */
    constructor();
    /**
     *
     * @returns {Promise<string | void>}
     */
    static getAdvice(): Promise<string | void>;
    static getCat(): Promise<any>;
    /**
     * @returns {Promise<string | void>} Returns a URL of the picture.
     */
    static getDog(): Promise<string | void>;
    /**
     * @returns {Promise<string | void>} Returns a string with the fact.
     */
    static getFact(): Promise<string | void>;
    /**
     *
     * @returns {Promise<string | void>} Returns an object with a promise.
     */
    static getJoke(): Promise<string | void>;
    /**
     * @param {string} sub The subreddit's name.
     * @returns {Promise<object | void>} Returns an object with a promise.
     */
    static getMeme(sub: string): Promise<object | void>;
    /**
     * @param {string} pokemon The name of the pokemon.
     * @returns {Promise<string | void>} Returns a string.
     */
    static getPokemon(pokemon: string): Promise<string | void>;
    /**
     * @param {number} number The length of the string
     * @returns {Promise<string | void>} Returns a string.
     */
    static getString(number: number): Promise<string | void>;
    /**
     * @returns {Promise<string | void>} Returns a string with the topic.
     */
    static getTopic(): Promise<string | void>;
}
//# sourceMappingURL=Random.d.ts.map