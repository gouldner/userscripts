// ==UserScript==
// @name        Route Log Tweaks
// @namespace   http://testdrive.kc.kuali.org
// @include     https://testdrive.kc.kuali.org/kc-ptd/kew/RouteLog.do*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==


var principalName = "";
$('td b:contains("IN ACTION LIST")').each(function() {
    console.log("tagname = " + $(this).parent().prop("tagName"));
    var aTextParent = $(this).parent();
    var requestedOf = aTextParent.next();
    var userLink = requestedOf.find('a');
    var href = userLink.attr('href');
    var principalId = href.substring(href.indexOf("principalId") + "principalId=".length);
    
    $('body').append('<div id="scratch"></div>');
    $('#scratch').hide();
    console.log("Test");
    
    $.get(href, function(data) {
        console.log("Executing");
        
        var scratch = $($.parseHTML(data));
        principalName = $.trim(scratch.find('th div:contains("Principal Name:")').parent().next().find("div").text())
        requestedOf.append('<a href="/kc-ptd/backdoorlogin.do?backdoorId=' + principalName + '&methodToCall=login">Login</a>');
    });
    
});

