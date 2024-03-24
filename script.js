(function() {
    var slidersContainer = document.querySelector('.sliders-container');
    
    // Initializing the numbers slider
    var msNumbers = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--numbers',
        range: [1, 4],
        rangeContent: function (i) {
            return '0' + i;
        },
        style: {
            transform: [{scale: [0.4, 1]}],
            opacity: [0, 1]
        },
        interactive: false
    });
    
    // Initializing the titles slider
    var titles = [
        'King of the Ring Fight',
        'Sound of Streets',
        'Urban Fashion',
        'Windy Sunset'
    ]; 
    var msTitles = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--titles',
        range: [0, 3],
        rangeContent: function (i) {
            return titles[i];
        },
        interactive: false
    });
    
    // Initializing the links slider
    var msLinks = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--links',
        range: [0, 3],
        rangeContent: function () {
            return '<a class="ms-slide__link">View Case</a>';
        },
        vertical: true,
        interactive: false
    });
    
    // Get pagination items
    var pagination = document.querySelector('.pagination'); 
    var paginationItems = [].slice.call(pagination.children);
    
    // Initializing the images slider
    var msImages = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--images',
        range: [0, 3],
        rangeContent: function () {
            return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
        },
        sync: [msNumbers, msTitles, msLinks]
    });
})();
