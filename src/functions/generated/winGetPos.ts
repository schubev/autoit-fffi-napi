// This file is generated by src/codegen/function-gen.ts.
import { PromisifiedAutoitLib } from '../../generated-lib-type'
import { Rectangle } from '../../types'
import { WindowDescription } from 'autoit-advanced-descriptor'
import {
  inWstrOfString,
  inWstrOfWindowDescription,
  outRectangleBuffer,
  rectangleOfRectangleBuffer,
} from '../../wrap-utils'

export async function winGetPos(
  windowDescription: WindowDescription,
  windowText: string,
  library?: Pick<PromisifiedAutoitLib, 'AU3_WinGetPos'>,
): Promise<Rectangle | null> {
  const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription)
  const windowTextBuffer = inWstrOfString(windowText)
  const rectangleBuffer = await outRectangleBuffer()
  const lib = library ?? (await import('../../default-lib')).lib
  const result = await lib.AU3_WinGetPos(
    windowDescriptionBuffer,
    windowTextBuffer,
    rectangleBuffer,
  )
  return result ? await rectangleOfRectangleBuffer(rectangleBuffer) : null
}
