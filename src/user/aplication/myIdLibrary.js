"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myId = void 0;
class myId {
    constructor() { }
    generateId() {
        return new Date().toString();
    }
    isVoidId(id) {
        throw new Error('Method not implemented.');
    }
}
exports.myId = myId;
