$(document).ready(function(){if($("a.abstract").click(function(){$(this).parent().parent().find(".abstract.hidden").toggleClass("open"),$(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open")}),$("a.video").click(function(){$(this).parent().parent().find(".video.hidden").toggleClass("open"),$(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open")}),$("a.video-1").click(function(){$(this).parent().parent().find(".video-1.hidden").toggleClass("open"),$(this).parent().parent().find(".video-2.hidden.open").toggleClass("open")}),$("a.video-2").click(function(){$(this).parent().parent().find(".video-2.hidden").toggleClass("open"),$(this).parent().parent().find(".video-1.hidden.open").toggleClass("open")}),$("a.bibtex").click(function(){$(this).parent().parent().find(".bibtex.hidden").toggleClass("open"),$(this).parent().parent().find(".abstract.hidden.open").toggleClass("open")}),$("a").removeClass("waves-effect waves-light"),$("#toc-sidebar").length){var e="#toc-sidebar",t=$(e);Toc.init(t),$("body").scrollspy({target:e})}const n=document.createElement("link");n.href="../css/jupyter.css",n.rel="stylesheet",n.type="text/css";let a=localStorage.getItem("theme");if(null==a||"null"==a){const e=window.matchMedia;e&&e("(prefers-color-scheme: dark)").matches&&(a="dark")}$(".jupyter-notebook-iframe-container iframe").each(function(){$(this).contents().find("head").append(n),"dark"==a&&$(this).bind("load",function(){$(this).contents().find("body").attr({"data-jp-theme-light":"false","data-jp-theme-name":"JupyterLab Dark"})})})});