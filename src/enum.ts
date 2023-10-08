enum ShareKind {
    Circle,
    Square,
}

const myShape = ShareKind.Circle;

enum StatusCode {
    ERROR = 500,
    NOT_FOUND = 404,
}

StatusCode.ERROR;

enum Grades {
    Junior = 'Junior',
    Middle = 'Middle',
    Senior = 'Senior',
}

interface Dev {
    login: string;
    skills: string[];
    level: Grades;
}

const dev2: Dev = {
    login: 'svyat',
    skills: ['Junior'],
    level: Grades.Junior,
};

function upGrade(user: { level: Grades }) {
    if (user.level === Grades.Junior) {
        user.level = Grades.Middle;
    }
}
upGrade(dev2);
