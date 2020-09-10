import os
import sys

sys.path.insert(0, os.path.abspath('.'))

project = 'Sphinx Sites'
copyright = '2020, Paul Everitt'
author = 'Paul Everitt'
extensions = [
    'ablog',
    'myst_parser',
    'sphinx.ext.autodoc',
    'sphinx.ext.autosectionlabel',
    'sphinx.ext.intersphinx',
]
templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']
html_css_files = ['custom.css']
html_additional_pages = {'about': 'about.jinja2'}
html_logo = 'python-logo-generic.svg'
html_sidebars = {
    '**': [
        'about.html',
        'navigation.html',
        'relations.html',
        'searchbox.html',
        'donate.html',
        'luv_sphinx.jinja2',
    ]
}
html_static_path = ['_static']
html_theme = 'alabaster'
show_related = True
intersphinx_mapping = {
    'sphinx': ('https://www.sphinx-doc.org/en/master/', None),
    'markdown_it': ['https://markdown-it-py.readthedocs.io/en/latest', None],
    'myst': ['https://myst-parser.readthedocs.io/en/latest', None],
}

myst_url_schemes = ["http", "https", ]
