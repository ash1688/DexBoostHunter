"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRugCheck = getRugCheck;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("./config");
// Load environment variables from the .env file
dotenv_1.default.config();
async function getRugCheck(tokenMint) {
    const rugResponse = await axios_1.default.get("https://api.rugcheck.xyz/v1/tokens/" + tokenMint + "/report/summary", {
        timeout: config_1.config.settings.api_get_timeout,
    });
    if (!rugResponse.data)
        return false;
    if (config_1.config.rug_check.verbose_log && config_1.config.rug_check.verbose_log === true) {
        console.log(rugResponse.data);
    }
    return rugResponse.data;
}
