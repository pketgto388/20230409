const firebaseConfig = {
    apiKey: "AIzaSyAyN3mKzW5PD12VwEqV-NGqUNYQJ2ZOHBw",
    authDomain: "harry-88561.firebaseapp.com",
    databaseURL: "https://harry-88561-default-rtdb.firebaseio.com",
    projectId: "harry-88561",
    storageBucket: "harry-88561.appspot.com",
    messagingSenderId: "966231649600",
    appId: "1:966231649600:web:5d0f898428dd32230d1ea5"
};

const model = firebase.initializeApp(firebaseConfig, firebaseConfig.appId);

async function write(value, path) {
    try {
        await model.database().ref(path).set(value)
        return true
    } catch (err) {
        return false
    }
}

async function read(path) {
    let snapshot = await model.database().ref(path).get()
    return snapshot.val()
}

function listen(path, callback) {
    model
        .database()
        .ref(path)
        .on('value', (snapshot) => {
            if (typeof callback === 'function') {
                callback(snapshot.val())
            }
        })
}

; (async () => {
    let result = await write('BBB', 'test')
    console.log(result)

    let response = await read('test')
    console.log(response)

    listen('test', (value) => {
        console.log(value)
    })
})()
