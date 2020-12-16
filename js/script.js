var surname = prompt('What\'s your surname?');
document.getElementById('surname').innerHTML = surname + '\'s position is: ';

while (surname.length <= 0) {
  surname = prompt('What\'s your surname?');
}

var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
console.log(surnameList);

surnameList.push(surname);
surnameList.sort();

for (var i = 0; i < surnameList.length; i++) {
  document.getElementById('surname-list').innerHTML +=('<li>' + surnameList[i] + '</li>');
  console.log(surnameList[i]);
}
console.log(surnameList.indexOf(surname));

var position = surnameList.indexOf(surname) + 1;
document.getElementById('surname-position').innerHTML = position;

if (position === 1) {
  document.getElementById('surname-position').innerHTML = position + 'st';
} else if (position === 2) {
  document.getElementById('surname-position').innerHTML = position + 'nd';
} else if (position === 3) {
  document.getElementById('surname-position').innerHTML = position + 'rd';
} else {
  document.getElementById('surname-position').innerHTML = position + 'th';
}
