function rpsTDM(playerList){
var rocks=0;
var scissors=0;
var papers=0;

for(var i=0;i<playerList.length;i++){
if(playerList[i]=="Rock"){rocks++;}
else if(playerList[i]=="Scissors"){scissors++;}
else if(playerList[i]=="Paper"){papers++;}
}
if(rocks>(scissors&&papers)){return console.log("The Rocks win with a score of: "+rocks)}
else if(scissors>(rocks&&papers)){return console.log("The Scissors win with a score of: "+scissors)}
else if(papers>(rocks&&scissors)){return console.log("The Papers win with a score of: "+papers)}
else{return console.log("Draw!");
}
}

function rpsRandList(length){
  
}

