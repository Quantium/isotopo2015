/* isotopo.net. Version 2.0.0 27-04-2015 */
!function(a){new gnMenu(document.getElementById("gn-menu")),a(function(){a(".gn-menu li a").bind("click",function(b){var c=a(this);a("html, body").stop().animate({scrollTop:a(c.attr("href")).offset().top},1500,"easeInOutExpo"),b.preventDefault()}),a("a.scroll").bind("click",function(b){var c=a(this);a("html, body").stop().animate({scrollTop:a(c.attr("href")).offset().top},1500,"easeInOutExpo"),b.preventDefault()})}),a("#contact-form").submit(function(b){b.preventDefault();var c=a("input#name").val(),d=a("input#email").val(),e=a("select#subject").val(),f=a("textarea#message").val(),g="name="+c+"&email="+d+"&subject="+e+"&message="+f;return a.ajax({type:"POST",url:"/contact",data:g,success:function(b){console.log("Contact success :: ",b),a("#contact-form").html("Gracias")}}),!1}),a(".gallery-item a").nivoLightbox({effect:"fadeScale",theme:"default",keyboardNav:!0,clickOverlayToClose:!0,onInit:function(){},beforeShowLightbox:function(){},afterShowLightbox:function(a){},beforeHideLightbox:function(){},afterHideLightbox:function(){},onPrev:function(a){},onNext:function(a){},errorMessage:"The requested content cannot be loaded. Please try again later."})}(jQuery);