/**
 * Created by hiepvo on 1/24/17.
 */
(function(){
  var init = {};

  var home = document.getElementById('home');

  var projects = document.getElementById('projects');
  var skills   = document.getElementById('skills');
  var about    = document.getElementById('about');
  var contact  = document.getElementById('contact');
  var thesis = document.getElementById('thesis');

  var inputProject = document.getElementById('article-projects');
  var inputSkills  = document.getElementById('article-skills');
  var inputAbout   = document.getElementById('article-about');
  var inputContact = document.getElementById('article-contact');
  var inputThesis = document.getElementById('article-thesis');

  var backHome_projects = document.getElementById('back-home-projects');
  var backHome_skills   = document.getElementById('back-home-skills');
  var backHome_contact  = document.getElementById('back-home-contact');
  var backHome_about    = document.getElementById('back-home-about');
  var backHome_thesis    = document.getElementById('back-home-thesis');

  var search        = document.getElementById('search');
  var searchOverlay = document.getElementById('overlay');
  var popupClick    = document.getElementById('popupClick');
  var popup1        = document.getElementById('popup1');

  var calc         = document.getElementById('calc');
  var component    = document.getElementById('component');
  var ui_component = document.getElementById('ui-component');
  var ui_galleries = document.getElementById('ui-galleries');

  var cart         = document.getElementById('cart');
  var others = document.getElementById('others');

  var tabCalc         = document.getElementById('tabCalc');
  var tabComponent    = document.getElementById('tabComponent');
  var ui_tabComponent = document.getElementById('ui-tabComponent');
  var ui_tabGalleries = document.getElementById('ui-tabGalleries');
  var tabOthers = document.getElementById('tabOthers');

  var tabCart  = document.getElementById('tabCart');

  var transitionEnd = transitionEndEventName();

  calc.addEventListener('click', function(){
    show(tabCalc, 0);
    hide(tabComponent, 500);
    hide(ui_tabComponent, 500);
    hide(ui_tabGalleries, 500);
    hide(tabCart, 500);
    hide(tabOthers, 500);
  });

  component.addEventListener('click', function(){
    show(tabComponent, 0);
    hide(ui_tabComponent, 500);
    hide(ui_tabGalleries, 500);
    hide(tabCalc, 500);
    hide(tabCart, 500);
    hide(tabOthers, 500);
  });

  ui_component.addEventListener('click', function(){
    show(ui_tabComponent, 0);
    hide(tabComponent, 500);
    hide(ui_tabGalleries, 500);
    hide(tabCalc, 500);
    hide(tabCart, 500);
    hide(tabOthers, 500);
  });

  ui_galleries.addEventListener('click', function(){
    show(ui_tabGalleries, 0);
    hide(ui_tabComponent, 5000);
    hide(tabComponent, 500);
    hide(tabCalc, 500);
    //hide(tabForms, 500);
    hide(tabCart, 500);
    hide(tabOthers, 500);
  });
  cart.addEventListener('click', function(){
    show(tabCart, 0);
    hide(ui_tabComponent, 500);
    hide(ui_tabGalleries, 500);
    hide(tabComponent, 500);
    hide(tabCalc, 500);
    hide(tabOthers, 500);
  });

  others.addEventListener('click', function(){
    show(tabOthers, 0);
    hide(tabCart, 500);
    hide(ui_tabGalleries, 500);
    hide(ui_tabComponent, 500);
    hide(tabComponent, 500);
    hide(tabCalc, 500);
  });

  search.addEventListener('click', function(event){
    var checkbox = event.target;
    if(checkbox.checked){
      show(searchOverlay, 0);
    }
    else{
      hide(searchOverlay, 500);
    }
  });

  popupClick.addEventListener('click', function(){
    popup1.style.display = 'block';
  });

  backHome_projects.addEventListener('click', function(){
    document.addEventListener(transitionEnd,
        ShowHome, false);
  });

  backHome_skills.addEventListener('click', function(){
    document.addEventListener(transitionEnd,
        ShowHome, false);
  });

  backHome_contact.addEventListener('click', function(){
    document.addEventListener(transitionEnd,
        ShowHome, false);
  });

  backHome_about.addEventListener('click', function(){
    document.addEventListener(transitionEnd,
        ShowHome, false);
  });

  backHome_thesis.addEventListener('click', function(){
    document.addEventListener(transitionEnd,
        ShowHome, false);
  });

  inputProject.addEventListener('click', function(){
    document.addEventListener(transitionEnd,
        ShowProjects, false);
  });

  inputSkills.addEventListener('click', function(){
    document.addEventListener(transitionEnd,
        ShowSKills, false);
  });

  inputContact.addEventListener('click', function(){
    document.addEventListener(transitionEnd,
        ShowContact, false);
  });

  inputAbout.addEventListener('click', function(){
    document.addEventListener(transitionEnd,
        ShowAbout, false);
  });

  inputThesis.addEventListener('click', function(){
    document.addEventListener(transitionEnd,
        ShowThesis, false);
  });

  var ShowThesis = function(){
    document.removeEventListener(transitionEnd, ShowThesis);
    show(thesis, 500);
    hide(home, 500);
  };


  var ShowProjects = function(){
    document.removeEventListener(transitionEnd, ShowProjects);
    show(projects, 500);
    hide(home, 500);
  };

  var ShowSKills = function(){
    document.removeEventListener(transitionEnd, ShowSKills);
    show(skills, 500);
    hide(home, 500);
  };

  var ShowContact = function(){
    document.removeEventListener(transitionEnd, ShowContact);
    show(contact, 500);
    hide(home, 500);
  };

  var ShowAbout = function(){
    document.removeEventListener(transitionEnd, ShowAbout);
    show(about, 500);
    hide(home, 500);

  };

  var ShowHome = function(){
    document.removeEventListener(transitionEnd, ShowHome);

    show(home, 500);
    hide(skills, 500);
    hide(projects, 500);
    hide(contact, 500);
    hide(about, 500);
    hide(thesis, 500);
  };

  function hide(el, time){
    setTimeout(function(){
      addClass(el, 'hide');
    }, time);
  }

  function show(el, time){
    setTimeout(function(){
      removeClass(el, 'hide');
    }, time);
  }

  function transitionEndEventName(){
    var i,
        undefined,
        el          = document.createElement('div'),
        transitions = {
          'transition': 'transitionend',
          'OTransition': 'otransitionend',  // oTransitionEnd in very old Opera
          'MozTransition': 'transitionend',
          'WebkitTransition': 'webkitTransitionEnd'
        };

    for(i in transitions){
      if(transitions.hasOwnProperty(i) && el.style[i] !== undefined){
        return transitions[i];
      }
    }
  }

  function hasClass(el, className){
    if(el.classList)
      return el.classList.contains(className);
    else
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }

  function addClass(el, className){
    if(el.classList)
      el.classList.add(className);
    else if(!hasClass(el, className)) el.className += " " + className
  }

  function removeClass(el, className){
    if(el.classList){
      el.classList.remove(className);}
    else if(hasClass(el, className)){
      var reg      = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className = el.className.replace(reg, ' ')
    }
  }

  /*-------------------------------*/

  window.init = init;

})(window);

