// This file is generated by src/codegen/function-gen.ts.
#include <node_api.h>

#include "AutoItX3_DLL.h"
#include "helpers.h"

napi_value dl_AU3_MouseGetCursor(napi_env env, napi_callback_info cbinfo) {
  DL_OUTPUT_INT(AU3_MouseGetCursor());
  DL_RETURN;
}