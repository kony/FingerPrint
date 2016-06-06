# Finger-Print
Application to showcase Finger Print feature for Android.

**To Run This App in Kony visualizer Enterprise:**
 
1. Download the project zip file.
2. Unzip the project to any folder
3. Launch Kony Visualizer Enterprise version 7.0.
4. Import the project by selecting the Finger Print folder.
5. In project setting for Native->Android->Manifest Properties, if the permission USE_FINGER PRINT is false set it to true and 
if that permission is not present in properties, add the below line in the "Tags" tab   

  \<uses-permission  android:name="android.permission.USE_FINGERPRINT" />
6. Build and Run the app.

**Description:**

With this API, Google has created a native approach for fingerprint authentication across all Android devices. Developers can now authenticate their users on an app-by-app basis for everything from mobile purchases to app sign-in screens and more with just the tap of a finger. There are only three requirements for a user to to be eligible.

1.The user’s device must have a fingerprint reader

2.The user’s device must be running Android 6.0 Marshmallow (API 23) or greater

3.The user must have registered fingerprints on the device

**Best Practices**

There are some best practices for implementing fingerprint authentication. Following best practices helps ensure that our users feel comfortable and confident when authenticating in our application. Here are a couple ways to keep your users happy:

**Have a Backup**

Not everyone will be able to authenticate with a fingerprint, and some users may not want to. Always provide quick access to an alternative form of authentication.

**Make It Familiar**

Users like feeling smart and knowing what to do. One of the best ways to achieve this is by using design patterns they’re familiar with. For this reason, Google strongly recommends using the standard fingerprint icon when you’re listening for a fingerprint

**Provide Feedback**

Correctly implementing the statusCB methods is vital to making sure your user knows what is happening. Correct error codes are displayed so that the user knows what to do next.

**Indoctrinate Them**

This is more optional - if you see that a device has a fingerprint reader but the user hasn’t enrolled any fingerprints, let them know they’re missing out on a feature they may enjoy. Display an unobtrusive message or option for them to go to Android’s Settings and enroll their fingerprints.

**Closing Thoughts**

Remembering credentials is a hassle. This is made worse on mobile devices by the need to input these values on small touch screens. Users dislike this experience so much that they resort to things like using “password” or “123456” as their credentials.

Implemented correctly, fingerprint authentication gives us an opportunity to turn this poor user experience into a secure and exciting feature.

# Supported platforms for Kony Visualizer Enterprise:
**Mobile**
 * Android
