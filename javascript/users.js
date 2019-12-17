let User = {

  users: [],

  reSort: function(varName,is_desc) {
    // Clean out html table
    Table.clear();

    // Reload table with sorted users
    User.users.sort(function(a,b) {
      return Sort.sortUsers(a,b,varName,is_desc);
    });

    for (let i=0; i<User.users.length; i++) {
      Table.createEntry(User.users[i]);
    }
  },

  create: function(rawData) {
    this.rawData = rawData;
    User.users.push(this);

    this.firstName = function() {
      return this.rawData['name']['first'];
    };

    this.lastName = function() {
      return this.rawData['name']['last'];
    };

    this.gender = function() {
      let gender = this.rawData['gender'];
      gender = gender.charAt(0).toUpperCase() + gender.slice(1);
      return gender;
    };

    this.country = function() {
      let nat = this.rawData['nat'];
      if (nat === "CA") {
        return "Canada";
      } else if (nat === "US") {
        return "USA";
      } else {
        return "n/a"
      }
    };

    this.dob = function() {
      let dob = moment(this.rawData['dob']['date']);
      return dob.format('MMM DD, YYYY');
    };

    this.dobDate = function() {
      return new Date(this.rawData['dob']['date']);
    };

    this.birthday = function() {
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
    };
  }

};
