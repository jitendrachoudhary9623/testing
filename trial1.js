(function() {
    // Create a unique ID for this script instance
    var scriptId = 'ad-script-' + Math.random().toString(36).substr(2, 9);
    document.currentScript.setAttribute("id", scriptId);

    // Function to load jQuery
    function loadJQuery(callback) {
        var script = document.createElement('script');
        script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
        script.onload = callback;
        document.head.appendChild(script);
    }

    // Function to inject the ad HTML
    function injectAdHtml() {
        var adHtml = `
        <div class='AT-ads jhfdiuh0' id='AT-ads'>
            <div class='AT-ads-close' onclick='document.getElementById("AT-ads").style.display="none"'>
                <svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z'/>
                </svg>
            </div>
            <ins class='adcads' data-adc-id='FRfel7jyCsrM' data-unit='FRfel7jyCsrM' data-clickable='yes' data-redir='no' data-click-tracker='https://bs.serving-sys.com/Serving/adServer.bs?cn=trd&pli=1079885513&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_68}&us_privacy=${US_PRIVACY}&adid=1092192801&ord=${IMPRESSION_TIME}' data-meta-platform='mweb' data-click-macro='https://rtb-apac-i.zeststack.com/delivery/impress?zoneid=655&buyerid=0395&type=banner&didmd5=&brand=YXBwbGU=&model=&tagid=395&ua=TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyNi4wLjAuMCBTYWZhcmkvNTM3LjM2&os=Mac&osv=&pubid=395&pubip=219.91.171.148&gaid=451faaae9129cd3ef589a38f2993b053&pub_pack=zeststack.com&pub_pub_id=&pub_pub_name=&imp_id=1&request_id=a6c29229987d67c51d2f018cdde903d3&extra3=de4d65137a7dcc2258bccefc05bbcd35&extra4=320&extra5=100&internal=1&winbid=0&ap=0.10&BidFloor=0.00&imptime=${IMPRESSION_TIME}&country=ind&city=cHVuZQ==&region=bWFoYXJhc2h0cmE=&segid=0&segname=&eventtype=click&tpt=' data-3rd-tracker='https://bs.serving-sys.com/Serving/adServer.bs?cn=display&c=19&pli=1079885513&gdpr=%24%7BGDPR%7D&gdpr_consent=%24%7BGDPR_CONSENT_68%7D&us_privacy=${US_PRIVACY}&adid=1092192801&ord=${IMPRESSION_TIME}' data-onevent-ctr-attribute_key='https://bs.serving-sys.com/Serving/adServer.bs?cn=trd&pli=1079885513&gdpr=%24%7BGDPR%7D&gdpr_consent=%24%7BGDPR_CONSENT_68%7D&us_privacy=${US_PRIVACY}&adid=1092192801&ord=${IMPRESSION_TIME}' data-s2-3rd-tracker='https://bs.serving-sys.com/Serving/adServer.bs?cn=display&c=19&pli=1079885513&gdpr=%24%7BGDPR%7D&gdpr_consent=%24%7BGDPR_CONSENT_68%7D&us_privacy=${US_PRIVACY}&adid=1092192801&ord=${IMPRESSION_TIME}' data-s2-onevent-ctr-attribute_key='https://bs.serving-sys.com/Serving/adServer.bs?cn=trd&pli=1079885513&gdpr=%24%7BGDPR%7D&gdpr_consent=%24%7BGDPR_CONSENT_68%7D&us_privacy=${US_PRIVACY}&adid=1092192801&ord=${IMPRESSION_TIME}' data-responsive='yes' data-width='320' data-height='100'>
                <script src='https://media.adcanvas.com/FRfel7jyCsrM/adtag.js' type='text/javascript' async><\/script>
            </ins>
        </div>
        <img class="impression_trackers" src="https://rtb-apac-i.zeststack.com/delivery/impress?zoneid=655&buyerid=0395&type=banner&didmd5=&brand=YXBwbGU=&model=&tagid=395&ua=TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyNi4wLjAuMCBTYWZhcmkvNTM3LjM2&os=Mac&osv=&pubid=395&pubip=219.91.171.148&gaid=451faaae9129cd3ef589a38f2993b053&pub_pack=zeststack.com&pub_pub_id=&pub_pub_name=&imp_id=1&request_id=a6c29229987d67c51d2f018cdde903d3&extra3=de4d65137a7dcc2258bccefc05bbcd35&extra4=320&extra5=100&internal=1&winbid=${AUCTION_PRICE}&ap=0.10&BidFloor=0.00&imptime=1720595784&country=ind&city=cHVuZQ==&region=bWFoYXJhc2h0cmE=&dc=MC4xMA==&segid=0&segname=" height="0" width="0"/>
        `;

        var style = `
        <style>
            .AT-ads {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                min-height: 70px;
                padding: 5px 0;
                box-shadow: 0 -6px 18px 0 rgba(9,32,76,.1);
                -webkit-transition: all .1s ease-in;
                transition: all .1s ease-in;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #fefefe;
                z-index: 20;
            }

            .AT-ads-close {
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 12px 0 0;
                position: absolute;
                right: 0;
                top: -30px;
                background-color: #fefefe;
                box-shadow: 0 -6px 18px 0 rgba(9,32,76,.08);
            }

            .AT-ads .AT-ads-close svg {
                width: 22px;
                height: 22px;
                fill: #000;
            }

            .AT-ads .AT-ads-content {
                overflow: hidden;
                display: block;
                position: relative;
                height: 70px;
                width: 100%;
                margin-right: 10px;
                margin-left: 10px;
            }
        </style>
        `;

        $('body').append(style + adHtml);

        // Add scroll behavior
        var prevScrollpos = window.pageYOffset;
        function hidenotice() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById('AT-ads').style.bottom = '0';
            } else {
                document.getElementById('AT-ads').style.bottom = '-50px';
            }
            prevScrollpos = currentScrollPos;
        }
        window.onscroll = hidenotice;
    }

    // Load jQuery and then inject the ad HTML
    loadJQuery(function() {
        $(document).ready(injectAdHtml);
    });
})();
