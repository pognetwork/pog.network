window.console.info = () => {}
window.console.warn = () => {}
window.console.log = () => {}

mermaid.initialize({
  theme: "dark"
});

mermaid.initialize = () => {}
document$.subscribe(() => {
  if(mermaid !== undefined) mermaid.contentLoaded()})
