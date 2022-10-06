/** @format */

import { v4 as uuidv4 } from 'uuid'
import { Iidentify } from '../infrastructure/services/Iuuid.interface'

// export class uuid implements Iidentify {
//   constructor() {}
//   generateId(): string {
//     return uuidv4()
//   }
//   isVoidId(id: string): Boolean {
//     if (typeof id === 'string') {
//       return true
//     }
//     return false
//   }
// }

export class uuid implements Iidentify {
  generateId(): string {
    return uuidv4()
  }
  isVoidId(id: string): Boolean {
    throw new Error('Method not implemented.')
  }
}
