document.write("<br><br><b>OPERADORES MATEMATICOS if</b>")
document.write("<br><br><b>ADICION</b>")



var texto1="Mi nombre es Ricardo Samboni ";
var texto2="aprendo JavaSript";

console.log(texto1+texto2)
document.write(texto1+texto2)

var x="50"
var y="200"

console.log(x+y)

document.write("<br><br><b>CONDICIONAL if</b>")

var course =3
if (course ==1)
{
    document.write("<h1>HTML Tutorial</h1>");
    } else if 
    (course==2)
    {document.write("<h1>CSS tutorial</h1>");
    } else 
    {
    document.write("<h1>JavaScript Tutorial</h1>")
}

document.write("<b>CONDICIONAL Switch</b><br>")

var day =6
if (day >=1 && day <=7)
{
    switch (day)
    { 
        case 1:
        document.write("dia: LUNES");
        console.log ("dia: LUNES")
        break;case 2:
        document.write("dia: MARTES");
        console.log ("dia: MARTES")
        break;case 3:
        document.write("dia: MIERCOLES");
        console.log ("dia: MIERCOLES")
        break;case 4:
        document.write("dia: JUEVES");
        console.log ("dia: JUEVES")
        break;case 5:
        document.write("dia: VIERNES");
        console.log ("dia: VIERNES")
        break;case 6:
        document.write("dia: SABADO");
        console.log ("dia: SABADO")
        break;case 7:
        document.write("dia: DOMINGO");
        console.log ("dia: DOMINGO")
        break; 
    }
}
    else {
            alert ("La semana tiene 7 dias");
        }

document.write("<br><br><b>BUCLE for</b><br>")        
for (i=1; i<=5; i++)
{
    document.write(i+"<br/>")
}

document.write("<br><b>BUCLE while</b><br>")  
var i=0;
while (i<=10)
{document.write(i+"<br/>");i++;}

document.write("<br><b>BUCLE Do while</b><br>")  

console.log("bucle do while");
var i=20;
do{
    document.write(i+"<br/>");
    console.log(i+"\n");i++;
}
while (i<=25);

document.write("<br><b>Diferencias entre el BREAK y CONTINUE</b><br>")  

for (i=0; i<=10; i++)
{
    if (i==5){break};
document.write(i+"<br/>");
}

console.log("Continue");
for (i=0; i<=10; i++)
{
    if (i==5){continue};
console.log(i);
}

document.write("<br><br><b>FUNCIONES</b><br>")

function decirHola(nombre) {
    alert("hola, "+nombre);
}
    decirHola("Ricardo", "40");

function decirHola (nombre, edad)

{
    document.write(nombre + " tiene "+edad + " Años.")
}
document.write("<br><br><b>FUNCION CON DECLARACION RETURN</b><br>")

function myFunction(a, b)
{
    return a*b;
}
var xy=myFunction(5, 6);
document.write(xy);


document.write("<br><br><b>VENTANAS</b><br>")
document.write("<b>'Alert'</b><br>")
document.write("Quieres relamente salir de la pagina<br>")
alert("Quieres realmente salir de la pagina");

document.write("<b>'Prompt'</b><br>")
document.write("Porfavor ingrese su nombre <br>")
var user = prompt("Porfavor ingrese su nombre");
alert(user);

document.write("<b>'Confirm'</b><br>")
document.write("Gracias por visitarnos o Gracias por pernamecer con nosotros<br>");

var result = confirm("Realmente quiere salir de esta pagina?");
if (result==true) 
{alert("Gracias por visitarnos");
}
else
{alert("Gracias por pernamecer con nosotros");  
}

document.write("<b>DIFERENCIAS ENTRE VAR Y LET</b><br>")
document.write("<b>'VAR'</b><br>")

function varTest() 
{
    var x1 = 1;
    if (true)
    {var x1 = 2;
    console.log(x1);
    ducument.write(x1)
    }
    console.log(x1);       
    document.write(X1);
}
document.write("<b>'LET'</b><br>")
function letTest()
{
    let x2 = 1;
    if (true)
    {let x2 = 2;
    console.log(x2);
    document.write(x2);
    }
    console.log(x2);
    document.write(x2);
}
document.write("<b>'USO LET EN BUCLES'</b><br>")

for(let i=0; i<3; i++)
{
    document.write(i, '<br>');
    console.log(i);
}
document.write("<b>USO DEL CONST</b><br>")

