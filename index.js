const getDb = require('./utils/getDb')

exports.setUpUserData = (event, context) => {
    try {
        const db = getDb();
        db.collection('users').doc(event.uid).set({
            defaultMetrics: ['exercise', 'diet'],
            firstName: event.displayName.split(' ')[0]
        });

    } catch (error) {
        console.log(error);
    }
}

exports.deleteUserData = (event, context) => {
    try {
        const db = getDb();
        db.collection('users').doc(event.uid).delete();

    } catch (error) {
        console.log(error);
    }
}