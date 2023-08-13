
function refress(){
    var score = Math.random() *100;
    score = Math.floor(score) +1;

    if(score >70){
        document.getElementsByTagName("h2")[0].innerHTML ="Your Love Score is: " + score + "%." +" You Love each other so much❤."
    }
    else if(score<70 && score >35){
        document.getElementsByTagName("h2")[0].innerHTML ="Your Love Score is: " + score + "%." + " Ishq toh hai thora kam hai but hai chalega😉."
    } 
    else{
        document.getElementsByTagName("h2")[0].innerHTML ="Your Love Score is: " + score + "%." + " Wo bewafa hai dost😥."
    }
}