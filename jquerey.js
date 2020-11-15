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
        event.preventDefault()
        var email = $("#email").val()
        var fname = $("#fname").val()
        var lname = $("#lanme").val()
        var firstn = $("#firstn").val()
        var lastn = $("#lastn").val()
        var statusElm = $("#status")
        statusElm.empty()
        if(email.length > 5 && email.includes("@") && email.italics(".")) {
        } else {
            statusElm.append("<div>That Email isn't valid</div>")
        };
        if(fname.length < 2 && fname.includes(".")) {
            statusElm.append("<div>Invalid Name</div>")
        }
        if(firstn.length < 2 || firstn.includes("1") || firstn.includes("2") || firstn.includes("3") || firstn.includes("4") || firstn.includes("4") || firstn.includes("5") || firstn.includes("6") || firstn.includes("7") || firstn.includes(".") || firstn.includes(";") || firstn.includes("!") || firstn.includes("?")) {
            statusElm.append("<div>Invalid First Name</div>")
        }
        if(lastn.length < 2 || lastn.includes("1") || lastn.includes("2") || lastn.includes("3") || lastn.includes("4") || lastn.includes("4") || lastn.includes("5") || lastn.includes("6") || lastn.includes("7") || lastn.includes(".") || lastn.includes(";") || lastn.includes("!") || lastn.includes("?")) {
            statusElm.append("<div>Invalid Last Name</div>")
        }
    });
});