# Fridge Tracker App (Team Dynamic Koalas)

<img src="https://raw.githubusercontent.com/nmergulh/fridge-tracker-app/main/assets/objectdetection.png">
<img src="https://raw.githubusercontent.com/nmergulh/fridge-tracker-app/main/assets/barcodescanner.png">
<img src= "https://raw.githubusercontent.com/nmergulh/fridge-tracker-app/main/assets/fridgelist.png">

## Setup Instructions

The app is currently not hosted yet. You will need the following prerequisites:

- To sign up to [Clarifai](clarifai.com) and obtain an API key to use their AI food object detection model
- Request access to the [Firebase database](https://console.firebase.google.com/project/project-fridge-9721e/firestore/data/~2FFoodItems~2F3WceiAcj4lmARwSyEleH).
- Sign up to [Expo](https://expo.dev/client) and install the app on your IOS/Android mobile device

### 1. Fork & Clone

- Click on the fork button located on the top right of the screen and then click your username. This will create a version associated to your own Github account.

- Before cloning check the subtitle on the top left is <em>`your_Github_account_name`</em>`/fridge-tracker-app`. Once checked, cd in your terminal to the directory where you would like the local clone copy of the repo to be located and type the following command. Replace <em>your_Github_account_name</em> with your actual username.

```
git clone your_Github_account_name/fridge-tracker-app.git
```

### 2. Dependency Installation

To be able to use the Fridge-Tracker-App as intended, you will need to execute the command below which will install the necessary dependencies.

```
npm i
```

## 3. Setup ENV

Create a file called `.env`. Within the file type the following code:

```
  CLARIFAI_API_KEY={insert your Clarifai API key here}
  FIREBASE_API_KEY={insert your Firebase API key here}
```

## View the App

Execute the following command below. This will generate a QR code for you to scan with your mobile device. Make sure the mobile device and laptop/pc which executed the command are on the same wifi connection.

```
  npm run start
```
