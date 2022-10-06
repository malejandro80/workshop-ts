/** @format */

import { myId } from './src/user/aplication/myIdLibrary'
import { user } from './src/user/aplication/user.useCases'
import { uuid } from './src/user/aplication/uuid'

// const idGenerator = new uuid()
const newIdGenerator = new myId()

const juan = new user('luis', newIdGenerator)

juan.getId()
