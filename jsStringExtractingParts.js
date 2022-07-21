str = "0123456789";
//text = "गाई त बाढ्योउ घुम्रोमा मोई छैन मोई छैन गरीबको चमेली बोल्दिने कोही छैन, संगीतकार को हो"
part1 = str.slice(2, 9);         // 2 न नासे 9 ताक वई, 2 वई 9 वई मख
part2 = str.slice(-9, -2);       // -9 न नासे -2 ताक वई, -9 वई -2 वई मख
part3 = str.slice(7);           // 7 न नासे दक्कँ वई
part4 = str.slice(-9);          // -9 न नासे दक्कँ वई
part5 = str.substr(5, 3);        // 5 नासे वई,स्वगु वई
part6 = str.substr(5);          // 5 नासे दक्कँ वई
part7 = str.substr(-5);         // -5 नासे दक्कँ वई

document.getElementById("demo1").innerHTML = part1;
document.getElementById("demo2").innerHTML = part2;
document.getElementById("demo3").innerHTML = part3;
document.getElementById("demo4").innerHTML = part4;
document.getElementById("demo5").innerHTML = part5;
document.getElementById("demo6").innerHTML = part6;
document.getElementById("demo7").innerHTML = part7;

function textReplace() {
    text = document.getElementById("demo8").innerText;
    document.getElementById("demo8").innerHTML = text.replace(" को ", " बालेन ");       // text replace
}
function textReplace1() {
    text = document.getElementById("demo9").innerText;
    document.getElementById("demo9").innerHTML = text.replace(/WHEn/i, " IF ");         // use a regular expression with an /i flag (insensitive)
}
function textReplace2() {
    text = document.getElementById("demo10").innerText;
    document.getElementById("demo10").innerHTML = text.replace(/E/g, "-_-");         // use a regular expression with an /g flag (global match)
}

text1 = "yo hamro nepal";
text2 = text1.toUpperCase();        // text to uppercase
document.getElementById("demo11").innerHTML = text2;

text3 = text2.toLowerCase();        // text to lowercase
document.getElementById("demo12").innerHTML = text3;

text4 = text2.concat(" ", text3);    // concatenation
document.getElementById("demo13").innerHTML = text4;

text5 = "       Nepal       ";
text6 = text5.trim();               // trim out white space character
document.getElementById("demo14").innerHTML = text6;

text7 = "5";
document.getElementById("demo15").innerHTML = text7.padStart(3, "x");
document.getElementById("demo16").innerHTML = text7.padEnd(3, "x");

text8 = "WHEN YOU BLESS THE DAY I JUST DRIFT AWAY ALL MY WORRIES DIE I'M GLAD THAT I'M ALIVE";
document.getElementById("demo17").innerHTML = text8.charAt(0);
document.getElementById("demo18").innerHTML = text8[0];
document.getElementById("demo19").innerHTML = text8.split(' ');