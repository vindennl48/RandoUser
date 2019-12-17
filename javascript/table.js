let Table = {
  createColumn: function(data) {
    let elm       = document.createElement("td");
    elm.innerHTML = data;
    return elm;
  },

  getTableBody: function() {
    return document.getElementById("userData");
  },

  isLoading: function(is_true) {
    document.getElementById("tableBodyDiv").hidden   = is_true ? true  : false;
    document.getElementById("loadingCubeDiv").hidden = is_true ? false : true;
  },

  clear: function() {
    Table.isLoading(true);

    let tableBody = Table.getTableBody();
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
  },

  createEntry: function(user) {
    let tableBody = Table.getTableBody();
    let row       = document.createElement("tr");

    row.appendChild( Table.createColumn( user.firstName() ) );
    row.appendChild( Table.createColumn( user.lastName()  ) );
    row.appendChild( Table.createColumn( user.gender()    ) );
    row.appendChild( Table.createColumn( user.country()   ) );
    row.appendChild( Table.createColumn( user.dob()       ) );
    row.appendChild( Table.createColumn( user.birthday()  ) );

    tableBody.appendChild(row);

    Table.isLoading(false);
  }
}
