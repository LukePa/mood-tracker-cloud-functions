const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');


module.exports = () => {
    const app = initializeApp({
        credential: applicationDefault(),
        projectId: process.env.PROJECT_ID
    });
    return getFirestore(app);
}