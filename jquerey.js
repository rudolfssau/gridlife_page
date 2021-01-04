function getDate() {
    return $.ajax({
        type: "GET",
        url: "trackInfo-JSON/track_date.json"
    })
}

getDate().done(function (done) {
    var date = done;
    if (date != null) {
        jQuery.each(date, function (index, value) {
            $("#tBody-date").append('<td id="tBody-date-data">' + value.Date + '</td>')
        });
    };
});

$(function () {
    $("#seasonpass-button").hover(function () {
        $("#seasonpass-overlay").css("opacity", "0%");
        $("#seasonpass-text").css("opacity", "60%");
        $("#seasonpass-logo").css("opacity", "60%");
    }, function () {
        $("#seasonpass-overlay").css("opacity", "80%");
        $("#seasonpass-text").css("opacity", "100%");
        $("#seasonpass-logo").css("opacity", "100%");
    });
});

$(function () {
    $("#videomessage-lm-link").hover(function () {
        $("#videomessage-overlay").css("opacity", "30%");
    }, function () {
        $("#videomessage-overlay").css("opacity", "60%");
    });
});

//Adds validation to contactUs.html (Contact Us)

$(document).ready(function () {
    $("#submit").click(function (event) {

        //Variable declaration for alerts and items in HTML

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

        //First name validation

        if (firstn.length < 2 || firstn.includes("!") || firstn.includes("@")) {
            event.preventDefault()
            document.querySelector("#empty").style.display = "none";
            document.querySelector("#invalidfirstn").style.display = "flex";
            document.querySelector("#invalidfirstn").style.justifyContent = "center";
            invalidfn.append("<div>Invalid First Name</div>")
        }
        if (firstn.length > 2) {
            document.querySelector("#invalidfirstn").style.display = "none";
        }

        //Last name validation

        if (lastn.length < 2) {
            event.preventDefault()
            document.querySelector("#empty").style.display = "none";
            document.querySelector("#invalidlastn").style.display = "flex";
            document.querySelector("#invalidlastn").style.justifyContent = "center";
            invalidln.append("<div>Invalid Last Name</div>")
        }
        if (lastn.length > 2) {
            document.querySelector("#invalidlastn").style.display = "none";
        }

        //Email validation

        if (email.length < 5) {
            event.preventDefault()
            document.querySelector("#empty").style.display = "none";
            document.querySelector("#invalidemail").style.display = "flex";
            document.querySelector("#invalidemail").style.justifyContent = "center";
            invalidemail.append("<div>Invalid Email</div>")
        }
        if (email.length > 5 && email.includes("@") && email.includes(".")) {
            document.querySelector("#invalidemail").style.display = "none";
        }

        //Country dropdown validation

        if (country == "select") {
            event.preventDefault();
            document.querySelector("#empty").style.display = "none";
            document.querySelector("#invalidcountry").style.display = "flex";
            document.querySelector("#invalidcountry").style.justifyContent = "center";
            invalidcountry.append("<div>Please Select Your Country</div>")
        }
        if (country != "select") {
            document.querySelector("#invalidcountry").style.display = "none";
        }

        //Subject validation

        if (subject.length < 2) {
            event.preventDefault()
            document.querySelector("#empty").style.display = "none";
            document.querySelector("#invalidsubject").style.display = "flex";
            document.querySelector("#invalidsubject").style.justifyContent = "center";
            invalidsubj.append("<div>Subject Is Empty</div>")
        }
        if (subject.length > 2) {
            document.querySelector("#invalidsubject").style.display = "none";
        }

        //Whole document validation (If all fields are empty, this will pop up

        if (firstn.length == 0 && lastn.length == 0 && email.length == 0 && country == "select" && subject.length == 0) {
            document.querySelector("#invalidfirstn").style.display = "none";
            document.querySelector("#invalidlastn").style.display = "none";
            document.querySelector("#invalidemail").style.display = "none";
            document.querySelector("#invalidcountry").style.display = "none";
            document.querySelector("#invalidsubject").style.display = "none";
            document.querySelector("#empty").style.display = "flex";
            document.querySelector("#empty").style.justifyContent = "center";
            empty.append("<div>Please Fill Out All Of The Required Fields</div>")
        }
    });
});

//Adds validation to Sign Up forum at carLineup.html (Sign Up)


