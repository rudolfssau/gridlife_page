function getList() {
    return $.ajax({
        type: "GET",
        url: "JSON_Data/trackInfo.json"
    })
}
function getDate() {
    return $.ajax({
        type: "GET",
        url: "JSON_Data/dateForDiv.json"
    })
}
getList().done(function (response) {
    var data = JSON.parse(response);
    if (data != null) {
        jQuery.each(data, function (index, value) {
            $("#tDate").append('<td>'  + value[0] + '</td>')
            $("#tVenue").append('<td>' + value[1] + '</td>')
            $("#tTrack").append('<td>' + value[2] + '</td>')
            $("#tFormat").append('<td>' + value[3] + '</td>')
        })
    }
})
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
        var firstn = $("#firstn").val()
        var lastn = $("#lastn").val()
        var email = $("#email").val()
        var subject = $("#subject").val()
        var invalidfn = $("#invalidfirstn")
        var invalidln = $("#invalidlastn")
        var invalidemail = $("#invalidemail")
        var invalidsubj = $("#invalidsubject")
        var empty = $("#empty")
        invalidfn.empty()
        invalidemail.empty()
        invalidln.empty()
        invalidsubj.empty()
        empty.empty()
        if (email.length > 1) {
            if (email.length > 5 && email.includes("@") && email.includes(".")) {
            } else {
                event.preventDefault()
                document.querySelector("#invalidemail").style.display = "flex";
                document.querySelector("#invalidemail").style.justifyContent = "center";
                invalidemail.append("<div>Invalid Email</div>")
            }
            if (firstn.length < 2 || firstn.includes("1") || firstn.includes("2") || firstn.includes("3") || firstn.includes("4") || firstn.includes("4") || firstn.includes("5") || firstn.includes("6") || firstn.includes("7") || firstn.includes(".") || firstn.includes(";") || firstn.includes("!") || firstn.includes("?")) {
                event.preventDefault()
                document.querySelector("#invalidfirstn").style.display = "flex";
                document.querySelector("#invalidfirstn").style.justifyContent = "center";
                invalidfn.append("<div>Invalid First Name</div>")
            }
            if (lastn.length < 2 || lastn.includes("1") || lastn.includes("2") || lastn.includes("3") || lastn.includes("4") || lastn.includes("4") || lastn.includes("5") || lastn.includes("6") || lastn.includes("7") || lastn.includes(".") || lastn.includes(";") || lastn.includes("!") || lastn.includes("?")) {
                event.preventDefault()
                document.querySelector("#invalidlastn").style.display = "flex";
                document.querySelector("#invalidlastn").style.justifyContent = "center";
                invalidln.append("<div>Invalid Last Name</div>")
            }
            if (subject.length == 0) {
                event.preventDefault()
                document.querySelector("#invalidsubject").style.display = "flex";
                document.querySelector("#invalidsubject").style.justifyContent = "center";
                invalidsubj.append("<div>Subject is empty</div>")
            }
        } else if (email.length < 1) {
            event.preventDefault()
            document.querySelector("#empty").style.display = "flex";
            document.querySelector("#empty").style.justifyContent = "center";
            empty.append("<div>Please fill out all of the required fields</div>")
        }
    });
});