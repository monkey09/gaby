let place          = document.getElementById("place");
if (place.value == "home") {
  const NAVBAR       = document.getElementById("navbar");
  const SLIDER       = document.getElementById("slider-container");
  const ABOUT        = document.getElementById("about");
  const HOSTING      = document.getElementById("hosting");
  const FEATURES     = document.getElementById("features");
  const SERVICES     = document.getElementById("services");
  const EVENTS       = document.getElementById("events");
  const CONTACT      = document.getElementById("contact");
  let bodyAndHtml    = $("html, body");
  let mainLinks      = $(".for-link");
  let forLinks       = document.getElementsByClassName("for-link");
  mainLinks.each(function(){
    $(this).on("click", function(e){
      e.preventDefault();
      bodyAndHtml.animate({
        scrollTop: $("#" + $(this).data("active")).offset().top
      }, 600);
    });
  });
  window.onload = function () {
    'use strict';
    scrollWrapper ();
  };
  window.onscroll = function () {
    'use strict';
    scrollWrapper ();
  };
  function scrollWrapper () {
    scrollBehavior (SLIDER, "slider-container");
    scrollBehavior (ABOUT, "about");
    scrollBehavior (HOSTING, "hosting");
    scrollBehavior (FEATURES, "features");
    scrollBehavior (SERVICES, "services");
    scrollBehavior (EVENTS, "events");
    scrollBehavior (CONTACT, "contact");
  }
  function linkActivation (linkAd) {
    'use strict';
    for (let i = 0; i < forLinks.length; i++){
      if (forLinks[i].getAttribute("data-active") == linkAd)
      forLinks[i].classList.add("active");
      else
      forLinks[i].classList.remove("active");
    }
  }
  function colorNavbar () {
    'use strict';
    NAVBAR.style.backgroundColor = "rgba(0,0,0,0.8)";
  }
  function unColorNavbar () {
    'use strict';
    NAVBAR.style.backgroundColor = "rgba(0,0,0,0)";
  }
  function scrollBehavior (section, action) {
    'use strict';
    let rect = section.getBoundingClientRect();
    if (rect.top <= (((window.innerHeight)*10)/100)) {
      switch (action) {
        case "slider-container":
        linkActivation (action);
        unColorNavbar ();
        break;
        case "about":
        colorNavbar();
        linkActivation (action);
        break;
        case "hosting":
        linkActivation (action);
        break;
        case "services":
        linkActivation (action);
        break;
        case "features":
        linkActivation (action);
        break;
        case "events":
        linkActivation (action);
        break;
        case "menu":
        linkActivation (action);
        break;
        case "contact":
        linkActivation (action);
        break;
      }
    }
  }
}

// window.onload = function () {
//   'use strict';
//   scrollCollection ();
// };
// window.onscroll = function () {
//   'use strict';
//   scrollCollection ();
// };
// function scrollCollection () {
// 	'use strict';
//   scrollActions (SLIDER, "text-content-animate", 70);
//   scrollActions (ABOUT, "product-animate", 70);
//   scrollActions (HOSTING, "col-animate", 80);
//   scrollActions (FEATURES, "brief-content-animate", 70);
//   scrollActions (SERVICES, "brief-image-animate", 70);
//   scrollActions (EVENTS, "brief-content-animate", 70);
//   scrollActions (CONTACT, "brief-image-animate", 70);
// }
// function scrollActions (sections, action, heig) {
// 	'use strict';
//   // for (let i = 0; i < sections.length; i++) {
//   //   scrollBehavior (sections[i], action, heig);
//   // }
// }
// function scrollBehavior (section, action, heig) {
//   'use strict';
//   let rect = section.getBoundingClientRect();
//   if (rect.top <= (((window.innerHeight)*heig)/100)) {
//     section.classList.add(action);
//   }
// }