const a='Hola';
document.write(a, "<br>");

document.write("<b>USO TEMPLATE LITERALS</b><br>")

let c =8;
let b=34;
let msg =`la suma es ${c+b}`;
console.log(msg);
document.write(msg,"<br>");

document.write("<b>BUCLES Y FUNCIONES</b><br>")

let list = ["x","y","z"];
for (let val of list)
{console.log(val);document.write(val,"<br>");}


const add = (x,y) =>
{
    let sum =x+y; document.write(sum);
}
const test= (a, b=3, c=42) =>
{return a+b+c;
}
console.log(test(5));

document.write("<b>OBJETOS</b><br>")

let tree ={
    height:10,
    color: 'green',
    grow() {
        this.height+=2
    }
};
tree.grow();
console.log(tree.height);

let height =5;
let health =100;
let athlete={height,
health};
console.log(athlete);
document.write(athlete);


let prop='Nombre';
let id= '79953';
let mobile ='3192300';

let usuario =
{
    [prop]:'Ricardo', [`usuario_${id}`]: `${mobile}`};
console.log(usuario);

var i=0;
var d={
    ['foo'+ ++i]:i,
    ['foo'+ ++i]:i,
    ['foo'+ ++i]:i
    };
console.log(d);

var param ='size';
var config=
{[param]:12,
    ['mobile'+param.charAt(0).toUpperCase()+param.slice(1)]:4
};
console.log(config);

let person={
    nombre:'Ricardo',
    edad:40,
    sexo:'masculino'
};
let estudiante={
    nombre:'Bob',
    edad:20,
    xp:'2'
};
let newEstudiante=Object.assign({},person,estudiante);
console.log(person);
console.log(newEstudiante);


let persona={
    nombre:'Ricardo',
    age:40
}
let newPersona=Object.assign({},persona);
newPersona.nombre='Bob';
console.log(persona.nombre);
console.log(newPersona.nombre);

console.log("DESESTRUCTURACION");

let arr =['1','2','3'];
let[uno, dos, tres]=arr;

console.log(uno);
console.log(dos);
console.log(tres);

console.log("Descomponiendo objetos")

let  obj={h:100,s:true};
let{h,s}=obj;
console.log(h);
console.log(s);

let f,g;
({ f,g}={f:'Hola ',g:'Ricardo'});
console.log(f+g);

console.log("Asignar el objeto a nuevos nombres de variables")

var o={k:42,s:true};
var{k:foo,s:bar}=o;
console.log("console.log(k)ERROR" );
console.log(foo);

console.log("Asignar valores predeterminados a variables")

var obje={cc:42, name:"Ricardo"};
let {cc=10,age=20}=obje;

console.log(cc);
console.log(age);


document.write("<br><br><b>PARAMETROS REST Y SPREAD<b><br>")
console.log("Parametros Rest y Spread");
function myFunction(w,x,y,z){
    console.log(w+x+y+z);
}
var args=[1,2,3];
myFunction.apply(null, args.concat(4));

const myFUnction=(w,x,y,z)=>
{
    console.log(w+x+y+z);
};
let Args=[1,2,3];
myFUnction(...Args, 4);

console.log("ejemplo");

var dateFields = [1979, 9, 29];
var date = new
Date(...dateFields);
console.log(date);
document.write(date);

console.log("Spread en literals de arrays");

var Arr=["one", "Two", "Five"];

Arr.splice(2, 0, "Three");
Arr.splice(3, 0, "Four");
console.log(Arr);

let newARr=['Three','Four'];
let ARr=['One','Two', ...newARr, 'Five'];
console.log(ARr);

console.log("Spread en literals de Objetos");

const obj1={foo:'bar',x:42};
const obj2={foo:'baz',y:5};

const clonedObj={...obj1};
const mergeObj={...obj1,...obj2};
console.log(clonedObj);
console.log(mergeObj);

console.log("no puedes conbinarlos no obtendras los resultados esperados")

const obje1={foo:'bar',x:42};
const obje2={foo:'baz',y:5};
const merge=(...objects)=>
({...objects});
let mergedOBje=merge(obje1, obje2);
console.log(mergedOBje);

let mergedOBje2=merge({}, obje1,obje2);
console.log(mergedOBje2)

console.log("CLASES");

