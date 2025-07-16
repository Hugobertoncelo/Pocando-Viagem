const footer = document.createElement("section");
footer.className = "footer";

footer.innerHTML = `
  <span>Desenvolvido por Hugo Bertoncelo</span>
  <div class="social">
    <li>
      <a href="https://github.com/Hugobertoncelo" target="_blank" rel="noreferrer">
        <i class="fa fa-github"></i>
      </a>
      <a href="https://hugobertoncelo.github.io/Portfolio/" target="_blank" rel="noreferrer">
        <i class="fa fa-address-card"></i>
      </a>
      <a href="https://www.linkedin.com/in/hugobertoncelo" target="_blank" rel="noreferrer">
        <i class="fa fa-linkedin-square"></i>
      </a>
      <a href="https://www.instagram.com/bertoncelo.hugo/" target="_blank" rel="noreferrer">
        <i class="fa fa-instagram"></i>
      </a>
      <a href="https://wa.me/5528999453033" target="_blank" rel="noreferrer">
        <i class="fa fa-whatsapp"></i>
      </a>
    </li>
  </div>
`;

document.getElementById("footer-container").appendChild(footer);
