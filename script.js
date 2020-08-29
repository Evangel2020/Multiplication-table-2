
/*let multiplier = document.getElementById('value1').value;
let range = document.getElementById('value2').value; 
const table = document.getElementById('mytable').value; */


function multiplicationTable() {
    let multiplier = document.getElementById('value1').value;
    let range = document.getElementById('value2').value; 

    let displayTable = '';
    for(let i=1; i<=range; i++) {

        displayTable += multiplier + 'x' + i + ' = ' + multiplier*i + '<br>';


    }
    const table = document.getElementById('mytable').innerHTML = displayTable;
}