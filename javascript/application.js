(function() {

  document.addEventListener("DOMContentLoaded", function() {
    RandomUser.getUsers();

    let elms = document.querySelectorAll("[data-sort]");
    elms.forEach(function(item, index) {
      item.addEventListener("click", function() {
        Sort.onClick(item);
      });
    });
  });

}).call();
