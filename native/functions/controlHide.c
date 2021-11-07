// This file is generated by src/codegen/function-gen.ts.
#include <node_api.h>

#include "AutoItX3_DLL.h"
#include "helpers.h"

napi_value dl_AU3_ControlHide(napi_env env, napi_callback_info cbinfo) {
  DL_PARAMS(3);
  DL_ALLOC_INWSTR_PARAM(windowDescription, 0);
  DL_ALLOC_INWSTR_PARAM(windowText, 1);
  DL_ALLOC_INWSTR_PARAM(controlDescription, 2);
  DL_OUTPUT_INT(
      AU3_ControlHide(windowDescription, windowText, controlDescription))
  DL_FREE_INWSTR_PARAM(controlDescription);
  DL_FREE_INWSTR_PARAM(windowText);
  DL_FREE_INWSTR_PARAM(windowDescription);
  DL_RETURN;
}