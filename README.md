This repo is a react-native boilerplate project integrated with react-native-navigation.
It's a minimal setup to get you started with the latest react native and react native navigation. I have added
Mobx into this project, but it should be straightforward enough to replace to Redux or any other packages.

### Current Dependencies
```js
react: "16.8.6"
react-native: "0.59.3"
react-native-navigation: "2.17.0"
mobx: "5.9.4"
mobx-react: "5.4.3"
mobx-persist: "0.4.1"

typescript: "3.4.1"
```

### Others
This project utilise ram bundles and inline require turned on. 

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
------ noBorderTopbar.ts // rnn TopBar border style
------ rightAddButton.ts // rnn TopBar right button

---- {public, private}/
------ routes.ts    // list of route strings
------ screens.ts   // Screen Map object with screen components and route name
------ provider.ts  // HOC provider which wraps each screen with Mobx Provider

-- store/
---- rootStore.ts   // Follow Mobx RootStore pattern 

```
