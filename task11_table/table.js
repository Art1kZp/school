function addRow() {
  var table = document.getElementById("sampleTable");
  var row = table.insertRow();
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  cell1.innerHTML = "Row cell1";
  cell2.innerHTML = "Row cell1";
};

function deleteRow() {
  document.getElementById("sampleTable").deleteRow(-1);
};




