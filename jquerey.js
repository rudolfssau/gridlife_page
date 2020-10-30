function getList() {
    return $.ajax({
        type: "GET",
        url: "JSON_Data/trackInfo.json"
    })
}
getList().done(function (response) {
    var data = JSON.parse(response);
    if (data != null) {
        jQuery.each(data, function (index, value) {
            console.log(value[0].Date)
            $("#tDate").append('<td>' + value[0].Date + '</td>')
            $("#tVenue").append('<td>' + value[1].Venue + '</td>')
            $("#tTrack").append('<td>' + value[2].Track + '</td>')
            $("#tFormat").append('<td>' + value[3].Format + '</td>')
        })
    }
})
