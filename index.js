function toggleActive(button) {
  button.classList.toggle("open");

  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");

  // var mainElement = document.querySelector("main");
  // mainElement.classList.toggle("display-none");
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  const sunIcon = document.querySelector(".fa-sun");
  const moonIcon = document.querySelector(".fa-moon");

  sunIcon.classList.toggle("display-none");
  moonIcon.classList.toggle("display-none");
}

function copyToClipboard() {
  const email = "emir.masinovic.bh@gmail.com";
  navigator.clipboard.writeText(email).then(
    () => {
      const message = document.getElementById("copy-message");
      message.style.display = "inline";
      setTimeout(() => {
        message.style.display = "none";
      }, 2000);
    },
    (err) => {
      console.error("Could not copy text: ", err);
    }
  );
}

document.querySelectorAll(".sidebar-link").forEach((link) => {
  link.addEventListener("click", function () {
    document.getElementById("menu-button").classList.remove("open");
    document.getElementById("sidebar").classList.remove("active");
    document.querySelector("main").classList.remove("display-none");

    setTimeout(() => {
      const section = document.querySelector(this.getAttribute("href"));
      const headerHeight = document.querySelector("header").offsetHeight;
      const sectionPosition =
        section.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }, 100);
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const sidebar = document.getElementById("sidebar");
//   const menuButton = document.getElementById("menu-button");

//   document.addEventListener("click", (event) => {
//     if (
//       sidebar.classList.contains("active") &&
//       !sidebar.contains(event.target) &&
//       event.target !== menuButton
//     ) {
//       sidebar.classList.remove("active");
//     }
//   });
// });
