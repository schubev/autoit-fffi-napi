// This file is generated by src/codegen/function-gen.ts.
#include <node_api.h>

#include "AutoItX3_DLL.h"

#include "helpers.h"

napi_value dl_AU3_WinSetOnTopByHandle(napi_env env, napi_callback_info cbinfo) {
  DL_PARAMS(2);
  DL_ALLOC_HWND_PARAM(window, 0);
  DL_ALLOC_BOOL_PARAM(onTop, 1);
  DL_OUTPUT_INT_STATUS(AU3_WinSetOnTopByHandle(window, onTop),
                       AU3_WinSetOnTopByHandle);
  DL_FREE_BOOL_PARAM(onTop);
  DL_FREE_HWND_PARAM(window);
  DL_RETURN;
}