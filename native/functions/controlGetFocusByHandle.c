// This file is generated by src/codegen/function-gen.ts.
#include <node_api.h>

#include "AutoItX3_DLL.h"
#include "helpers.h"

napi_value dl_AU3_ControlGetFocusByHandle(napi_env env,
                                          napi_callback_info cbinfo) {
  DL_PARAMS(2);
  DL_ALLOC_HWND_PARAM(window, 0);
  DL_ALLOC_INT_PARAM(controlSize, 1);
  DL_OUTPUT_WSTR(AU3_ControlGetFocusByHandle(window, control, controlSize),
                 control);
  DL_FREE_INT_PARAM(controlSize);
  DL_FREE_HWND_PARAM(window);
  DL_RETURN;
}