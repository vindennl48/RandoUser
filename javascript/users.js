class User {
  constructor(rawData) {
    this.rawData = rawData;
    this.createTableEntry();
  }

  createColumn(data) {
    let elm       = document.createElement("td");
    elm.innerHTML = data;
    return elm;
  }

  firstName() {
    return this.rawData['name']['first'];
  }

  lastName() {
    return this.rawData['name']['last'];
  }

  gender() {
    let gender = this.rawData['gender'];
    gender = gender.charAt(0).toUpperCase() + gender.slice(1);
    return gender;
  }

  country() {
    let nat = this.rawData['nat'];
    if (nat === "CA") {
      return "Canada";
    } else if (nat === "US") {
      return "USA";
    } else {
      return "n/a"
    }
  }

  dob() {
    let dob = moment(this.rawData['dob']['date']);
    return dob.format('MMM DD, YYYY');
  }

  birthday() {
    let today = new Date();
    let dob   = new Date(this.rawData['dob']['date']);

    dob.setYear(today.getFullYear());

    if (dob > today) {
      return "Has yet to occur"
    } else if (dob === today) {
      return "Is today!"
    } else {
      return "Already happened"
    }
  }

  createTableEntry() {
    let userData = document.getElementById("userData");
    let row      = document.createElement("tr");

    row.appendChild( this.createColumn( this.firstName() ) );
    row.appendChild( this.createColumn( this.lastName()  ) );
    row.appendChild( this.createColumn( this.gender()    ) );
    row.appendChild( this.createColumn( this.country()   ) );
    row.appendChild( this.createColumn( this.dob()       ) );
    row.appendChild( this.createColumn( this.birthday()  ) );

    userData.appendChild(row);

    document.getElementById("tableBodyDiv").hidden   = false;
    document.getElementById("loadingCubeDiv").hidden = true;
  }
}
