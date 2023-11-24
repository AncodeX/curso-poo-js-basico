const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso practico de HTML y CSS"
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
}

natalia.cursosAprobados.push("Curso de Responsive Design");

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function(nuevoCursito) {
    //     this.aprobarCurso.push(nuevoCursito);
    // }
}
Student.prototype.aprobarCurso = function(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student("Juanita", 20, ["Curso basico de JavaScript", "Curso de programación orientada a objetos con C#"]);

class Student2 {
    constructor({
        cursosAprobados = [],
        age,
        email,
        name,
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguel = new Student2({
    name: "Miguel",
    email: "miguel30@platzi.com",
    age: 30,
});