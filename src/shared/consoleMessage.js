let message = ['fancy meeting you here', 'whats up there buddy guy','you looking at me?', 'what\'s a pretty programmer like you doing in a place like this?', 'that\'s no moon','i swear on my pretty little bonnet you will like this site.']
const messageFunction = () =>{
let guesser = Math.floor(Math.random(message.length)*10)

if(guesser <= 0){
    console.log(message[0])
} else if ( guesser === 1){
    console.log(message[1])
} else if ( guesser === 2){
    console.log(message[2])
} else if ( guesser === 3){
    console.log(message[3])
} else if (guesser === 4) {
    console.log(message[4])
} else{
    console.log(message[5])
}

}
export default messageFunction()