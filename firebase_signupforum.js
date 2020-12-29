var firebaseConfig = {
    apiKey: "AIzaSyCtFLloghxbnPgR7Clw8dpMy3bNCj_Cr_Q",
    authDomain: "gridlife-sign-up.firebaseapp.com",
    databaseURL: "https://gridlife-sign-up-default-rtdb.firebaseio.com",
    projectId: "gridlife-sign-up",
    storageBucket: "gridlife-sign-up.appspot.com",
    messagingSenderId: "863936980341",
    appId: "1:863936980341:web:d86f9ec52ef063e25a9f3c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refrence collection for firebase
var collectionRef = firebase.database().ref("newSignUp");

//Submit forum
document.getElementById("signUpForum").addEventListener('submit', submitformum);
function submitformum(a) {
    a.preventDefault();
    var firstN = getInputValues("sUFfirstN")
    var lastN = getInputValues("sUFlastN")
    var age = getInputValues("sUFage")
    var email = getInputValues("sUFemail")
    var state = getInputValues("sUFstate")
    var carManufacturer = getInputValues("sUFcarManufacturer")
    var carModel = getInputValues("sUFcarModel")
    var carMY = getInputValues("sUFcarMY")
    var carMods = getInputValues("sUFcarMods")
    var carDrivetrain = getInputValues("sUFdrivetrain")
    var carClass = getInputValues("sUFclassEntry")
    var additionalInfo = getInputValues("sUFadInfo")

    //Save messages
    saveMessage(firstN, lastN, age, email, state, carManufacturer, carModel, carMY, carMods, carDrivetrain, carClass, additionalInfo)

    //Display alerts
    document.querySelector("#sUFsuccessful").style.display = "flex"
    document.querySelector("#sUFsuccessful").style.justifyContent = "center"

    //Hide alert after completing function
    setTimeout(function () {
        document.querySelector("#signUpForum-content").style.display = "none";
        document.querySelector("#sUFsuccessful").style.display = "none";
        document.querySelector("#signUpForum").style.display = "none";
    },3000);
}
function getInputValues(id) {
    return document.getElementById(id).value
}

//Save to Firebase
function saveMessage(firstN, lastN, age, email, state, carManufacturer, carModel, carMY, carMods, carDrivetrain, carClass, additionalInfo) {
    var newcollectionRef = collectionRef.push();
    newcollectionRef.set({
        firstN: firstN,
        lastN: lastN,
        age: age,
        email: email,
        state: state,
        carManufacturer: carManufacturer,
        carModel: carModel,
        carMY: carMY,
        carMods: carMods,
        carDrivetrain: carDrivetrain,
        carClass: carClass,
        additionalInfo: additionalInfo
    });
}
