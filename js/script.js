//  Array
var surnameList = ['bianchi', 'rossi', 'duzioni', 'balsano', 'verdi'];
console.log(surnameList);

// User input
var surname = prompt('What\'s your surname?');
surname = surname.toLowerCase(); //capital lowercase
document.getElementById('surname').innerHTML = surname + '\'s position is: ';

// Loop while unfilled surname
while (surname.length <= 0) {
  surname = prompt('What\'s your surname?');
}


surnameList.push(surname); // Pushing the user inside the Array
surnameList.sort(); // Sorting the Array

for (var i = 0; i < surnameList.length; i++) {
  document.getElementById('surname-list').innerHTML +=('<li>' + surnameList[i] + '</li>');
  console.log(surnameList[i]);
}
console.log(surnameList.indexOf(surname));

var position = surnameList.indexOf(surname) + 1;
document.getElementById('surname-position').innerHTML = position;


// Ordinal indicator for position
if (position === 1) {
  document.getElementById('surname-position').innerHTML = position + 'st';
} else if (position === 2) {
  document.getElementById('surname-position').innerHTML = position + 'nd';
} else if (position === 3) {
  document.getElementById('surname-position').innerHTML = position + 'rd';
} else {
  document.getElementById('surname-position').innerHTML = position + 'th';
}
