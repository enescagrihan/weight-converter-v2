document.getElementById("output").style.visibility = "hidden";

document.getElementById("input").addEventListener("input", (e) => {
    let lbs = e.target.value;
    document.getElementById("output").style.visibility = "visible";
    let opt = document.getElementById("select").value;
    if(opt == 1) {
        document.getElementById("title").innerHTML = "Grams";
        document.getElementById("result").innerHTML = lbs / 0.0022046;
    }
    else if(opt == 2) {
        document.getElementById("title").innerHTML = "Kilograms";
        document.getElementById("result").innerHTML = lbs / 2.2046;
    }
    else if(opt == 3) {
        document.getElementById("title").innerHTML = "Ounces";
        document.getElementById("result").innerHTML = lbs * 16;
    }
})