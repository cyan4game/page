// JavaScript Document
// 
'use strict';
 !function () {
            var cw = document.documentElement.clientWidth || document.body.clientWidth;
            cw = cw > 290 ? 290 : cw;
            var zoom = cw / 145;
            document.write('<style id="htmlzoom">html{font-size:' + (zoom * 50) + 'px;}</style>');
            window.addEventListener('resize', function () {
                cw = document.documentElement.clientWidth || document.body.clientWidth;
                if (cw > 290)cw = 290;
                zoom = cw / 145;
                document.getElementById('htmlzoom').innerHTML = 'html{font-size:' + (zoom * 50) + 'px;}';
            });
        }();



jQuery(document).ready(function($) {

   





});





