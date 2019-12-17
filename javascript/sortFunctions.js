let Sort = {

  sortUsers: function(a,b,varName,is_desc) {
    let aa = a[varName]();
    let bb = b[varName]();

    if (typeof(aa) === "string") {
      aa = aa.toUpperCase();
      bb = bb.toUpperCase();
    }

    if (varName !== "lastName" && aa === bb) {
      return Sort.sortUsers(a,b,"lastName",is_desc);
    } else {
      if (is_desc) {
        return (aa < bb ? 1 : -1);
      } else {
        return (aa > bb ? 1 : -1);
      }
    }
  },

  removeSortDirection: function() {
    let elms = document.querySelectorAll("[data-direction]");
    elms.forEach(function(item, index) {
      item.removeAttribute("data-direction");
      item.querySelector("span").className = "";
    });
  },

  setCarrot: function(self) {
    let direction = self.dataset.direction;
    self.querySelector("span").className = "";

    if ( direction === "asc" ) {
      self.querySelector("span").classList.add("arrow-up");
    } else if ( direction === "desc" ){
      self.querySelector("span").classList.add("arrow-down");
    }
  },

  onClick: function(self) {
    let varName = self.dataset.sort;

    if ( self.hasAttribute("data-direction") ) {
      if ( self.dataset.direction === "asc" ) {
        self.dataset.direction = "desc";
      } else {
        self.dataset.direction = "asc";
      }
    } else {
      Sort.removeSortDirection();
      self.dataset.direction = "asc";
    }

    Sort.setCarrot(self);

    if ( self.dataset.direction === "asc" ) {
      User.reSort(varName,false);
    } else {
      User.reSort(varName,true);
    }
  }

};
