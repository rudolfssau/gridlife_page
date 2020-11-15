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
firebase.analytics();

// Refrence collection for firebase
var collectionRef = firebase.database().ref("subject");

document.getElementById('contactform').addEventListener('submit', submitForm);
function submitForm(e) {
    e.preventDefault();
    var f_name = getInputValues("firstn")
    var l_name = getInputValues("lastn")
    var email = getInputValues("email")
    var subject = getInputValues("subject")
    console.log(f_name)
}
function getInputValues(id) {
    return document.getElementById(id).value
}
// Saves to firebase
function saveMessage(f_name, l_name, email, subject) {
    
}