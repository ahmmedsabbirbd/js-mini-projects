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

    // /*/// Copy Text and setTimeout ///*/
    // let copyText = document.querySelector(".copy-text"),
    // copyButton = copyText.querySelector("button");

    // copyButton.addEventListener("click", function () {

    //     let input = copyText.querySelector("input");
    //     input.select();
    //     document.execCommand("copy");

    //     copyText.classList.add("Coppy-Text");

    //     setTimeout(function () {
    //         copyText.classList.remove("Coppy-Text");
    //     }, 2500);

    // });

    // /*/// Copy Text and setTimeout ///*/
    // let portfoli = document.querySelector(".portfoli-area"),
    // copyButton = portfoli.querySelector(".copy");

    // copyButton.addEventListener("click", function () {

    //     // var link = document.getElementById("#abd").innerText;
    //     // var link = link.innerHTML;
    //     // console.log(link);
    //     // select(link);
    //     // link.select();
    //     // document.execCommand("copy");

    //     portfoli.classList.add("Coppy-Text");

    //     setTimeout(function () {
    //         portfoli.classList.remove("Coppy-Text");
    //     }, 2500);

    // });

});

function copyText(element) {
  var $copyText = document.getElementById(element).innerText;
  var button = document.getElementById(element + '-copy');
  console.log($copyText);

  navigator.clipboard.writeText($copyText).then(function() {
    var originalText = button.innerText;
    button.innerText = 'Copied!';

    setTimeout(function(){
      button.innerText = originalText;
      }, 250);
  });
}

// // function withJquery(){
// function ads() {
//     var temp = $("<input>");
//     $("body").append(temp);
//     temp.val($('#copyText1').text()).select();
//     document.execCommand("copy");
//     temp.remove();
// };

