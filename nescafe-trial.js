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
                width: 300px;
                height: 250px;
            }
            #${scriptId} * {
                box-sizing: border-box;
            }
            #${scriptId} .gwd-page-container {
                position: relative;
                width: 100%;
                height: 100%;
            }
            #${scriptId} .gwd-page-content {
                transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                -moz-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                perspective: 1400px;
                -webkit-perspective: 1400px;
                -moz-perspective: 1400px;
                transform-style: preserve-3d;
                -webkit-transform-style: preserve-3d;
                -moz-transform-style: preserve-3d;
                position: absolute;
            }
            #${scriptId} .gwd-page-wrapper {
                position: absolute;
                transform: translateZ(0px);
                -webkit-transform: translateZ(0px);
                -moz-transform: translateZ(0px);
            }
            #${scriptId} .banner {
                width: 100%;
                height: 100%;
            }
            #${scriptId} .expanded {
                width: 480px;
                height: 250px;
            }
            #${scriptId} .expand-button {
                position: absolute;
                width: 200px;
                height: 200px;
                top: 100%;
                left: 100%;
                transform: translate(-100%, -100%) translate3d(-60px, -70px, 0px);
                -webkit-transform: translate(-100%, -100%) translate3d(-60px, -70px, 0px);
                -moz-transform: translate(-100%, -100%) translate3d(-60px, -70px, 0px);
                cursor: pointer;
            }
            #${scriptId} .close-button {
                position: absolute;
                width: 120px;
                height: 48px;
                background-color: rgba(153, 153, 153, 0.2);
                top: 0px;
                opacity: 0;
                left: 100%;
                transform: translate(-100%, 0%);
                cursor: pointer;
            }
            #${scriptId} .gwd-image-kyh7 {
                position: absolute;
                width: 200px;
                height: 200px;
                top: 100%;
                left: 100%;
                transform: translate(-100%, -100%) translate3d(-60px, -70px, 0px) scale3d(0.001, 0.001, 1);
                -webkit-transform: translate(-100%, -100%) translate3d(-60px, -70px, 0px) scale3d(0.001, 0.001, 1);
                -moz-transform: translate(-100%, -100%) translate3d(-60px, -70px, 0px) scale3d(0.001, 0.001, 1);
            }
            #${scriptId} .gwd-image-16ed {
                position: absolute;
                width: 200px;
                height: 200px;
                left: 100%;
                top: 100%;
                transform: translate(-100%, -100%) translate3d(-50px, 190px, 0px) rotateZ(50deg);
                -webkit-transform: translate(-100%, -100%) translate3d(-50px, 190px, 0px) rotateZ(50deg);
                -moz-transform: translate(-100%, -100%) translate3d(-50px, 190px, 0px) rotateZ(50deg);
            }
            #${scriptId} .gwd-video-1pw6 {
                position: absolute;
                height: 100%;
                width: 100%;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                -webkit-transform: translate(-50%, -50%);
                -moz-transform: translate(-50%, -50%);
                visibility: hidden;
            }
            #${scriptId} .gwd-image-13xx {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                -webkit-transform: translate(-50%, -50%);
                -moz-transform: translate(-50%, -50%);
                opacity: 1;
            }
            #${scriptId} .gwd-image-1tz2 {
                position: absolute;
                width: 16px;
                height: 16px;
                left: 100%;
                top: 0px;
                transform: translate(-100%, 0%) translate3d(-20px, 20px, 0px);
                cursor: pointer;
            }
            @keyframes gwd-gen-1pwzgwdanimation_gwd-keyframes {
                0% { transform: translate(-100%, -100%) translate3d(-60px, -70px, 0px) scale3d(0.001, 0.001, 1); }
                60% { transform: translate(-100%, -100%) translate3d(-60px, -70px, 0px) scale3d(1.3, 1.3, 1); }
                100% { transform: translate(-100%, -100%) translate3d(-60px, -70px, 0px) scale3d(1, 1, 1); }
            }
            #${scriptId} .gwd-gen-1pwzgwdanimation {
                animation: gwd-gen-1pwzgwdanimation_gwd-keyframes 0.5s linear 0.5s 1 normal forwards;
            }
            @keyframes gwd-gen-1k8lgwdanimation_gwd-keyframes {
                0% { transform: translate(-100%, -100%) translate3d(-50px, 190px, 0px) rotateZ(50deg); }
                100% { transform: translate(-100%, -100%) translate3d(-60px, -70px, 0px) rotateZ(0deg); }
            }
            #${scriptId} .gwd-gen-1k8lgwdanimation {
                animation: gwd-gen-1k8lgwdanimation_gwd-keyframes 0.3s linear 1s 1 normal forwards;
            }
        `;
        document.head.appendChild(style);
    }

    // Function to inject the ad HTML
    function injectAdHtml() {
        var adContainer = document.createElement('div');
        adContainer.id = scriptId;
        adContainer.innerHTML = `
            <div id="gwd-ad">
                <div class="gwd-page-container" id="pagedeck">
                    <div id="banner-page" class="gwd-page-wrapper banner gwd-lightbox">
                        <div class="gwd-page-content banner">
                            <img id="1" src="1.png" class="gwd-image-kyh7 gwd-gen-1pwzgwdanimation">
                            <img id="1---Can-" src="1---Can-.png" class="gwd-image-16ed gwd-gen-1k8lgwdanimation">
                            <div id="expand-button" class="expand-button"></div>
                        </div>
                    </div>
                    <div id="expanded-page" class="gwd-page-wrapper expanded gwd-lightbox" style="display:none;">
                        <div class="gwd-page-content expanded">
                            <video id="Frame_2_2" src="frame2.mp4" class="gwd-video-1pw6" muted></video>
                            <img id="Frame-2a" src="Frame-2a.gif" class="gwd-image-13xx">
                            <img id="b_close" src="b_close.png" class="gwd-image-1tz2">
                            <div id="close-button" class="close-button"></div>
                        </div>
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
        document.getElementById(scriptId).style.width = '480px';
        document.getElementById(scriptId).style.height = '250px';
    }

    // Function to handle close button click
    function handleClose() {
        document.getElementById('expanded-page').style.display = 'none';
        document.getElementById('banner-page').style.display = 'block';
        document.getElementById('Frame_2_2').pause();
        document.getElementById(scriptId).style.width = '300px';
        document.getElementById(scriptId).style.height = '250px';
    }

    // Function to initialize the ad
    function initAd() {
        injectStyles();
        injectAdHtml();
        
        document.getElementById('expand-button').addEventListener('click', handleExpand);
        document.getElementById('close-button').addEventListener('click', handleClose);
        document.getElementById('b_close').addEventListener('click', handleClose);
        
        // Start banner animations
        setTimeout(() => {
            document.getElementById('1').classList.add('gwd-gen-1pwzgwdanimation');
            document.getElementById('1---Can-').classList.add('gwd-gen-1k8lgwdanimation');
        }, 100);
    }

    // Initialize the ad when the DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAd);
    } else {
        initAd();
    }
})();
