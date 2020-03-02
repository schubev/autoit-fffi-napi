// This file is generated by src/codegen/function-gen.ts.
import { Hwnd } from '../../types'
import { lib } from '../../lowlevel'

export async function controlMoveByHandle(
  window: Hwnd,
  control: Hwnd,
  nX: number,
  nY: number,
  nWidth: number,
  nHeight: number,
): Promise<number> {
  return new Promise(resolve => {
    lib.AU3_ControlMoveByHandle.async(
      window,
      control,
      nX,
      nY,
      nWidth,
      nHeight,
      resolve,
    )
  })
}