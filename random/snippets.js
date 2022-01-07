//randomise divs

$(function () {
    var parent = $(".radiocontainer");
    var divs = parent.children();
    while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});



{% if basket.url %} {{basket.url}}{% else %}https://api.ometria.com/trk/click?acc={{email.account_hash}}{% endif %}