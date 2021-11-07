// This file is generated by src/codegen/function-gen.ts.
#include <node_api.h>

#include "AutoItX3_DLL.h"

#include "helpers.h"

napi_value dl_AU3_ControlClickByHandle(napi_env env,
                                       napi_callback_info cbinfo) {
  DL_PARAMS(6);
  DL_ALLOC_HWND_PARAM(window, 0);
  DL_ALLOC_HWND_PARAM(control, 1);
  DL_ALLOC_INWSTR_PARAM(button, 2);
  DL_ALLOC_INT_PARAM(numClicks, 3);
  DL_ALLOC_INT_PARAM(nX, 4);
  DL_ALLOC_INT_PARAM(nY, 5);
  DL_OUTPUT_INT_STATUS(
      AU3_ControlClickByHandle(window, control, button, numClicks, nX, nY),
      AU3_ControlClickByHandle);
  DL_FREE_INT_PARAM(nY);
  DL_FREE_INT_PARAM(nX);
  DL_FREE_INT_PARAM(numClicks);
  DL_FREE_INWSTR_PARAM(button);
  DL_FREE_HWND_PARAM(control);
  DL_FREE_HWND_PARAM(window);
  DL_RETURN;
}