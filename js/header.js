class SiteHeader extends HTMLElement {
  connectedCallback() {
    const currentPath = window.location.pathname;

    // Detect the active page
    const isAbout = currentPath.endsWith('/') || currentPath.endsWith('index.html');
    const isEducation = currentPath.endsWith('education.html');
    const isExperience = currentPath.endsWith('experience.html');
    const isResearch = currentPath.endsWith('research.html');

    this.innerHTML = `
      <header class="site-nav-container">
        <hr class="nav-bar-divider">
        <nav class="profile-subnav">
            <a href="index.html" class="${isAbout ? 'active' : ''}">Main</a>
            <a href="education.html" class="${isEducation ? 'active' : ''}">Education</a>
            <a href="experience.html" class="${isExperience ? 'active' : ''}">Experience</a>
            <a href="research.html" class="${isResearch ? 'active' : ''}">Research &amp; Publications</a>
        </nav>
        <hr class="nav-bar-divider">
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);