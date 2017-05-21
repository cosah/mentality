var team = [];
var score1avg = 0;
var score2avg = 0;
var score3avg = 0;
var score4avg = 0;
var scoreavg = 0;
window.onload = function () {
  teamInit();
  score1avg = avgScore1(score1avg);
  score2avg = avgScore2(score2avg);
  score3avg = avgScore3(score3avg);
  score4avg = avgScore4(score4avg);
  scoreavg = roundToTwo((score1avg + score2avg + score3avg + score4avg)/4);
  teamScore();
};

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function avgScore1(score){
  for(var x in team){
    score += team[x].score1;
  }
  score = score / team.length;
  return score;
}
function avgScore2(score){
  for(var x in team){
    score += team[x].score2;
  }
  score = score / team.length;
  return score;
}
function avgScore3(score){
  for(var x in team){
    score += team[x].score3;
  }
  score = score / team.length;
  return score;
}
function avgScore4(score){
  for(var x in team){
    score += team[x].score4;
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

function teamScore(){
  if(scoreavg >= 4){
    document.getElementById("score").innerHTML="<span class='label label-success' id='avgscore'>Team Mentality Score</span>";
  }else if(scoreavg >= 3){
    document.getElementById("score").innerHTML="<span class='label label-info' id='avgscore'>Team Mentality Score</span>";
  }else if (scoreavg >= 2) {
    document.getElementById("score").innerHTML='<span class="label label-warning" id="avgscore">Team Mentality Score</span>';
  }else{
    document.getElementById("score").innerHTML='<span class="label label-danger" id="avgscore">Team Mentality Score</span>';
  }
  document.getElementById("avgscore").innerHTML= "Team Mentality Score: " + scoreavg;
}
