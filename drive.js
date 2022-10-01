window.addEventListener("load", setupListener);

function setupListener() {
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeName == 'DIV' && node.classList.contains('a-X-k')) {
          document.querySelector("body > div.a-X-k > div.a-X-k-Gb > button.h-De-Vb.h-De-Y.a-X-d").click();
          node.parentElement.removeChild(node.previousSibling);
          node.parentElement.removeChild(node);
        }
      })
    });
  });

  observer.observe(document.body, {
    childList: true,
  });
}
