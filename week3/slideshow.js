var current = 0;

function next(){
current = current + 1;
if (current === 1){
    $("#slide1").show();
}else if (current === 9){
    current = 1;
    $("#slide8").hide();
    $("#slide1").show();
}else{
    $("#slide" + (current-1)).hide();
    $("#slide" + current).show();
}
}

function prev(){
if (current === 0){
    current = 8;
    $("#slide1").hide();
    $("#slide8").show();
}else{
    $("#slide" + current).hide();
    $("#slide" + (current-1)).show();
    current = current - 1;
}
}