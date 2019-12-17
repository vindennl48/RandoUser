(function() {

  document.addEventListener("DOMContentLoaded", function() {
    RandomUser.getUsers(20, Sort.lastName);

    let elms = document.querySelectorAll("[data-sort]");
    elms.forEach(function(item, index) {
      item.addEventListener("click", function() {
        Sort.onClick(item);
      });
    });
  });

}).call();
