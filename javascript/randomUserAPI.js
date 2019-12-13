let RandomUser = {

  get_users: function(numUsers) {
    $.ajax({
      url:      'https://randomuser.me/api/',
      dataType: 'json',
      data: {
        results: numUsers,
        nat:     'US,CA'
      },
      success: function(data) {
        console.log(data['results']);
      }
    });
  }

};
