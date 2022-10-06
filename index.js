"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myIdLibrary_1 = require("./src/user/aplication/myIdLibrary");
const user_useCases_1 = require("./src/user/aplication/user.useCases");
const newIdGenerator = new myIdLibrary_1.myId();
const juan = new user_useCases_1.user('luis', newIdGenerator);
juan.getId();
