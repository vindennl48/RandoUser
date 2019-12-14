let Sort = {

  firstName: function(a,b) {
    let aa = a.firstName().toUpperCase();
    let bb = b.firstName().toUpperCase();
    if (aa === bb) {
      return Sort.lastName(a,b);
    } else {
      return (aa > bb ? 1 : -1);
    }
  },

  firstNameDesc: function(a,b) {
    let aa = a.firstName().toUpperCase();
    let bb = b.firstName().toUpperCase();
    if (aa === bb) {
      return Sort.lastNameDesc(a,b);
    } else {
      return (aa < bb ? 1 : -1);
    }
  },

  lastName: function(a,b) {
    let aa = a.lastName().toUpperCase();
    let bb = b.lastName().toUpperCase();
    if (aa === bb) {
      return Sort.firstName(a,b);
    } else {
      return (aa > bb ? 1 : -1);
    }
  },

  lastNameDesc: function(a,b) {
    let aa = a.lastName().toUpperCase();
    let bb = b.lastName().toUpperCase();
    if (aa === bb) {
      return Sort.firstName(a,b);
    } else {
      return (aa < bb ? 1 : -1);
    }
  },

  gender: function(a,b) {
    let aa = a.gender();
    let bb = b.gender();
    if (aa === bb) {
      return Sort.lastName(a,b);
    } else {
      return (aa > bb ? 1 : -1);
    }
  },

  genderDesc: function(a,b) {
    let aa = a.gender();
    let bb = b.gender();
    if (aa === bb) {
      return Sort.lastNameDesc(a,b);
    } else {
      return (aa < bb ? 1 : -1);
    }
  },

  country: function(a,b) {
    let aa = a.country();
    let bb = b.country();
    if (aa === bb) {
      return Sort.lastName(a,b);
    } else {
      return (aa > bb ? 1 : -1);
    }
  },

  countryDesc: function(a,b) {
    let aa = a.country();
    let bb = b.country();
    if (aa === bb) {
      return Sort.lastNameDesc(a,b);
    } else {
      return (aa < bb ? 1 : -1);
    }
  },

  dob: function(a,b) {
    let aa = a.dobDate();
    let bb = b.dobDate();
    if (aa === bb) {
      return Sort.lastName(a,b);
    } else {
      return (aa > bb ? 1 : -1);
    }
  },

  dobDesc: function(a,b) {
    let aa = a.dobDate();
    let bb = b.dobDate();
    if (aa === bb) {
      return Sort.lastNameDesc(a,b);
    } else {
      return (aa < bb ? 1 : -1);
    }
  },

  birthday: function(a,b) {
    let aa = a.birthday();
    let bb = b.birthday();
    if (aa === bb) {
      return Sort.lastName(a,b);
    } else {
      return (aa > bb ? 1 : -1);
    }
  },

  birthdayDesc: function(a,b) {
    let aa = a.birthday();
    let bb = b.birthday();
    if (aa === bb) {
      return Sort.lastNameDesc(a,b);
    } else {
      return (aa < bb ? 1 : -1);
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
    let sortFunction = self.dataset.sort;
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
      User.reSort(Sort[sortFunction]);
    } else {
      User.reSort(Sort[sortFunction+"Desc"]);
    }
  }

};
