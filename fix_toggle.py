import re

def fix_css():
    with open('/home/blaise/Documents/Portfolio/website/assets/css/style.css', 'r') as f:
        css = f.read()
        
    # Remove all instances of the previously added language toggle CSS
    pattern = r'/\* Language Toggle \*/.*?html\[lang="fr"\] \.lang-knob \{\s*transform: translateX\(30px\);\s*\}'
    css = re.sub(pattern, '', css, flags=re.DOTALL)
    
    # We will also remove any leftover newlines if they accumulated
    css = re.sub(r'\n\s*\n\s*\n', '\n\n', css)

    # Now define the fixed CSS
    fixed_css = """
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
    width: 56px;
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
    font-size: 0.75rem;
    z-index: 1;
    transition: opacity 0.3s ease;
    user-select: none;
    line-height: 1;
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
    z-index: 2;
}

html[lang="fr"] .lang-knob {
    transform: translateX(28px);
}
"""
    # Insert it right after the dark mode toggle css finishes
    target = '[data-theme="dark"] .toggle-knob {\n    left: 31px;\n}'
    if target in css:
        css = css.replace(target, target + '\n\n' + fixed_css)
    else:
        # Fallback if spacing is different
        css = css + '\n\n' + fixed_css

    with open('/home/blaise/Documents/Portfolio/website/assets/css/style.css', 'w') as f:
        f.write(css)

fix_css()
