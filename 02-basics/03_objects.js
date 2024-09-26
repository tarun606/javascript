//singleton
// object.create

// object Literals
const mysym = Symbol("key1");
const Jsuser = {
    name: "Tarun",
    "Full name": "Tarun kumar",
    age: 18,
    location: "Jaipur",
    email: "tarun2google.com",
    [mysym]: "key1",
    isLoggedin: false,
    lastloginday: ["Monday", "Tuesday"]
}
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["Full name"]);
// console.log(Jsuser[mysym]);

// Object.freeze(Jsuser);
// Jsuser.email = "tarunkumar";
// console.log(Jsuser);

Jsuser.greetings = function(){
    console.log("Hello js");
}
console.log(Jsuser.greetings());


Jsuser.greetings2 = function(){
    console.log(`Hello js user ${this.name}`);
}
console.log(Jsuser.greetings2());