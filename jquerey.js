$.getJSON('tracklistinfo.json',function(data) {
    console.log(data)
    var output = "<ul>"
    $.each(data, function (key,val) {
        output += "<li>" + val.numberOfDay + "</li>" + "<li>" + val.Track_Name + "</li>";
    });
    output += "</ul>";
    $("#trackinfo").html(output)
});

