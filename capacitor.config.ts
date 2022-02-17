import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.frikiradar.com",
  appName: "FrikiRadar",
  webDir: "www",
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      Hostname: "frikiradar.app",
      ScrollEnabled: "false",
      "android-minSdkVersion": "24",
      "android-targetSdkVersion": "29",
      BackupWebStorage: "none",
      SplashMaintainAspectRatio: "true",
      FadeSplashScreenDuration: "300",
      SplashShowOnlyFirstTime: "false",
      SplashScreen: "screen",
      ShowSplashScreenSpinner: "false",
      NavigationBarBackgroundColor: "#1f1f1f",
      SplashScreenDelay: "30000",
      AutoHideSplashScreen: "false",
      KeyboardStyle: "dark",
      WKWebViewOnly: "true",
      AndroidXEnabled: "true",
      GradlePluginKotlinEnabled: "true",
      GradlePluginKotlinCodeStyle: "official",
      GradlePluginKotlinVersion: "1.3.50",
    },
  },
  plugins: {
    LocalNotifications: {
      smallIcon: "notification_icon",
      iconColor: "#e91e63",
      sound: "bipbip.mp3",
    },
    CodePush: {
      IOS_DEPLOY_KEY: "FdlQxj1MHcOlgOU1nk1I93uR_32hoXJV9KZeX",
      IOS_PUBLIC_KEY: "0191421c-52a7-40b8-a611-8f4ace7a3a87",
      ANDROID_DEPLOY_KEY: "uwJhlLNJrqSaFkFEX7sKXEwgQBfigjlFa4lDP",
      ANDROID_PUBLIC_KEY: "d9bb3cf5-7779-41b4-b2fa-cad0f2d8835c",
      SERVER_URL: "https://codepush.appcenter.ms/",
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
};

export default config;
