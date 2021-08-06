function getValues() {
    //1. get value to test Fizz
    let fizzValue = document.getElementById("fizzValue").value;

    //2. get value to test Buzz
    let buzzValue = document.getElementById("buzzValue").value;


    //3. check for numbers
    fizzValue = parseInt(fizzValue);

    //4. check for numbers
    buzzValue = parseInt(buzzValue);

    //5. validate that "fizzValue" and "buzzValue" are actually Numbers.
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        //6. we call generateNumbers
        let fdArray = FizzBuzz(fizzValue, buzzValue);
        //7. we call displayNumbers
        displayData(fbArray);

    } else {
        //send an alert to the user with the message "You must enter integers"
        alert("You must enter integers.");
    }

}

// Fizz Buzz with a for loop
function fizzBuzz(fizzValue, buzzValue) {

    let returnArray = [];

    //"i" as the loop control variable
    for (let index = 1; index <= 100; index++) {


        //check if divisible by 3 & 5
        //check if divisible by fizz(3)
        //check if divisible by buzz (5)
        if (i % fizzValue == 0 && i % buzzValue) {
            //onto the "returnArray"
            returnArray.push(`FizzBuzz`);
        } else if (i % fizzValue == 0) {
            returnArray.push(`Fizz`);
        } else if (i % buzzValue == 0) {
            returnArray.push(`Buzz`);
        } else {
            returnArray.push(i);
        }
    }
    return returnArray;
}



//custom display function
function displayData(fbArray) {

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the row from the template
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fbData.length; i += 5) {
        const tableRow = document.importNode(templateRow.content, true);
        //grab only the columns in the template
        rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];

        rowCols[1].classList.add(fbData[i + 1]);
        rowCols[1].textContent = fbData[i + 1];

        rowCols[2].classList.add(fbData[i + 2]);
        rowCols[2].textContent = fbData[i + 2];

        rowCols[3].classList.add(fbData[i + 3]);
        rowCols[3].textContent = fbData[i + 3];

        rowCols[4].classList.add(fbData[i + 4]);
        rowCols[4].textContent = fbData[i + 4];

        tableBody.appendChild(tableRow);
    }
}