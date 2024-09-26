// const tinder = new Object(
//     name =  "Tarun"
// )
// console.log(tinder)

// const tinderuser = {}
// tinderuser.id = "abc";
// tinderuser.name = "sam";
// tinderuser.isLoggedin = false;
// console.log(tinderuser);

const regularuser = {
    email:"tarunkumary.1128@gmail.com",
    fullname:{
        username:{
            firstname:"Tarun",
            lastname:"kumar"
        }
    }
}

console.log(regularuser.fullname?.username.firstname);