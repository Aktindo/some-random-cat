"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
var axios = __importStar(require("axios"));
var dotenv = __importStar(require("dotenv"));
var defaultAxios = axios.default;
dotenv.config();
var Random = /** @class */ (function () {
    /**
     * ⚠ Please do not instantiate this class.
     */
    function Random() {
    }
    /**
     *
     * @returns {Promise<string | void>}
     */
    Random.getAdvice = function () {
        return __awaiter(this, void 0, void 0, function () {
            var main, res, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, defaultAxios.get("https://api.adviceslip.com/advice")];
                    case 1:
                        main = _a.sent();
                        return [4 /*yield*/, main.data];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error("SomeRandomCat > Unable to access the json content of API");
                        }
                        content = res.slip.advice;
                        return [2 /*return*/, content];
                }
            });
        });
    };
    Random.getCat = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, defaultAxios.get("https://api.thecatapi.com/v1/images/search?format=json")];
                    case 1:
                        res = _a.sent();
                        if (!res) {
                            throw new Error("SomeRandomCat > Error fetching a random image from API.");
                        }
                        data = res.data[0].url;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * @returns {Promise<string | void>} Returns a URL of the picture.
     */
    Random.getDog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, defaultAxios.get("https://dog.ceo/api/breeds/image/random")];
                    case 1:
                        res = _a.sent();
                        if (!res)
                            throw new Error("SomeRandomCat > Error fetching a random image from API.");
                        data = res.data.message;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * @returns {Promise<string | void>} Returns a string with the fact.
     */
    Random.getFact = function () {
        return __awaiter(this, void 0, void 0, function () {
            var main, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, defaultAxios.get("https://bruhapi.xyz/fact")];
                    case 1:
                        main = _a.sent();
                        content = main.data.res;
                        return [2 /*return*/, content];
                }
            });
        });
    };
    /**
     *
     * @returns {Promise<string | void>} Returns an object with a promise.
     */
    Random.getJoke = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, defaultAxios.get("https://apis.duncte123.me/joke")];
                    case 1:
                        res = _a.sent();
                        if (!res)
                            throw new Error("SomeRandomCat > Error fetching a random joke from API.");
                        else
                            return [2 /*return*/, res.data.data];
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {string} sub The subreddit's name.
     * @returns {Promise<object | void>} Returns an object with a promise.
     */
    Random.getMeme = function (sub) {
        return __awaiter(this, void 0, void 0, function () {
            var start, response, responseTime, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        start = Date.now();
                        return [4 /*yield*/, defaultAxios.get("https://imageapi.fionn.live/reddit/" + sub.toLowerCase())];
                    case 1:
                        response = _a.sent();
                        responseTime = Date.now() - start;
                        return [2 /*return*/, {
                                img: response.data.img,
                                res: responseTime,
                                title: response.data.title,
                                upvotes: response.data.upvotes,
                                author: response.data.author,
                                upvoteRatio: response.data.upvoteRatio,
                                comments: response.data.comments,
                                downvotes: response.data.downvotes,
                            }];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error("SomeRandomCat > There was an error trying to generate a meme.\n> " +
                            error_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {string} pokemon The name of the pokemon.
     * @returns {Promise<string | void>} Returns a string.
     */
    Random.getPokemon = function (pokemon) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof pokemon !== "string") {
                            throw new TypeError("SomeRandomCat > Please provide a pokemon name.");
                        }
                        return [4 /*yield*/, defaultAxios
                                .get("https://api.snowflakedev.xyz/api/pokemon?name=" + pokemon, {
                                headers: {
                                    Authorization: process.env.SNOWFLAKE_API_TOKEN,
                                },
                            })
                                .catch(function () {
                                throw new Error("SomeRandomCat > Invalid Pokemon name provided.");
                            })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    /**
     * @param {number} number The length of the string
     * @returns {Promise<string | void>} Returns a string.
     */
    Random.getString = function (number) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, defaultAxios.get("https://apis.duncte123.me/random-string/" + number)];
                    case 1:
                        res = _a.sent();
                        if (!number)
                            throw new TypeError("SomeRandomCat > No number specified. Please specify a number!");
                        if (!res)
                            throw new Error("SomeRandomCat > Error fetching a random string from API.");
                        else
                            return [2 /*return*/, res.data.data];
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @returns {Promise<string | void>} Returns a string with the topic.
     */
    Random.getTopic = function () {
        return __awaiter(this, void 0, void 0, function () {
            var main, content, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, defaultAxios.get("http://bruhapi.xyz/topic")];
                    case 1:
                        main = _a.sent();
                        content = main.data.res;
                        return [2 /*return*/, content];
                    case 2:
                        error_2 = _a.sent();
                        throw new Error("SomeRandomCat > Error while fetching a random topic.\n> " + error_2);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Random;
}());
exports.Random = Random;
