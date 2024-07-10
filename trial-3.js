(function() {
    var scriptId = 'ad-script-' + Math.random().toString(36).substr(2, 9);
    var adContainer;

    function loadExternalScript(src) {
        return new Promise((resolve, reject) => {
            var script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    function injectStyles() {
        var style = document.createElement('style');
        style.textContent = "\n    #ad-container {\n        position: fixed;\n        bottom: 20px;\n        right: 20px;\n        z-index: 9999;\n    }\n    ";
        document.head.appendChild(style);
    }

    function injectHtml() {
        adContainer = document.createElement('div');
        adContainer.id = 'ad-container';
        adContainer.innerHTML = "\n<section class=\"['col_27']\">\n <div class=\"col_res\"> \n<div class=\"['el_1_cn']\">\n<div class=\"['el_1']\"></div>\n</div>\n<div class=\"['el_2_cn']\">\n<div class=\"['el_2']\"></div>\n</div>\n<div class=\"['cp_1_cn']\">\n<div class=\"['cp_1']\"></div>\n</div>\n<div class=\"['colclicker']\"></div>\n<div class=\"['clcolbtn']\"></div>\n </div> \n</section>\n<section class=\"['exp_27']\">\n<div class=\"['exp_res']\">\n<div class=\"['el_3_cn']\">\n<div class=\"['el_3']\"></div>\n</div>\n<div class=\"['el_4_cn']\">\n<div class=\"['el_4']\"></div>\n</div>\n<div class=\"['logo']\"></div>\n<div class=\"['vidcn']\">\n<video class=\"['buf_27']\" src=\"https://dsp-media.eskimi.com/upload/rm/upload/1687528138/ProMild_ExpSticky_Resp_Prod_v8/assets/comp.mp4#t=0.01\" crossorigin=\"anonymous\" loop=\"\" muted=\"\" playsinline=\"\"></video>\n<canvas class=\"['can_27']\" width=\"1080px\" height=\"1012px\"></canvas>\n</div>\n<div class=\"['cp_2_cn']\">\n<div class=\"['cp_2']\"></div>\n</div>\n<div class=\"['cp_3_cn']\">\n<div class=\"['cp_3']\"></div>\n</div>\n<div class=\"['cta']\"></div>\n<div class=\"['warn']\"></div>\n<div class=\"['expclicker']\"></div>\n<div class=\"['clexpbtn']\"></div>\n</div>\n</section>\n\n\n\n";
        document.body.appendChild(adContainer);
    }

    function injectScripts() {


        // ===================== eskimi def ========================

        var assets_url = 'https://dsp-media.eskimi.com/upload/rm/upload/1687528138/ProMild_ExpSticky_Resp_Prod_v8/assets/';

        var settings = {

            uniq_id: 27
        }

        var finished = false;
        var started = false;

        window.__eFlAdEl = document.querySelector('.col_27');

        var _dsptr = function(event) {

            var track = new Image();
            track.src = '{EVENT_URL}' + event;
        }

        function startEvent(event_name) {

            _dsptr(event_name);
        }

        function clickThrough(event) {

            window.open('{CLICK_URL}');
            return;
        }

        var colad = document.querySelector('.col_27');
        var expad = document.querySelector('.exp_27');




        // ===========================================================

        var o = {};
        var topWindow;
        var topDocument;

        var explp;
        var expcplp;
        var collp;

        var canvd = document.querySelector('.can_27');
        var bufvd = document.querySelector('.buf_27');

        var incol = document.querySelector('.col_27');
        var inexp = document.querySelector('.exp_27');

        gsap.set([incol, inexp], {
            autoAlpha: 0
        });

        console.log('ad27placed');

        document.addEventListener('ad27loaded', (params) => {

            // console.log(params.detail);
            // objects is automatically declared divs that's been painted in scroller

            o = params.detail.objects;
            topWindow = params.detail.topWindow;
            topDocument = params.detail.topDocument;

            console.log('ad27loaded');

            initAd();
        });

        function expandAd() {

            gsap.to([o.cp_1, o.el_1, o.el_2], {
                scale: 0.1,
                duration: 0.5,
                ease: 'back.in(2)',
                stagger: 0.1
            });
            gsap.to(colad, {
                autoAlpha: 0,
                duration: 0.5,
                delay: 0.2
            });
            gsap.fromTo(expad, {
                y: 100
            }, {
                autoAlpha: 1,
                scale: 1,
                y: 0,
                duration: 0.3,
                delay: 0.4
            });
            gsap.fromTo([o.el_3, o.el_4, o.cta, o.warning, o.logo], {
                scale: 0.1
            }, {
                scale: 1,
                duration: 0.5,
                ease: 'back.out(2)',
                stagger: 0.1,
                delay: 0.4
            });

            explp.play();
            expcplp.play();
            collp.pause();

            bufvd.play();
            startEvent('expandAd');
        }

        function collapseAd() {

            gsap.to([o.el_3, o.el_4, o.cta, o.warning, o.logo], {
                scale: 0.1,
                duration: 0.5,
                ease: 'back.in(2)',
                stagger: 0.1
            });
            gsap.to(expad, {
                autoAlpha: 0,
                duration: 0.5,
                scale: 0.2,
                delay: 0.5
            });
            gsap.to([o.cp_1, o.el_1, o.el_2], {
                scale: 1,
                duration: 0.5,
                ease: 'back.out(2)',
                stagger: 0.1,
                delay: 0.7
            });
            gsap.to(colad, {
                autoAlpha: 1,
                duration: 0.5,
                delay: 0.7
            });

            explp.pause();
            expcplp.pause();
            collp.play();

            bufvd.pause();

            startEvent('collapseAd');
        }

        function doScale() {

            var ratio = 1;
            topWindow.innerWidth < topWindow.innerHeight ? ratio = topWindow.innerWidth / topWindow.innerHeight : ratio = topWindow.innerHeight / topWindow.innerWidth;

            // console.log(ratio);

            if (ratio > 0.3 && ratio < 0.6) {

                gsap.to(o.exp_res, {
                    scale: ratio * 0.7,
                    duration: 0.1
                });
            }
            if (ratio > 0.6) {

                gsap.to(o.exp_res, {
                    scale: 0.6,
                    duration: 0.1
                });
            }

        }

        function closeAd() {

            gsap.to(colad, {
                scale: 0.2,
                autoAlpha: 0,
                duration: 0.5,
                ease: 'back.in(2)'
            });
            startEvent('closeAd');
        }

        function initAd() {

            // gsap.set([o.cp_3_cn, o.cp_2_cn], {autoAlpha: 0});

            gsap.to(colad, {
                autoAlpha: 1,
                duration: 0.5
            });

            collp = gsap.timeline({
                repeat: -1,
                yoyo: true
            });
            explp = gsap.timeline({
                repeat: -1,
                yoyo: true,
                paused: true
            });
            var colels = [o.cp_1, o.el_1, o.el_2];
            var expels = [o.cp_2, o.cp_3, o.el_3, o.el_4];

            colels.forEach((el) => {

                collp.to(el, {
                    x: gsap.utils.random(-2, 2),
                    y: gsap.utils.random(-2, 2),
                    rotate: gsap.utils.random(-2, 2),
                    duration: 0.5,
                    ease: 'sine.inOut'
                }, 'an');
                collp.to(el, {
                    x: gsap.utils.random(-2, 2),
                    y: gsap.utils.random(-2, 2),
                    rotate: gsap.utils.random(-2, 2),
                    duration: 0.5,
                    ease: 'sine.inOut'
                }, 'an+=0.5');
            });

            expels.forEach((el) => {

                explp.to(el, {
                    x: gsap.utils.random(-2, 2),
                    y: gsap.utils.random(-2, 2),
                    rotate: gsap.utils.random(-2, 2),
                    duration: 0.5,
                    ease: 'sine.inOut'
                }, 'an');
                explp.to(el, {
                    x: gsap.utils.random(-2, 2),
                    y: gsap.utils.random(-2, 2),
                    rotate: gsap.utils.random(-2, 2),
                    duration: 0.5,
                    ease: 'sine.inOut'
                }, 'an+=0.5');
            });

            expcplp = gsap.timeline({
                repeat: -1,
                delay: 0.5,
                paused: true
            });

            expcplp.fromTo(o.cp_2_cn, {
                x: -200,
                autoAlpha: 0
            }, {
                x: 0,
                autoAlpha: 1,
                duration: 0.5,
                ease: 'back.out(2)'
            }, 'an');
            expcplp.to(o.cp_2_cn, {
                x: 200,
                autoAlpha: 0,
                duration: 0.5,
                ease: 'back.in(2)'
            }, 'an+=2');
            expcplp.fromTo(o.cp_3_cn, {
                x: -200,
                autoAlpha: 0
            }, {
                x: 0,
                autoAlpha: 1,
                duration: 0.5,
                ease: 'back.out(2)'
            }, 'an+=2.5');
            expcplp.to(o.cp_3_cn, {
                x: 200,
                autoAlpha: 0,
                duration: 0.5,
                ease: 'back.in(2)'
            }, 'an+=4.3');

            topWindow.addEventListener('resize', doScale);
            doScale();

            var trvid = new av_player(bufvd, canvd);

            document.addEventListener('av_loaded', (event) => {

                console.log('ad27vidloaded');
            });

            o.colclicker.addEventListener('click', expandAd);
            o.expclicker.addEventListener('click', clickThrough);
            o.clexpbtn.addEventListener('click', collapseAd);
            o.clcolbtn.addEventListener('click', closeAd);

            // ==================================eskimi def===================================

            var d = {
                mouseOver: false,
                touch: false,
                frameSeen: 1,
            };

            colad.addEventListener("mouseover", function() {

                if (!d.mouseOver && !d.touch) {

                    d.mouseOver = true;

                    startEvent("Mouse_Over");
                }
            });

            //touch
            colad.addEventListener("touchstart", function() {

                if (!d.mouseOver && !d.touch) {

                    d.touch = true;

                    startEvent("Touch");
                }
            });

        }


    }

    async function initAd() {
        injectStyles();
        injectHtml();

        // Load external scripts
        var externalScripts = ["https://dsp-media.eskimi.com/upload/rm/upload/1687528138/ProMild_ExpSticky_Resp_Prod_v8/js/pb_player.js", "https://dsp-media.eskimi.com/upload/rm/upload/1687528138/ProMild_ExpSticky_Resp_Prod_v8/js/gsap.min.js", "https://dsp-media.eskimi.com/upload/rm/upload/1687528138/ProMild_ExpSticky_Resp_Prod_v8/js/expand.js"];
        for (var i = 0; i < externalScripts.length; i++) {
            try {
                await loadExternalScript(externalScripts[i]);
            } catch (error) {
                console.error('Failed to load script:', externalScripts[i], error);
            }
        }

        injectScripts();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAd);
    } else {
        initAd();
    }
})();
