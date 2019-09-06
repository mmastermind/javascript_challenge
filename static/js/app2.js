// Assign the data from `data.js` to a descriptive variable
var ufo = data;

// Select the button
var button0 = d3.select("#filter-btn0");
var button1 = d3.select("#filter-btn1");
var button2 = d3.select("#filter-btn2");
var button3 = d3.select("#filter-btn3");
var button4 = d3.select("#filter-btn4");

button0.on("click", function() {
 
  // Select the input element and get the raw HTML node
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  try {
    // Filter the data with the timedate provided by the user
    var filteredData = ufo.filter(ufo => ufo.datetime === inputValue);

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

button1.on("click", function() {

  // Select the input element and get the raw HTML node
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  try {
    // Filter the data with the timedate provided by the user
    var filteredData = ufo.filter(ufo => ufo.city === inputValue);

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

button2.on("click", function() {

  // Select the input element and get the raw HTML node
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  try {
    // Filter the data with the timedate provided by the user
    var filteredData = ufo.filter(ufo => ufo.state === inputValue);

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

button3.on("click", function() {

  // Select the input element and get the raw HTML node
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  try {
    // Filter the data with the timedate provided by the user
    var filteredData = ufo.filter(ufo => ufo.country === inputValue);

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

button4.on("click", function() {

  // Select the input element and get the raw HTML node
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  try {
    // Filter the data with the timedate provided by the user
    var filteredData = ufo.filter(ufo => ufo.shape === inputValue);

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

