class Course {
    constructor({
        name,
        difficultyLevel,
    }) {
        this._name = name;
        this._difficultyLevel = difficultyLevel;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get difficultyLevel() {
        return this._difficultyLevel;
    }

    set difficultyLevel(difficultyLevel) {
        this._difficultyLevel = difficultyLevel;
    }
}

const course1 = new Course({
    name: "Curso definitivo de HTML y CSS",
    difficultyLevel: "Basico",
});

const course2 = new Course({
    name: "Curso practico de HTML y CSS",
    difficultyLevel: "Basico",
});

const course3 = new Course({
    name: "Curso de DataBusiness",
    difficultyLevel: "Basico",
});

const course4 = new Course({
    name: "Curso de DataViz",
    difficultyLevel: "Intermedio",
});

const course5 = new Course({
    name: "Curso introducción a la producción de videojuegos",
    difficultyLevel: "Basico",
});

const course6 = new Course({
    name: "Curso de Unreal Engine",
    difficultyLevel: "Intermedio",
});

const course7 = new Course({
    name: "Curso de Unity 3D",
    difficultyLevel: "Intermedio",
});



class LearningPath {
    constructor({
        name,
        courses = []
    }) {
        this._name = name;
        this._courses = courses;
    }

    addCourse(course) {
        this.courses.push(course);
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get courses() {
        return this._courses;
    }

    set courses(courses) {
        this._courses = courses;
    }
}


// Rutas de aprendizaje
const webSchool = new LearningPath({
    name: "Escuela de desarrollo web",
    courses: [
        course1,
        course2,
    ]
});

const dataScienceSchool = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        course3,
        course4,
    ]
});

const gameSchool = new LearningPath({
    name: "Escuela de desarrollo de videojuegos",
    courses: [
        course5,
        course6,
        course7,
    ]
});


class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this._name = name;
        this._email = email;
        this._username = username;
        this._twitter = twitter;
        this._instagram = instagram;
        this._facebook = facebook;
        this._approvedCourses = approvedCourses;
        this._learningPaths = learningPaths;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }

    get username() {
        return this._username;
    }
    set username(username) {
        this._username = username;
    }

    get twitter() {
        return this._twitter;
    }
    set twitter(twitter) {
        this._twitter = twitter;
    }

    get instagram() {
        return this._instagram;
    }
    set instagram(instagram) {
        this._instagram = instagram;
    }

    get facebook() {
        return this._facebook;
    }
    set facebook(facebook) {
        this._facebook = facebook;
    }

    get approvedCourses() {
        return this._approvedCourses;
    }
    set approvedCourses(approvedCourses) {
        this._approvedCourses = approvedCourses;
    }

    get learningPaths() {
        return this._learningPaths;
    }
    set learningPaths(learningPaths) {
        this._learningPaths = learningPaths;
    }
}

const Miguel = new Student({
    name: "Miguel",
    email: "miguel@platzi.com",
    learningPaths: [
        webSchool,
        gameSchool,
    ],
    username: "miguel",
    twitter: "miguelPro",
    approvedCourses: [
        course1,
        course2,
        course5,
        course6,
        course7,
    ]
});

const Oscar = new Student({
    name: "Oscar",
    email: "oscar30@platzi.com",
    learningPaths: [
        webSchool,
        dataScienceSchool,
    ],
    username: "oscar",
    twitter: "oscarfeliz",
    approvedCourses: [
        course1,
        course2,
        course3,
        course4,
    ]
});