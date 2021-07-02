import * as config from "../../package.json";

export class Util {
  constructor() {}

  /**
   *
   * @returns {object}
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
