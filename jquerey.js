function getArray() {
    return $.getJSON('JSON_Data/trackinfo.json');
}
getArray().done(function (data) {
    var output = "";
    $.each(data, function (key,val) {
        // console.log(val.Date)
        output += val.Date;
    });
    $("#trackinfo").html(output)
})
//     var output = []
//     $.each(data, function (key,val) {
//         output += "<p>" + val.Date + "</p>";
//     });
//     $("#trackinfo").html(output)
// });


