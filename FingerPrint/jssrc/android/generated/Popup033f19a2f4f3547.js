function addWidgetsPopup033f19a2f4f3547() {
    var HBox09b8a8c260c6747 = new kony.ui.Box({
        "id": "HBox09b8a8c260c6747",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "CopyslHbox0f4b34652420a4b"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var VBox0b833218a771840 = new kony.ui.Box({
        "id": "VBox0b833218a771840",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "CopyslVbox08f95693edc1f4a"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lbl1 = new kony.ui.Label({
        "id": "lbl1",
        "isVisible": true,
        "maxNumberOfLines": 2,
        "skin": "CopyslLabel03a53a79ea3064f",
        "text": " Touch ID for  \"FingerPrintSample\"",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var lbl2 = new kony.ui.Label({
        "id": "lbl2",
        "isVisible": true,
        "skin": "CopyslLabel0af61312fadae40",
        "text": "PLEASE AUTHENTICATE USING YOUR FINGER PRINT",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var Line08e58ee9bf65543 = new kony.ui.Line({
        "id": "Line08e58ee9bf65543",
        "isVisible": true,
        "skin": "CopyslLine079fb9f1ca08f40"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var btnCancel = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0afeba2e6e8724f",
        "id": "btnCancel",
        "isVisible": true,
        "onClick": AS_Button_c7994dcf22ff4c45824d5f37e412585b,
        "skin": "CopyslButtonGlossBlue0e5333f11046046",
        "text": "Cancel"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var Line0004150dd4dd44f = new kony.ui.Line({
        "id": "Line0004150dd4dd44f",
        "isVisible": true,
        "skin": "slLine"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var btnEnter = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed05498e6017dc241",
        "id": "btnEnter",
        "isVisible": false,
        "onClick": AS_Button_3e00a1924d22434b9569df2614a204a0,
        "skin": "CopyslButtonGlossBlue03ef51ebc02f64b",
        "text": "Enter Password"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 0, 1, 1],
        "marginInPixel": false,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    VBox0b833218a771840.add(lbl1, lbl2, Line08e58ee9bf65543, btnCancel, Line0004150dd4dd44f, btnEnter);
    HBox09b8a8c260c6747.add(VBox0b833218a771840);
    Popup033f19a2f4f3547.add(HBox09b8a8c260c6747);
};

function Popup033f19a2f4f3547Globals() {
    Popup033f19a2f4f3547 = new kony.ui.Popup({
        "addWidgets": addWidgetsPopup033f19a2f4f3547,
        "id": "Popup033f19a2f4f3547",
        "isModal": true,
        "skin": "CopyslPopup082cb9008233d43",
        "transparencyBehindThePopup": 40
    }, {
        "containerHeight": 30,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 80,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    Popup033f19a2f4f3547.info = {
        "kuid": "583a74c73dd0483f83b2b91dbdf7dd4d"
    };
};