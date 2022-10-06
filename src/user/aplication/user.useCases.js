"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
class user {
    constructor(name, idGenerator) {
        this.name = name;
        this.id = idGenerator.generateId();
    }
    getName() {
        console.log(this.name);
    }
    getId() {
        console.log(`hola este es mi id ${this.id}`);
    }
}
exports.user = user;
