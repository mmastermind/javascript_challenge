// Assign the data from `data.js` to a descriptive variable
var ufo = data;

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
 
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  try {
    // Filter the data with the timedate provided by the user
    var filteredData = ufo.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);

    // Then, select the unordered list element by sub anchor "tbody"
    var tbody = d3.select("table>tbody")

    // remove any children from the list to
    tbody.html("");

    // Populate the table, appending first rows, then each cell
    filteredData.forEach((filteredData) => {
      var row = tbody.append("tr");
      Object.entries(filteredData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value)})
      });
    }
  catch(err) {
    Message.innerHTML = "Input is " + err;
    };
});