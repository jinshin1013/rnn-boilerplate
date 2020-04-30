This repo is a react-native boilerplate project integrated with react-native-navigation.
It's a minimal setup to get you started with the latest react native and react native navigation. I have added
Mobx into this project, but it should be straightforward enough to replace to Redux or any other packages.

The reason of bare minimal setup is that with the introduction of RN's autolinking, it has become easier than ever to integrate other native modules within the React Native app. So I don't see a necessity of the this boilerplate repo integrate other native modules.

### Current Dependencies

```js
react: "16.13.1"
react-native: "0.62.2"
react-native-navigation: "6.5.0"
mobx: "5.15.4"
mobx-react-lite: "2.0.6"
mobx-persist: "0.4.1"
react-native-v8: "0.62.0-patch.0"
v8-android-nointl: "8.80.0"

typescript: "3.8.3"
```

### Others

- This project utilise ram bundles and inline require turned on.
- This project uses react-native-v8 engine in favour of Hermes or default Android JSC.

### Project Structure

The structure of the project is as follows:

```js
// The first point of the app intialization.
app/index.ts

// The folder for all routes related files.
routes/
  // RNN Navigation configurations.
  config/

  // RNN registered screens. If you don't need to segment your screens with some
  // sort of Auth logic (typically checking the existence of Auth Token in private screens),
  // you can have different structure.
  private/
  public/

  // A collection of helper functions for navigation.
  function.ts

  // A collection of HOC component that wraps registering screens.
	Provider.tsx

	// Importing and registering all screens to RNN.
  routes.ts
  screens.ts
  types.ts

// Following Mobx RootStore pattern.
store/
```
