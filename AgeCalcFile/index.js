var dateOfBirth = document.getElementById("dateOfBirth")
var currentDate = document.getElementById("currentDate")
var calculateBtn = document.getElementById("calculateBtn")
var ageDisplay = document.getElementById("age")
ageDisplay.classList.add("hidden")
// btn click events 
calculateBtn.addEventListener("click" , ()=>{
    calculateAge()
})
// calculate function for age 
function calculateAge(){
    if((dateOfBirth.value === '' ) || (currentDate.value === '')){
        alert("Please enter date of birth and current date.")
        return 0
    }
    else{
        var Dob = new Date(dateOfBirth.value)
        var cdate = new Date(currentDate.value)
        var diff = cdate.getTime() - Dob.getTime()
        var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
        if (age <= 0 ) {
            ageDisplay.classList.add("hidden")
            alert("Correct date will be considered")
            
        }
        else{
            // ageDisplay.classList.add("flex")
        ageDisplay.classList.remove("hidden")
        ageDisplay.innerHTML = `Your Age is  ${age} Years Old `
        }
        // dateOfBirth.value = ''
        // currentDate.value = ''
        // age = 0
    }
}