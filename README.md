# GymPass - React Native

The **_GymPass_** is an Android and iOS application designed for those who love to exercise. It features a beautiful and intuitive interface and allows users to save their completed workouts for each day. It has a pleasant and easily understandable visual identity at first glance.

<h2 align="center">GymPass</h2>
<h3 align="center">
  <a href="#about">About</a>&nbsp;|&nbsp;
  <a href="#motive">Motive</a>&nbsp;|&nbsp;
  <a href="#minimum-requirements">Requirements</a>&nbsp;|&nbsp;
  <a href="#rocket-technologies-used">Technologies</a>&nbsp;|&nbsp;
  <a href="#package-download">Download and Run</a>&nbsp;|&nbsp;
  <a href="#package-api-scripts">API</a>&nbsp;
</h3>

---
<div align="center" >
<img src="https://github.com/MateusAnderle/gym-app/assets/100309091/52c3a669-dbc2-469a-8be0-cd711b2ac31b" width="300">
</div>
---

## :information_source: About

In this app, you can create an account or log in with an existing one. In the authenticated section of the app, the user has access to a range of exercises categorized by muscle group, with detailed instructions provided in GIF format to facilitate exercise execution.

There's also a dedicated area for exercises marked as completed, accessible through the bottom menu. In this screen, the user can view the exercises they've already done, sorted by the days they were marked as complete.

Last but not least, we have the final option in the bottom menu, which relates to the user's profile. Here, the user can add or edit a photo, change their name, and even set a new password to access the app.

<div align="center" >
<b>SignIn and SignUp pages</b>
</div>

<div align="center" >
  <img src="https://i.imgur.com/sOrGQ8s.png" width="250">&nbsp;&nbsp;<img src="https://i.imgur.com/HOpJam6.png" width="250">
</div>

---

## :interrobang: Motive

This project was created to learn and test new concepts within the React Native environment. Some examples include:

- API Integration
- Usage of component library (Native Base)
- Creation and validation of controlled forms
- Access to the device's FileSystem
- Creation and usage of open routes and authenticated routes via an API
- Error handling in requests
- Sharing context data
- Storage of data on the local device

<div align="center" style="margin-top: 30px;">
<b>Authenticated routes</b>
</div>

<div align="center" >
  <img src="https://i.imgur.com/o47bu3W.png" width="250">&nbsp;&nbsp;
  <img src="https://i.imgur.com/4q28lVU.png" width=250>
</div>

<div align="center" style="margin-top: 30px;">
  <img src="https://i.imgur.com/U3IXheX.png" width="250">&nbsp;&nbsp;
  <img src="https://i.imgur.com/m3SippI.png" width=250>
</div>

---

## Using the application video

## YOUTUBE VIDEO HERE**\*\*\***

## Minimum Requirements

- Android Studio or Xcode
- iOS or Android simulator
- Mobile device (optional)
- Expo(desktop)
- Expo Go(Mobile) opcional.
- Node.js
- React-Native
- NPM

---

## Technologies Used

This project was developed using the following technologies

- [Android Studio](https://developer.android.com/studio)
- [Expo](https://expo.dev/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [NodeJS](https://nodejs.org/en/)
- [React](https://react.dev/)
- [React-Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/usage/)
- [Native Base](https://nativebase.io/)
- [React Hook Form](https://react-hook-form.com/)
- [React Native SVG](https://github.com/software-mansion/react-native-svg)
- [YUP](https://github.com/jquense/yup)
- [TypeScript](https://www.typescriptlang.org/)
- [NPM](https://www.npmjs.com/)

---

## :package: How to Download and Run the Project

- Clone the project:
  ```bash
   git clone https://github.com/MateusAnderle/gym-app
  ```
- Install the dependencies:
  - Execute the command below inside the project folder
  ```bash
    npm i
  ```
- Installation of the emulator [Android Studio](https://developer.android.com/studio) or [XCode](https://developer.apple.com/xcode/resources/) and the required technologies mentioned in <a href="#minimum-requirements">Requirements</a>

- Also, the installation/configuration of other technologies is necessary. Follow the steps indicated on this page according to your operating system: [Running a React-Native Application emulating Windows/Linux/MacOS or directly on Android/IOS mobile device](https://reactnative.dev/docs/environment-setup)
- Expo installation is necessary [Expo](https://expo.dev/)

### Before running the application, it is necessary to start the API

-With the terminal open in the project's main folder, execute the command:

```bash
cd api
```

- Next, run the following commands to start the API

| Script            | Target                                 |
| ----------------- | -------------------------------------- |
| `npm run migrate` | Create database tables                 |
| `npm run seed`    | Populate database tables               |
| `npm run dev`     | Run API in **development** environment |

To view the API documentation, run the API and access [http://localhost:3333/api-docs](http://localhost:3333/api-docs) in your browser

### Execution

##### Return to the main project folder

```bash
cd ..
```

##### Execute one of the commands below to start the application on a mobile device:

For iOS:

```bash
npm run ios
```

For android:

```bash
npm run android
```

- Remember that if you are running it on an emulator, it is ideal to keep it open before applying the above commands.

---

## :balance_scale: License

This project is under the MIT license. See the [LICENSE](https://github.com/MateusAnderle/gym-app/blob/main/LICENSE) for more information.

---

:rocket: Developed by Mateus Anderle da Silva [Get in touch!](https://www.linkedin.com/in/mateus-anderle-da-silva/)
