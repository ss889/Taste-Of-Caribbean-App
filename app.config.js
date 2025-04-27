import 'dotenv/config';

export default {
  expo: {
    name: "Taste of Caribbean",
    slug: "taste-of-caribbean-app",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "light",
    assetBundlePatterns: [
      "**/*"
    ],
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
          ios: {
            useFrameworks: "static"
          },
          android: {
            newArchEnabled: true
          }
        }
      ]
    ],
    extra: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    }
  }
};
