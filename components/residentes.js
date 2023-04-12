class ResidentsForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a href="" class="navbar-brand text-warning fw-semibold fs-4">amanecer paisa</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#menuLateral"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <section
        class="offcanvas offcanvas-start"
        id="menuLateral"
        tabindex="-1"
      >
        <div class="offcanvas-header" data-bs-theme="dark">
          <h5 class="offcanvas-title text-danger">amanecer paisa</h5>
          <button
            class="btn-close"
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div
          class="offcanvas-body d-flex flex-column justify-content-between px-0"
        >
          <ul class="navbar-nav fs-5 justify-content-evenly">
            <li class="nav-item p-3 py-md-1">
              <a href="" class="nav-link text-warning">inmueble</a>
            </li>
            <li class="nav-item p-3 py-md-1">
              <a href="" class="nav-link text-warning">eventos</a>
            </li>
            <li class="nav-item p-3 py-md-1">
              <a href="" class="nav-link text-warning">pagos por mora</a>
            </li>
            <li class="nav-item p-3 py-md-1">
              <a href="" class="nav-link text-warning">invitados</a>
            </li>
          </ul>
          <!-- enlaces redes sociales -->

          <div class="d-lg-none align-self-center py-3">
            <a href=""><i class="bi bi-telegram px-2 text-danger fs-2"></i></a>
            <a href="https://github.com/angelgabrielortegacorzoCAMPUS?tab=repositories"><i class="bi bi-github px-2 text-danger fs-2"></i></a>
          </div>
        </div>
      </section>
    </div>
  </nav>
<div class="fondo">
 <h1> deseas ser parte de nosotros? 
 
 completa este formulario y conoce nuestra oferta</h1>
   <div class="formulario">
      <form class="frmRecidentes">
        <label for="resident-name">Nombre:</label>
        <input type="text" name="resident-name" id="resident-name">
        <br>
        <label for="resident-email">Correo electrónico:</label>
        <input type="email" name="resident-email" id="resident-email">
        <br>
        <label for="resident-phone">Teléfono:</label>
        <input type="tel" name="resident-phone" id="resident-phone">
        <br>
        <label for="numero-de-documento">NIT:</label>
        <input type="tel" name="numero-de-documento" id="numero-de-documento">
        <br>
        <button type="submit">Guardar</button>
      </form>
      </div>
      </div>
    `;
    
    this.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      
      const residentName = this.querySelector('#resident-name').value;
      const residentEmail = this.querySelector('#resident-email').value;
      const residentPhone = this.querySelector('#resident-phone').value;
      const residentDocument = this.querySelector('#numero-de-documento').value;
      const resident = {
        name: residentName,
        email: residentEmail,
        phone: residentPhone,
        document: residentDocument,
      };
      
      let residents = JSON.parse(localStorage.getItem('residents')) || [];
      residents.push(resident);
      localStorage.setItem('residents', JSON.stringify(residents));
      
      this.querySelector('form').reset();
      alert('Residente guardado correctamente');
    });
  }
}

customElements.define('residents-form', ResidentsForm);
