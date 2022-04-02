
function updateRate(){
    var interest = document.getElementById("rate").value;
    document.getElementById("rate_display").innerHTML = interest + '%';
}
function compute() 
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    var result = principal * years * rate /100;
    if (principal <=0){
        window.alert("enter a positive number");
    }

    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("actualYear").innerHTML = year;
    document.getElementById("result").innerText=result;
}
