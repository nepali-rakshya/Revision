let user = {
  firstName: "Rakshya",
  lastName: "Nepali",
  role: "React Developer",
  age: 22,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    let count = 0;
    this.courseList.forEach((element) => {
      console.log(element);
      count++;
    });
    console.log(count);
  },
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    let fName = value.split(" ");
    this.firstName = fName[0];
    this.lastName = fName[1];
  },
};

// user.fullName = "Helen Killer";
// console.log(user.fullName);

user.buyCourse("Science");
user.buyCourse("Social");
user.buyCourse("English");
user.buyCourse("Nepali");
user.buyCourse("Japanese");
user.getCourseCount();
