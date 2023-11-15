$(document).ready(function() {
  // add toggle functionality to abstract and bibtex buttons
  $('a.abstract').click(function() {
    $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
    $(this).parent().parent().find(".video.hidden.open").toggleClass('open');

  });
  $('a.video').click(function() {
    $(this).parent().parent().find(".video.hidden").toggleClass('open',$('#video').trigger('pause'));
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');

  });

  $('a.video-1').click(function() {
    $(this).parent().parent().find(".video-1.hidden").toggleClass('open',$('#video-1')[0].trigger('pause'));
    $(this).parent().parent().find(".video-2.hidden.open").toggleClass('open',$('#video-2')[0].trigger('pause'));
   
  });

  $('a.video-2').click(function() {
    $(this).parent().parent().find(".video-2.hidden").toggleClass('open',$('#video-2')[0].trigger('pause'));
    $(this).parent().parent().find(".video-1.hidden.open").toggleClass('open',$('#video-1')[0].trigger('pause'));
  });

    $('a.bibtex').click(function() {
    $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
    $(this).parent().parent().find(".video.hidden.open").toggleClass('open');

  });

  $('a').removeClass('waves-effect waves-light');

  // bootstrap-toc
  if($('#toc-sidebar').length){
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href  = "../css/jupyter.css";
  cssLink.rel   = "stylesheet";
  cssLink.type  = "text/css";

  let theme = localStorage.getItem("theme");
  if (theme == null || theme == "null") {
    const userPref = window.matchMedia;
    if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  }

  $('.jupyter-notebook-iframe-container iframe').each(function() {
    $(this).contents().find("head").append(cssLink);

    if (theme == "dark") {
      $(this).bind("load",function(){
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark"});
      });
    }
  });
});

