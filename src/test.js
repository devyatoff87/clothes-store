// let arrNumb = new Array(10).fill().map((el, index) => index);
// let arrStr = ["Hello", "my", "dear", "friend", "."];

// function sliceArr(arr_ = [], start = 0, end = arr_.length) {
//   return arr_.slice(start, end);
// }

// function findSomething(
//   arr_ = [],
//   method = "value",
//   wanted = "",
//   caseInsensive = false
// ) {
//   if (!caseInsensive) {
//     wanted = wanted.toLowerCase();
//   }

//   if (method === "index") {
//     return arr_.findIndex((el) => el === wanted);
//   } else if (method === "value") {
//     return arr_.find((el) => el === wanted);
//   } else {
//     return arr_;
//   }
// }

// console.log(sliceArr(arrNumb)); //(array, start (opt), end (opt))
// console.log(sliceArr(arrNumb, 1, 5)); //(array, start (opt), end (opt))

// console.log(findSomething(arrStr, "index", "dear", true));
//(arr, index= findIndex/value= find, elem, caseInsesitve (default false))

// let ar = [1, 2, 3, 4, "s"];

// let reduced = ar
//   .filter((item) => typeof item == "number")
//   .map((item) => item * 2)
//   .reduce((acc, item) => {
//     return acc + item;
//   }, 0);

// console.log(reduced);

let students = [
  {
    name: "alex",
    age: 25,
    course: "webdev",
    coursePrice: 120,
    paid: true,
    id: 1,
  },
  {
    name: "sveta",
    age: 17,
    course: "painting",
    coursePrice: 110,
    paid: true,
    id: 2,
  },
  {
    name: "nina",
    age: 52,
    course: "webdev",
    coursePrice: 120,
    paid: false,
    id: 3,
  },
  {
    name: "ivan",
    age: 62,
    course: "handmade",
    coursePrice: 130,
    paid: false,
    id: 4,
  },
  {
    name: "boris",
    age: 19,
    course: "game design",
    coursePrice: 140,
    paid: true,
    id: 5,
  },
];

students = [
  ...students,
  {
    name: "mila",
    age: 24,
    course: "game design",
    coursePrice: 140,
    paid: false,
    id: 6,
  },
  {
    name: "andrew",
    age: 37,
    course: "graph design",
    coursePrice: 110,
    paid: true,
    id: 7,
  },
];

function getTotalPaid(arr, item, initVal = 0) {
  const total = arr.reduce((acc, itm) => acc + itm.coursePrice, initVal);
  return total;
}

const paidStudents = students.filter((student) => student.paid === true);
const unpaidStudents = students.filter((student) => student.paid !== true);
const youngStudents = students.filter((student) => student.age <= 30);
const sortAgeStudents = students.sort((a, b) => a.age - b.age);
const totalPaidSum = getTotalPaid(paidStudents);
const totalUnpaidSum = getTotalPaid(unpaidStudents);

console.log(totalUnpaidSum);
