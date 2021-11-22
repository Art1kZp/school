// Задание
// 1. Напишите функцию deepEqual чтоб она проверяла что два объекта идентичны. Пример:

// deepEqual({name: 'test'}, {name: 'test'}) // output true
// deepEqual({name: 'test'}, {name: 'test1'}) // output false
// deepEqual({name: 'test'}, {name: 'test', age: 10}) // false

// function deepEqual (obj1, obj2){
//     return JSON.stringify(obj1) === JSON.stringify(obj2);
// };
// console.log(deepEqual({name: 'test'}, {name: 'test'})) // output true
// console.log(deepEqual({name: 'test'}, {name: 'test1'})) // output false
// console.log(deepEqual({name: 'test'}, {name: 'test', age: 10})) // false

// 2. Напишите функцию chunkArray которая разбивает массив на подмассивы на заданное количество элементов. Пример:

// var result = chunkArray([1,2,3,4,5,6,7,8], 3);
// // Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]

// function chunkArray(array, size) {
//     const newArr = []; 
//     for (let i = 0; i <Math.ceil(array.length/size); i++){
//         newArr[i] = array.slice((i*size), (i*size) + size);
//     }
//     return newArr;
// };
// var result = chunkArray([1,2,3,4,5,6,7,8], 3);
// console.log('[result]', result);

// 3. Напишите функцию обертку которая на вход принимает асинхронный метод и массив аргументов а отдает нам Promise с результатом. Пример:

// function asyncPlus(x, y, cb){
// 	setTimeout(() => cb(x + y), 1000)
// }
// toPromise(asyncPlus, [1,2]).then(console.log)

// // output 3

// function asyncPlus(arr){
// 	setTimeout(() => console.log(arr.reduce((a,b) => a + b)), 1000);
// };

// function toPromise(fu, arr) {
//     return new Promise(resolve => {
//         resolve(fu(arr))      
//     })
// };
  
// toPromise(asyncPlus, [1, 2]).then(console.log); 
  

// 4. Напишите метод firstUnique который возвращает первый уникальный элемент в массиве. Пример: 

// var firstUnique = function(nums) {
//     return nums.reduce((prev, curr) => prev ^ curr, 0);
// };
// console.log(firstUnique([1,2,3,2,1,3,4,5,5]));
// // output 4

// 5. Напишите метод arrayToObject который возвращать объект(использовать рекурсию). Пример:

// Outputs: {
// 	name: 'developer',
// 	age: 5,
// 	skills: {
// 		html: 4,
// 		css: 5,
// 		js: 5
// 	}
// }

// var arr = [
//     ['name', 'developer'], 
//     ['age', 5], 
//     ['skills', [['html',4], ['css', 5], ['js',5]]]
// ];
// var obj = {};
// function arrayToObject(arr) {
//     arr.forEach(function(data){
//         obj[data[0]] = data[1]
//     });
//     //я так понимаю, тут нужно было еще раз вызвать arrayToObject, но не смог это реализовать так как внизу в примере про массив (с рекурсией) 
// }
// console.log(arrayToObject(arr))

// function func(arr) {
//     let result = [];
//     for (const elem of arr) {
//         if (typeof elem == 'object') {
//             result = result.concat(func(elem))
//         } else {
//             result.push(elem)
//         }
//     }
//     return result
    
// }
// console.log(func(arr))


// 6. Написать метод getBase64FromUrl который конвертирует картинку в строку base64 (метод должен быть реализован с помощью Promise). Пример:

//  getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
//  .then(console.log)
//  .catch(console.error)

// const getBase64FromUrl = url => fetch(url)
//   .then(response => response.blob())
//   .then(blob => new Promise((resolve, reject) => {
//     const reader = new FileReader()
//     reader.onloadend = () => resolve(reader.result)
//     reader.onerror = reject
//     reader.readAsDataURL(blob)
//   }))


// getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
//   .then(dataUrl => {
//     console.log('RESULT:', dataUrl)
//   });

