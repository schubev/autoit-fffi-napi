// This file is generated by src/codegen/function-gen.ts.
import { MouseButton } from '../../types'
import { WindowDescription } from 'autoit-advanced-descriptor'
import { inWstrOfString, inWstrOfWindowDescription } from '../../wrap-utils'
import { lib } from '../../lowlevel'

export async function controlClick(
  windowDescription: string | WindowDescription,
  windowText: string,
  controlDescription: string | WindowDescription,
  button: MouseButton,
  numClicks: number,
  nX: number,
  nY: number,
): Promise<boolean> {
  const windowDescriptionBuffer = inWstrOfWindowDescription(windowDescription)
  const windowTextBuffer = inWstrOfString(windowText)
  const controlDescriptionBuffer = inWstrOfWindowDescription(controlDescription)
  const buttonBuffer = inWstrOfString(button)
  return new Promise(resolve => {
    lib.AU3_ControlClick.async(
      windowDescriptionBuffer,
      windowTextBuffer,
      controlDescriptionBuffer,
      buttonBuffer,
      numClicks,
      nX,
      nY,
      (status: 0 | 1) => {
        resolve(status === 1)
      },
    )
  })
}
