nosa = [];

function submit()
{
   

    var dsa = [];

    for (var u = 1; u <= 4; u++)
    {
    var student_name = document.getElementById("student"+u).value;
    console.log(student_name);
    nosa.push(student_name);

}
 console.log(nosa)

 var length_of_nosa = nosa.length
 console.log(length_of_nosa)

 for (var v = 0; v < length_of_nosa; v++)
 {
    dsa.push("<h3>NAME - " + nosa[v] + "</h3>");
    console.log(dsa);
 }
 console.log(dsa);
 document.getElementById("display_name_with_commas").innerHTML = dsa;

 var without = dsa.join(" ")
 console.log(without)
 document.getElementById("display_name_without_commas").innerHTML = without;

 document.getElementById("submit_btn").style.display = "none";
 document.getElementById("sort_btn").style.display = "inline_block";
}

function sort()
{
nosa.sort();
console.log(nosa);


var dsa_sort = [];

var length_of_nosa  = nosa.length;
console.log(length_of_nosa)

for (var v = 0; v < length_of_nosa; v++)
 {
    dsa_sort.push("<h3>NAME - " + nosa[v] + "</h3>");
    console.log(dsa_sort);
 }

 var without = dsa_sort.join(" ")
 console.log(without)
 document.getElementById("display_name_without_commas").innerHTML = without;

}
