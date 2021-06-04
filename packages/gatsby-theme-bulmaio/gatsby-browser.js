import Prism from 'prism-react-renderer/prism'

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-markup");
require("prismjs/components/prism-json");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-kotlin");
require("prismjs/components/prism-java");
require("prismjs/components/prism-groovy");
require("prismjs/components/prism-go");
require("prismjs/components/prism-csharp");
require("prismjs/components/prism-yaml");

// Aliases
Prism.languages["gradle"] = Prism.languages.groovy;
Prism.languages["C#"] = Prism.languages["c#"] = Prism.languages.dotnet;
