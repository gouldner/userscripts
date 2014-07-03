// ==UserScript==
// @name        Jira Tweaks
// @namespace   https://jira.kuali.org
// @include     http://jira.kuali.org/*
// @include     https://jira.kuali.org/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

document.body.style.background = "#000000"; 

$('.aui-nav-breadcrumbs .issue-link').css('font-size', '30pt')
