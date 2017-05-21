var team = [];
var score1avg = 0;
var score2avg = 0;
var score3avg = 0;
var score4avg = 0;
var scoreavg = 0;
window.onload = function () {
  teamInit();
  score1avg = avgScore(score1avg, score1);
  score2avg = avgScore(score2avg, score2);
  score3avg = avgScore(score3avg, score3);
  score4avg = avgScore(score4avg, score4);
  scoreavg = (score1avg + score2avg + score3avg + score4avg)/4;
};

function avgScore(score, iscore){
  for(var x in team){
    score += x.iscore;
  }
  score = score / team.length;
  return score;
}

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
