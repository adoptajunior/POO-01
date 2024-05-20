// Crear la clase Person, con propiedades name, 
// age y genre, y el método obtDetails(), 
// que muestra por pantalla las propiedades de la persona.

class Person {
    constructor(name, age, genre) {
        this.name = name;
        this.age = age;
        this.genre = genre;
    }
    static obtDetails(name, age, genre) {
        console.log(`Te llamas ${name}, tienes ${age} años y eres ${genre}.`);
    }
}

const JON = new Person('Jon', 34, 'un zombie');
console.log(JON);

