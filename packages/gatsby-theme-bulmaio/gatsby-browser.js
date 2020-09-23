import Prism from 'prism-react-renderer/prism'

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-kotlin");
require("prismjs/components/prism-csharp");

// support c#
Prism.languages["C#"] = Prism.languages["c#"] = Prism.languages.dotnet;
