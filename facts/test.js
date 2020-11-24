

let parents = ["A1" , "A2" , "A3"];
let name = "A2";

let newParents = parents.filter( function(elem) {
    return elem != name;
})

console.log(newParents);