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
        var statusElm = $("#status")
        statusElm.empty()
        if(email.length > 5 && email.includes("@") && email.italics(".")) {
        } else {
            statusElm.append("<div>The Email is invalid</div>>")
        }
    })
});