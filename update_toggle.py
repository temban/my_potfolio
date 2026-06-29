import re

def update_files():
    # 1. Update index.html
    with open('/home/blaise/Documents/Portfolio/website/index.html', 'r') as f:
        html = f.read()
    
    old_btn = '<button id="lang-toggle" class="lang-toggle" aria-label="Toggle Language" style="background: none; border: none; color: var(--text-primary); font-family: \'Outfit\', sans-serif; font-weight: 600; font-size: 1rem; cursor: pointer; margin-left: 1rem; transition: color 0.3s ease;">FR</button>'
    new_btn = """<button id="lang-toggle" class="lang-toggle" aria-label="Toggle Language">
                    <span class="lang-track">
                        <span class="lang-knob"></span>
                        <span class="lang-flag flag-en">🇬🇧</span>
                        <span class="lang-flag flag-fr">🇫🇷</span>
                    </span>
                </button>"""
    html = html.replace(old_btn, new_btn)
    with open('/home/blaise/Documents/Portfolio/website/index.html', 'w') as f:
        f.write(html)
        
    # 2. Update style.css
    with open('/home/blaise/Documents/Portfolio/website/assets/css/style.css', 'r') as f:
        css = f.read()
        
    css_to_add = """
/* Language Toggle */
.lang-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-left: 1rem;
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
    padding: 0 6px;
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

.lang-flag {
    font-size: 0.9rem;
    z-index: 1;
    transition: opacity 0.3s ease;
    user-select: none;
}

html[lang="en"] .flag-fr { opacity: 0.3; }
html[lang="fr"] .flag-en { opacity: 0.3; }

.lang-knob {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--accent-gradient);
    position: absolute;
    top: 3px;
    left: 3px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: var(--shadow-accent);
}

html[lang="fr"] .lang-knob {
    transform: translateX(30px);
}
"""
    # Insert it right before .cta-btn
    css = css.replace('.cta-btn {', css_to_add + '\n.cta-btn {')
    with open('/home/blaise/Documents/Portfolio/website/assets/css/style.css', 'w') as f:
        f.write(css)
        
    # 3. Update main.js
    with open('/home/blaise/Documents/Portfolio/website/assets/js/main.js', 'r') as f:
        js = f.read()
        
    # Remove langToggleBtn.textContent = lang === 'en' ? 'FR' : 'EN';
    # And add document.documentElement.lang = lang;
    
    js = js.replace(
        "window.currentLang = lang;\n        localStorage.setItem('lang', lang);",
        "window.currentLang = lang;\n        localStorage.setItem('lang', lang);\n        document.documentElement.lang = lang;"
    )
    
    js = js.replace(
        """// Update lang toggle text
        const langToggleBtn = document.getElementById('lang-toggle');
        if (langToggleBtn) {
            langToggleBtn.textContent = lang === 'en' ? 'FR' : 'EN';
        }""",
        ""
    )
    
    with open('/home/blaise/Documents/Portfolio/website/assets/js/main.js', 'w') as f:
        f.write(js)

update_files()
