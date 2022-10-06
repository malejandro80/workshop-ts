/** @format */

import { Iidentify } from '../infrastructure/services/Iuuid.interface'

export class myId implements Iidentify {
  constructor() {}

  generateId(): string {
    return new Date().toString()
  }

  isVoidId(id: string): Boolean {
    throw new Error('Method not implemented.')
  }
}