// // Output
// data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACeCAIAAADL6SW3AAAAA3NCSVQICAjb4U/gAAAMGElEQVR4nO3dfZBdZX3A8d....

// 7. Написать обратный метод(см. задачу 5) objectToArray который из объекта создаст массив. Пример: 

//   objectToArray({
// 	name: 'developer',
// 	age: 5,
// 	skills: {
// 		html: 4,
// 		css: 5,
// 		js: 5
// 	}
// })
// var obj = {
// 	name: 'developer',
// 	age: 5,
// 	skills: {
// 		html: 4,
// 		css: 5,
// 		js: 5
// 	}  
// }
// function ObjectToArray(obj) {
//     var arr = Object.entries(obj)
//     var arr2 = Object.entries(arr[2][1])

//     arr[2].splice(1, 4, arr2)
//     return arr
// }
// console.log(ObjectToArray(obj));

// Outputs: [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]]

// 8. Сделать функцию которая сможет делать срез данных с ассоциативного массива и вернуть средние значение (округленное до 2 цифр после запятой).

// let testData3 = [{"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},{"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},{"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},{"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},{"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},{"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}]

// var result = testData3.map(x => x.skills.php);
// function averageСost(arr) {
//     var sum = 0;
//     for(var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     var avg = sum / arr.length;
//     return avg.toFixed(1)
//  }

// console.log(averageСost(result));

// Превратить в функцию

// // Outputs: 3.1

// 9. Создайте прототип для String toTitleCase каждый первый символ строки переводит в верхний регистр. Пример:
// let x = 'test task'
// // console.log(x.toTitleCase())
// // Outputs: Test Task

// String.prototype.toTitleCase = function () {
//     return this.replace(/\w\S*/g, 
//         function(txt){
//             return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//         });
// };
// console.log(x.toTitleCase());
// // Outputs: Test Task

// 10. Создайте прототип который удаляет дубликаты из строки. Пример:

// let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";
// x.removeDuplicate() 
// // Int32 Double

// String.prototype.removeDuplicate = function() {
//     const set = new Set(this.split(' '))
//     return [...set].join(' ')
//   }
// console.log(x.removeDuplicate());

// 11. Напишите методы добавления/удаления строчки внизу таблицы с текстом 'Row{N} cell{K}' (N/K динамические числа пример Row{3} cell{1}, Row{3} cell{2}..., то есть если количество колонок в одной строчке будет изменено ваш код должен работать)

/* <head> 
<meta charset=utf-8 /> 
<title>Insert row in a table - w3resource</title> 
</head><body> 
<table id="sampleTable" border="1"> 
<tr><td>Row1 cell1</td> 
<td>Row1 cell2</td></tr> 
<tr><td>Row2 cell1</td> 
<td>Row2 cell2</td></tr> 
</table><br> 
<button id="btnInsert" type="button" value="Insert row">  
<button id="btnRemove" type="button" value="Remove row">  
</body>

// Отдельная папка task11_table

// 12. Добавьте валидацию формы на странице регистрации из задачи 4(HTML, CSS).

// 1. Кнопка Submit должна быть disabled до тех пор пока данные в форме не корректны. 
// 2. Все поля формы обезательны к заполнению и не должны быть пустые
// 3. Поле Email должно принимать только валидные email адресса
// 4. Пароль должен быть минимум 8 символов и содержать буквы нижнего/верхнего регистра, цифры и хотя бы 1 спец символ.
// 5. Поле Avatar принемает только файлы с расширением .png размер не больше 1Mb
// 6. В случае ошибок под каждым input появляеться тест с причиной ошибки. */

// папка js tasks 

// ----------------------------------------

// К сожалению с mongoDB я не разобрался,  я создал коллекцию 'db.createCollection("tasks")', проверил что она есть через find, 
// айди добавился только к propetries, дальше непонял как получить данный с этих объектов.
 
// Создал себе сам объект юзеров с возврастом и именем и тогда смог отфильтровать и т.д.