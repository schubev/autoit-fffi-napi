export const bindings = {
    "AU3_Init": [
        "void",
        []
    ],
    "AU3_error": [
        "int",
        []
    ],
    "AU3_AutoItSetOption": [
        "int",
        [
            "uint16*",
            "int"
        ]
    ],
    "AU3_ClipGet": [
        "void",
        [
            "uint16*",
            "int"
        ]
    ],
    "AU3_ClipPut": [
        "void",
        [
            "uint16*"
        ]
    ],
    "AU3_ControlClick": [
        "int",
        [
            "uint16*",
            "uint16*",
            "uint16*",
            "uint16*",
            "int",
            "int",
            "int"
        ]
    ],
    "AU3_ControlClickByHandle": [
        "int",
        [
            "void*",
            "void*",
            "uint16*",
            "int",
            "int",
            "int"
        ]
    ],
    "AU3_ControlCommand": [
        "void",
        [
            "uint16*",
            "uint16*",
            "uint16*",
            "uint16*",
            "uint16*",
            "uint16*",
            "int"
        ]
    ],
    "AU3_ControlCommandByHandle": [
        "void",
        [
            "void*",
            "void*",
            "uint16*",
            "uint16*",
            "uint16*",
            "int"
        ]
    ],
    "AU3_ControlListView": [
        "void",
        [
            "uint16*",
            "uint16*",
            "uint16*",
            "uint16*",
            "uint16*",
            "uint16*",
            "uint16*",
            "int"
        ]
    ],
    "AU3_ControlListViewByHandle": [
        "void",
        [
            "void*",
            "void*",
            "uint16*",
            "uint16*",
            "uint16*",
            "uint16*",
            "int"
        ]
    ],
    "AU3_ControlDisable": [
        "int",
        [
            "uint16*",
            "uint16*",
            "uint16*"
        ]
    ],
    "AU3_ControlDisableByHandle": [
        "int",
        [
            "void*",
            "void*"
        ]
    ],
    "AU3_ControlEnable": [
        "int",
        [
            "uint16*",
            "uint16*",
            "uint16*"
        ]
    ],
    "AU3_ControlEnableByHandle": [
        "int",
        [
            "void*",
            "void*"
        ]
    ],
    "AU3_ControlFocus": [
        "int",
        [
            "uint16*",
            "uint16*",
            "uint16*"
        ]
    ],
    "AU3_ControlFocusByHandle": [
        "int",
        [
            "void*",
            "void*"
        ]
    ],
    "AU3_ControlGetFocus": [
        "void",
        [
            "uint16*",
            "uint16*",
            "uint16*",
            "int"
        ]
    ],
    "AU3_ControlGetFocusByHandle": [
        "void",
        [
            "void*",
            "uint16*",
            "int"
        ]
    ],
    "AU3_ControlGetHandle": [
        "void*",
        [
            "void*",
            "uint16*"
        ]
    ],
    "AU3_ControlGetPos": [
        "int",
        [
            "uint16*",
            "uint16*",
            "uint16*",
            "void*"
        ]
    ],
    "AU3_ControlGetPosByHandle": [
        "int",
        [
            "void*",
            "void*",
            "void*"
        ]
    ],
    "AU3_ControlGetText": [
        "void",
        [
            "uint16*",
            "uint16*",
            "uint16*",
            "uint16*",
            "int"
        ]
    ],
    "AU3_ControlGetTextByHandle": [
        "void",
        [
            "void*",
            "void*",
            "uint16*",
            "int"
        ]
    ],
    "AU3_ControlHide": [
        "int",
        [
            "uint16*",
            "uint16*",
            "uint16*"
        ]
    ],
    "AU3_ControlHideByHandle": [
        "int",
        [
            "void*",
            "void*"
        ]
    ],
    "AU3_ControlMove": [
        "int",
        [
            "uint16*",
            "uint16*",
            "uint16*",
            "int",
            "int",
            "int",
            "int"
        ]
    ],
    "AU3_ControlMoveByHandle": [
        "int",
        [
            "void*",
            "void*",
            "int",
            "int",
            "int",
            "int"
        ]
    ],
    "AU3_ControlSend": [
        "int",
        [
            "uint16*",
            "uint16*",
            "uint16*",
            "uint16*",
            "int"
        ]
    ],
    "AU3_ControlSendByHandle": [
        "int",
        [
            "void*",
            "void*",
            "uint16*",
            "int"
        ]
    ],
    "AU3_ControlSetText": [
        "int",
        [
            "uint16*",
            "uint16*",
            "uint16*",
            "uint16*"
        ]
    ],
    "AU3_ControlSetTextByHandle": [
        "int",
        [
            "void*",
            "void*",
            "uint16*"
        ]
    ],
    "AU3_ControlShow": [
        "int",
        [
            "uint16*",
            "uint16*",
            "uint16*"
        ]
    ],
    "AU3_ControlShowByHandle": [
        "int",
        [
            "void*",
            "void*"
        ]
    ],
    "AU3_WinGetHandle": [
        "void*",
        [
            "uint16*",
            "uint16*"
        ]
    ],
    "AU3_WinGetTitle": [
        "void",
        [
            "uint16*",
            "uint16*",
            "uint16*",
            "int"
        ]
    ]
};