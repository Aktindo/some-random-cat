export interface generateIdProps {
    putDash?: boolean;
}
export declare class Generation {
    /**
     *
     * @param {generateIdProps} ops The options for generating a secure ID.
     * @param {boolean} [ops.putDash] Whether the ID should contain a "-"
     * @returns {string}
     */
    static generateId(ops: generateIdProps): string;
    /**
     * Returns acronym
     * @param {string} name Name to parse acronym
     * @returns {string}
     */
    static getAcronym(name: string): string;
    /**
     * Shorten text.
     * @param {string} text Text to shorten
     * @param {number} length Max Length
     * @returns {string}
     */
    shorten(text: string, length: number): string;
}
//# sourceMappingURL=Generation.d.ts.map