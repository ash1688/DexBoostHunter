"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const transactions_1 = require("../transactions");
(async () => {
    const query = false;
    if (query) {
        const res = await (0, db_1.selectAllTokens)();
        console.log(res);
    }
})();
(async () => {
    const token = null;
    if (token) {
        const res = await (0, db_1.selectTokenPresent)(token);
        console.log(res);
    }
})();
(async () => {
    const token = null;
    if (token) {
        const res = await (0, db_1.selectTokenBoostAmounts)(token);
        console.log(res);
    }
})();
(async () => {
    const token = "cGy6G8SakDsCQja1pTnWQ9VvKRc7itoEU2T7QbVPeng";
    if (token) {
        const res = await (0, transactions_1.getRugCheck)(token);
        console.log(res);
    }
})();
