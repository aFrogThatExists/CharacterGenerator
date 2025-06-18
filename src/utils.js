function setElementContent(id, content){
    console.log(id)
    document.getElementById(id).innerText = content;
}
function selectFromArray(array){
    return array[Math.floor(Math.random()*array.length)];
}