/*  Title:      To beer or not to beer, that is the question
*   Fuction:    Shakespear beer oracle
*   Author:     Mili Orucevic
*   Anno:       2021
*   Language:   javascript
*   Status:     Verified to run 10.Nov.2021
*   Intention:  Submission for Source Code Poetry 2021
*/

toBeerOrNottoBeer(); //That is the question

function toBeerOrNottoBeer() {
    console.log("*******************************************************************");
    console.log("***         To beer or not to beer, that is the question        ***");
    console.log("***           Devoutly to be wished. To die, to sleep,          ***");
    console.log("*******************************************************************");
    sleep(6000);
    
    console.log("***          Whether 'tis nobler in the mind to suffer          ***");
    console.log("*** The slings, arrows, and random number of outrageous fortune ***");
    console.log("*******************************************************************");
    console.log("***             The profecy is about to be revealed             ***");
    console.log("*******************************************************************");
    
    //The slings, arrows, and random number of outrageous fortune
    var slingsAndArrowsofOutrageousFortune = Math.floor(Math.random() * 100);
    
    sleep(6000);
    if (slingsAndArrowsofOutrageousFortune >= 60) {
        console.log("***         Must give us pause. There's the respect             ***");
        console.log("***            Beer thee bad news, no one wants                 ***");
        console.log("***                     ...Not To Beer                          ***");
        console.log("*******************************************************************");
    } else {
        console.log("***              To grunt and sweat under a weary life          ***");
        console.log("***                   Be all my sins remember'd                 ***");
        console.log("***                         ...To Beer!                         ***");
        console.log("*******************************************************************");
    }
}

//Appendix vermiformis
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }