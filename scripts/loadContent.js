// Dieses Script lädt dynamisch den Header, Footer und den Content in die index.html und tauscht den Content dynamisch aus!
class ContentLoader {
    constructor() {
        this.headerElement = document.getElementById('header');
        this.contentElement = document.getElementById('content');
        this.footerElement = document.getElementById('footer');
    }
    
    // Lädt den Content oder gibt eine Fehlermeldung aus wenn was nicht geladen werden kann
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

    // Lädt den Header
    async loadHeader() {
        const headerContent = await this.loadContent('header.html');
        this.headerElement.innerHTML = headerContent;
    }

    // Lädt die URL über das Menu bzw. klick auf die Bilder
    async loadPage(pageUrl) {
        const content = await this.loadContent(pageUrl);
        this.contentElement.innerHTML = content;
    }

    // Lädt den Footer 
    async loadFooter() {
        const footerContent = await this.loadContent('footer.html');
        this.footerElement.innerHTML = footerContent;
    }
}

// Laden von header, footer und und als Standart die Hauptseite diese wird dann durch die Funktion 'loadPage' ersetzt
const loader = new ContentLoader();
document.addEventListener('DOMContentLoaded', async () => {
    await loader.loadPage('frontpage.html');
    await loader.loadFooter();
    await loader.loadHeader();
});