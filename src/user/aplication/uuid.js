"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = void 0;
const uuid_1 = require("uuid");
class uuid {
    generateId() {
        return (0, uuid_1.v4)();
    }
    isVoidId(id) {
        throw new Error('Method not implemented.');
    }
}
exports.uuid = uuid;
