// This file is generated by src/codegen/function-gen.ts.
#include <node_api.h>

#include "AutoItX3_DLL.h"
#include "helpers.h"

napi_value dl_AU3_WinKillByHandle(napi_env env, napi_callback_info cbinfo) {
  DL_PARAMS(1);
  DL_ALLOC_INT_PARAM(window, 0);
  DL_OUTPUT_INT_STATUS(AU3_WinKillByHandle(window), AU3_WinKillByHandle)
  DL_FREE_INT_PARAM(window);
  DL_RETURN;
}