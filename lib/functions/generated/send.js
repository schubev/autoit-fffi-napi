"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file is generated by src/codegen/function-gen.ts.
const types_1 = require("../../types");
const wrap_utils_1 = require("../../wrap-utils");
const lowlevel_1 = require("../../lowlevel");
const util_1 = require("util");
const AU3_Send = util_1.promisify(lowlevel_1.lib.AU3_Send.async);
async function send(text, mode = types_1.SendMode.Default) {
    const textBuffer = wrap_utils_1.inWstrOfString(text);
    await AU3_Send(textBuffer, mode);
}
exports.send = send;