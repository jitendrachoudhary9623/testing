(function() {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://indomierawon.ymtads.com/nescafe/index.html';
    iframe.width = '100%';  // Set the width of the ad
    iframe.height = '100%'; // Set the height of the ad
    iframe.frameBorder = '0';
    iframe.scrolling = 'no';
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.style.zIndex = '99999';  // High z-index to ensure it stays on top
    iframe.style.position = 'fixed'; // Fixed position
    iframe.style.bottom = '0';  // Position it at the bottom of the viewport
    iframe.style.left = '0'; // Align it to the left of the viewport

    // Append the iframe to a specific element or the document body
    document.body.appendChild(iframe);
})();
