import re

def update_ui():
    # 1. Update index.html
    with open('/home/blaise/Documents/Portfolio/website/index.html', 'r') as f:
        html = f.read()

    # Find the toggles block and wrap it
    pattern = re.compile(r'(<button id="theme-toggle".*?</button>\s*<button id="lang-toggle".*?</button>)', re.DOTALL)
    match = pattern.search(html)
    if match:
        old_toggles = match.group(1)
        # We will replace the lang-toggle structure inside as well
        new_theme_toggle = """<div class="toggles-container" style="display: flex; gap: 1rem; align-items: center;">
                <button id="theme-toggle" class="theme-toggle" aria-label="Toggle Dark Mode">
                    <span class="toggle-track">
                        <i class="fas fa-sun toggle-sun"></i>
                        <span class="toggle-knob"></span>
                        <i class="fas fa-moon toggle-moon"></i>
                    </span>
                </button>
                <button id="lang-toggle" class="lang-toggle" aria-label="Toggle Language">
                    <span class="lang-track">
                        <span class="lang-text flag-en">EN</span>
                        <span class="lang-text flag-fr">FR</span>
                        <span class="lang-knob"></span>
                    </span>
                </button>
            </div>"""
        html = html.replace(old_toggles, new_theme_toggle)
        
        with open('/home/blaise/Documents/Portfolio/website/index.html', 'w') as f:
            f.write(html)

    # 2. Update style.css
    with open('/home/blaise/Documents/Portfolio/website/assets/css/style.css', 'r') as f:
        css = f.read()

    # Replace the old language toggle CSS
    css_old = re.compile(r'/\* Language Toggle \*/.*?(?=\.cta-btn \{)', re.DOTALL)
    
    css_new = """/* Language Toggle */
.lang-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
}

.lang-track {
    width: 60px;
    height: 30px;
    border-radius: 50px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    position: relative;
    transition: all 0.3s ease;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
}

.lang-toggle:hover .lang-track {
    border-color: var(--accent-primary);
    box-shadow: 0 0 12px rgba(37, 99, 235, 0.15);
}

[data-theme="dark"] .lang-toggle:hover .lang-track {
    box-shadow: 0 0 12px rgba(250, 204, 21, 0.15);
}

.lang-text {
    font-size: 10px;
    font-weight: 700;
    color: var(--text-primary);
    z-index: 1;
    transition: opacity 0.3s ease;
    user-select: none;
    line-height: 1;
}

html[lang="en"] .flag-fr { opacity: 0.3; }
html[lang="fr"] .flag-en { opacity: 0.3; }

.lang-knob {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--accent-gradient);
    position: absolute;
    top: 2px;
    left: 2px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: var(--shadow-accent);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.lang-knob::after {
    content: "🇬🇧";
    font-size: 14px;
    line-height: 1;
    margin-top: 1px;
}

html[lang="fr"] .lang-knob {
    transform: translateX(30px);
}

html[lang="fr"] .lang-knob::after {
    content: "🇫🇷";
}

"""
    css = css_old.sub(css_new, css)

    with open('/home/blaise/Documents/Portfolio/website/assets/css/style.css', 'w') as f:
        f.write(css)

update_ui()
