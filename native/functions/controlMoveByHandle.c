// This file is generated by src/codegen/function-gen.ts.
#include <node_api.h>

#include "AutoItX3_DLL.h"
#include "helpers.h"

napi_value dl_AU3_ControlMoveByHandle(napi_env env, napi_callback_info cbinfo) {
  DL_PARAMS(6);
  DL_ALLOC_HWND_PARAM(window, 0);
  DL_ALLOC_HWND_PARAM(control, 1);
  DL_ALLOC_INT_PARAM(nX, 2);
  DL_ALLOC_INT_PARAM(nY, 3);
  DL_ALLOC_INT_PARAM(nWidth, 4);
  DL_ALLOC_INT_PARAM(nHeight, 5);
  DL_OUTPUT_INT(
      AU3_ControlMoveByHandle(window, control, nX, nY, nWidth, nHeight));
  DL_FREE_INT_PARAM(nHeight);
  DL_FREE_INT_PARAM(nWidth);
  DL_FREE_INT_PARAM(nY);
  DL_FREE_INT_PARAM(nX);
  DL_FREE_HWND_PARAM(control);
  DL_FREE_HWND_PARAM(window);
  DL_RETURN;
}