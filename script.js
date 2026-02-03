document.addEventListener("DOMContentLoaded", function() {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#1abc9c"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.4,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.35,
          "opacity_min": 0.2,
          "sync": true
        }
      },
      "size": {
        "value": 3.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.35,
          "size_min": 2,
          "sync": true
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#1abc9c",
        "opacity": 0.25,
        "width": 1
      },
      "shadow": {
        "enable": true,
        "color": "#1abc9c",
        "blur": 10
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Existing particlesJS code remains here...
  
  // Mobile menu toggle functionality
  var menuToggle = document.getElementById("mobile-menu-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  
  menuToggle.addEventListener("click", function() {
    if (mobileNav.style.display === "block") {
      mobileNav.style.display = "none";
    } else {
      mobileNav.style.display = "block";
    }
  });
});

let scrollTimeout;

window.addEventListener("scroll", function() {
  // Show the scrollbar when scrolling at a reduced opacity
  const scrollbar = document.getElementById("scrollbar");
  scrollbar.style.opacity = "0.5";
  
  // Calculate scroll percentage relative to the total scrollable area
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / totalScrollable;
  
  // Determine the height of the visible scrollbar area
  const scrollbarHeight = scrollbar.offsetHeight;
  
  // Calculate and update the dot's position within the scrollbar
  const dot = document.getElementById("scrollbar-dot");
  const dotPosition = scrollPercent * scrollbarHeight;
  dot.style.top = dotPosition + "px";
  
  // Clear any existing timeout and hide the scrollbar after 1 second of inactivity
  if (scrollTimeout) clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    scrollbar.style.opacity = "0";
  }, 1000);
});
