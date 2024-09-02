// function check(c){
//     let vowel="aeiou"
//     if(vowel.includes=c){
//         console.log("it a vowel")
//     }
// }
// check("b")

// Write a function to check number pass by user is odd or even:
function checkbox(n){
    for(let i=1; i<n; i++){
        if(i%2==0){
            console.log("is even")
        }
        else{
            console.log("is not even")
        } 
    }

    // if(n%2==0){
    //     console.log("is even")
    // }
    // else{
    //     console.log("is not even")
    // }
}
checkbox(7)

function click(n){
    if(n=="a"|| n=="e" || n=="i" || n=="o" || n=="u"){
        console.log("vowel")
    }
    else{
        console.log("consonant")
    }
}
click("n")



