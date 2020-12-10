function getList() {
    return $.ajax({
        type: "GET",
        url: "Trackname_table/trackinfo_full.json"
    })
}
function getDate() {
    return $.ajax({
        type: "GET",
        url: "Trackname_table/trackinfo_Date.json"
    })
}
getList().done(function (response) {
    var data = JSON.parse(response);
    if (data != null) {
        jQuery.each(data, function (index, value) {
            $("#tDate-back").append('<td>'  + value[0] + '</td>')
            $("#tVenue-back").append('<td>' + value[1] + '</td>')
            $("#tTrack-back").append('<td>' + value[2] + '</td>')
            $("#tFormat-back").append('<td>' + value[3] + '</td>')
        });
    };
});
getDate().done(function (done) {
    var date =JSON.parse(done);
    if (date != null) {
        jQuery.each(date, function (index, value) {
            $("#tDate-short").append('<td id="tDate-short-style">' + value.DateShortened + '</td>')
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
$(document).ready(function () {
    $("#submit").click(function (event) {
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
        // emptyFields.empty();
        var pjoutfStyle = document.querySelector("#pfotrFields").style.display;
        var emptyStyle = document.querySelector("#empty").style.display;

        // if (email.length > 0 && firstn.length > 0 && lastn.length > 0 && subject.length > 0) {
        //     if (country === "select") {
        //         event.preventDefault();
        //         document.querySelector("#invalidcountry").style.display = "flex";
        //         document.querySelector("#invalidcountry").style.justifyContent = "center";
        //         invalidcountry.append("<div>Please Select Your Country</div>")
        //     } else {
        //         document.querySelector("#invalidcountry").style.display = "none";
        //     }
        //     if (email.length > 5 && email.includes("@") && email.includes(".")) {
        //         document.querySelector("#invalidemail").style.display = "none";
        //     } else {
        //         event.preventDefault()
        //         document.querySelector("#invalidemail").style.display = "flex";
        //         document.querySelector("#invalidemail").style.justifyContent = "center";
        //         invalidemail.append("<div>Invalid Email</div>")
        //     }
        //     if (firstn.length < 2 || firstn.includes("1") || firstn.includes("2") || firstn.includes("3") || firstn.includes("4") || firstn.includes("4") || firstn.includes("5") || firstn.includes("6") || firstn.includes("7") || firstn.includes(".") || firstn.includes(";") || firstn.includes("!") || firstn.includes("?")) {
        //         event.preventDefault()
        //         document.querySelector("#invalidfirstn").style.display = "flex";
        //         document.querySelector("#invalidfirstn").style.justifyContent = "center";
        //         invalidfn.append("<div>Invalid First Name</div>")
        //     } else {
        //         document.querySelector("#invalidfirstn").style.display = "none";
        //     }
        //     if (lastn.length < 2 || lastn.includes("1") || lastn.includes("2") || lastn.includes("3") || lastn.includes("4") || lastn.includes("4") || lastn.includes("5") || lastn.includes("6") || lastn.includes("7") || lastn.includes(".") || lastn.includes(";") || lastn.includes("!") || lastn.includes("?")) {
        //         event.preventDefault()
        //         document.querySelector("#invalidlastn").style.display = "flex";
        //         document.querySelector("#invalidlastn").style.justifyContent = "center";
        //         invalidln.append("<div>Invalid Last Name</div>")
        //     } else {
        //         document.querySelector("#invalidlastn").style.display = "none";
        //     }
        //     if (subject.length == 0) {
        //         event.preventDefault()
        //         document.querySelector("#invalidsubject").style.display = "flex";
        //         document.querySelector("#invalidsubject").style.justifyContent = "center";
        //         invalidsubj.append("<div>Subject is empty</div>")
        //     } else {
        //         document.querySelector("#invalidsubject").style.display = "none";
        //     }
        // }
        //









        //Lai uztaisitu to Please FIll out All of the requiered fields, katram validation rule ir vajadzigs uztaisit velvienu ieksejo if stataemnt kas parbauda vai jau ir sie parametri ielikti
        //     document.querySelector("#pfotrFields").style.display = "flex";
        //     document.querySelector("#pfotrFields").style.justifyContent = "center";
        //     emptyFields.append("<div>Please Fill Out The Remainig Fields</div>")
        // Ja nav, tad izejot no if statemnt to enablo


        if (country == "select" || email.length == 0 || firstn.length == 0 || lastn.length == 0 || subject.length == 0) {
            if (pjoutfStyle == "flex") {
                document.querySelector("#empty").style.display = "none";
                event.preventDefault();
            } else if (pjoutfStyle != "flex") {
                document.querySelector("#pfotrFields").style.display = "flex";
                document.querySelector("#pfotrFields").style.justifyContent = "center";
            }
        } else if (country != "select" || email.length == 0 || firstn.length != 0 || lastn.length != 0 || subject.length != 0) {
            if (pjoutfStyle == "flex") {
                document.querySelector("#empty").style.display = "none";
                event.preventDefault();
            } else if (pjoutfStyle != "flex") {
                document.querySelector("#pfotrFields").style.display = "flex";
                document.querySelector("#pfotrFields").style.justifyContent = "center";
            }
        }

        //First Name validation rules

        if (firstn.length > 0) {
            event.preventDefault()
            document.querySelector("#empty").style.display = "none";
            if (firstn.length < 2 || firstn.includes("1") || firstn.includes("2") || firstn.includes("3") || firstn.includes("4") || firstn.includes("4") || firstn.includes("5") || firstn.includes("6") || firstn.includes("7") || firstn.includes(".") || firstn.includes(";") || firstn.includes("!") || firstn.includes("?")) {
                event.preventDefault()
                document.querySelector("#invalidfirstn").style.display = "flex";
                document.querySelector("#invalidfirstn").style.justifyContent = "center";
                invalidfn.append("<div>Invalid First Name</div>")
                if (country == "select" || email.length == 0 || firstn.length > 0 || lastn.length == 0 || subject.length == 0) {
                    if (pjoutfStyle == "flex" ) {
                        event.preventDefault();
                    } else if (pjoutfStyle != "flex") {
                        document.querySelector("#pfotrFields").style.display = "flex";
                        document.querySelector("#pfotrFields").style.justifyContent = "center";
                    }
                }
            } else {
                document.querySelector("#invalidfirstn").style.display = "none";
            }
        }

        //Email validation rules

        if (email.length > 0) {
            if (emptyStyle == "flex") {
                document.querySelector("#empty").style.display = "none";
            }
            if (email.length < 5) {
                event.preventDefault()
                document.querySelector("#invalidemail").style.display = "flex";
                document.querySelector("#invalidemail").style.justifyContent = "center";
                invalidemail.append("<div>Invalid Email</div>")
            }
            if (email.length > 5 && email.includes("@") && email.includes(".")) {
                event.preventDefault()
                document.querySelector("#invalidemail").style.display = "none";
            }
            if (country == "select" || email.length > 0 || firstn.length == 0 || lastn.length == 0 || subject.length == 0) {
                if (pjoutfStyle == "flex") {
                    event.preventDefault()
                } else if (pjoutfStyle != "flex") {
                    event.preventDefault()
                    document.querySelector("#pfotrFields").style.display = "flex";
                    document.querySelector("#pfotrFields").style.justifyContent = "center";
                }
            }
        }

        //Last Name validation rules

        if (lastn.length > 0) {
            event.preventDefault()
            document.querySelector("#empty").style.display = "none";
            if (lastn.length < 2 || lastn.includes("1") || lastn.includes("2") || lastn.includes("3") || lastn.includes("4") || lastn.includes("4") || lastn.includes("5") || lastn.includes("6") || lastn.includes("7") || lastn.includes(".") || lastn.includes(";") || lastn.includes("!") || lastn.includes("?")) {
                event.preventDefault()
                document.querySelector("#invalidlastn").style.display = "flex";
                document.querySelector("#invalidlastn").style.justifyContent = "center";
                invalidln.append("<div>Invalid Last Name</div>")
            } else {
                document.querySelector("#invalidlastn").style.display = "none";
            }
            if (country == "select" || email.length == 0 || firstn.length == 0 || lastn.length > 0 || subject.length == 0) {
                if (pjoutfStyle == "flex") {
                    event.preventDefault()
                } else if (pjoutfStyle != "flex") {
                    event.preventDefault()
                    document.querySelector("#pfotrFields").style.display = "flex";
                    document.querySelector("#pfotrFields").style.justifyContent = "center";
                }
            }
        }

        //Country Select validation rules

        // if (country == "select") {
        //     event.preventDefault()
        //     document.querySelector("#empty").style.display = "none";
        //     if (country == "select") {
        //         event.preventDefault();
        //         document.querySelector("#invalidcountry").style.display = "flex";
        //         document.querySelector("#invalidcountry").style.justifyContent = "center";
        //         invalidcountry.append("<div>Please Select Your Country</div>")
        //     }
        // }
        // if (country != "select" || email.length == 0 || firstn.length == 0 || lastn.length == 0 || subject.length == 0) {
        //     if (pjoutfStyle == "flex") {
        //         event.preventDefault()
        //     } else if (pjoutfStyle != "flex") {
        //         event.preventDefault()
        //         document.querySelector("#pfotrFields").style.display = "flex";
        //         document.querySelector("#pfotrFields").style.justifyContent = "center";
        //     }
        // }


        //Subject validation rules

        if (subject.length > 0) {
            event.preventDefault()
            document.querySelector("#invalidsubject").style.display = "none";
            if (subject.length == 0) {
                event.preventDefault()
                document.querySelector("#invalidsubject").style.display = "flex";
                document.querySelector("#invalidsubject").style.justifyContent = "center";
                invalidsubj.append("<div>Subject Is Empty</div>")
            }
            // if (country == "select" && email.length == 0 && firstn.length == 0 && lastn.length == 0 && subject.length > 0) {
            //     event.preventDefault()
            //     document.querySelector("#pfotrFields").style.display = "flex";
            //     document.querySelector("#pfotrFields").style.justifyContent = "center";
            //     emptyFields.append("<div>Please Fill Out The Remainig Fields</div>")
            // }
        }
        if (firstn.length == 0 && lastn.length == 0 && email.length == 0 && subject.length == 0) {
            event.preventDefault()
            document.querySelector("#pfotrFields").style.display = "none";
            document.querySelector("#empty").style.display = "flex";
            document.querySelector("#empty").style.justifyContent = "center";
            empty.append("<div>Please Fill Out All Of The Required Fields</div>")
        } else if (firstn.length > 0 && lastn.length > 0 && email.length > 0 && subject.length > 0 && country != "select") {
            event.preventDefault()
            document.querySelector("#empty").style.display = "none";
        }
    });
});

