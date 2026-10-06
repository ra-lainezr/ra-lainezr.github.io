class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
          <div class="footer-links">
              <a href="mailto:raan.lare@gmail.com">raan.lare@gmail.com</a>
              <!--<span>•</span>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span>•</span>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>-->
          </div>
          <p class="copyright">&copy; 2026 Rafael Antonio Lainez Reyes</p>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);