for 
$(function (){
    $.getJSON('tracklistinfo.json', function (data){
        $.each(data.Data,function(i,emp){
            $("#trackinfo").append("<li>"+emp.Track_Name+"</li>")
        })
    })
})
