// This file is generated by src/codegen/function-gen.ts.
import { WindowDescription } from 'autoit-advanced-descriptor'
import {
  inWstrOfString,
  inWstrOfWindowDescription,
  outWstrOfSize,
  outWstrResolver,
} from '../../wrap-utils'
import { lib } from '../../lowlevel'

export async function controlGetText(
  windowDescription: string | WindowDescription,
  windowText: string,
  controlDescription: string | WindowDescription,
  controlTextSize = 512,
): Promise<string> {
  const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription)
  const windowTextBuffer = inWstrOfString(windowText)
  const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription)
  const outBuffer = outWstrOfSize(controlTextSize)
  return new Promise(resolve => {
    lib.AU3_ControlGetText.async(
      windowDescriptionBuffer,
      windowTextBuffer,
      controlDescriptionBuffer,
      outBuffer,
      controlTextSize,
      outWstrResolver(outBuffer, resolve),
    )
  })
}