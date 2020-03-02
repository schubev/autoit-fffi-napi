// This file is generated by src/codegen/function-gen.ts.
import { WindowDescription } from 'autoit-advanced-descriptor'
import {
  inWstrOfString,
  inWstrOfWindowDescription,
  outWstrOfSize,
  outWstrResolver,
} from '../../wrap-utils'
import { lib } from '../../lowlevel'

export async function winGetTitle(
  windowDescription: string | WindowDescription,
  windowText: string,
  titleSize = 512,
): Promise<string> {
  const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription)
  const windowTextBuffer = inWstrOfString(windowText)
  const outBuffer = outWstrOfSize(titleSize)
  return new Promise(resolve => {
    lib.AU3_WinGetTitle.async(
      windowDescriptionBuffer,
      windowTextBuffer,
      outBuffer,
      titleSize,
      outWstrResolver(outBuffer, resolve),
    )
  })
}
