function getList() {
    return $.ajax({
        type: "GET",
        url: "JSON_Data/trackInfo.json"
    })
}
$.getJSON("JSON_Data/trackInfo.json", function(response) {
    var janis = response[1];
    var janisText = janis[1].DateShortened;
    // console.log(ajn)
    janis.forEach(function(elCreate) {
        var elCreateDiv = document.createElement("div");
        elCreateDiv.appendChild(document.createTextNode(response[1][1].DateShortened));
        document.body.appendChild(elCreateDiv)
    })
});
getList().done(function (response) {
    var data = JSON.parse(response);
    if (data != null) {
        jQuery.each(data, function (index, value) {
            $("#tDate").append('<td>' + "Date: " + value[0].Date + '</td>')
            $("#tVenue").append('<td>' + "Venue: " + value[2].Venue + '</td>')
            $("#tTrack").append('<td>' + "Track Name: " + value[3].Track + '</td>')
            $("#tFormat").append('<td>' + "Track Format: " + value[4].Format + '</td>')
        })
    }
})