// This file is generated by src/codegen/function-gen.ts.
import { Hwnd } from '../../types'
import { lib } from '../../lowlevel'

export async function controlDisableByHandle(
  window: Hwnd,
  control: Hwnd,
): Promise<number> {
  return new Promise(resolve => {
    lib.AU3_ControlDisableByHandle.async(window, control, resolve)
  })
}
