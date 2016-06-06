/*************************************************************************************
 * Function:isAuthUsingTouchSupported()
 * Description: function to validate the user the check whether the device supports Finger Print.
 * Author: Kony
 *************************************************************************************/
function isAuthUsingTouchSupported()
{
	var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
	if(status == 5000)
	{
      Popup033f19a2f4f3547.lbl1.text='Touch ID for "FingerPrint Sample"';
      Popup033f19a2f4f3547.btnEnter.setVisibility(false);
      Popup033f19a2f4f3547.show();
		authUsingTouchID();	
	}

  else
	{
		var msg = "Touch ID is not configured on this device.Authentication returned a status ::"+status;
		kony.ui.Alert({message: msg+" "+status,
		alertType: constants.ALERT_TYPE_INFO,
		yesLabel:"Close"},
		{});
	}
}



/*************************************************************************************
 * Function:statusCB()
 * Description: Call back function for Authentication through Finger Print.
 * Author: Kony
 *************************************************************************************/
function statusCB(status,message)
{
  
	if(status == 5000)
	{
      Popup033f19a2f4f3547.dismiss();
      frmHome.show();
      
	}

  else if(status == 5001)
      {
     
       Popup033f19a2f4f3547.btnEnter.setVisibility(true);
        Popup033f19a2f4f3547.lbl1.text="Try Again";
         Popup033f19a2f4f3547.show();
      }
  	else
	{
		var messg = status+": "+message;
		kony.ui.Alert({message: messg,
		alertType: constants.ALERT_TYPE_INFO,
		yesLabel:"Close"},
		{});
	}
}



/*************************************************************************************
 * Function:authUsingTouchID()
 * Description: Function for validating the user.
 * Author: Kony
 *************************************************************************************/
function authUsingTouchID()
{
    
  var config = {"promptMessage" : "PLEASE AUTHENTICATE USING YOUR TOUCH ID"};
	kony.localAuthentication.authenticate(
	constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID,statusCB,config);
}
