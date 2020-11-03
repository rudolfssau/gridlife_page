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
$