// This file is generated by src/codegen/function-gen.ts.
import { WindowDescription } from 'autoit-advanced-descriptor'
import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils'
import { lib } from '../../lowlevel'

export async function controlSetText(
  windowDescription: string | WindowDescription,
  windowText: string,
  controlDescription: string | WindowDescription,
  text: string,
): Promise<number> {
  const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription)
  const windowTextBuffer = inWstrOfString(windowText)
  const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription)
  const textBuffer = inWstrOfString(text)
  return new Promise(resolve => {
    lib.AU3_ControlSetText.async(
      windowDescriptionBuffer,
      windowTextBuffer,
      controlDescriptionBuffer,
      textBuffer,
      resolve,
    )
  })
}
