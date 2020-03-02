// This file is generated by src/codegen/function-gen.ts.
import { inWstrOfString } from '../../wrap-utils'
import { lib } from '../../lowlevel'

export async function clipPut(clip: string): Promise<void> {
  const clipBuffer = inWstrOfString(clip)
  return new Promise(resolve => {
    lib.AU3_ClipPut.async(clipBuffer, resolve)
  })
}
