This repo is a react-native boilerplate project integrated with react-native-navigation.
It's a minimal setup to get you started with the latest react native and react native navigation. I have added
Mobx into this project, but it should be straightforward enough to replace to Redux or any other packages.

The reason of bare minimal setup is that with the introduction of RN's autolinking, it has become easier than ever to integrate other native modules within the React Native app. So I don't see a necessity of the this boilerplate repo integrate other native modules.

### Current Dependencies

```js
react: "16.9.0"
react-native: "0.61.5"
react-native-navigation: "4.0.8"
mobx: "4.15.1"
mobx-react: "6.1.4"
mobx-persist: "0.4.1"

typescript: "3.7.2"
```

### Others

- This project utilise ram bundles and inline require turned on.
- This project also uses Hermes so `mobx@4.x.x` is used as Hermes does not support JavaScript Proxies.

### Project Structure

The structure of the project is as follows:

```tsx

src/
-- app/
---- index.ts       // Initial point of the app initialization

-- flows/           // Screens are grouped in different Flows. IE, Auth flow might have Login, Signup and Lock screens
---- Auth/
---- Dashboard/

-- navigation/      // Files related to navigation
---- config/        // react-native-navigation configuration. I personally use it for common navigation styles
------ defaultOptions.ts // rnn navigation default options
------ noBorderTopbar.ts // rnn TopBar border style
------ rightAddButton.ts // rnn TopBar right button

---- {public, private}/
------ routes.ts    // list of route strings
------ screens.ts   // Screen Map object with screen components and route name
------ provider.ts  // HOC provider which wraps each screen with Mobx Provider

-- store/
---- rootStore.ts   // Follow Mobx RootStore pattern

```
