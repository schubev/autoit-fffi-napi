// This file is generated by src/codegen/function-gen.ts.
#include <node_api.h>

#include "AutoItX3_DLL.h"
#include "helpers.h"

napi_value dl_AU3_WinGetPos(napi_env env, napi_callback_info cbinfo) {
  DL_PARAMS(2);
  DL_ALLOC_INWSTR_PARAM(windowDescription, 0);
  DL_ALLOC_INWSTR_PARAM(windowText, 1);
  DL_OUTPUT_RECTANGLE(AU3_WinGetPos(windowDescription, windowText, rectangle),
                      rectangle, AU3_WinGetPos);
  DL_FREE_INWSTR_PARAM(windowText);
  DL_FREE_INWSTR_PARAM(windowDescription);
  DL_RETURN;
}