This error occurs when you try to run an Expo managed workflow project with a version of Expo CLI that's incompatible with your project's `package.json` file.  Specifically, it happens when the `expo` version in your project's `package.json` and the globally installed Expo CLI version are mismatched. This is a common issue when updating Expo CLI globally without also updating your project's dependencies.