class Rectangulo {
    constructor(alto, ancho){
        this.alto=alto;
        this.ancho=ancho;
    }
    get area(){
        return this.clacArea();
        }
        clacArea(){
            return this.alto * this.ancho;
        }
}
const cuadrada = new Rectangulo(5,5);
console.log(cuadrada.area);

class Point {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static distancia(a,b){
        const dx=a.x - b.x;
        const dy=a.y - b.y;
        return Math.hypot(dx, dy);
    }
}
const p1 = new Point (7,2);
const p2 = new Point (3,8);
console.log(Point.distancia(p1,p2));

console.log("Herencia");

class Animal{
    constructor(nombre){
        this.nombre=nombre;
    }
    speak(){
        console.log(this.nombre + 'hace un sonido');
    }
}
class Perro extends Animal{
    speak(){
        console.log(this.nombre + ' ladra.');
    }
}
let perro = new Perro ('Igor');
perro.speak();

class ANimal{
    constructor(nombre){
        this.nombre=nombre;
    }
    speak(){
        console.log(this.nombre + ' hace un sonido');
    }
}
class PErro extends ANimal{
    speak()
    {
        super.speak();
        console.log(this.nombre + ' ladra.');
    }
}
let peRRo = new PErro ('Igor');
peRRo.speak();


console.log("objeto MAP");

let map = new Map([['k1', 'v1'],['k2','v2']]);
console.log(map.size);

let mapa = new Map();
mapa.set('k1','v1').set('k2','v2');
console.log(mapa.get('k1'));
console.log(mapa.has('k2'));

for (let kv of mapa.entries())
console.log(kv[0]+ " : " + kv[1]);

console.log("objeto SET");
console.log("Sintaxis 'new set'");
let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);
console.log(set.size);

console.log("Metodos, definicion");

let SEt = new Set();
SEt.add(5).add(9).add(59).add(9);
console.log(SEt.has(9));

for (let v of SEt.values())
console.log(v);

console.log("Promises");

function asyncFunc(work)
{
    return new
    Promise(function(resolve, reject)
    {
        if (work === "")
        reject(Error("Nada"));
        setTimeout(function() {resolve(work);}, 1000);
    });
}

asyncFunc("Work 1")
.then(function(result)
{
    console.log(result);
    return asyncFunc("Work 2");

}, function(error)
{
    console.log(error);
})
.then(function(result)
{
    console.log(result);
}, function(error)
{
    console.log(error);
});
console.log("Fin");


console.log("ITERADORES Y GENERADORES");

let myIterableObj={
    [Symbol.iterator]: function*()
{
        yield 1; yield 2; yield 3;}}

console.log([...myIterableObj]);

console.log("ejemplo en una function");

function* idMaker()
{
    let index = 0;
    while (index<5)
    yield index++;
}
var gen =idMaker();
console.log(gen.next().value);

console.log("ejemplo con 7 elementos usando Symbol.iterator");

const arre = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj=
{
    [Symbol.iterator]: function*()
    {
        for(let index of arre)
        {
            yield `${index}`;
        }
    }
};
const all =[...my_obj]
.map(i=> parseInt(i, 10))
.map(Math.sqrt)
.filter((i) => i < 5)
.reduce((i, d) => i + d);
console.log(all);

console.log("MODULOS");

//lib/math.js//

//export let sum = (x, y) =>
//{ return x+y; }
//export let pi = 3.14;

//app.js
//import * as math from "lib/math"
//console.log(`2p=+${math.sum(math.pi, math.pi)}`)

console.log("METODOS INTEGRADOS");

console.log("antes");
[4, 5, 1, 8, 2, 0].filter(function(x){
    return x>3;
})[0];
console.log(x);

console.log("ahora");
[4,5,1,8,2,0].find(x=>x>3);
console.log(x);

console.log("obtener indice del elemento");
[4,5,1,8,2,0].findIndex(x=> x > 3);
console.log(x);


console.log("Repeticiones de Strings")
console.log("Antes");
console.log(Array(3+1).join("foo"));

console.log("ahora");
console.log("foo".repeat(3));

console.log("buqueda de strings");

"soloAprender".indexOf("Solo")===0;
"soloAprender".indexOf("Solo")===(4- "Solo".lenght);
"soloAprender".indexOf("lole")!==-1;
"soloAprender".indexOf("olo",1)!==-1;
"soloAprender".indexOf("olo",2)!==-1;
   