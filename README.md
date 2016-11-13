# Install:
1. clone  
2. npm install
3. delete `node_modules/pouch-redux-middleware/.babelrc` file

# Start

1. Run `adb reverse tcp:8081 tcp:8081`
2. Run `react-native run-android`
3. Run `Alt+Shift+arrow up for remote monitoring in Redux Devtools`

For redux debugging open Redux DevTools Extension in Chrome devtools and use shift+alt+arrow up (Cmd+Ctrl+Arrow up on Mac) to open remote debugging window.

# Debug with wifi:

Configure your app to connect to the local dev server via Wi-Fi
1. Make sure your laptop and your phone are on the same Wi-Fi network.
2. Open your React Native app on your device. You can do this the same way you'd open any other app.
3. You'll see a red screen with an error. This is OK. The following steps will fix that.
4. Open the Developer menu by shaking the device or running `adb shell input keyevent 82` from the command line.
5. Go to Dev Settings.
6. Go to Debug server host for device.
7. Type in your machine's IP address and the port of the local dev server (e.g. 10.0.1.1:8081). On Mac, you can find the IP address in System Preferences / Network. On Windows, open the command prompt and type ipconfig to find your machine's IP address (more info).
8. Go back to the Developer menu and select Reload JS.