let Sort = {

  LastName: function(a,b) {
    a = a['name']['last'].toUpperCase();
    b = b['name']['last'].toUpperCase();
    return (a > b ? 1 : -1);
  },

  LastNameDesc: function(a,b) {
    a = a['name']['last'].toUpperCase();
    b = b['name']['last'].toUpperCase();
    return (a < b ? 1 : -1);
  }

};
