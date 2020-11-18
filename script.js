//easy
function exercise(running) {
    return `Today\'s exercise is ${running}.`
}

let run = exercise("running")
let swim = exercise("swimming")

console.log(run);
console.log(swim);

//medium 
function cutPizzaSlices(x){

    var pizzaSlices = x;
    
    return function (y){
        return x/y;
    }
}
var cutPizzaSlices = num => numPeople => (num/numPeople);

var sharePizza = cutPizzaSlices(8);
console.log(`Each person gets ${sharePizza(2)} slices of pizza`)
console.log(`Each person gets ${sharePizza(3)} slices of pizza`)

//hard
class pii{
    
    name;
    ssn;

    constructor(name){
        this.name = name;
        this.ssn = "123-45-6789"
    }

    getName(){
        return this.name;
    }

}
var x1 = new pii("Pikachu");
console.log(x1.name);


//very hard

class Person{
    
    name;
    job;
    age;
    constructor(name, job, age){
        this.name = name;
        this.job = job;
        this.age = age;
    }
    excercise(){
        console.log(`I don't excersise`);
    }

    fetchJob(){
        console.log(`${this.name} is a ${this.job}`)
    }
}

var p1 = new Person("Andrew", "R2H", 22);

p1.excercise();
p1.fetchJob();

class Programmer extends Person{

    languages;
    busy;

constructor(name, job, age, languages){
    super(name, job, age);
    this.languages = languages;
    this.busy = true;
}
completeTask(){
    this.busy = false;
}
acceptNewTask(){
    this.busy = true;
}
offerNewTask(){
    if(this.busy){
        console.log(`${this.name} can't accept any new tasks right now`)
    }else{
        console.log(`${this.name} would love to take on a new responsibility`)
    }
}
learnLanguage(newLang){
    this.languages.push(newLang);
}
listLanguage(newLang){
    this.languages.forEach(function(currentValue, index, arr){console.log(arr[index])})
}
}
var p2 = new Programmer("Jordan", "Mechanic", 25, ["javascript", "php"])

console.log(p2.busy)
p2.completeTask();
console.log(p2.busy);
p2.acceptNewTask();
console.log(p2.busy)
p2.completeTask();
p2.offerNewTask();
console.log(p2.languages);
p2.learnLanguage("mySQL");
p2.listLanguage();
