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

        results.forEach(function(item, index) {
          new User(item);
        });

        User.reSort(sortFunc);
      }
    });
  }

};
