// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  root: "https://localhost:8000/",
  apiUrl: "https://localhost:8000/api/v1/",
  firebase: {
    apiKey: "AIzaSyDReeVhoLFIdlWdiklj90hDiXRN8RWwGVk",
    authDomain: "frikiradar-1551914200548.firebaseapp.com",
    databaseURL: "https://frikiradar-1551914200548.firebaseio.com",
    projectId: "frikiradar-1551914200548",
    storageBucket: "frikiradar-1551914200548.appspot.com",
    messagingSenderId: "431880368798",
    appId: "1:431880368798:web:021fb57b75ed33d8",
    measurementId: "G-T3FWW8KZ84",
    vapidKey:
      "BCo47gHUNeFYajnd_WuaN85FWxZVkIhX00Xa2XZ9BGcXKkS6ourI99ZuFixCM03vhmGLxpLBzgFwRwtQCHe-Pjc",
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
