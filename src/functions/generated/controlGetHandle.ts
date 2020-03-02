// This file is generated by src/codegen/function-gen.ts.
import { Hwnd } from '../../types'
import { WindowDescription } from 'autoit-advanced-descriptor'
import { inWstrOfWindowDescription } from '../../wrap-utils'
import { lib } from '../../lowlevel'

export async function controlGetHandle(
  window: Hwnd,
  control: string | WindowDescription,
): Promise<Hwnd> {
  const controlBuffer = inWstrOfWindowDescription(control)
  return new Promise(resolve => {
    lib.AU3_ControlGetHandle.async(window, controlBuffer, resolve)
  })
}
