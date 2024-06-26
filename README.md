# Rumah Siap Kerja Clone

Rumah Siap Kerja Clone Apps is an application clone of **Rumah Siap Kerja**, specifically designed to follow the recruitment stages of 'Rumah Siap Kerja'.

**Notes** :

1. the latest version of React Native has a default of using TypeScript, so a little adaptation is necessary.
2. Some files were purposely not included in the .gitignore to facilitate the installation process.

# Preview

![Preview of iOS using an iPhone SE 3rd generation emulator](/assets/ios.png)
![Preview of Android using an Nexus 6 emulator](/assets/android.png)

# Used libraries:

1. [React Navigation](https://reactnavigation.org/).
2. [React Native Toast Message](https://github.com/calintamas/react-native-toast-message).
3. [Lottie React Native](https://github.com/lottie-react-native/lottie-react-native)
4. [React Native Ratings](https://www.npmjs.com/package/react-native-ratings)
5. [babel plugin module resolver](https://github.com/tleunen/babel-plugin-module-resolver#readme)
6. [React-Native-Render-HTML](https://meliorence.github.io/react-native-render-html/)

# Author

[Ahmad Fathoni Zumaro](https://github.com/toniebe)

# Usage

1. clone the repository with command `git clone https://github.com/toniebe/rumahSiapKerjaClone.git`
2. install all dependencies with command `yarn install` or `npm install` and command `cd ios && pod install` for ios
3. link asset to native project with command `npx react-native-asset`
4. create `.env` with variable BASE_URL `https://app.rumahsiapkerja.com/rsk-backend`
5. run application with command `yarn android` or `yarn ios`

**Notes**:

1. Some features are still unfinished.
2. [The structure uses React container presenter for each screen.](https://medium.com/web-dev-freelancing/react-design-patterns-container-presenter-pattern-e7f2650442d7)
