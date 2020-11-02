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
            $("#tDate").append('<td>' + "Date: " + value[0].Date + '</td>')
            $("#tVenue").append('<td>' + "Venue: " + value[1].Venue + '</td>')
            $("#tTrack").append('<td>' + "Track Name: " + value[2].Track + '</td>')
            $("#tFormat").append('<td>' + "Track Format: " + value[3].Format + '</td>')
        })
    }
})
$