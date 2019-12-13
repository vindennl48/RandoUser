let RandomUser = {

  getUsers: function(numUsers, sortFunc) {
    $.ajax({
      url:      'https://randomuser.me/api/',
      dataType: 'json',
      data: {
        results: numUsers,
        nat:     'US,CA'
      },
      success: function(data) {
        let results = data['results'];

        results.sort(sortFunc);

        results.forEach(function(item, index) {
          let user = new User(item);
        });
      }
    });
  }

};
