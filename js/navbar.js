const nav = document.createElement("nav");
nav.className = "navbar glass";
nav.style.height = "70px";

nav.innerHTML = `
  <div class="logo_cont">
    <a href="#home" style="display: flex; align-items: center">
      <img
        class="img2"
        src="./img/logo.png"
        width="80"
        style="color: #000"
      />
      <h1
        class="logo"
        style="font-family: Poppins; text-transform: lowercase"
      >
        &nbsp;Pocando na Viagem
      </h1>
    </a>
  </div>
  <div class="nav_link_cont">
    <ul class="nav-links">
      <li>
        <a
          href="#home"
          id="pri"
          class="active cir_border"
          style="font-family: Poppins"
          >Home</a
        >
      </li>
      <li>
        <a
          href="Food/Food/Food.html"
          id="sec"
          class="cir_border"
          style="font-family: Poppins"
          >Comidas</a
        >
      </li>
      <li>
        <a
          href="Culture/Culture.html"
          id="tri"
          class="cir_border"
          style="font-family: Poppins"
          >Cultura</a
        >
      </li>
      <li>
        <a
          href="History/History.html"
          id="quad"
          class="cir_border"
          style="font-family: Poppins"
          >História</a
        >
      </li>
      <li>
        <a
          href="Spiritual/Spiritual.html"
          id="quint"
          class="cir_border"
          style="font-family: Poppins"
          >Galeria</a
        >
      </li>
      <li>
        <a
          href="#contact"
          id="hex"
          class="cir_border"
          style="font-family: Poppins"
          >Contato</a
        >
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
      <path
        d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
      />
    </svg>
  </div>
`;

document.getElementById("navbar-container").appendChild(nav);
