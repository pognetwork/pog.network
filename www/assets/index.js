window.console.info = () => {}
window.console.warn = () => {}
window.console.log = () => {}

mermaid.initialize({
  theme: "dark"
});

mermaid.initialize = () => {}
document$.subscribe(() => {
  if(mermaid !== undefined) mermaid.contentLoaded()})

window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => { 
  MathJax.typesetPromise()
})
