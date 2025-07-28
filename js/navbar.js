const nav = document.createElement("nav");
nav.className = "navbar glass";
nav.style.height = "90px";

nav.innerHTML = `
  <div class="logo_cont">
    <a href="../index.html" style="display: flex; align-items: center">
      <h1 class="logo">
        <img src="./img/logo.png" alt="Pocando na Viagem" 
        style="height: 85px; width: 320px;" />
      </h1>
    </a>
  </div>
  <div class="nav_link_cont">
    <ul class="nav-links">
      <li>
        <a href="../index.html" id="pri" class="active cir_border" style="font-family: Poppins">
          Home
        </a>
      </li>
      <li>
        <a href="#" id="sec" class="cir_border" style="font-family: Poppins">
          Loja
        </a>
      </li>
      <li>
        <a href="#" id="tri" class="cir_border" style="font-family: Poppins">
          Cultura
        </a>
      </li>
      <li>
        <a href="#" id="quad" class="cir_border" style="font-family: Poppins">
          História
        </a>
      </li>
      <li>
        <a href="#" id="quint" class="cir_border" style="font-family: Poppins">
          Galeria
        </a>
      </li>
      <li style="display: flex; align-items: center; gap: 10px;">
        <a href="#contact" id="hex" class="cir_border" style="font-family: Poppins">
          Contato
        </a>
        <a href="https://www.youtube.com/@pocandonaviagem-oficial" target="_blank" class="social-icon">
          <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="https://www.instagram.com/pocandonaviagem_es/#" target="_blank" class="social-icon">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com/@pocando.na.viagem" target="_blank" class="social-icon">
          <i class="fa-brands fa-tiktok"></i>
        </a>
      </li>
      <li>
        <div>
          <input type="checkbox" class="checkbox dark" id="checkbox" />
          <label for="checkbox" class="label">
            <i class="fa fa-moon-o"></i>
            <i class="fa fa-sun-o"></i>
            <div class="ball"></div>
          </label>
        </div>
      </li>
    </ul>
  </div>
  <div class="menu_cont">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="menu-btn"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#e8eaed"
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
    </svg>
  </div>
`;

document.getElementById("navbar-container").appendChild(nav);
