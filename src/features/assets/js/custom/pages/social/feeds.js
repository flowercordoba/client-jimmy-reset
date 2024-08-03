"use strict";

var KTSocialFeeds = (function() {
    var e, t, n, o, d, i;

    function initElements() {
        e = document.getElementById("kt_social_feeds_more_posts_btn");
        t = document.getElementById("kt_social_feeds_more_posts");
        n = document.getElementById("kt_social_feeds_posts");
        o = document.getElementById("kt_social_feeds_post_input");
        d = document.getElementById("kt_social_feeds_post_btn");
        i = document.getElementById("kt_social_feeds_new_post");
    }

    function addEventListeners() {
        if (e) {
            e.addEventListener("click", function(n) {
                n.preventDefault();
                e.setAttribute("data-kt-indicator", "on");
                e.disabled = true;
                setTimeout(function() {
                    e.removeAttribute("data-kt-indicator");
                    e.disabled = false;
                    e.classList.add("d-none");
                    t.classList.remove("d-none");
                    KTUtil.scrollTo(t, 200);
                }, 1000);
            });
        }

        if (d) {
            d.addEventListener("click", function(e) {
                e.preventDefault();
                d.setAttribute("data-kt-indicator", "on");
                d.disabled = true;
                setTimeout(function() {
                    d.removeAttribute("data-kt-indicator");
                    d.disabled = false;
                    var e = o.value,
                        t = i.querySelector(".card").cloneNode(true);
                    n.prepend(t);
                    if (e.length > 0) {
                        t.querySelector('[data-kt-post-element="content"]').innerHTML = e;
                    }
                    KTUtil.scrollTo(t, 200);
                }, 1000);
            });
        }
    }

    return {
        init: function() {
            initElements();
            addEventListeners();
        }
    };
})();

document.addEventListener('DOMContentLoaded', function() {
    KTSocialFeeds.init();
});
