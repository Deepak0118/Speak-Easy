

import express from 'express';
import admin from './firebase.js';
import { getFirestore } from 'firebase-admin/firestore';

const router = express.Router();
const db = getFirestore();

// ✅ Token verification & logging function
const verifyToken = async (token) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);

  
    await db.collection('logins').add({
      uid: decodedToken.uid,
      email: decodedToken.email,
      timestamp: new Date(),
    });

    return decodedToken;
  } catch (error) {
    throw new Error('Invalid token: ' + error.message);
  }
};

// ✅ Login route
router.post('/login', async (req, res) => {
  const idToken = req.body.token;

  try {
    const decodedToken = await verifyToken(idToken);
    const uid = decodedToken.uid;

    console.log(`User ${uid} logged in`);

    // Optionally update user's last login time
    await db.collection('users').doc(uid).set({
      lastLogin: new Date(),
    }, { merge: true });

    res.status(200).send('User logged in successfully');
  } catch (error) {
    res.status(401).send('Authentication failed: ' + error.message);
  }
});

export default router;
