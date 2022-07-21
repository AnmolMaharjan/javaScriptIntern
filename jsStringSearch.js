str = "WHEN YOU BLESS THE DAY I JUST DRIFT AWAY ALL MY WORRIES DIE I'M GLAD THAT I'M ALIVE";

document.getElementById("demo1").innerHTML=str.indexOf("I'M");          // The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string
document.getElementById("demo2").innerHTML=str.lastIndexOf("I'M");      // The indexOf() method returns the index of (the position of) the last occurrence of a specified text in a string
document.getElementById("demo3").innerHTML=str.indexOf('POLICE');       // Both methods accept a second parameter as the starting position for the search:
document.getElementById("demo4").innerHTML=str.indexOf("I'M", 65);      // a second parameter as the starting position for the search
document.getElementById("demo5").innerHTML=str.lastIndexOf("I'M", 65);  // lastIndexOf() methods searches backwards (from the end to the beginning)
document.getElementById("demo6").innerHTML=str.search("I'M");           // search() method searches a string for a specified value and returns the position of the match
document.getElementById("demo7").innerHTML=str.match(/A/g);             // match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
document.getElementById("demo8").innerHTML=str.match(/A/gi);            // global, case-insensitive search
document.getElementById("demo9").innerHTML=str.includes('DIE');         // includes() method returns true if a string contains a specified value.
document.getElementById("demo10").innerHTML=str.includes('DIE',15);         // Check if a string includes "world", starting the search at position 12:
document.getElementById("demo11").innerHTML=str.startsWith("WHEN");         // The startsWith() method returns true if a string begins with a specified value, otherwise false:
document.getElementById("demo12").innerHTML=str.endsWith("ALIVE");         // The endsWith() method returns true if a string ends with a specified value, otherwise false:
