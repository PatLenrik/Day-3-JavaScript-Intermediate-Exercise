let Martin = [76,64,81,57,94];
let Thomas = [85,49,81,72,55];
let Klaus = [65,91,84,67,85];
let Maria = [93,70,81,64,84];
let David = [81,99,71,100,69];
let students = [Martin, Thomas, Klaus, Maria, David]; // 2D array
let studentsName = ["Martin", "Thomas", "Klaus", "Maria", "David"];

// function to calculate of average of each students
function average(parameter) {
let sum = 0; 
for(i = 0; i < 5; i++) {
    let help = sum + parameter[i];
    sum = help;
    // console.log(sum );
}
let avg = sum/5;
// console.log(avg);
return avg;
}


// function to write the note
function note(params) {
if (params < 60 ) {
    console.log("F");
}else if (params < 70 ) {
    console.log("D");
}else if (params < 80 ) {
    console.log("C");
}else if (params < 90 ) {
    console.log("B");
}else {
    console.log("A");
} 
return;
}

//new array for averages of students and run 2 previous function for each studnet
let avgStudents = new Array(5);
for (let j =0; j<5;j++){
console.log(average(students[j]));
console.log(studentsName[j] +" got the note :");
note(average(students[j]));

 avgStudents[j] = average(students[j])
}

//calculating average of averages
let avgSum = 0
for (let k =0; k <5; k++) {
  let helpAvg = avgSum + avgStudents[k];
  avgSum = helpAvg;
}

let avgClass = avgSum/5;
console.log("The class has:");

//called again funcion to choose the nate of the grade 
note(avgClass);
