function GlobalNav() {
  const nav = document.createElement("nav");
  nav.classList.add("global-nav");
  nav.innerHTML = `
    <ul>
      <li><a href="/">⬅️ Home</a></li>
    </ul>
  `;

  document.body.appendChild(nav);
}

GlobalNav();
