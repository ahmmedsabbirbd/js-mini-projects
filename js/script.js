$('documnet').ready(function() {

    /*** Header height = gutter height */
    function setGutterHeight(){
        var footer = document.querySelector('.footer');
            footerGutter = document.querySelector('.content-wrapper');

        if ( footerGutter ) {
            footerGutter.style.paddingBottom = footer.offsetHeight + 'px';
        }
        console.log(footerGutter);
    }
    window.onload = setGutterHeight;
    window.onresize = setGutterHeight;   

    /*/// Mmenu with Mhead ///*/
    new Mmenu("#menu-mmenu", {
        extensions: [ "position-right" ],
        navbar: {
            title: "<div class='logo'><a href='index.html'>Javascript</a></div>"
        }
    }, {});

    $(".mh-head.Sticky").mhead({
        scroll: {
            hide: 10
        }
    }); 

    /*/// Dropdown Menu ///*/
   // Hide SubMenus.
    $(".subMenu").hide();

    // Shows SubMenu when it's parent is hovered.
    $(".subMenu").parent("li").hover(function () {
      $(this).find(">.subMenu").not(':animated').slideDown(300);
      $(this).toggleClass("active  icon-minus");
    });

    // Hides SubMenu when mouse leaves the zone.
    $(".subMenu").parent("li").mouseleave(function () {
      $(this).find(">.subMenu").slideUp(150);
    });

    // Prevents scroll to top when clicking on <a href="#"> 
    $("a[href=\"#\"]").click(function () {
      return false;
    }); 

    function dropdownPlus() {
        $(".subMenu").parent("li").addClass("icon-plus");
    } 
    window.onload = dropdownPlus();  

    // Header height = gutter height 
    function setGutterHeight() {
        var body = document.querySelector('body'),
            container = document.querySelector('.container'), 
            nubms = document.querySelector('.media-gallery'), 
            containerLeftRight = body.offsetWidth - container.offsetWidth,
            containerRight = containerLeftRight/2;

        if ( nubms ) 
        {
            console.log(containerRight+'px');
            nubms.style.width = 'calc(100% + '+containerRight + 15 + 'px';
        } 
    }

    window.onload = setGutterHeight;
    window.onresize = setGutterHeight; 

    /*/// magnific popup ///*/
    $('.media-gallery').magnificPopup({ 
        delegate: 'img',
        type: 'image',
        gallery:{
            enabled:true
        }
    });
});


