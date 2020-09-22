project = 'Sphinx Sites'
copyright = '2020, Paul Everitt'
author = 'Paul Everitt'
extensions = [
    'myst_parser',
]
templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store', '.venv']
html_static_path = ['_static']
html_theme = 'alabaster'
myst_html_img_enable = True
myst_figure_enable = True
myst_admonition_enable = True
