const CONFIG = {
  email: "yalkasurplusmedia@gmail.com",
  subject: "Short-Form%20Video%20Project%20Inquiry",
  body: "Hi%20Yalka%2C%0A%0AI%20would%20like%20to%20discuss%20a%20short-form%20video%20project.%0A%0AProduct%3A%20%0AGoal%3A%20%0ATimeline%3A%20"
};

const buildMailtoLink = () => {
  const email = CONFIG.email.trim();
  const subject = CONFIG.subject;
  const body = CONFIG.body;

  return `mailto:${email}?subject=${subject}&body=${body}`;
};

const setupProjectCover = () => {
  const video = document.querySelector(".project-video");
  const cover = document.querySelector(".project-cover");
  if (!video || !cover) return;

  cover.addEventListener("click", () => {
    video.play()
      .then(() => {
        cover.hidden = true;
      })
      .catch((error) => {
        console.error("Unable to play the project video.", error);
      });
  });
};

const setupContactLink = () => {
  const contactEmail = document.getElementById("contactEmail");
  if (!contactEmail) return;

  contactEmail.setAttribute("href", buildMailtoLink());
};

const setupNavHighlight = () => {
  const sections = [...document.querySelectorAll("section[id]")];
  const navLinks = [...document.querySelectorAll(".nav-link")];

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) return;

      const activeId = visibleEntry.target.id;
      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeId}`;
        link.classList.toggle("active", isActive);
      });
    },
    {
      threshold: [0.35, 0.6, 0.8],
      rootMargin: "-10% 0px -45% 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));
};

window.addEventListener("DOMContentLoaded", () => {
  setupProjectCover();
  setupContactLink();
  setupNavHighlight();
});
