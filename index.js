const admin = require("firebase-admin");

// Load Service Account Key
const serviceAccount = require("./ServiceAccountKey.json");

// Inisialisasi Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Token dari aplikasi Android (ganti dengan token milikmu)
const registrationToken = "ekN7P_NyQjm7SEjxtJ4CEM:APA91bEDkZyZkWvxcR00nAzkwnhKxYWHOem7Vpa_VBr1QzY5jdr1hAaWQHFxbyxPYMpkyzwywgM4VR2vBcUz0DmUnPN4zNRiX5bhvL6lfNfRlxMT71X6XNs";

const message = {
  notification: {
    title: "Halo dari FCM!",
    body: "Ini pesan push notifikasi dari Node.js",
  },
  token: registrationToken,
};

// Kirim pesan
admin
  .messaging()
  .send(message)
  .then((response) => {
    console.log("Pesan terkirim:", response);
  })
  .catch((error) => {
    console.error("Gagal kirim pesan:", error);
  });