(function() {
    // Create a unique ID for this script instance
    var scriptId = 'expandable-ad-' + Math.random().toString(36).substr(2, 9);
    
    // Function to inject required styles
    function injectStyles() {
        var style = document.createElement('style');
        style.textContent = `
            #${scriptId} {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 9999;
            }
            .gwd-page-container { position: relative; width: 100%; height: 100%; }
            .gwd-page-content { position: absolute; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
            .gwd-page-wrapper { position: absolute; transform: translateZ(0); }
            .banner { width: 300px; height: 250px; }
            .expanded { width: 480px; height: 250px; }
            .expand-button { position: absolute; width: 200px; height: 200px; top: 100%; left: 100%; transform: translate(-100%, -100%) translate3d(-60px, -70px, 0px); cursor: pointer; }
            .close-button { position: absolute; width: 120px; height: 48px; background-color: rgba(153, 153, 153, 0.2); top: 0; opacity: 0; left: 100%; transform: translate(-100%, 0%); cursor: pointer; }
            .gwd-image-kyh7 { position: absolute; width: 200px; height: 200px; top: 100%; left: 100%; transform: translate(-100%, -100%) translate3d(-60px, -70px, 0px) scale3d(0.001, 0.001, 1); transition: transform 0.5s; }
            .gwd-image-16ed { position: absolute; width: 200px; height: 200px; left: 100%; top: 100%; transform: translate(-100%, -100%) translate3d(-50px, 190px, 0px) rotateZ(50deg); transition: transform 0.3s; }
            .gwd-video-1pw6 { position: absolute; height: 100%; width: 100%; left: 50%; top: 50%; transform: translate(-50%, -50%); visibility: hidden; }
            .gwd-image-13xx { position: absolute; width: 100%; height: 100%; left: 50%; top: 50%; transform: translate(-50%, -50%); opacity: 1; }
            .gwd-image-1tz2 { position: absolute; width: 16px; height: 16px; left: 100%; top: 0; transform: translate(-100%, 0%) translate3d(-20px, 20px, 0px); cursor: pointer; }
        `;
        document.head.appendChild(style);
    }

    // Function to inject the ad HTML
    function injectAdHtml() {
        var adContainer = document.createElement('div');
        adContainer.id = scriptId;
        adContainer.innerHTML = `
            <div id="gwd-ad">
                <div id="banner-page" class="gwd-page-wrapper banner">
                    <div class="gwd-page-content banner">
                        <img id="image1" class="gwd-image-kyh7" src="1.png">
                        <img id="image2" class="gwd-image-16ed" src="1---Can-.png">
                        <div id="expand-button" class="expand-button"></div>
                    </div>
                </div>
                <div id="expanded-page" class="gwd-page-wrapper expanded" style="display:none;">
                    <div class="gwd-page-content expanded">
                        <video id="Frame_2_2" class="gwd-video-1pw6" src="frame2.mp4" muted></video>
                        <img id="Frame-2a" class="gwd-image-13xx" src="Frame-2a.gif">
                        <img id="b_close" class="gwd-image-1tz2" src="b_close.png">
                        <div id="close-button" class="close-button"></div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(adContainer);
    }

    // Function to handle expand button click
    function handleExpand() {
        document.getElementById('banner-page').style.display = 'none';
        document.getElementById('expanded-page').style.display = 'block';
        document.getElementById('Frame_2_2').play();
    }

    // Function to handle close button click
    function handleClose() {
        document.getElementById('expanded-page').style.display = 'none';
        document.getElementById('banner-page').style.display = 'block';
        document.getElementById('Frame_2_2').pause();
    }

    // Function to initialize the ad
    function initAd() {
        injectStyles();
        injectAdHtml();
        
        document.getElementById('expand-button').addEventListener('click', handleExpand);
        document.getElementById('close-button').addEventListener('click', handleClose);
        document.getElementById('b_close').addEventListener('click', handleClose);
        
        // Animation for the banner page
        setTimeout(() => {
            document.querySelector('.gwd-image-kyh7').style.transform = 'translate(-100%, -100%) translate3d(-60px, -70px, 0px) scale3d(1, 1, 1)';
            document.querySelector('.gwd-image-16ed').style.transform = 'translate(-100%, -100%) translate3d(-60px, -70px, 0px) rotateZ(0deg)';
        }, 500);
    }

    // Initialize the ad when the DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAd);
    } else {
        initAd();
    }
})();
