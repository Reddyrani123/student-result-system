function calculateTotal(m1, m2, m3){
    return m1 + m2 + m3;
}
function calculateAvg(total){
    return total / 3
}
function findGrade(avg){
    if(avg>=90){
        return "A"
    }
    else if(avg >= 75){
    return "B"
    }
    else if(avg >=50){
        return "C"
    }
    else{
        return "Fail"
    }
}

function percentage(total){
    return(total/300)*100;
}
function checkResults(avg){
    if(avg>=35){
        return "Pass";
        
       }
    else{
        return "Fail"
        }
}
function generateResults(){
    let name = document.getElementById("name").value;
    let m1 = Number(document.getElementById("mark_1").value);
    let m2 = Number(document.getElementById("mark_2").value);
    let m3 = Number(document.getElementById("mark_3").value);
    if (name === "" || m1 === "" || m2 === ""|| m3 === "" ){
        alert("please fill all fields");
        return;
    }
    let total = calculateTotal(m1, m2, m3);
    let average = calculateAvg(total).toFixed(2);
    let percent = percentage(total).toFixed(2);
    let grade = findGrade(average);
    let res = checkResults(average);
    let div =  document.getElementById("results")
    if(average>= 35){
        div.style.color = "lightgreen";
    }
    else{
        div.style.color = "red";
    }
    document.getElementById("results").innerHTML = 
    `Name: ${name} <br>
    Total : ${total} <br>
    Avarage : ${average} <br>
    Percentage : ${percent} <br>
    Grade : ${grade}<br>
    Result : ${res}`;



}