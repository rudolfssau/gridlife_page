// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDWnYM3v_cYVvXR3zSrShgpszY8wISM3lo",
    authDomain: "gridlife-contact-forum.firebaseapp.com",
    databaseURL: "https://gridlife-contact-forum.firebaseio.com",
    projectId: "gridlife-contact-forum",
    storageBucket: "gridlife-contact-forum.appspot.com",
    messagingSenderId: "443263212376",
    appId: "1:443263212376:web:a6f6d39745117e6e99e32d",
    measurementId: "G-WMXX71DXKJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Refrence collection for firebase
var collectionRef = firebase.database().ref("subject");

// Submit form
document.getElementById('contactform').addEventListener('submit', submitForm);
function submitForm(e) {
    e.preventDefault();
    var f_name = getInputValues("firstn")
    var l_name = getInputValues("lastn")
    var email = getInputValues("email")
    var country = getInputValues("country")
    var subject = getInputValues("subject")

    // Save message
    saveMessage(f_name, l_name, email, country, subject)
}
function getInputValues(id) {
    return document.getElementById(id).value
}
// Saves to firebase
function saveMessage(f_name, l_name, email, country,  subject) {
    var newSubjectRef = collectionRef.push();
    newSubjectRef.set({
        f_name: f_name,
        l_name: l_name,
        email: email,
        country: country,
        subject: subject
    })
}