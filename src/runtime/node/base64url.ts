import { Buffer } from 'buffer'
import { decoder } from '../../lib/buffer_utils.js'

let encodeImpl: (input: Uint8Array | string) => string

function normalize(input: string | Uint8Array) {
  let encoded = input
  if (encoded instanceof Uint8Array) {
    encoded = decoder.decode(encoded)
  }
  return encoded
}

if (Buffer.isEncoding('base64url')) {
  encodeImpl = (input) => Buffer.from(input).toString('base64url')
} else {
  encodeImpl = (input) =>
    Buffer.from(input).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

export const decodeBase64 = (input: string) => Buffer.from(input, 'base64')
export const encodeBase64 = (input: Uint8Array | string) => Buffer.from(input).toString('base64')
export const encode = encodeImpl
export const decode = (input: Uint8Array | string) => Buffer.from(normalize(input), 'base64')
