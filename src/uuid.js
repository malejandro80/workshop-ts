"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = void 0;
const uuid_1 = require("uuid");
class uuid {
    constructor() { }
    generateId() {
        return (0, uuid_1.v4)();
    }
    isVoidId(id) {
        if (typeof id === 'string') {
            return true;
        }
        return false;
    }
}
exports.uuid = uuid;
