export interface generateIdProps {
  putDash?: boolean;
}

/**
 * Manages all the generation methods and allow you to gen stuff.
 * @static
 */
export class Generation {
  /**
   * ⚠ Please do not instantiate this class.
   */
  constructor() {}

  /**
   * Generate a secure UUID.
   * @param {generateIdProps} ops The options to generate ID.
   * @type {string}
   */

  public static generateId(ops: generateIdProps): string {
    var dt = new Date().getTime();
    if (ops.putDash === false) {
      var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          var r = (dt + Math.random() * 16) % 16 | 0;
          dt = Math.floor(dt / 16);
          return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
    } else {
      var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          var r = (dt + Math.random() * 16) % 16 | 0;
          dt = Math.floor(dt / 16);
          return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
    }
    return uuid;
  }

  /**
   * Generate an acronym.
   * @param {string} name The options to generate ID.
   * @type {string}
   */
  public static getAcronym(name: string): string {
    if (!name || typeof name !== "string") return "";
    return name
      .replace(/'s /g, " ")
      .replace(/\w+/g, (e) => e[0])
      .replace(/\s/g, "");
  }

  /**
   * Shortens some text and substrings it with a ... at the end.
   * @param {string} text Text to perform operation on.
   * @param {length} number The max length of the string.
   * @type {string}
   */
  public shorten(text: string, length: number): string {
    if (typeof text !== "string") return "";
    if (text.length <= length) return text;
    return text.substr(0, length).trim() + "...";
  }
}
