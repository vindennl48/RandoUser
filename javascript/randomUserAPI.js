let RandomUser = {

  getUsers: function() {
    $.ajax({
      url:      'https://randomuser.me/api/',
      dataType: 'json',
      data: {
        results: 20,
        nat:     'US,CA'
      },
      success: function(data) {
        let results = data['results'];

        results.forEach(function(item, index) {
          new User.create(item);
        });

        User.reSort("lastName",false);
      },
      error: function(error) {
        Table.showError(error);
      }
    });
  }

};
