(function() {

  document.addEventListener("DOMContentLoaded", function() {
    RandomUser.get_users(20, Sort.LastName);
  });

}).call();
