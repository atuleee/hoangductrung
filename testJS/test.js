
// var myInfo = {
//     name: 'Tung Nguyen',
//     age: 20,
//     address:'Ha Noi, VN'

// }
// myInfo.email = 'tungnguyen.vn'
// console.log(myInfo);

// toans tử 3 ngôi
// var course ={
//     name : 'Java',
//     coin : 200
// }
// var result = course.coin > 0 ? `${course.coin} Coins`: 'Mien Phi';
// console.log(result);
// var a = 1;
// var b = 2;
// var c = a > 0 ? a : b;

//for loop

// var myArray = ['java','php','js','python']

// var arrayLength = myArray.length;

// for (var i = 0; i < arrayLength ; i++){
//     console.log(myArray[i]);
// }

//for in
// var myInfo ={
//     ten:'Tung',
//     age:20,
//     address:'Hanoi',
// }

// for(var key in myInfo){
//     console.log(myInfo[key]);
// }

// var languages = 'java'
// for (var key in languages){
//     // console.log(languages[key]);
//     console.log(languages[key]);

// }

//for/of loop
// var languages = 
//     'java'

// for(var value of languages){
//     console.log(value)
// }

// lấy key ofject
// var myInfo = {
//     name: 'Tung',
//     Age: 20

// }
// for(var value of Object.keys(myInfo)){
//     console.log(value);
// }


//while loop
// var i = 0;
// while(i <1000){
//     i++;
//     console.log(i);
// }

// var myArray = ['java','php']
// var i = 0;
// while (i< myArray.length){
//     console.log(myArray[i]);
// }

//do while
// var i =0 ;

// var isSuccess = false;

// do{
//     i++;


//     console.log('Nạp thẻ lần '+ i);
//     //thanh cong
//     if(false){
//         isSuccess = true;
//     }

// }while(!isSuccess && i <= 3);

//Break & continue in Loop
// for (var i =0; i<10;i++){
//     console.log(i);

//     if (i>= 5){
//         break;
//     }
// }

// for (var i =0; i<10;i++){


//     if(i%2 !==0){
//         continue;
//     }
//     console.log(i);
// }


//Vong lap long nhau
// var myArray = [
//     [1,2], [3,4] , [5,6]
// ]

// for (var i=0; i < myArray.length; i++){
//     for(var j = 0; j < myArray[i].length ; j++){
//         console.log(myArray[i][j]);
//     }
// }

// var courses = [
//     {
//         id:1,
//         name : 'name 1',
//         coin : 120
//     },
//     {
//         id:2,
//         name : 'name 2',
//         coin : 100
//     },
//     {
//         id:3,
//         name : 'name 3',
//         coin : 300
//     },
//     {
//         id:4,
//         name : 'name 4',
//         coin : 150
//     },
//     {
//         id:5,
//         name : 'name 5',
//         coin : 120
//     }
// ]
//for each
// courses.forEach(function(course, index){
//     console.log(index,course);
// });


//every
// var course = courses.find(function(course, index){
//     return course.name  === 'name 4';
// });
// console.log(course);

//map
// function courseHan (course,index){
//     // console.log(course);
//     return `<h2> ${course.Name}</h2>`;
// };
// var newCourse = courses.map(courseHan);

// console.log(newCourse.join(''));

//reduce
// var i = 0;

// function coinHan (accumulator,currentValue,currentIndex, originArray){
//     i++;
//     // console.table({
//     //     'Lượt chạy: ': i,
//     //     'Biến tích trữ: ' : accumulator
//     // });
//     // console.log(currentValue);
//     return accumulator + currentValue.coin;
// }
// var totalCoin = courses.reduce(coinHan, 0);
// console.log(totalCoin);

// function myFunction(param){
//     param('hoc')
// }
// myFunction(myCallback);

// function myCallback(ok){
//     console.log('ok :', ok);
// }

var headingElement = document.querySelector('.heading');

console.log(headingElement.in);


