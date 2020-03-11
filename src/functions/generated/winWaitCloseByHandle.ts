// This file is generated by src/codegen/function-gen.ts.
import { Hwnd } from '../../types'
import { lib } from '../../lowlevel'
import { promisify } from 'util'

const AU3_WinWaitCloseByHandle = promisify(lib.AU3_WinWaitCloseByHandle.async)

export async function winWaitCloseByHandle(
  window: Hwnd,
  timeoutSeconds = 0,
): Promise<boolean> {
  const result = await AU3_WinWaitCloseByHandle(
    window.toNumber(),
    timeoutSeconds,
  )
  return result !== 0
}