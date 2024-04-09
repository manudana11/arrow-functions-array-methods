// console.log('hola caracola');

// 1. Funciones flecha
// Convierte la siguiente función en una función flecha:
// function saludar() {
//   return "Hola";
// }

const saludar = () => 'Hola caracola';
console.log(saludar());


// Convierte la siguiente función en una función flecha en línea:
// function division(a,b) {
//   return a / b;
// }

const division = (a, b) => a/b;
console.log(division(10,2));

// Convierte la siguiente función en una función flecha:
// function miNombre(nombre) {
//   return `Mi nombre es ${nombre}`;
// }

const miNombre = nombre => `Mi nombre es ${nombre}`;
console.log(miNombre('Manuel'));

// Convierte las siguientes funciones en funciones flecha:
// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
// function test1(callback) {
//   callback();
// }

const test2 = () => console.log('Funcion test 2 ejecutada.');
test2();
const test1 = callback => test2();
test1();

// 2. Foreach
// Utiliza la siguiente array para resolver los próximos ejercicios: 
      
let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
        nombre: "Juan",
        edad: 35,
      },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

// Crea un array con la gente mayor de 25 años y muéstralo por consola.

gente.forEach(personas => {
    //console.log(personas);
    if (personas.edad > 25)  {
        console.log(personas);
    }
    console.log(personas);
});

// Crea un array con la gente que empieza por J. 

gente.forEach(porJ => {
    if (porJ.nombre.charAt(0) === 'J') {
        console.log(porJ);
    }
});

// 3. Map
// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.

const mayorDe25 = gente.map(personas => {
    if (personas.edad > 25) {
        return personas;
    } 
});

console.log(mayorDe25);

const arrMayor25 = mayorDe25.filter(mayor => mayor !== undefined);

console.log(arrMayor25);



// Crea un array con la gente que empieza por J. 

const letraJ = gente.map(porJ => {
    if (porJ.nombre.charAt(0) === 'J') {
        return porJ;
    }
});

console.log(letraJ);

const arrLetraJ = letraJ.filter(jota => jota !== undefined);

console.log(arrLetraJ);

// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numbers = [ 4, 5, 6, 7, 8, 9, 10];
// // Resultado esperado
// // [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

const numeroElevado = numbers.map(numerito => Math.pow(numerito, numerito));

console.log(numeroElevado);

// 4. Filter
// Crea un segundo array que devuelva los impares
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numImpares = numeros.filter(impares => {
    if (impares % 2 !== 0) {
        return impares;
    }
});

console.log(numImpares);

// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
const foodList = [
       { name: 'Tempeh', isVeggie: true },
       { name: 'Cheesbacon burguer', isVeggie: false },
       { name: 'Tofu burguer', isVeggie: true },
       { name: 'Entrecot', isVeggie: false }
     ];
     /* [
         'Que rico Tempeh me voy a comer!',
         'Que rica Tofu burguer me voy a comer!'
        ]
     */


const veganFood = foodList.filter(vegan => {
    if (vegan.isVeggie === true) {
        console.log(`Que rico ${vegan.name} me voy a comer!`)
    }
});


// 5. Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numerosReduce = [39, 2, 4, 25, 62];
// // Salida--> 483600

const sumaNumeros = numerosReduce.reduce((a, b)  => a * b);

console.log(sumaNumeros);

// Extras
// Map
// Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

const arrFrases = staff.forEach(worker => console.log(`${worker.name} es ${worker.role} y le gusta ${worker.hobbies[0]} y ${worker.hobbies[1]}`));


// Resultado esperado
/*
    [
      'Pepe es TheBoss y le gusta leer y ver pelis',
      'Ana es becaria y le gusta nadar y bailar',
      'Luis es programador y le gusta dormir y comprar',
      'Ana es becaria y le gusta nadar y bailar',
      'Carlos es secretario y le gusta fútbol y queso'
    ]
 */
// Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:
const foodList1 = ["Pizza", "Ramen", "Paella", "Entrecot"];

const frasesComida = foodList1.map(comiditas => {
    switch(comiditas) {
        case 'Pizza':
            return`Como soy de Italia, amo comer ${comiditas}`;
        case 'Ramen':
            return`Como soy de Japón, amo comer ${comiditas}`;
        case 'Paella':
            return`Como soy de Valencia, amo comer ${comiditas}`;
        case 'Entrecot':
            return`Aunque no como carne, el ${comiditas} es sabroso`;
    }
});

console.log(frasesComida)
// //Resultado esperado
// /* [
//     'Como soy de Italia, amo comer Pizza',
//     'Como soy de Japón, amo comer Ramen',
//     'Como soy de Valencia, amo comer Paella',
//     'Aunque no como carne, el Entrecot es sabroso'
//    ]
// */
// Filter
// Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [
        {
          name: 'Mobile phone',
          price: 199
        },
        {
          name: 'TV Samsung',
          price: 459
        },
        {
          name: 'Viaje a cancún',
          price: 600
        },
        {
          name: 'Mascarilla',
          price: 1
        }
      ];

const mas300 = inventory.map(numeritos => {
  if (numeritos.price > 300) {
    return numeritos.name;
  }
});

//console.log(mas300)

const arrMas300 = mas300.filter(jota => jota !== undefined);
console.log(arrMas300);

      /*
        [
          'TV Samsung,',
          'Viaje a Cancún'
        ]
      */
// Reduce
// Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
    'Me',
    'llamo',
    /* Tu nombre aquí! */,
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
    ];

const nombre = 'Manu';
sentenceElements[2] = nombre;

const frasecita = sentenceElements.reduce((a, b, c) => {
  c = ' ';
  return a + c + b;
});

console.log(frasecita);
   
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'