// This file is generated by src/codegen/function-gen.ts.
import { WindowDescription } from 'autoit-advanced-descriptor'
import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils'
import { lib } from '../../lowlevel'
import { promisify } from 'util'

const AU3_WinWaitNotActive = promisify(lib.AU3_WinWaitNotActive.async)

export async function winWaitNotActive(
  windowDescription: WindowDescription,
  windowText: string,
  timeoutSeconds = 0,
): Promise<boolean> {
  const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription)
  const windowTextBuffer = inWstrOfString(windowText)
  const result = await AU3_WinWaitNotActive(
    windowDescriptionBuffer,
    windowTextBuffer,
    timeoutSeconds,
  )
  return result !== 0
}