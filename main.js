var inputs = [];

function getParagraph1(){
    for (var k = 1; k <=6; k++){
        inputs.push(document.getElementById("Input" + k).value);
    }
    inputs.join(". ")
    document.getElementById("getParagraph").innerHTML = inputs.join(". ")
}