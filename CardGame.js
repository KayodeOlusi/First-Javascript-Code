# Card Game
//Card Game

var count=0;

function myFunc(card){
switch(card){
 case 2:
 case 3:
 case 4:
 case 5:
 case 6:
count++;
break;
 case "a":
 case "q":
 case 10:
 case "j":
count--;
break;
}

var holdbet="hold";
if(count>0){
holdbet="bet"
}

return count + " " + holdbet;

}
myFunc("j");
myFunc(2);
myFunc("a");
myFunc(10);
myFunc(6);
myFunc(4);

//End Card Game
