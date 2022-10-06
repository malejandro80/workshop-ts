/** @format */

import { Iuser } from '../domain/user'
import { Iidentify } from '../infrastructure/services/Iuuid.interface'
/** @format */

export class user implements Iuser {
  name: string
  id: string
  age: number
  constructor(name: string, idGenerator: Iidentify) {
    this.name = name
    this.id = idGenerator.generateId()
  }

  getName() {
    console.log(this.name)
  }
  getId() {
    console.log(`hola este es mi id ${this.id}`)
  }
}
