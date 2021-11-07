// This file is generated by src/codegen/function-gen.ts.
#include <node_api.h>

#include "AutoItX3_DLL.h"
#include "helpers.h"

napi_value dl_AU3_Send(napi_env env, napi_callback_info cbinfo) {
  DL_PARAMS(2);
  DL_ALLOC_INWSTR_PARAM(text, 0);
  DL_ALLOC_INT_PARAM(mode, 1);
  DL_OUTPUT_VOID(AU3_Send(text, mode))
  DL_FREE_INT_PARAM(mode);
  DL_FREE_INWSTR_PARAM(text);
  DL_RETURN;
}