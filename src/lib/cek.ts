import { JOSENotSupported } from '../util/errors.js'
import random from '../runtime/random.js'

export function bitLength(alg: string) {
  switch (alg) {
    case 'A128CBC-HS256':
      return 256
    case 'A192CBC-HS384':
      return 384
    case 'A256CBC-HS512':
      return 512
    case 'A128GCM':
      return 128
    case 'A192GCM':
      return 192
    case 'A256GCM':
      return 256
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`)
  }
}
export default (alg: string): Uint8Array => random(new Uint8Array(bitLength(alg) >> 3))
