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
$.getJSON("JSON_Data/dateForDiv.json", function(response) {
    response.forEach(function (a, index) {
        var elCreateDiv = document.createElement("div", );
        elCreateDiv.id = "elCreateDiv"
        elCreateDiv.appendChild(document.createTextNode(a.DateShortened));
        document.getElementById("tShortDates").appendChild(elCreateDiv)
    });
});
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