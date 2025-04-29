export default {
  expo: {
    name: "Taste of Caribbean",
    slug: "taste-of-caribbean-app",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "light",
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true
    },
    android: {},
    web: {},
    sdkVersion: "52.0.0",
    plugins: [
      "expo-router",
      [
        "expo-build-properties",
        {
          ios: { useFrameworks: "static" },
          android: { newArchEnabled: true }
        }
      ]
    ],
    extra: {
      FIREBASE_API_KEY: "AIzaSyDUp6Cu0BDHWfcqRhVSBD52zTWw-GIF8io",
      FIREBASE_AUTH_DOMAIN: "taste-of-the-caribbean-app.firebaseapp.com",
      FIREBASE_PROJECT_ID: "taste-of-the-caribbean-app",
      FIREBASE_STORAGE_BUCKET: "taste-of-the-caribbean-app.firebasestorage.app",
      FIREBASE_MESSAGING_SENDER_ID: "113679678200",
      FIREBASE_APP_ID: "1:113679678200:web:7ba2c3005dc0237553590d",
      FIREBASE_MEASUREMENT_ID: "G-1V52Q24NCT"
    }
  }
};
