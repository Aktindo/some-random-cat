"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generation = void 0;
var Generation = /** @class */ (function () {
    function Generation() {
    }
    /**
     *
     * @param {generateIdProps} ops The options for generating a secure ID.
     * @param {boolean} [ops.putDash] Whether the ID should contain a "-"
     * @returns {string}
     */
    Generation.generateId = function (ops) {
        var dt = new Date().getTime();
        if (ops.putDash === false) {
            var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
            });
        }
        else {
            var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
            });
        }
        return uuid;
    };
    /**
     * Returns acronym
     * @param {string} name Name to parse acronym
     * @returns {string}
     */
    Generation.getAcronym = function (name) {
        if (!name || typeof name !== "string")
            return "";
        return name
            .replace(/'s /g, " ")
            .replace(/\w+/g, function (e) { return e[0]; })
            .replace(/\s/g, "");
    };
    /**
     * Shorten text.
     * @param {string} text Text to shorten
     * @param {number} length Max Length
     * @returns {string}
     */
    Generation.prototype.shorten = function (text, length) {
        if (typeof text !== "string")
            return "";
        if (text.length <= length)
            return text;
        return text.substr(0, length).trim() + "...";
    };
    return Generation;
}());
exports.Generation = Generation;
