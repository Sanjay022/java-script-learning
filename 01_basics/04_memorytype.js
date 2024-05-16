//  memory have 2 types :- 1.    Stack (Premitive datatype :- +,-,*,/,%)
                        // 2.    Heap (Non Premitive or refrance datatype :- Array, object, function)

                    // Stack

let Myname = "Sanjay Bakoliya"
let anotherName = Myname
 anotherName = "Sam khurana"

 console.log(anotherName);

                    //  Heap //

let userOne = {
        name : "Uchiha Itachi",
        email: "uchihaitachi@gmail.com"

}

let userTwo = userOne

userTwo.email = "uchihasasuke@gmail.com"

console.log(
    userTwo.email
);
console.log(userOne.email);
