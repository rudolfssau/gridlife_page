


function getArray() {
    return $.getJSON('JSON_Data/Date.json');
}
getArray().done(function (data) {
    var output = "";
    $.each(data, function (key,val) {
        output += val.Date;
    });
    $("#trackinfo").html(output)
});

function getArray_0() {
    return $.getJSON('JSON_Data/Track_Name.json');
}
getArray_0().done(function (data) {
    var output_0 = "";
    $.each(data, function (key,val) {
        output_0 += val.Track;
    });
    $("#trackinfo1").html(output_0)
});

function getArray_1() {
    return $.getJSON('JSON_Data/Venue_Name.json');
}
getArray_1().done(function (data) {
    var output_1 = "";
    $.each(data, function (key,val) {
        output_1 += val.Venue;
    });
    $("#trackinfo2").html(output_1)
});

function getArray_2() {
    return $.getJSON('JSON_Data/Track_Format.json');
}
getArray_2().done(function (data) {
    var output_2 = "";
    $.each(data, function (key,val) {
        output_2 += val.Format;
    });
    $("#trackinfo3").html(output_2)
});

$(document).ready(function () {
    
})
