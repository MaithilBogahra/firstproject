import logo from './logo.svg';
import './App.css';
import Demo from './component/Demo';

function App() {
  let data = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];
  let fdata = data.filter((a, i) => a.status === true && a.expiry >= 2022);
  
  let totalprice = fdata.reduce((acc, p, i) => acc + p.price, 0);
  console.log(totalprice)
  return (
    <div>
      <table id="mytable" border="1">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Expiry</th>
          <th>Status</th>
          <th>Totalprice</th>
        </tr>

        {
          fdata.map((a, i) =>
          <tr>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.quantity}</td>
              <td>{a.price}</td>
              <td>{a.expiry}</td>
              <td>{a.status.toString()}</td>
              <td rowSpan={{totalprice ? 2 : 1 }}>{totalprice}</td>
            </tr>

)
        }
      </table>
    </div>
  );

}

export default App;
// const person = {
//   name: "Amit",
//   age: 25
// }
// console.log(person.name,person.age);
// const person = [
//   {
//     name: "Amit",
//     age: 25,
//   },
//   {
//     name: "Piyush",
//     age: 40,
//   }
// ];

// person.map((p) => {
//   console.log(p.name,p.age);
// })

// const person = {
//   name: "Amit",
//   age: 25,
//   course: [
//     "C",
//     "HTML"
//   ]
// }

// console.log(person.name,person.age);
// person.course.map((c) =>{
// console.log(c);
// })

// const person = [
//   {
//     name: "Amit",
//     age: 25,
//     course: [
//       "C",
//       "HTML"
//     ]
//   },
//   {
//     name: "Ajay",
//     age: 40,
//     course: [
//       "Java",
//       "JavaScript"
//     ]
//   }
// ]
// person.map((p) =>{
//   console.log(p.name,p.age);
//   p.course.map((p1)=>{
//     console.log(p1);
//   })
// })

// const myObj = {
//   name: "John",
//   age: 30,
//   cars: {
//     car1: "Ford",
//     car2: "BMW",
//     car3: "Fiat"
//   }
// };
// console.log(myObj.name, myObj.age, myObj.cars.car1, myObj.cars.car2, myObj.cars.car3)
// let cars;
// for (let k in myObj) {
//   if (myObj[k] == myObj.cars) {
//     for (let j in myObj.cars) {
//       console.log(myObj.cars[j]);
//     }
//   } else {
//     console.log(myObj[k]);
//   }
// }

// let data = {
//     personal_info: {
//       name: "maithil",
//       age: 25,
//       city: "surat"
//     },
//     course: ["C", "javaScript", "React"],
//     branches: {
//       rw1: {
//         admission: 50,
//         vacant_seat: 10
//       },
//       rw2: {
//         admission: 30,
//         vacant_seat: 20
//       },
//       rw3: {
//         admission: 25,
//         vacant_seat: 26
//       },
//       rw4: {
//         admission: 40,
//         vacant_seat: 10
//       },
//     }
//   };

// for (let i in data) {
//   if (data[i] == data.personal_info) {
//     for (let j in data.personal_info) {
//       console.log(j, data.personal_info[j]);
//     }
//   } else if (data[i] == data.course) {
//     // for (let k in data.course) {
//     //   console.log(k,data.course[k]);
//     // }
//     data.course.map((p) => {
//       console.log(p);
//     })

//   } else if (data[i] == data.branches) {
//     for (let m in data.branches) {
//       // console.log(data.branches[m]);
//       if (data.branches[m] == data.branches.rw1) {
//         for (let a in data.branches.rw1) {
//           console.log(a, data.branches.rw1[a]);
//         }
//       }
//       if (data.branches[m] == data.branches.rw2) {
//         for (let b in data.branches.rw2) {
//           console.log(b, data.branches.rw2[b]);
//         }
//       }
//       if (data.branches[m] == data.branches.rw3) {
//         for (let c in data.branches.rw3) {
//           console.log(c, data.branches.rw3[c]);
//         }
//       }
//       if (data.branches[m] == data.branches.rw4) {
//         for (let d in data.branches.rw4) {
//           console.log(d, data.branches.rw4[d]);
//         }
//       }

//     }
//   }
// }

// let data = [
//   {
//     personal_info: {
//       name: "maithil",
//       age: 25,
//       city: "surat"
//     },
//     course: ["C", "javaScript", "React"],
//     branches: {
//       rw1: {
//         admission: 50,
//         vacant_seat: 10
//       },
//       rw2: {
//         admission: 30,
//         vacant_seat: 20
//       },
//       rw3: {
//         admission: 25,
//         vacant_seat: 26
//       },
//       rw4: {
//         admission: 40,
//         vacant_seat: 10
//       },
//     }
//   }
// ];


// data.map((g) => {
//   for (let i in g) {
//     if (g[i] == g.personal_info) {
//       for (let j in g.personal_info) {
//         console.log(j, g.personal_info[j]);
//       }
//     } else if (g[i] === g.course) {
//       // for (let k in g.course) {
//       //   console.log(k,g.course[k]);
//       // }
//      g.course.map((p) => {
//         console.log(p);
//       });

//     } else if (g[i] === g.branches) {
//       for (let m in g.branches) {
//         // console.log(data.branches[m]);
//         if (g.branches[m] === g.branches.rw1) {
//           for (let a in g.branches.rw1) {
//             console.log(a, g.branches.rw1[a]);
//           }
//         }
//         if (g.branches[m] === g.branches.rw2) {
//           for (let b in g.branches.rw2) {
//             console.log(b, g.branches.rw2[b]);
//           }
//         }
//         if (g.branches[m] === g.branches.rw3) {
//           for (let c in g.branches.rw3) {
//             console.log(c, g.branches.rw3[c]);
//           }
//         }
//         if (g.branches[m] === g.branches.rw4) {
//           for (let d in g.branches.rw4) {
//             console.log(d, g.branches.rw4[d]);
//           }
//         }

//       }
//     }
//   }
// });

// array spreding


// let arr1 = [10,20,30,40,50];
// //  COPY
// let arr2 = [...arr1];
// console.log(arr2);

// // merge
// let arr3 = [99,...arr1,100];
// console.log(arr3);

// // destrucring

// const[a,b,c,d,e] = arr1;
// console.log(d);

