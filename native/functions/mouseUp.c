// This file is generated by src/codegen/function-gen.ts.
#include <node_api.h>

#include "AutoItX3_DLL.h"

#include "helpers.h"

napi_value dl_AU3_MouseUp(napi_env env, napi_callback_info cbinfo) {
  DL_PARAMS(1);
  DL_ALLOC_INWSTR_PARAM(button, 0);
  DL_OUTPUT_VOID(AU3_MouseUp(button));
  DL_FREE_INWSTR_PARAM(button);
  DL_RETURN;
}