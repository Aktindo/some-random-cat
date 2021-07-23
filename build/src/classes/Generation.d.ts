export interface generateIdProps {
    putDash?: boolean;
}
/**
 * Manages all the generation methods and allow you to gen stuff.
 * @static
 */
export declare class Generation {
    /**
     * ⚠ Please do not instantiate this class.
     */
    constructor();
    /**
     * Generate a secure UUID.
     * @param {generateIdProps} ops The options to generate ID.
     * @type {string}
     */
    static generateId(ops: generateIdProps): string;
    /**
     * Generate an acronym.
     * @param {string} name The options to generate ID.
     * @type {string}
     */
    static getAcronym(name: string): string;
    /**
     * Shortens some text and substrings it with a ... at the end.
     * @param {string} text Text to perform operation on.
     * @param {length} number The max length of the string.
     * @type {string}
     */
    shorten(text: string, length: number): string;
}
//# sourceMappingURL=Generation.d.ts.map