$(document).ready(function () {
    $("#sUFsubmit").click(function (event) {

        //Variable declaration for input boxes from html

        var sUFfirstN = $("#sUFfirstN").val();
        var sUFlastN = $("#sUFlastN").val();
        var sUFage = $("#sUFage").val();
        var sUFemail = $("#sUFemail").val();
        var sUFstate = $("#sUFstate").val();
        var sUFcarManufacturer = $("#sUFcarManufacturer").val();
        var sUFcarModel = $("#sUFcarModel").val();
        var sUFcarMY = $("#sUFcarMY").val();
        var sUFcarMods = $("#sUFcarMods").val();
        var sUFdrivetrain = $("#sUFdrivetrain").val();
        var sUFclassEntry = $("#sUFclassEntry").val();
        var sUFtermsandconditions = document.getElementById("sUFtermsandconditions")

        //Empty variable declaration and emptying by default

        var sUFinvalidFName = $("#sUFinvalidFName");
        var sUFinvalidLastN = $("#sUFinvalidLastN");
        var sUFinvalidAge = $("#sUFinvalidAge");
        var sUFinvalidEmail = $("#sUFinvalidEmail");
        var sUFinvalidState = $("#sUFinvalidState");
        var sUFinvalidCarManuf = $("#sUFinvalidCarManuf");
        var sUFinvalidCarModel = $("#sUFinvalidCarModel");
        var sUFinvalidcarMY = $("#sUFinvalidcarMY");
        var sUFinvalidMods = $("#sUFinvalidMods");
        var sUFinvalidCarDrivetr = $("#sUFinvalidCarDrivetr");
        var sUFinvalidClass = $("#sUFinvalidClass");
        var sUFempty = $("#sUFempty")
        var sUFinvalidCheckbox = $("#sUFinvalidCheckbox");
        sUFinvalidFName.empty();
        sUFinvalidLastN.empty();
        sUFinvalidAge.empty();
        sUFinvalidEmail.empty();
        sUFinvalidCarManuf.empty();
        sUFinvalidCarModel.empty();
        sUFinvalidcarMY.empty();
        sUFinvalidMods.empty();
        sUFinvalidCarDrivetr.empty();
        sUFinvalidClass.empty();
        sUFempty.empty();
        sUFinvalidCheckbox.empty();

        //First Name validation

        if (sUFfirstN.length < 2 || sUFfirstN.includes("!") || sUFfirstN.includes("@")) {
            event.preventDefault()
            document.querySelector("#sUFempty").style.display = "none";
            document.querySelector("#sUFinvalidFName").style.display = "flex";
            document.querySelector("#sUFinvalidFName").style.justifyContent = "center";
            sUFinvalidFName.append("<div>Invalid First Name</div>")
            window.scrollTo({
                top: 4400,
                behavior: "smooth",
            });
        }
        if (sUFfirstN.length > 2) {
            document.querySelector("#sUFinvalidFName").style.display = "none";
        }

        //Last Name validation

        if (sUFlastN.length < 2) {
            event.preventDefault()
            document.querySelector("#sUFempty").style.display = "none";
            document.querySelector("#sUFinvalidLastN").style.display = "flex";
            document.querySelector("#sUFinvalidLastN").style.justifyContent = "center";
            sUFinvalidLastN.append("<div>Invalid Last Name</div>")
            window.scrollTo({
                top: 4600,
                behavior: "smooth",
            });
        }
        if (sUFlastN.length > 2) {
            document.querySelector("#sUFinvalidLastN").style.display = "none";
        }

        //Age validation

        if  (sUFage.length < 1) {
            event.preventDefault()
            document.querySelector("#sUFempty").style.display = "none";
            document.querySelector("#sUFinvalidAge").style.display = "flex";
            document.querySelector("#sUFinvalidAge").style.justifyContent = "center";
            sUFinvalidAge.append("<div>Please Enter Your Age</div>")
            window.scrollTo({
                top: 4600,
                behavior: "smooth",
            });
        }
        if (sUFage.includes("1") || sUFage.includes("2") || sUFage.includes("3") || sUFage.includes("4") || sUFage.includes("5") || sUFage.includes("6") || sUFage.includes("7") || sUFage.includes("8") || sUFage.includes("9") || sUFage.includes("10")) {
            document.querySelector("#sUFinvalidAge").style.display = "none";
        } else {
            sUFinvalidAge.empty();
            document.querySelector("#sUFempty").style.display = "none";
            document.querySelector("#sUFinvalidAge").style.display = "flex";
            document.querySelector("#sUFinvalidAge").style.justifyContent = "center";
            sUFinvalidAge.append("<div>Please Only Use Numbers For Your Age!</div>")
            window.scrollTo({
                top: 4600,
                behavior: "smooth",
            });
        }

        //E-Mail validation

        if (sUFemail.length < 5) {
            event.preventDefault()
            document.querySelector("#sUFempty").style.display = "none";
            document.querySelector("#sUFinvalidEmail").style.display = "flex";
            document.querySelector("#sUFinvalidEmail").style.justifyContent = "center";
            sUFinvalidEmail.append("<div>Invalid E-Mail Address</div>")
            window.scrollTo({
                top: 4600,
                behavior: "smooth",
            });
        }
        if (sUFemail.length > 5 && sUFemail.includes("@") && sUFemail.includes(".")) {
            document.querySelector("#sUFinvalidEmail").style.display = "none";
        }

        //State validation


        if (sUFstate.length < 2) {
            event.preventDefault()
            document.querySelector("#sUFempty").style.display = "none";
            document.querySelector("#sUFinvalidState").style.display = "flex";
            document.querySelector("#sUFinvalidState").style.justifyContent = "center";
            window.scrollTo({
                top: 4600,
                behavior: "smooth",
            });
        }
        if (sUFstate.length > 2) {
            var chart = /^[a-zA-Z]+$/
            for (i = 0; i < sUFstate.length; i++) {
                if (chart.test(sUFstate[i])) {
                    document.querySelector("#sUFinvalidState").style.display = "none";
                } else {
                    event.preventDefault()
                    document.querySelector("#sUFempty").style.display = "none";
                    document.querySelector("#sUFinvalidState").style.display = "flex";
                    document.querySelector("#sUFinvalidState").style.justifyContent = "center";
                    window.scrollTo({
                        top: 4600,
                        behavior: "smooth",
                    });
                }
            }
        }

        //Car Manufacturer validation

        if (sUFcarManufacturer.length < 2) {
            event.preventDefault()
            document.querySelector("#sUFempty").style.display = "none";
            document.querySelector("#sUFinvalidCarManuf").style.display = "flex";
            document.querySelector("#sUFinvalidCarManuf").style.justifyContent = "center";
            sUFinvalidCarManuf.append("<div>Invalid Car Manufacturer</div>")
            window.scrollTo({
                top: 4600,
                behavior: "smooth",
            });
        }
        if (sUFcarManufacturer.length > 2) {
            var numBr = /^[0-9]+$/
            for (i = 0; i < sUFcarManufacturer.length; i++) {
                if (numBr.test(sUFcarManufacturer[i])) {
                    event.preventDefault()
                    sUFinvalidCarManuf.empty();
                    sUFinvalidCarManuf.append("<div>Car Manufacturer Can't Contain Numbers</div>")
                    window.scrollTo({
                        top: 4600,
                        behavior: "smooth",
                    });
                }
            }
            var chartr = /^[a-zA-Z]+$/
            for (i = 0; i < sUFcarManufacturer.length; i++) {
                if (chartr.test(sUFcarManufacturer[i])) {
                    document.querySelector("#sUFinvalidCarManuf").style.display = "none";
                }
            }
        }

        //Car Model Year validation

        if (sUFcarModel.length < 1) {
            event.preventDefault()
            document.querySelector("#sUFempty").style.display = "none";
            document.querySelector("#sUFinvalidCarModel").style.display = "flex";
            document.querySelector("#sUFinvalidCarModel").style.justifyContent = "center";
            sUFinvalidCarModel.append("<div>Invalid Car Model</div>")
            window.scrollTo({
                top: 4600,
                behavior: "smooth",
            });
        }
        if (sUFcarModel.length > 1) {
            document.querySelector("#sUFinvalidCarModel").style.display = "none";
        }

        //Car Model Year validation

        if (sUFcarMY.length < 2) {
            event.preventDefault()
            document.querySelector("#sUFempty").style.display = "none";
            document.querySelector("#sUFinvalidcarMY").style.display = "flex";
            document.querySelector("#sUFinvalidcarMY").style.justifyContent = "center";
            sUFinvalidcarMY.append("<div>Invalid Car Model Year</div>")
            window.scrollTo({
                top: 4600,
                behavior: "smooth",
            });
        }
        if (sUFcarMY.length >= 2) {
            var numBr = /^[0-9]+$/
            for (i = 0; i < sUFcarMY.length; i++) {
                if (numBr.test(sUFcarMY[i])) {
                    document.querySelector("#sUFinvalidcarMY").style.display = "none";
                    sUFinvalidcarMY.empty();
                }
            }
            var chartr = /^[a-zA-Z]+$/
            for (i = 0; i < sUFcarMY.length; i++) {
                if (chartr.test(sUFcarMY[i])) {
                    sUFinvalidcarMY.empty();
                    sUFinvalidcarMY.append("<div>Car Model Year Can't Contain Characters</div>")
                    window.scrollTo({
                        top: 4600,
                        behavior: "smooth",
                    });
                }
            }
        }

        //Modification validation

        if (sUFcarMods.length < 2) {
            event.preventDefault()
            document.querySelector("#sUFempty").style.display = "none";
            document.querySelector("#sUFinvalidMods").style.display = "flex";
            document.querySelector("#sUFinvalidMods").style.justifyContent = "center";
            sUFinvalidMods.append("<div>Enter Valid Mods</div>")
            window.scrollTo({
                top: 4600,
                behavior: "smooth",
            });
        }
        if (sUFcarMods.length >= 2) {
            document.querySelector("#sUFinvalidMods").style.display = "none";
        }

        //Drivetrain validation

        if (sUFdrivetrain == "sUFdrivetrainEmpty") {
            event.preventDefault()
            document.querySelector("#sUFempty").style.display = "none";
            document.querySelector("#sUFinvalidCarDrivetr").style.display = "flex";
            document.querySelector("#sUFinvalidCarDrivetr").style.justifyContent = "center";
            sUFinvalidCarDrivetr.append("<div>Select Your Car's Drivetrain</div>")
            window.scrollTo({
                top: 4600,
                behavior: "smooth",
            });
        }
        if (sUFdrivetrain != "sUFdrivetrainEmpty") {
            document.querySelector("#sUFinvalidCarDrivetr").style.display = "none";
        }

        // //Class validation

        if (sUFclassEntry == "sUFclassEntryEmpty") {
            event.preventDefault()
            document.querySelector("#sUFempty").style.display = "none";
            document.querySelector("#sUFinvalidClass").style.display = "flex";
            document.querySelector("#sUFinvalidClass").style.justifyContent = "center";
            sUFinvalidClass.append("<div>Select The Class You'd Like To Compete In</div>")
            window.scrollTo({
                top: 4600,
                behavior: "smooth",
            });
        }
        if (sUFclassEntry != "sUFclassEntryEmpty") {
            document.querySelector("#sUFinvalidClass").style.display = "none";
        }

        //Terms And Services checkbox validation

        if (sUFfirstN.length != 0 && sUFlastN.length != 0 && sUFage.length != 0 && sUFemail.length != 0 && sUFstate.length != 0 && sUFcarManufacturer.length != 0 && sUFcarModel.length != 0 && sUFcarMY.length != 0 && sUFcarMods.length != 0 && sUFdrivetrain != "sUFdrivetrainEmpty" && sUFclassEntry != "sUFclassEntryEmpty") {
            if (sUFtermsandconditions.checked) {
                document.querySelector("#sUFinvalidCheckbox").style.display = "none";
            } else {
                event.preventDefault()
                document.querySelector("#sUFempty").style.display = "none";
                document.querySelector("#sUFinvalidCheckbox").style.display = "flex";
                document.querySelector("#sUFinvalidCheckbox").style.justifyContent = "center";
                sUFinvalidCheckbox.append("<div>Please Read And Agree to our Terms And Conditions!</div>")
                window.scrollTo({
                    top: 4600,
                    behavior: "smooth",
                });
            }
        }

        //Check for filled fields

        if (sUFfirstN.length == 0 && sUFlastN.length == 0 && sUFage.length == 0 && sUFemail.length == 0 && sUFstate.length == 0 && sUFcarManufacturer.length == 0 && sUFcarModel.length == 0 && sUFcarMY.length == 0 && sUFcarMods.length == 0 && sUFdrivetrain == "sUFdrivetrainEmpty" && sUFclassEntry == "sUFclassEntryEmpty") {
            event.preventDefault()
            document.querySelector("#sUFinvalidFName").style.display = "none";
            document.querySelector("#sUFinvalidLastN").style.display = "none";
            document.querySelector("#sUFinvalidAge").style.display = "none";
            document.querySelector("#sUFinvalidEmail").style.display = "none";
            document.querySelector("#sUFinvalidState").style.display = "none";
            document.querySelector("#sUFinvalidCarManuf").style.display = "none";
            document.querySelector("#sUFinvalidCarModel").style.display = "none";
            document.querySelector("#sUFinvalidcarMY").style.display = "none";
            document.querySelector("#sUFinvalidMods").style.display = "none";
            document.querySelector("#sUFinvalidCarDrivetr").style.display = "none";
            document.querySelector("#sUFinvalidClass").style.display = "none";
            document.querySelector("#sUFempty").style.display = "flex";
            document.querySelector("#sUFempty").style.justifyContent = "center";
            sUFempty.append("<div>Please Fill Out All Of The Required Fields!</div>")
            window.scrollTo({
                top: 4600,
                behavior: "smooth",
            });
        }
    });
});


