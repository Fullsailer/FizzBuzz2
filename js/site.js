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

        //call fizzBuzz
        let fbArray = fizzBuzzC(fizzValue, buzzValue);
        //we call displayData
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
    for (let i = 1; i <= 100; i++) {


        //check if divisible by 3 & 5
        //check if divisible by fizz(3)
        //check if divisible by buzz (5)
        if (i % fizzValue == 0 && i % buzzValue == 0) {
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
// Fizz Buzz with a swtich statment
function fizzBuzzB(fizzValue, buzzValue) {

    let returnArray = [];
    let Fizz = false;
    let Buzz = false;

    //switch case selects which block to execute
    for (let i = 1; i < 100; i++) {

        Fizz = i % fizzValue == 0;
        Buzz = i % buzzValue == 0;

        switch (true) {
            case Fizz && Buzz: {
                returnArray.push(`FizzBuzz`);
                break;
            }
            case Fizz: {
                returnArray.push(`Fizz`);
                break;
            }
            case Buzz: {
                returnArray.push(`Buzz`);
                break;
            }
            default: {
                returnArray.push(i);
                break;
            }
        }
    }

    return returnArray;
}
// Fizz Buzz with a ternary operator
function fizzBuzzC(fizzValue, buzzValue) {
    let returnArray = [];

    //Ternary Operator or three operands or short cut for if statement.
    for (let i = 1; i <= 100; i++) {
        let value = ((i % fizzValue == 0 ? `Fizz` : '') + (i % buzzValue == 0 ? `Buzz` : '') || i);
        returnArray.push(value);
    }

    return returnArray;
}



//custom display function
//loop over array to create a table row for each item
function displayData(fbArray) {

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the row from the template
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index += 5) {
        let tableRow = document.importNode(templateRow.content, true);
        //grab only the columns in the template
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index + 1];

        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index + 2];

        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index + 3];

        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index + 4];

        tableBody.appendChild(tableRow);
    }
}