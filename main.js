class Course {
    constructor({
        name,
        difficultyLevel,
    }) {
        this.name = name;
        this.difficultyLevel = difficultyLevel;
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
        this.name = name;
        this.courses = courses;
    }

    addCourse(course) {
        this.courses.push(course);
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
        this.name = name;
        this.email = email;
        this.username = username;
        this.twitter = twitter;
        this.instagram = instagram;
        this.facebook = facebook;
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
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