// This file is generated by src/codegen/function-gen.ts.
#include <node_api.h>

#include "AutoItX3_DLL.h"
#include "helpers.h"

napi_value dl_AU3_ControlSend(napi_env env, napi_callback_info cbinfo) {
  DL_PARAMS(5);
  DL_ALLOC_INWSTR_PARAM(windowDescription, 0);
  DL_ALLOC_INWSTR_PARAM(windowText, 1);
  DL_ALLOC_INWSTR_PARAM(controlDescription, 2);
  DL_ALLOC_INWSTR_PARAM(text, 3);
  DL_ALLOC_INT_PARAM(mode, 4);
  DL_OUTPUT_INT_STATUS(AU3_ControlSend(windowDescription, windowText,
                                       controlDescription, text, mode),
                       AU3_ControlSend);
  DL_FREE_INT_PARAM(mode);
  DL_FREE_INWSTR_PARAM(text);
  DL_FREE_INWSTR_PARAM(controlDescription);
  DL_FREE_INWSTR_PARAM(windowText);
  DL_FREE_INWSTR_PARAM(windowDescription);
  DL_RETURN;
}