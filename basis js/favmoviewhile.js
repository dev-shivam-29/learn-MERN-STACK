const favMovie="avatar";

let guess =prompt("guess my favorite movie");
while((guess != favMovie) && (guess != "quite")){
    guess = prompt("wrong guss try again or type quite to exit");
}
if (guess == favMovie){
    console.log("congrats!!");
}else{
    console.log("you quit")
}