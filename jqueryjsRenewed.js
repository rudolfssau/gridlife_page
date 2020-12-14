$(document).ready(function () {
    $("#submit").click(function (event) {
        event.preventDefault()
        var firstn = $("#firstn").val();
        var lastn = $("#lastn").val();
        var email = $("#email").val();
        var country = $("#country").val();
        var subject = $("#subject").val();
        var invalidfn = $("#invalidfirstn");
        var invalidln = $("#invalidlastn");
        var invalidemail = $("#invalidemail");
        var invalidcountry = $("#invalidcountry");
        var invalidsubj = $("#invalidsubject");
        var empty = $("#empty");
        var emptyFields = $("#pfotrFields");
        invalidfn.empty();
        invalidemail.empty();
        invalidln.empty();
        invalidsubj.empty();
        invalidcountry.empty();
        empty.empty();
        console.log("workds")
    });
});


