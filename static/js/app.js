// import the data from data.js
const tableData = data;

// Reference the HTML table using d3(D3 is a JavaScript library that produces sophisticated and highly dynamic graphics in an HTML webpage)
// 1. Declare a variable, tbody
// 2. Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML
var tbody = d3.select("tbody");

function buildTable(data) {

    tbody.html(""); // tells JavaScript to create a blank canvas (standard way to clear data)


    data.forEach((dataRow) => {
        let row = tbody.append("tr"); //variable appends a row to the table body.  It tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr").


        // data - an object that references tha data being imported.
        // forEach - the keyword to creade a for loop in JS.
        // dataRow - a parametr that will be used as a value when the function is called.
        // argument (dataRow) represents each row of the data as we iterate through the array.

        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td"); //create a variable to append data to a table.
            cell.text(val); // When we chain .text(value) to the variable, we are extracting only the text of the value.
        }
        );
    });
}
// object.values - JavaScript references one object from the array of UFO sightings.
// By adding (dataRow) as the argument, we are saying that we want the values to go into the dataRow.
// We've added forEach((val) to specify that we want one object per row.

//With this function, we have done the following:

// Looped through each object in the array
// Appended a row to the HTML table
// Added each value from the object into a cell

