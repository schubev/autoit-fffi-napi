// This file is generated by src/codegen/function-gen.ts.
import { Hwnd } from '../../types'
import { lib } from '../../lowlevel'
import { promisify } from 'util'

const AU3_WinCloseByHandle = promisify(lib.AU3_WinCloseByHandle.async)

export async function winCloseByHandle(window: Hwnd): Promise<boolean> {
  const result = await AU3_WinCloseByHandle(window.toNumber())
  return result !== 0
}
