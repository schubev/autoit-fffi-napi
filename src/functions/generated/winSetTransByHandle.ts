// This file is generated by src/codegen/function-gen.ts.
import { Hwnd } from '../../types'
import { PromisifiedAutoitLib } from '../../generated-lib-type'

export async function winSetTransByHandle(
  window: Hwnd,
  transparency: number,
  library?: Pick<PromisifiedAutoitLib, 'AU3_WinSetTransByHandle'>,
): Promise<boolean> {
  const lib = library ?? (await import('../../default-lib')).lib
  const result = await lib.AU3_WinSetTransByHandle(
    window.toNumber(),
    transparency,
  )
  return result !== 0
}
