# Contact

var contacts=[
 {
firstName:"Akira",
lastName:"Lina",
number:"08067453421",
likes:["Pizza","Coding","Dart"]
},
 {
firstName:"Edward",
lastName:"Aina",
number:"08067453235",
likes:["Games","Coding","Doughnut"]
},
 {
firstName:"Stephen",
lastName:"Mina",
number:"08012453235",
likes:["Singing","Coding","Pizza"]
},
 {
firstName:"Eddy",
lastName:"Aminat",
number:"08067246065",
likes:["Music","Movies","Doughnut"]
},
 {
firstName:"Elizabeth",
lastName:"sophia",
number:"08067453235",
likes:["Games","Coding","Dancing"]
}
];

function myFunc(name,prop){
for(i=0;i<contacts.length;i++){
if(contacts[i].firstName===name){
return contacts[i][prop]  || "No such propery"

}

}
return "No Such Contact";


}

var data=myFunc("Elizabeth","likes");

console.log(data);
