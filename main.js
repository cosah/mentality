var team = [];
window.onload = function () {
  teamInit();
};

function student(first, last, dob, major, gradyr, sex) {
    this.firstName = first;
    this.lastName = last;
    this.dob = dob;
    this.major = major;
    this.gradYear = gradyr;
    this.gender = sex;
    this.score1 = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    this.score2 = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    this.score3 = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    this.score4 = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}

function teamInit(){
  team.push(new student("Bill", "Wallace", "1995/05/05", "English", "2018", "Male"));
  team.push(new student("Jeff", "Goldblum", "1997/11/07", "Paleontology", "2019", "Male"));
  team.push(new student("Jerry", "Tom", "1996/12/25", "Civil Engineering", "2018", "Male"));
  team.push(new student("Lemmy", "Seia", "1999/02/20", "Optometry", "2020", "Male"));
  team.push(new student("Nadah", "Ledeigh", "1995/01/09", "Gender Studies", "2018", "Male"));
  team.push(new student("Bart", "Hoffman", "1996/04/19", "Chemistry", "2019", "Male"));
  team.push(new student("Henry", "Mao", "1997/08/05", "Chinese History", "2019", "Male"));
  team.push(new student("Rich", "Alpert", "1999/09/23", "Religion", "2020", "Male"));
}
