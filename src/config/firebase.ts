import admin from "firebase-admin";

let db: any = null;

try {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
  }

  db = admin.firestore();
} catch (error) {
  console.log("⚠️ Firebase not configured, running without it");
}

export { db };

export const shutdownFirestore = async () => {
  if (admin.apps.length) {
    await admin.app().delete();
  }
};
