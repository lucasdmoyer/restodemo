// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': '190321134667'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.usePublicVapidKey("BI2MjATcJOl4dxj3FlLejoFe70L9_a6vDBkx5eVKKMqBtSqAwn1ZikNoWgJ-BMCj7gIaF0ljvE1b_l9IOB9uoE0");

messaging.setBackgroundMessageHandler(function(payload) {
    const title = 'Hello Wordsfld from SW!';
    const options = {
        body: payload.data.status
    };
    return self.registration.showNotification(payload.data.body, options);
});


