function getArray() {
    return $.getJSON('JSON_Data/trackInfo.json');
}
getArray().done(function (data) {
    console.log(data)
});



// function buildTable(data) {
//     var table = document.getElementById("trackinfo")
//     for(i = 0; i < table.length; i++) {
//         var row =  `<tr>
//                         <td>${data[i].Date}</td>
//                         <td>${data[i].Venue}</td>
//                         <td>${data[i].Track}</td>
//                         <td>${data[i].Format}</td>
//                     </tr>`
//         table.innerHTML += row
//     }
// }
// console.log(buildTable(janis))