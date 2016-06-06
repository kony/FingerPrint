function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
    var Button08d62fc5c6a6543 = new kony.ui.Button({
        "centerX": "49.96%",
        "focusSkin": "CopyslButtonGlossRed05988bd1d32f74f",
        "height": "50dp",
        "id": "Button08d62fc5c6a6543",
        "isVisible": true,
        "left": "58dp",
        "onClick": AS_Button_264560fd22464b9d99df49ee7d9d1ff7,
        "skin": "CopyslButtonGlossBlue06f54c6c153644e",
        "text": "Login Finger Print",
        "top": "520dp",
        "width": "260dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyButton02297df16176c40 = new kony.ui.Button({
        "centerX": "51%",
        "focusSkin": "CopyslButtonGlossRed04d3cb2a9ef9a48",
        "height": "50dp",
        "id": "CopyButton02297df16176c40",
        "isVisible": true,
        "left": "58dp",
        "onClick": AS_Button_752eaf22690a43438cd2d86d396a4089,
        "skin": "CopyslButtonGlossBlue06f54c6c153644e",
        "text": "Login",
        "top": "305dp",
        "width": "260dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer05e7c3da9ee364a = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "220dp",
        "id": "FlexContainer05e7c3da9ee364a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "116dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer05e7c3da9ee364a.setDefaultUnit(kony.flex.DP);
    var TextField0ed9dd010a4fa40 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "TextField0ed9dd010a4fa40",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "56dp",
        "placeholder": " User name",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "37dp",
        "width": "260dp"
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyTextField03eb9b88cc64745 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50.04%",
        "height": "40dp",
        "id": "CopyTextField03eb9b88cc64745",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "56dp",
        "placeholder": " Password",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "115dp",
        "width": "260dp"
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    FlexContainer05e7c3da9ee364a.add(TextField0ed9dd010a4fa40, CopyTextField03eb9b88cc64745);
    var Image0a8cbe235928b45 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "80dp",
        "id": "Image0a8cbe235928b45",
        "isVisible": true,
        "left": "133dp",
        "skin": "slImage",
        "src": "tid.png",
        "top": "433dp",
        "width": "130dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0c9bf41bc9b1a43 = new kony.ui.Label({
        "centerX": "50.00%",
        "id": "Label0c9bf41bc9b1a43",
        "isVisible": true,
        "skin": "CopyslLabel012f8dc4f29704e",
        "text": "OR",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "390dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Label03f3a6cba41dc45 = new kony.ui.Label({
        "centerX": "30%",
        "height": "1dp",
        "id": "Label03f3a6cba41dc45",
        "isVisible": true,
        "left": "60dp",
        "skin": "CopyslLabel0329ef29ea0164a",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "397dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0db94550880cd4d = new kony.ui.Label({
        "centerX": "70%",
        "height": "1dp",
        "id": "CopyLabel0db94550880cd4d",
        "isVisible": true,
        "left": "218dp",
        "skin": "CopyslLabel01c45eef9badc4b",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "397dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    frmLogin.add(Button08d62fc5c6a6543, CopyButton02297df16176c40, FlexContainer05e7c3da9ee364a, Image0a8cbe235928b45, Label0c9bf41bc9b1a43, Label03f3a6cba41dc45, CopyLabel0db94550880cd4d);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "enabledForIdleTimeout": false,
        "id": "frmLogin",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm02b642ebac3da47"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmLogin.info = {
        "kuid": "f9f242cd584f40489d4b9fb117891c9b"
    };
};