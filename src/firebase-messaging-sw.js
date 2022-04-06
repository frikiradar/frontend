importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js");

firebase.initializeApp({
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
});

const messaging = firebase.messaging();
