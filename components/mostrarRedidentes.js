class ResidentsList extends HTMLElement {
    connectedCallback() {
      let residents = JSON.parse(localStorage.getItem('residents')) || [];
      
      let residentsListHTML = '';
      residents.forEach((resident, index) => {
        residentsListHTML += `
          <div>
          <label>nombre residente:</label>
          <br>
          <span>  ${resident.name}</span>
          </div>
          <div>
          <label>gmail residente:</label>
          <br>
          <span>  ${resident.email}</span>
          </div><div>
          <label>celular residente:</label>
          <br>
          <span>  ${resident.phone}</span>
          </div>
          <div>
          <label>documento residente:</label>
          <br>
          <span>  ${resident.document}</span>
          </div>
          




            
        `;
      });
      
      this.innerHTML = `
        <ul>
          ${residentsListHTML}
        </ul>
      `;
    }
  }
  
  customElements.define('residents-list', ResidentsList);
  