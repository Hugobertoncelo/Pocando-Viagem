const contactSection = document.createElement("section");
contactSection.id = "contact";

contactSection.innerHTML = `
  <div class="title">
  <h1 class="font-color">Contate-nos</h1>
  <div class="line"></div>
</div>
<div class="contact_us">
  <form class="cform" action="" method="post">
    <div class="crow-message">
      <h1 class="color">Envie-nos uma mensagem</h1>
      <div></div>
    </div>
    <div class="crow-in">
      <input type="text" id="name" name="name" placeholder="Seu Nome" />
      <input type="text" id="email" name="email" placeholder="Seu e-mail" />
    </div>
    <div class="crow">
      <div class="ccol-left">
        <select name="country" id="country">
        <option value="Brazil">Brasil</option>
        <option value="Russia">Rússia</option>
        <option value="usa">USA</option>
        <option value="Japan">Japão</option>
        <option value="France">França</option>
        <option value="India">Índia</option>
        </select>
      </div>
    </div>
    <div class="crow">
      <div class="ccol-left">
        <textarea
          id="remarks"
          name="remarks"
          placeholder="Observações....."
          style="height: 150px"
        ></textarea>
      </div>
    </div>
    <input class="crow-s" type="submit" value="Enviar" />
  </form>
  <div class="cbox">
    <div>
      <p class="cbox-message">
        Prefere alguma outra maneira?<br />Entre em contato conosco usando os
        detalhes fornecidos abaixo
      </p>
      <div class="cbox-line"></div>
    </div>
    <div class="c_boxx">
      <a 
        target="_blank"
        href="pocandonaviagem@gmail.com">
        <i class="fa fa-envelope"></i>
        E-Mail: pocandonaviagem@gmail.com
      </a>
    </div>
    <div class="c_boxx">
      <a href="tel:(27) 1234567890">
        <i class="fa fa-phone"></i>
        Telefone: (27) 1234567890
      </a>
    </div>
    <div class="c_boxx">
      <a 
        target="_blank"
        href="https://maps.app.goo.gl/xAQUzbUg4jML9tRv6">
        <i class="fa fa-map-marker"></i>
        Localização: Serra - ES, Brasil
      </a>
    </div>
  </div>
</div>

`;

document.getElementById("contact-container").appendChild(contactSection);
