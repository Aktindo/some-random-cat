class Math {
    /**
     * ⚠ Please do not instantiate this class. You can access it by doing require('some-random-cat').Math
     */

    /*
     * <warn>Static class</warn>
     */

    constructor() {
        throw new Error('You may not instantiate this class!')
    }

    /**
     * @param {Number} num1 The first number
     * @param {Number} num2 The second number
     * @returns {Promise<Pending>}
     */
    static async add(num1, num2) {
        if (isNaN(num1)) throw new TypeError('The first number you provided is not a number!')
        if (isNaN(num2)) throw new TypeError('The second number you provided is not a number!')
        const res = num1 + num2
        if (!res) throw new Error('Unknown error')
        return res
    }
        /**
     * @param {Number} num1 The first number
     * @param {Number} num2 The second number
     * @returns {Promise<Pending>}
     */
    static async subtract(num1, num2) {
        if (isNaN(num1)) throw new TypeError('The first number you provided is not a number!')
        if (isNaN(num2)) throw new TypeError('The second number you provided is not a number!')
        const res = num1 - num2
        if (!res) throw new Error('Unknown error')
        return res
    }
        /**
     * @param {Number} num1 The first number
     * @param {Number} num2 The second number
     * @returns {Promise<Pending>}
     */
    static async multiply(num1, num2) {
        if (isNaN(num1)) throw new TypeError('The first number you provided is not a number!')
        if (isNaN(num2)) throw new TypeError('The second number you provided is not a number!')
        const res = num1 * num2
        if (!res) throw new Error('Unknown error')
        return res
    }
        /**
     * @param {Number} num1 The first number
     * @param {Number} num2 The second number
     * @returns {Promise<Pending>}
     */
    static async divide(num1, num2) {
        if (isNaN(num1)) throw new TypeError('The first number you provided is not a number!')
        if (isNaN(num2)) throw new TypeError('The second number you provided is not a number!')
        const res = num1 / num2
        if (!res) throw new Error('Unknown error')
        return res
    }
    static async remainder(num1, num2) {
        if (isNaN(num1)) throw new TypeError('The first number you provided is not a number!')
        if (isNaN(num2)) throw new TypeError('The second number you provided is not a number!')
        const res = num1 % num2
        if (!res) throw new Error('Unknown error')
        return res
    }
}

module.exports = Math