$(document).ready(function () {
    $("#submit").click(function (event) {
        // event.preventDefault()
        var firstn = $("#firstn").val();
        var lastn = $("#lastn").val();
        var email = $("#email").val();
        var country = $("#country").val();
        var subject = $("#subject").val();
        var invalidfn = $("#invalidfirstn");
        var invalidln = $("#invalidlastn");
        var invalidemail = $("#invalidemail");
        var invalidcountry = $("#invalidcountry");
        var invalidsubj = $("#invalidsubject");
        var empty = $("#empty");
        var emptyFields = $("#pfotrFields");
        invalidfn.empty();
        invalidemail.empty();
        invalidln.empty();
        invalidsubj.empty();
        invalidcountry.empty();
        empty.empty();
        if (firstn.length < 2 || firstn.includes("!") || firstn.includes("@")) {
            event.preventDefault()
            document.querySelector("#invalidfirstn").style.display = "flex";
            document.querySelector("#invalidfirstn").style.justifyContent = "center";
            invalidfn.append("<div>Invalid First Name</div>")
        }
        if (firstn.length > 2) {
            document.querySelector("#invalidfirstn").style.display = "none";
        }


        if (lastn.length < 2) {
            event.preventDefault()
            document.querySelector("#invalidlastn").style.display = "flex";
            document.querySelector("#invalidlastn").style.justifyContent = "center";
            invalidln.append("<div>Invalid Last Name</div>")
        }
        if (lastn.length > 2) {
            document.querySelector("#invalidlastn").style.display = "none";
        }


        if (email.length < 5) {
            event.preventDefault()
            document.querySelector("#invalidemail").style.display = "flex";
            document.querySelector("#invalidemail").style.justifyContent = "center";
            invalidemail.append("<div>Invalid Email</div>")
        }
        if (email.length > 5 && email.includes("@") && email.includes(".")) {
            document.querySelector("#invalidemail").style.display = "none";
        }


        if (subject.length < 1) {
            event.preventDefault()
            document.querySelector("#invalidsubject").style.display = "flex";
            document.querySelector("#invalidsubject").style.justifyContent = "center";
            invalidsubj.append("<div>Subject Is Empty</div>")
        }
        if (subject.length > 1) {
            document.querySelector("#invalidsubject").style.display = "none";
        }
    });
});


