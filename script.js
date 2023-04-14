
function toggleSidebar() {
  var sidebar = document.getElementById("mySidenav");
  var body = document.querySelector("body");
  var content = document.querySelector(".content");
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    sidebar.classList.add("closed");
    body.classList.remove("sidebar-open");
    content.classList.remove("sidebar-open");
  } else {
    sidebar.classList.remove("closed");
    sidebar.classList.add("open");
    body.classList.add("sidebar-open");
    content.classList.add("sidebar-open");
  }
}

const sidebarToggle = document.querySelector('.menu-btn');
const body = document.querySelector('body');

body.classList.add("sidebar-open");
document.querySelector(".content").classList.add("sidebar-open");

sidebarToggle.addEventListener('click', () => {
  body.classList.toggle('sidebar-closed');
  document.querySelector(".content").classList.toggle("sidebar-open");
});

