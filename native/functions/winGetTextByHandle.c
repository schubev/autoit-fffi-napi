// This file is generated by src/codegen/function-gen.ts.
#include <node_api.h>

#include "AutoItX3_DLL.h"
#include "helpers.h"

napi_value dl_AU3_WinGetTextByHandle(napi_env env, napi_callback_info cbinfo) {
  DL_PARAMS(2);
  DL_ALLOC_HWND_PARAM(window, 0);
  DL_ALLOC_INT_PARAM(textSize, 1);
  DL_OUTPUT_WSTR(AU3_WinGetTextByHandle(window, text, textSize), text);
  DL_FREE_INT_PARAM(textSize);
  DL_FREE_HWND_PARAM(window);
  DL_RETURN;
}