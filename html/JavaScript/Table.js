function insert_Row()
{
var x=document.getElementById('sample Table').insertRow(o); 
var y=x.insertCell(o);
var z=x.insertCell(1);
y.innerHTML="New Cell1"; 
z.innerHTML="New Cell2";
}