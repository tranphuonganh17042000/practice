var fullName = 'Tran Phuong Anh';
// alert(fullName);
// console.log('hello');
// console.warn('eiii');
// confirm('xac nhan');
// prompt('hi');
// setInterval(function() {
//     console.log('hi' + Math.random())
// }, 1000);
var a = 'ne';
// console.log(fullName + a);

// var b = 'nee he ui la choi a t tuc qua di nha ' +
//     'nee he ui la choi a t tuc qua di nha '; // dị cho đẹp 1 dòng tối đa 80 ký tự thôi
// console.log(b);
// Array.prototype.map2 = function(callBack) {
//         var arrLength = this.length;
//         for (i = 0; i < arrLength; i++) {
//             callBack(this[i]);
//         }

//     }
// Array.prototype.find2 = function(callBack) {

//     var output = [];
//     for (var index in this) {
//         var result = callBack(this[index]);
//         if (result) {
//             output.push(this[index]);
//             break;
//         }
//     }
//     return output;
// };
// var course = [{
//         id: 0,
//         name: 'java',
//         price: 1
//     },
//     {
//         id: 0,
//         name: 'php',
//         price: 3
//     },
//     {
//         id: 5,
//         name: 'java',
//         price: 1
//     }
// ];

// course.map2(function(courses) {
//     console.log(courses);
// });
// var newCourse = course.map(function(courses) {
//     return {
//         id: courses.id,
//         name: courses.name,
//         price: `gia: ${courses.name }`

//     }
// });
// console.log(newCourse);

// var a = course.find2(function(findCourse) {
//     return findCourse.name == 'java';
// });
// console.log(a);
// var findCourse = course.find(function(courses) {
//     return courses.name = 'java';
// });
// console.log(findCourse);


// var arr = ['a', 'b', 'c', 'a', 'b', 'c'];
// console.log([...new Set(arr)]);

// function giaiThua(number) {
//     var output = 1;
//     for (i = number; i > 0; i--) {
//         output = output * i;
//     }
//     return output;
// }
function giaiThua(number) {
    // var output = 1;
    if (number > 0) {
        return number * giaiThua(number - 1);
    }
    return 1;
}
console.log(giaiThua(3));