import * as config from "../../package.json";

/**
 * A utility class.
 * @static
 */

export default class Util {
  /**
   * ⚠ Please do not instantiate this class.
   */
  constructor() {}

  /**
   * Gets some information on the package.
   * @type {object}
   */

  public static getInfo(): object {
    return {
      version: config.version,
      author: config.author,
      repo: config.repository,
      description: config.description,
    };
  }
}
