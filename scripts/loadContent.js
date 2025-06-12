class ContentLoader {
    constructor() {
        this.headerElement = document.getElementById('header');
        this.contentElement = document.getElementById('content');
        this.footerElement = document.getElementById('footer');
    }

    async loadContent(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.text();
        } catch (error) {
            console.error(`Fehler beim Laden von ${url}:`, error);
            return `<div class="error-message">Fehler beim Laden des Inhalts</div>`;
        }
    }

    async loadHeader() {
        const headerContent = await this.loadContent('header.html');
        this.headerElement.innerHTML = headerContent;
    }

    async loadPage(pageUrl) {
        const content = await this.loadContent(pageUrl);
        this.contentElement.innerHTML = content;
    }

    async loadFooter() {
        const footerContent = await this.loadContent('footer.html');
        this.footerElement.innerHTML = footerContent;
    }
}

// Initialisierung und erste Ladung
const loader = new ContentLoader();
document.addEventListener('DOMContentLoaded', async () => {
    await loader.loadPage('frontpage.html');
    await loader.loadFooter();
    await loader.loadHeader();
});