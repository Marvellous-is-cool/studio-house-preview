// Add this at the top of the file
function checkTailwindLoaded() {
  // Check if Tailwind's utilities are present
  const isTailwindLoaded = () => {
    const testElement = document.createElement("div");
    testElement.className = "hidden";
    document.body.appendChild(testElement);
    const computedStyle = window.getComputedStyle(testElement);
    const isHidden = computedStyle.display === "none";
    document.body.removeChild(testElement);
    return isHidden;
  };

  // Apply fallback if Tailwind isn't loaded
  if (!isTailwindLoaded()) {
    document.body.classList.add("fallback-active");
    console.warn("Tailwind CSS not detected, using fallback styles");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Check Tailwind loading status
  checkTailwindLoaded();

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const header = document.querySelector("header");

  // Toggle menu with animation
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    mainNav.classList.toggle("hidden");
    mainNav.style.transition = "opacity 0.3s ease-in-out";
    mainNav.style.opacity = mainNav.classList.contains("hidden") ? "0" : "1";
  });

  // Handle navigation click events
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.add("hidden");
      mainNav.style.opacity = "0";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !mainNav.contains(e.target)) {
      mainNav.classList.add("hidden");
      mainNav.style.opacity = "0";
    }
  });

  // Adjust margin based on header height
  function adjustMargin() {
    const headerHeight = header.offsetHeight;
    const hero = document.querySelector("section.mt-\\[300px\\]");
    if (window.innerWidth < 768) {
      hero.style.marginTop = `${headerHeight + 50}px`;
    } else {
      hero.style.marginTop = ""; // Reset to use Tailwind classes
    }
  }

  window.addEventListener("resize", adjustMargin);
  adjustMargin(); // Initial adjustment

  // Ensure stars containers maintain consistent padding
  const starsContainers = document.querySelectorAll(".stars-container p");
  function adjustStarsAlignment() {
    starsContainers.forEach((container) => {
      container.style.paddingLeft = "5px";
    });
  }

  window.addEventListener("resize", adjustStarsAlignment);
  adjustStarsAlignment(); // Initial adjustment

  // Movie list data
  const movies = [
    "Passion of the Christ",
    "Sound of Freedom",
    "Fried Green Tomatoes",
    "Children of the Corn",
    "My Own Private Idaho",
    "The Crow",
    "The Handmaid's Tale",
    "Person of Interest",
    "Simple Justice",
    "My Own Private Idaho",
    "Hellraiser III",
    "Amos & Andrew",
    "An Innocent Cry",
    "Grace Under Pressure",
    "American Heart",
    "Breaking the Silence",
    "Waiting for the Light",
    "Sandlot",
    "Brothers",
    "The Real McCoy",
    "Preying Mantis",
    "Something to Talk About",
    "Tommy & The Ghost",
    "The Cowboy Way",
    "A Boy's Dream",
    "Vice",
    "Little Heroes",
    "The Rock",
    "Ty Cobb",
    "Kingfish",
    "Power Play",
    "Ritchie Rich",
    "Wyatt Earp",
    "Andersonville",
    "Every Knee Shall Bow",
    "Shattered",
    "Ace Ventura",
    "29th Street",
    "Fall from Grace",
    "Birthright",
    "Past Midnight",
    "Columbia County",
    "In a Child's Name",
    "My Shadow",
    "A Mother's Right",
    "Class Action",
    "Blank Check",
    "Twist of Fate",
    "I Married an Ax Murderer",
    "Twist of Fate",
    "A Promise to Carolyn",
    "Super Mario Brothers",
    "The Road to Wellville",
    "Naked Gun 33",
    "Wild Hearts Can’t be Broken",
    "Body Snatchers III",
    "Death in Small Doses",
    "With Reason to Suspect",
    "G.I. Jane",
    "The Nightman",
    "Fade to Black",
    "Chasers",
    "Getting Even with Dad",
    "Wyatt Earp",
    "Taking Liberty",
    "Renaissance Man",
    "Head Cheerleader",
    "Witch Catcher",
    "Stars Fell on Henrietta Junior",
    "Good Old Boys",
    "Getting In",
    "Sister Island",
    "Heaven’s Prisoner",
    "God is Lonely",
    "The Last Dance",
    "Getting In",
    "Pet Semetary Two",
    "Free Jack",
    "Dog Fight",
    "Sudie & Simpson",
    "The Goodnight Champion",
    "Silent Victim",
    "Rich in Love",
    "Pacific Heights I",
    "Singles",
    "The Count of Monte Cristo",
    "Terror in the Tower",
    "Sibling Rivalry",
    "Stolen Children",
    "Hot House Singles",
    "An Innocent Cry",
    "Dazed & Confused",
    "Made in America",
    "Home Wrecker",
    "Unknown",
    "Deadly Pursuits",
    "Ground Rules",
    "Substitute Wife",
    "Deja Vu",
    "Murder in the First",
    "Murder in New Hampshire",
    "Paul Apostle of Christ",
    "The Thin Red Line",
    "When the Game Stands Tall",
    "Someone’s Watching",
    "I Am David",
    "Ride with the Devil",
    "The Horror Story",
    "The Dangerous",
    "Angels in the Outfield",
    "Antelope Chess Game",
    "Somebody’s Waiting",
    "Margaret Mitchell Story",
    "Brinks - The Great Rob",
    "Outlander",
    "Long Weekend",
    "The Prisoner",
    "Madison",
    "Vorlock",
    "Eddie",
    "White Squall",
    "The Silencer",
    "Katie",
    "Pay It Forward",
    "Texas Justice",
    "A Friendly Suit",
    "Texas",
    "Two by Two",
    "No Turning Back",
    "Infidelbery",
  ];

  // Render movie list
  function renderMovies() {
    const movieContainer = document.querySelector("#filmography .movie-grid");
    if (!movieContainer) return;

    movieContainer.innerHTML = movies
      .map(
        (movie) => `
        <p class="font-courier text-body text-blue-600">${movie}</p>
      `
      )
      .join("");
  }

  renderMovies();

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const headerOffset = document.querySelector("header").offsetHeight + 20; // Add padding

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Close mobile menu after clicking
        mainNav.classList.add("hidden");
        mainNav.style.opacity = "0";
      }
    });
  });

  // Phone number copy functionality
  const phoneNumber = document.getElementById("phoneNumber");
  if (phoneNumber) {
    phoneNumber.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText("(323) 656-3000");

        // Optional: Show feedback
        const originalText = phoneNumber.textContent;
        phoneNumber.textContent = "Copied!";
        setTimeout(() => {
          phoneNumber.textContent = originalText;
        }, 1000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    });
  }
});

// Add this at the bottom of the file
// Retry Tailwind check after window load
window.addEventListener("load", () => {
  // Remove fallback if Tailwind loaded late
  if (document.body.classList.contains("fallback-active")) {
    const testElement = document.createElement("div");
    testElement.className = "hidden";
    document.body.appendChild(testElement);
    const computedStyle = window.getComputedStyle(testElement);
    if (computedStyle.display === "none") {
      document.body.classList.remove("fallback-active");
      console.log("Tailwind CSS loaded, removed fallback styles");
    }
    document.body.removeChild(testElement);
  }
});
