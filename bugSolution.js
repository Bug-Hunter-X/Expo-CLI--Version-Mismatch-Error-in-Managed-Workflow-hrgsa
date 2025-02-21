To fix the issue, follow these steps:

1. **Check your global Expo CLI version:**
   ```bash
npx expo --version
```

2. **Check your project's Expo version:**
   Open your project's `package.json` file and look for the `expo` dependency in the `dependencies` section.

3. **Update either your global Expo CLI or your project's `expo` version:**
   * **Option A (Recommended): Update the project's `expo` dependency:** This is generally preferred, as it ensures your project is using a compatible version.  Run:
     ```bash
yarn upgrade expo
```
     or
     ```bash
npm update expo
```
   * **Option B (Less Recommended): Update your global Expo CLI:** This requires running `npm install -g expo-cli@latest`.  However, global installation can lead to issues across multiple projects; Option A is the more robust solution. 

4. **After updating, try running your Expo project again:**
   ```bash
expo start
```
If the versions are still mismatched, run `expo prebuild` before `expo start`.