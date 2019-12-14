class User {
  static users = [];

  static createColumn(data) {
    let elm       = document.createElement("td");
    elm.innerHTML = data;
    return elm;
  }

  static getUserData() {
    return document.getElementById("userData");
  }

  static isLoading(a) {
    document.getElementById("tableBodyDiv").hidden   = a ? true : false;
    document.getElementById("loadingCubeDiv").hidden = a ? false : true;
  }

  static reSort(sortFunction) {
    // Unhide the loading cube
    User.isLoading(true);

    // Clean out html table
    let userData = User.getUserData();
    while (userData.firstChild) {
      userData.removeChild(userData.firstChild);
    }
    
    // Reload table with sorted users
    User.users.sort(sortFunction);
    User.users.forEach(function(item, index) {
      item.createTableEntry();
    });
  }

  constructor(rawData) {
    this.rawData = rawData;
    User.users.push(this);
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

  dobDate() {
    return new Date(this.rawData['dob']['date']);
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
    let userData = User.getUserData();
    let row      = document.createElement("tr");

    row.appendChild( User.createColumn( this.firstName() ) );
    row.appendChild( User.createColumn( this.lastName()  ) );
    row.appendChild( User.createColumn( this.gender()    ) );
    row.appendChild( User.createColumn( this.country()   ) );
    row.appendChild( User.createColumn( this.dob()       ) );
    row.appendChild( User.createColumn( this.birthday()  ) );

    userData.appendChild(row);

    User.isLoading(false);
  }
}
