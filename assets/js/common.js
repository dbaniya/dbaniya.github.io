$(document).ready(function(){if($("a.abstract").click(function(){$(this).parent().parent().find(".abstract.hidden").toggleClass("open"),$(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open")}),$("a.video").click(function(){$(this).parent().parent().find(".video.hidden").toggleClass("open"),$(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open")}),$("a.video-1").click(function(){$(this).parent().parent().find(".video-1.hidden").toggleClass("open"),$(this).parent().parent().find(".video-2.hidden.open").toggleClass("open"),$(this).parent().parent().find(".video-3.hidden.open").toggleClass("open")}),$("a.video-2").click(function(){$(this).parent().parent().find(".video-2.hidden").toggleClass("open"),$(this).parent().parent().find(".video-1.hidden.open").toggleClass("open"),$(this).parent().parent().find(".video-3.hidden.open").toggleClass("open")}),$("a.video-3").click(function(){$(this).parent().parent().find(".video-3.hidden").toggleClass("open"),$(this).parent().parent().find(".video-1.hidden.open").toggleClass("open"),$(this).parent().parent().find(".video-2.hidden.open").toggleClass("open")}),$("a.bibtex").click(function(){$(this).parent().parent().find(".bibtex.hidden").toggleClass("open"),$(this).parent().parent().find(".abstract.hidden.open").toggleClass("open")}),$("a").removeClass("waves-effect waves-light"),$("#toc-sidebar").length){var e="#toc-sidebar",n=$(e);Toc.init(n),$("body").scrollspy({target:e})}const t=document.createElement("link");t.href="../css/jupyter.css",t.rel="stylesheet",t.type="text/css";let i=localStorage.getItem("theme");if(null==i||"null"==i){const e=window.matchMedia;e&&e("(prefers-color-scheme: dark)").matches&&(i="dark")}$(".jupyter-notebook-iframe-container iframe").each(function(){$(this).contents().find("head").append(t),"dark"==i&&$(this).bind("load",function(){$(this).contents().find("body").attr({"data-jp-theme-light":"false","data-jp-theme-name":"JupyterLab Dark"})})})});