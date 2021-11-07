// This file is generated by src/codegen/function-gen.ts.
#include <node_api.h>

#include "AutoItX3_DLL.h"
#include "helpers.h"

napi_value dl_AU3_ControlGetHandle(napi_env env, napi_callback_info cbinfo) {
  DL_PARAMS(2);
  DL_ALLOC_INT_PARAM(window, 0);
  DL_ALLOC_INWSTR_PARAM(control, 1);
  DL_OUTPUT_INT(AU3_ControlGetHandle(window, control))
  DL_FREE_INWSTR_PARAM(control);
  DL_FREE_INT_PARAM(window);
  DL_RETURN;
}