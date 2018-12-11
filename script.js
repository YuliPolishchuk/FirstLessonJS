var courseName = 'mateAcademy';
var groupNames = ['fe_sep18', 'fe_oct18', 'fe_now18'];
var ourGroupName = "fe_oct18";
var feOct18StudentName = ['Sergey', 'Anton', 'Dima'];
/*
//alert
var menu = [
  [Number.NEGATIVE_INFINITY, 20, null, "", "Пробачте, в нашому закладі немає страв для вас :("],
  [20, 50, "Ви можете купити колу. Бажаєте?", "Ви замовили колу", "Ви нічого не замовили"],
  [50, 100, "Ви можете купити Чізбургер і картоплю. Бажаєте?", "Ви замовили Чізбургер і картоплю", "Ви нічого не замовили"],
  [100, Number.POSITIVE_INFINITY, "Ви можете купити БігМакМеню. Бажаєте?", "Ви замовили БігМакМеню", "Ви нічого не замовили"],
];
var money = parseInt(prompt('Скільки грошей у вас є?', "0"));
var menuItem = menu.find((menuItem) => money >= menuItem[0] && money < menuItem[1]);
var answer = menuItem[2] ? confirm(menuItem[2]) : false;
alert(menuItem[answer ? 3 : 4]);

//console
var menu = [
  [Number.NEGATIVE_INFINITY, 20, null, "", "Пробачте, в нашому закладі немає страв для вас :("],
  [20, 50, "Ви можете купити колу. Бажаєте?", "Ви замовили колу", "Ви нічого не замовили"],
  [50, 100, "Ви можете купити Чізбургер і картоплю. Бажаєте?", "Ви замовили Чізбургер і картоплю", "Ви нічого не замовили"],
  [100, Number.POSITIVE_INFINITY, "Ви можете купити БігМакМеню. Бажаєте?", "Ви замовили БігМакМеню", "Ви нічого не замовили"],
];
var money = parseInt(prompt('Скільки грошей у вас є?', "0"));
var menuItem = menu.find((menuItem) => money >= menuItem[0] && money < menuItem[1]);
var answer = menuItem[2] ? confirm(menuItem[2]) : false;
console.log(menuItem[answer ? 3 : 4]);
*/
// Маша і Новий рік
/*
var questuionAngela = confirm('Чи прийшла Анжела?', ''); 
var questuionStepan = confirm('Чи прийшов Степан?', ''); 
var questuionMukola = confirm('Чи прийшов Микола?', ''); 

if ((!questuionAngela && questuionStepan && questuionMukola) || (questuionAngela && !questuionStepan && !questuionMukola) || (questuionAngela && !questuionStepan && questuionMukola) || (questuionAngela && questuionStepan && !questuionMukola)){
  console.log('Маша була рада');
} else {
  console.log('Маша була засмучена');
}
*/
var timeStartSale = parseInt(prompt('Введіть час початку знижки', '0'));
var timeEndSale = parseInt(prompt('Введіть час кінця знижки', '24'));
var timeNow = parseInt(prompt('Введіть теперішній час', '0'));
if ((timeStartSale <= 24 && timeStartSale >= 0 ) && (timeEndSale <= 24 && timeEndSale >= 0 ) && (timeNow <= 24 && timeNow >= 0)){
  var active = (timeNow >= timeStartSale && timeNow <= timeEndSale) || (timeEndSale < timeStartSale && !(timeNow > timeEndSale && timeNow < timeStartSale));
  console.log(active ? 'Знижка діє' : 'Знижка не діє');
} else {
  console.log('Ви ввели некоректне значення')
}
