/* Syntax for Switch case
switch(variableName){
    case value:
        break;
    default:
        break;
}*/
const month = 9;
switch(month){
    case 1:{
        console.log("Jan");
        break;
    }
    case 2:{
        console.log("Feb");
        break;
    }
    case 3:{
        console.log("Mar");
        break;
    }
    case 4:{
        console.log("Apr");
        break;
    }
    case 5:{
        console.log("May");
        break;
    }
    default:{
        console.log("Ivalid Number");
    }
}