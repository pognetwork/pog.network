mermaid.initialize({
  theme: "dark",
});
mermaid.initialize = () => {};

document$.subscribe(() => {
  if (mermaid !== undefined) mermaid.contentLoaded();
  Object.assign(window.MathJax, {
    tex: {
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      processEscapes: true,
      processEnvironments: true,
    },
    options: {
      ignoreHtmlClass: ".*|",
      processHtmlClass: "arithmatex",
    },
  });

  MathJax?.typesetPromise?.();
});
