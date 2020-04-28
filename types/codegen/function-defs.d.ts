export declare enum Param {
    Int = 0,
    IntBool = 1,
    IntWindowState = 2,
    IntSendMode = 3,
    InWstr = 4,
    InWstrCommand = 5,
    InWstrCommandExtra = 6,
    InWstrDescription = 7,
    InWstrMouseButton = 8,
    InWstrMouseScrollDirection = 9,
    OutWstr = 10,
    OutWstrSize = 11,
    OutRectangle = 12,
    Hwnd = 13
}
export declare enum Return {
    Void = 0,
    Int = 1,
    IntDiscard = 2,
    IntStatus = 3,
    IntCursor = 4,
    Hwnd = 5
}
export interface ParamDef {
    key: string;
    type: Param;
    default?: string | number;
}
export interface FunctionDef {
    return: Return;
    params: ParamDef[];
    generate: boolean;
}
export declare const defaultInt = -2147483647;
export declare const functions: Record<string, Readonly<FunctionDef>>;
