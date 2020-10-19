function getArray() {
    return $.getJSON('JSON_Data/Date.json');
}
getArray().done(function (data) {
    var output = "";
    $.each(data, function (key,val) {
        // console.log(val.Date)
        output += val.Date;
    });
    $("#trackinfo").html(output)
});

// function getArray() {
//     return $.getJSON('JSON_Data/Track_Name.json');
// }
// getArray().done(function (data) {
//     var output = "";
//     $.each(data, function (key,val) {
//         // console.log(val.Date)
//         output += val.Track_Name;
//     });
//     $("#trackinfo1").html(output)
// });
//     var output = []
//     $.each(data, function (key,val) {
//         output += "<p>" + val.Date + "</p>";
//     });
//     $("#trackinfo").html(output)
// });


