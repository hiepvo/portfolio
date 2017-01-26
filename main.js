/**
 * Created by hiepvo on 1/24/17.
 */
(function(){
  var init = {}

  var home = document.getElementById('home');

  var projects = document.getElementById('projects');
  var skills  = document.getElementById('skills');
  var about   = document.getElementById('about');
  var contact = document.getElementById('contact');

  var inputProject = document.getElementById('article-projects');
  var inputSkills  = document.getElementById('article-skills');
  var inputAbout   = document.getElementById('article-about');
  var inputContact = document.getElementById('article-contact');

  var backHome_projects = document.getElementById('back-home-projects');
  var backHome_skills   = document.getElementById('back-home-skills');
  var backHome_contact  = document.getElementById('back-home-contact');
  var backHome_about    = document.getElementById('back-home-about');
  var transitionEnd     = transitionEndEventName();

  backHome_projects.addEventListener('click', function(){
    document.addEventListener(transitionEnd,
        ShowHome, false);
  })

  backHome_skills.addEventListener('click', function(){
    document.addEventListener(transitionEnd,
        ShowHome, false);
  })

  backHome_contact.addEventListener('click', function(){
    document.addEventListener(transitionEnd,
        ShowHome, false);
  })

  backHome_about.addEventListener('click', function(){
    document.addEventListener(transitionEnd,
        ShowHome, false);
  })

  inputProject.addEventListener('click', function(){
    document.addEventListener(transitionEnd,
        ShowProjects, false);
  })

  inputSkills.addEventListener('click', function(){
    document.addEventListener(transitionEnd,
        ShowSKills, false);
  })

  inputContact.addEventListener('click', function(){
    document.addEventListener(transitionEnd,
        ShowContact, false);
  })

  inputAbout.addEventListener('click', function(){
    document.addEventListener(transitionEnd,
        ShowAbout, false);
  })

  var ShowProjects = function(){
    document.removeEventListener(transitionEnd, ShowProjects);
    removeClass(projects, 'hide');
    addClass(home, 'hide');
  };

  var ShowSKills = function(){
    document.removeEventListener(transitionEnd, ShowSKills);
    removeClass(skills, 'hide');
    addClass(home, 'hide');
  };

  var ShowContact = function(){
    document.removeEventListener(transitionEnd, ShowContact);
    removeClass(contact, 'hide');
    addClass(home, 'hide');
  };

  var ShowAbout = function(){
    document.removeEventListener(transitionEnd, ShowAbout);
    removeClass(about, 'hide');
    addClass(home, 'hide');
  };

  var ShowHome = function(){
    document.removeEventListener(transitionEnd, ShowHome);
    removeClass(home, 'hide');
    addClass(projects, 'hide');
    addClass(skills, 'hide');
    addClass(contact, 'hide');
    addClass(about, 'hide');
  };

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
      return el.classList.contains(className)
    else
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
  }

  function addClass(el, className){
    if(el.classList)
      el.classList.add(className)
    else if(!hasClass(el, className)) el.className += " " + className
  }

  function removeClass(el, className){
    if(el.classList)
      el.classList.remove(className)
    else if(hasClass(el, className)){
      var reg      = new RegExp('(\\s|^)' + className + '(\\s|$)')
      el.className = el.className.replace(reg, ' ')
    }
  }

  /*-------------------------------*/

  window.init = init;

})(window)

