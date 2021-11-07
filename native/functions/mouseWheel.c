// This file is generated by src/codegen/function-gen.ts.
#include <node_api.h>

#include "AutoItX3_DLL.h"

#include "helpers.h"

napi_value dl_AU3_MouseWheel(napi_env env, napi_callback_info cbinfo) {
  DL_PARAMS(2);
  DL_ALLOC_INWSTR_PARAM(direction, 0);
  DL_ALLOC_INT_PARAM(increments, 1);
  DL_OUTPUT_VOID(AU3_MouseWheel(direction, increments));
  DL_FREE_INT_PARAM(increments);
  DL_FREE_INWSTR_PARAM(direction);
  DL_RETURN;
}