// Code your solutions in this file


function writeCards(name) {
    const thankYouMessages = [];
    for(let i = 0; i < name.length; i++) {
        thankYouMessages[i] =  `Thank you, ${name[i]}, for the wonderful surprise gift!`
        
    }
    return thankYouMessages

}

function countDown(number) {
    for(let i = number; i >= 0; i--) {
        console.log(i);
    }

    
}

