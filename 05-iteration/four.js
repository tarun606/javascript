/*++++++++++++++++++++++++++++++++++++++++For in loop+++++++++++++++++++++++++++++++++++++++++++*/
const myobj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "Swift by apple"
}
for (const key in myobj) {
    console.log(key);
}