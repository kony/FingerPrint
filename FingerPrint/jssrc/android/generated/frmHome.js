function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var Button08d62fc5c6a6543 = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "CopyslButtonGlossRed06d4db0ed77814b",
        "height": "50dp",
        "id": "Button08d62fc5c6a6543",
        "isVisible": true,
        "left": "58dp",
        "onClick": AS_Button_7c6e233cea754abea5815129faed39af,
        "skin": "CopyslButtonGlossBlue06f54c6c153644e",
        "text": "Back to Login",
        "top": "325dp",
        "width": "260dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0c9bf41bc9b1a43 = new kony.ui.Label({
        "centerX": "50.00%",
        "id": "Label0c9bf41bc9b1a43",
        "isVisible": true,
        "skin": "CopyslLabel012f8dc4f29704e",
        "text": "Login Successful!",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "155dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    frmHome.add(Button08d62fc5c6a6543, Label0c9bf41bc9b1a43);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
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
    frmHome.info = {
        "kuid": "0fcee17c5e9d41129bec156a2d4302d3"
    };
};