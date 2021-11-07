// This file is generated by src/codegen/function-gen.ts.
#include <node_api.h>

#include "AutoItX3_DLL.h"

#include "helpers.h"

napi_value dl_AU3_WinMove(napi_env env, napi_callback_info cbinfo) {
  DL_PARAMS(6);
  DL_ALLOC_INWSTR_PARAM(windowDescription, 0);
  DL_ALLOC_INWSTR_PARAM(windowText, 1);
  DL_ALLOC_INT_PARAM(x, 2);
  DL_ALLOC_INT_PARAM(y, 3);
  DL_ALLOC_INT_PARAM(width, 4);
  DL_ALLOC_INT_PARAM(height, 5);
  DL_OUTPUT_INT_STATUS(
      AU3_WinMove(windowDescription, windowText, x, y, width, height),
      AU3_WinMove);
  DL_FREE_INT_PARAM(height);
  DL_FREE_INT_PARAM(width);
  DL_FREE_INT_PARAM(y);
  DL_FREE_INT_PARAM(x);
  DL_FREE_INWSTR_PARAM(windowText);
  DL_FREE_INWSTR_PARAM(windowDescription);
  DL_RETURN;
}