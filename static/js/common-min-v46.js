function Main() {}
Main.breakFrame = function () {
    if (top.frames.length != 0) {
        top.location = self.document.location;
    }
};
Main.chk_xss_options = function () {
	var sanitized_href = window.location.href.replace(/(.)#(data|\/\/|\/{0,2}(www|http)).*$/i, "$1"); // i modifier ignores case
	// sanitization regexp will wipe out the following _endings_:
	// - "#data" followed by anything
	// - "#//" followed by anything
	// - "www" and "http" followed by anything, preceeded by zero to two slashes "/", preceeded by hash "#", i.e.
	//   o "#www" followed by anything
	//   o "#http" followed by anything
	//   o "#/www" followed by anything
	//   o "#/http" followed by anything
	//   o "#//www" followed by anything
	//   o "#//http" followed by anything
	if (window.location.href != sanitized_href) {
		window.location = sanitized_href;
	}
}
Main.chk_xss_options();
Main.breakFrame();
var tb_pathToImage = Juniper.global.staticUrl + "/img/loadingAnimation.gif";
eval(function (p, a, c, k, e, r) {
    e = function (c) {
        return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
    };
    if (!"".replace(/^/, String)) {
        while (c--) {
            r[e(c)] = k[c] || e(c);
        }
        k = [
            function (e) {
                return r[e];
            }
        ];
        e = function () {
            return "\\w+";
        };
        c = 1;
    }
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
        }
    }
    return p;
}('$(o).2S(9(){1u(\'a.18, 3n.18, 3i.18\');1w=1p 1t();1w.L=2H});9 1u(b){$(b).s(9(){6 t=X.Q||X.1v||M;6 a=X.u||X.23;6 g=X.1N||P;19(t,a,g);X.2E();H P})}9 19(d,f,g){3m{3(2t o.v.J.2i==="2g"){$("v","11").r({A:"28%",z:"28%"});$("11").r("22","2Z");3(o.1Y("1F")===M){$("v").q("<U 5=\'1F\'></U><4 5=\'B\'></4><4 5=\'8\'></4>");$("#B").s(G)}}n{3(o.1Y("B")===M){$("v").q("<4 5=\'B\'></4><4 5=\'8\'></4>");$("#B").s(G)}}3(1K()){$("#B").1J("2B")}n{$("#B").1J("2z")}3(d===M){d=""}$("v").q("<4 5=\'K\'><1I L=\'"+1w.L+"\' /></4>");$(\'#K\').2y();6 h;3(f.O("?")!==-1){h=f.3l(0,f.O("?"))}n{h=f}6 i=/\\.2s$|\\.2q$|\\.2m$|\\.2l$|\\.2k$/;6 j=h.1C().2h(i);3(j==\'.2s\'||j==\'.2q\'||j==\'.2m\'||j==\'.2l\'||j==\'.2k\'){1D="";1G="";14="";1z="";1x="";R="";1n="";1r=P;3(g){E=$("a[@1N="+g+"]").36();25(D=0;((D<E.1c)&&(R===""));D++){6 k=E[D].u.1C().2h(i);3(!(E[D].u==f)){3(1r){1z=E[D].Q;1x=E[D].u;R="<1e 5=\'1X\'>&1d;&1d;<a u=\'#\'>2T &2R;</a></1e>"}n{1D=E[D].Q;1G=E[D].u;14="<1e 5=\'1U\'>&1d;&1d;<a u=\'#\'>&2O; 2N</a></1e>"}}n{1r=1b;1n="1t "+(D+1)+" 2L "+(E.1c)}}}S=1p 1t();S.1g=9(){S.1g=M;6 a=2x();6 x=a[0]-1M;6 y=a[1]-1M;6 b=S.z;6 c=S.A;3(b>x){c=c*(x/b);b=x;3(c>y){b=b*(y/c);c=y}}n 3(c>y){b=b*(y/c);c=y;3(b>x){c=c*(x/b);b=x}}13=b+30;1a=c+2G;$("#8").q("<a u=\'\' 5=\'1L\' Q=\'1o\'><1I 5=\'2F\' L=\'"+f+"\' z=\'"+b+"\' A=\'"+c+"\' 23=\'"+d+"\'/></a>"+"<4 5=\'2D\'>"+d+"<4 5=\'2C\'>"+1n+14+R+"</4></4><4 5=\'2A\'><a u=\'#\' 5=\'Z\' Q=\'1o\'>1l</a> 1k 1j 1s</4>");$("#Z").s(G);3(!(14==="")){9 12(){3($(o).N("s",12)){$(o).N("s",12)}$("#8").C();$("v").q("<4 5=\'8\'></4>");19(1D,1G,g);H P}$("#1U").s(12)}3(!(R==="")){9 1i(){$("#8").C();$("v").q("<4 5=\'8\'></4>");19(1z,1x,g);H P}$("#1X").s(1i)}o.1h=9(e){3(e==M){I=2w.2v}n{I=e.2u}3(I==27){G()}n 3(I==3k){3(!(R=="")){o.1h="";1i()}}n 3(I==3j){3(!(14=="")){o.1h="";12()}}};16();$("#K").C();$("#1L").s(G);$("#8").r({Y:"T"})};S.L=f}n{6 l=f.2r(/^[^\\?]+\\??/,\'\');6 m=2p(l);13=(m[\'z\']*1)+30||3h;1a=(m[\'A\']*1)+3g||3f;W=13-30;V=1a-3e;3(f.O(\'2j\')!=-1){1E=f.1B(\'3d\');$("#15").C();3(m[\'1A\']!="1b"){$("#8").q("<4 5=\'2f\'><4 5=\'1H\'>"+d+"</4><4 5=\'2e\'><a u=\'#\' 5=\'Z\' Q=\'1o\'>1l</a> 1k 1j 1s</4></4><U 1W=\'0\' 2d=\'0\' L=\'"+1E[0]+"\' 5=\'15\' 1v=\'15"+1f.2c(1f.1y()*2b)+"\' 1g=\'1m()\' J=\'z:"+(W+29)+"p;A:"+(V+17)+"p;\' > </U>")}n{$("#B").N();$("#8").q("<U 1W=\'0\' 2d=\'0\' L=\'"+1E[0]+"\' 5=\'15\' 1v=\'15"+1f.2c(1f.1y()*2b)+"\' 1g=\'1m()\' J=\'z:"+(W+29)+"p;A:"+(V+17)+"p;\'> </U>")}}n{3($("#8").r("Y")!="T"){3(m[\'1A\']!="1b"){$("#8").q("<4 5=\'2f\'><4 5=\'1H\'>"+d+"</4><4 5=\'2e\'><a u=\'#\' 5=\'Z\'>1l</a> 1k 1j 1s</4></4><4 5=\'F\' J=\'z:"+W+"p;A:"+V+"p\'></4>")}n{$("#B").N();$("#8").q("<4 5=\'F\' 3c=\'3b\' J=\'z:"+W+"p;A:"+V+"p;\'></4>")}}n{$("#F")[0].J.z=W+"p";$("#F")[0].J.A=V+"p";$("#F")[0].3a=0;$("#1H").11(d)}}$("#Z").s(G);3(f.O(\'37\')!=-1){$("#F").q($(\'#\'+m[\'26\']).1T());$("#8").24(9(){$(\'#\'+m[\'26\']).q($("#F").1T())});16();$("#K").C();$("#8").r({Y:"T"})}n 3(f.O(\'2j\')!=-1){16();3($.1q.35){$("#K").C();$("#8").r({Y:"T"})}}n{$("#F").34(f+="&1y="+(1p 33().32()),9(){16();$("#K").C();1u("#F a.18");$("#8").r({Y:"T"})})}}3(!m[\'1A\']){o.21=9(e){3(e==M){I=2w.2v}n{I=e.2u}3(I==27){G()}}}}31(e){}}9 1m(){$("#K").C();$("#8").r({Y:"T"})}9 G(){$("#2Y").N("s");$("#Z").N("s");$("#8").2X("2W",9(){$(\'#8,#B,#1F\').2V("24").N().C()});$("#K").C();3(2t o.v.J.2i=="2g"){$("v","11").r({A:"1Z",z:"1Z"});$("11").r("22","")}o.1h="";o.21="";H P}9 16(){$("#8").r({2U:\'-\'+20((13/2),10)+\'p\',z:13+\'p\'});3(!(1V.1q.2Q&&1V.1q.2P<7)){$("#8").r({38:\'-\'+20((1a/2),10)+\'p\'})}}9 2p(a){6 b={};3(!a){H b}6 c=a.1B(/[;&]/);25(6 i=0;i<c.1c;i++){6 d=c[i].1B(\'=\');3(!d||d.1c!=2){39}6 e=2a(d[0]);6 f=2a(d[1]);f=f.2r(/\\+/g,\' \');b[e]=f}H b}9 2x(){6 a=o.2M;6 w=1S.2o||1R.2o||(a&&a.1Q)||o.v.1Q;6 h=1S.1P||1R.1P||(a&&a.2n)||o.v.2n;1O=[w,h];H 1O}9 1K(){6 a=2K.2J.1C();3(a.O(\'2I\')!=-1&&a.O(\'3o\')!=-1){H 1b}}', 62, 211, "|||if|div|id|var||TB_window|function||||||||||||||else|document|px|append|css|click||href|body||||width|height|TB_overlay|remove|TB_Counter|TB_TempArray|TB_ajaxContent|tb_remove|return|keycode|style|TB_load|src|null|unbind|indexOf|false|title|TB_NextHTML|imgPreloader|block|iframe|ajaxContentH|ajaxContentW|this|display|TB_closeWindowButton||html|goPrev|TB_WIDTH|TB_PrevHTML|TB_iframeContent|tb_position||thickbox|tb_show|TB_HEIGHT|true|length|nbsp|span|Math|onload|onkeydown|goNext|Esc|or|close|tb_showIframe|TB_imageCount|Close|new|browser|TB_FoundURL|Key|Image|tb_init|name|imgLoader|TB_NextURL|random|TB_NextCaption|modal|split|toLowerCase|TB_PrevCaption|urlNoQuery|TB_HideSelect|TB_PrevURL|TB_ajaxWindowTitle|img|addClass|tb_detectMacXFF|TB_ImageOff|150|rel|arrayPageSize|innerHeight|clientWidth|self|window|children|TB_prev|jQuery|frameborder|TB_next|getElementById|auto|parseInt|onkeyup|overflow|alt|unload|for|inlineId||100||unescape|1000|round|hspace|TB_closeAjaxWindow|TB_title|undefined|match|maxHeight|TB_iframe|bmp|gif|png|clientHeight|innerWidth|tb_parseQuery|jpeg|replace|jpg|typeof|which|keyCode|event|tb_getPageSize|show|TB_overlayBG|TB_closeWindow|TB_overlayMacFFBGHack|TB_secondLine|TB_caption|blur|TB_Image|60|tb_pathToImage|mac|userAgent|navigator|of|documentElement|Prev|lt|version|msie|gt|ready|Next|marginLeft|trigger|fast|fadeOut|TB_imageOff|hidden||catch|getTime|Date|load|safari|get|TB_inline|marginTop|continue|scrollTop|TB_modal|class|TB_|45|440|40|630|input|188|190|substr|try|area|firefox".split("|"), 0, {}));
var Juniper = window.Juniper || {};
Juniper.commentTab = {
    limit: {
        friendCount: 5,
        phoneCount: 100
    },
    selected: (location.href.indexOf("send-to-friend") !== -1) ? "share" : (location.href.indexOf("reviews") !== -1) ? "comment" : "related",
    initialized: false,
    phoneCount: 1,
    removeError: function (item) {
        myScope = item;
        $(myScope).each(function (i, n) {
            if ($(n).is(".flag")) {
                $(n).remove();
            }
        });
    },
    addError: function (item, errorText) {
        myScope = item;
        $("p.flag", myScope).remove();
        myScope.prepend('<p class="flag">' + errorText + "</p>");
    },
    checkPhone: function (scope, textField, list) {
        var myNumber = $(textField).val();
        var phoneCheckUrl = "/content/" + Juniper.contentItem.id + "/send/validate-phone";
        $.post(phoneCheckUrl, {
            phoneNumber: myNumber
        }, function (data) {
            if (data.success) {
                Juniper.commentTab.removeError($(textField).siblings());
                Juniper.commentTab.addToList(list, myNumber, myNumber, data.removeText, data.errorMessageText);
                Juniper.commentTab.phoneCount++;
            } else {
                Juniper.commentTab.removeError($(textField).siblings());
                $.each(data.errors, function (i, n) {
                    Juniper.commentTab.addError($(textField).parent(), n);
                });
            }
        }, "json");
    },
    tally: function (scope) {
        var total = "";
        $("ul li a", scope).each(function (i, n) {
            total = total + $(n).attr("rel") + ",";
        });
        if (total) {
            total = total.replace(/.$/, "");
        }
        return total;
    },
    resetShareForm: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        var $sendToFriendForm = $("#sendToFriendForm");
        $(".phoneNumberSet ul").empty();
        $("#phoneNumber").val("+");
        $("#phoneNumbers").remove();
        Juniper.commentTab.phoneCount = 1;
        Juniper.commentTab.disableButtons();
    },
    submitShareForm: function (e) {
        e.preventDefault();
        var myForm = $(this).parents("form");
        var numbers = Juniper.commentTab.tally($(".phoneNumberSet", myForm));
        myForm.append('<input type="hidden" name="phoneNumberArray" id="phoneNumbers" value="' + numbers + '" />');
        var that = this;
        Juniper.commentTab.submitForm(myForm, that, Juniper.commentTab.resetShareForm, false);
    },
    submitReviewForm: function (e) {
        e.preventDefault();
        var $reviewForm = $("#reviewForm");
        var $submitButton = $(".submitForm", $reviewForm);
        Juniper.commentTab.submitForm($reviewForm, $submitButton, function () {
            $("#commentTitle").val("");
            $("#comment").val("");
        }, true);
    },
    submitForm: function (myForm, scope, callback, review) {
        $.ajax({
            type: "POST",
            url: $(myForm).attr("action"),
            data: $(myForm).serialize(),
            dataType: "json",
            success: function (response) {
                if (response.success) {
                    if (Juniper.commentTab.selected == "comment") {
                        var hash = location.hash;
                        if (review && hash == "#reviewComment") {
                            hash = "/content/" + Juniper.contentItem.id + "/reviews";
                        }
                        if (hash && hash.indexOf("?") !== -1) {
                            hash = hash.replace(/^#/, "") + "&fragment=1";
                        } else {
                            hash = hash.replace(/^#/, "") + "?fragment=1";
                        }
                        Juniper.content.replaceContent(hash, "#dynamicContent");
                        self.scrollTo(0, 0);
                    } else {
                        $(scope).parents(".tabContent").hide();
                        $(scope).parents(".tabContent").siblings(".thanksTabContent").show();
                    }
                    Juniper.commentTab.submitTracking();
                } else {
                    $(response.errors).each(function (i, n) {
                        if (review) {
                            Juniper.commentTab.addError($(scope).parents(".tabContent .reviewContent form"), n);
                        } else {
                            Juniper.commentTab.addError($(scope).parents(".tabContent"), n);
                        }
                    });
                }
            },
            error: function (xhr) {
                console.log(xhr.statusText);
            }
        });
    },
    submitTracking: function () {
        var pageName = s.pageName.substr(0, s.pageName.lastIndexOf(":") + 1);
        switch (Juniper.commentTab.selected) {
        case "share":
            s.events = "event26";
            s.prop32 = "fw:content shared";
            s.pageName = pageName + "shared";
            s.t();
            break;
        case "comment":
            s.events = "event34";
            s.prop32 = "fw:content commented";
            s.pageName = pageName + "commented";
            s.t();
            break;
        }
    },
    addToList: function (list, item, info, removeText, errorMessageText) {
        var fail = false;
        $("li", list).each(function (i, n) {
            var existingValue = $("span", n).text();
            if (existingValue == item) {
                fail = true;
            }
        });
        if (Juniper.commentTab.phoneCount >= Juniper.commentTab.limit.phoneCount) {
            Juniper.commentTab.addError($(list.parents("fieldset")), errorMessageText);
            fail = true;
        }
        if (fail) {
            return
        }
        $("#phoneNumber").val("+");
        Juniper.commentTab.enableButtons();
        $(list).append('<li style="display: none"><span>' + item + '</span> <a href="#" rel="' + info + '" class="mobileNumber">' + removeText + "</a></li>");
        $("li:last", list).fadeIn(100);
        $(".mobileNumber").bind("click", function (e) {
            e.preventDefault();
            Juniper.commentTab.removeFromList(this);
        });
    },
    removeFromList: function (e) {
        $(e).parent().remove();
        Juniper.commentTab.phoneCount--;
        if (Juniper.commentTab.phoneCount == 1) {
            Juniper.commentTab.disableButtons();
        }
    },
    setupAddPhone: function (e) {
        e.preventDefault();
        var scope = $(".phoneNumberSet");
        var textField = $("input.text", scope);
        var list = $("ul", scope);
        Juniper.commentTab.checkPhone(scope, textField, list);
    },
    addReview: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        var disabled = this.className.match("disable"),
            errorMsg = $("#reviewHeader p.error");
        if (!disabled) {
            href = Juniper.content.stripBaseURL(this.href);
            Juniper.content.replaceContent(href, ".tabContent");
        } else {
            errorMsg.show();
        }
    },
    submitReview: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        var button = this.name;
        Juniper.commentTab.submitReviewForm(button);
    },
    submitReviewForm: function (button) {
        var formdata = $("#writeReview, :hidden").serialize();
        $.ajax({
            url: "/content/" + Juniper.contentItem.id + "/comments/add",
            data: formdata + "&" + button + "=1",
            dataType: "html",
            type: "post",
            success: function (html) {
                $(".tabContent form").replaceWith(html);
            }
        });
    },
    filterReviews: function () {
        var url = "/content/" + Juniper.contentItem.id + "/reviews";
        var $language = $("#commentLanguage").is(":checked");
        var $mobile = $("#commentMobile").is(":checked");
        var params = {};
        if ($language) {
            params.language = $("#language").val();
        }
        if ($mobile) {
            params.reviewTerminalId = $("#reviewTerminalId").val();
        }
        if ($("#productVersion-latest").is(":checked")) {
            params.productVersion = "latest";
        }
        url += "?" + $.param(params);
        Juniper.content.replaceContent(url, "#dynamicContent");
    },
    enableButtons: function () {
        $cancelShare = $("#cancelShare");
        $sendShare = $("#sendShare");
        $cancelShare.removeAttr("disabled");
        $cancelShare.removeClass("disabled");
        $sendShare.removeAttr("disabled");
        $sendShare.removeClass("disabled");
        $("#cancelShare").live("click", Juniper.commentTab.resetShareForm);
        $("#sendShare").live("click", Juniper.commentTab.submitShareForm);
    },
    disableButtons: function () {
        $cancelShare = $("#cancelShare");
        $sendShare = $("#sendShare");
        $cancelShare.attr("disabled", "disabled");
        $cancelShare.addClass("disabled");
        $sendShare.attr("disabled", "disabled");
        $sendShare.addClass("disabled");
    },
    init: function () {
        $("#reviewHeader p.error").hide();
        Juniper.commentTab.disableButtons();
        if (!Juniper.commentTab.initialized) {
            $("#addPhone").live("click", Juniper.commentTab.setupAddPhone);
            $("#writeReviewLink").live("click", Juniper.commentTab.addReview);
            $("#previewReviewButton").live("click", Juniper.commentTab.submitReview);
            $("#editReviewButton").live("click", Juniper.commentTab.submitReview);
            $("#confirmReviewButton").live("click", Juniper.commentTab.submitReview);
            $("#commentLanguage").live("click", Juniper.commentTab.filterReviews);
            $("#commentMobile").live("click", Juniper.commentTab.filterReviews);
            $("#productVersion-all").live("click", Juniper.commentTab.filterReviews);
            $("#productVersion-latest").live("click", Juniper.commentTab.filterReviews);
            $("#commentTitle").live("keypress", function (e) {
                if (e.keyCode == 13) {
                    Juniper.commentTab.submitReviewForm(e);
                }
            });
            $("#sendComment").live("click", Juniper.commentTab.submitReviewForm);
            Juniper.commentTab.initialized = true;
        }
    }
};
$(document).ready(function () {
    Juniper.commentTab.init();
});
var Juniper = window.Juniper || {};
Juniper.content = {
    currentUri: null,
    linkHandler: function (e) {
        e.preventDefault();
        $("#catNav a.visitedLink").removeClass("visitedLink");
        $(this).addClass("visitedLink");
        if ($(this).parent().parent().hasClass("navCategoriesList")) {
            $("li.expanded a.textLink").addClass("visitedLink");
        }
        var hash = $(this).attr("href");
        $.history.load(hash);
    },
    commentLinkHandler: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        href = Juniper.content.stripBaseURL(this.href);
        Juniper.content.replaceContent(href, "#dynamicContent");
    },
    pageload: function (hash) {
        if (hash) {
            Juniper.content.replaceContent(hash);
        }
    },
    stripBaseURL: function (uri) {
        return uri.replace(Juniper.global.baseURL, "");
    },
    getFragment: function (uri) {
        Juniper.content.currentUri = uri;
        if (uri.indexOf("?") !== -1) {
            if (uri.indexOf("fragment") === -1) {
                uri += "&fragment=1";
            }
        } else {
            uri += "?fragment=1";
        }
        return uri;
    },
    replaceContent: function (uri, div) {
    	if (null != uri.match(/www|http|data|\/\/|\/\\/i)) { // i modifier ignores case
    		// if we find any of:
    		// - "www", "http" or "data"
    		// - a double-slash "//",
    		// - a slash followed by a backslash "/\"
			return;
    	}
        if (!div) {
            div = "#content";
        }
        var $content = $(div);
        var $loadingDiv = $(".section");
        if (div != "#content") {
            $loadingDiv = $(div);
        }
        if ($content.length <= 0) {
            return
        }
        var contentWidth = $loadingDiv.width(),
            contentHeight = $loadingDiv.height();
        // $loadingDiv.append('<div id="overlay" />').append('<div id="loading"><img src="' + Juniper.global.staticUrl + '/img/preloader.gif" alt="" /></div>');
        $("#overlay", $loadingDiv).css({
            width: (contentWidth + 42),
            height: contentHeight,
            opacity: "0.6"
        });
        $content.load(Juniper.content.getFragment(uri), function () {
            if (Juniper.subNav && typeof Juniper.subNav.init === "function") {
                Juniper.subNav.init();
            }
            if (Juniper.view && typeof Juniper.view.init === "function") {
                Juniper.view.init();
            }
            if (Juniper.gridTip && typeof Juniper.gridTip.init === "function") {
                Juniper.gridTip.init();
            }
            if (Juniper.rating && typeof Juniper.rating.init === "function") {
                Juniper.rating.init();
            }
            if (Juniper.crumbs && typeof Juniper.crumbs.init === "function") {
                Juniper.crumbs.init();
            }
            if (Juniper.commentTab && typeof Juniper.commentTab.init === "function") {
                Juniper.commentTab.init();
            }
            if (Juniper.global.showNextGenFulfillment !== undefined && Juniper.global.showNextGenFulfillment) {
                if (Juniper.sideLoad && typeof Juniper.sideLoad.init === "function") {
                    Juniper.sideLoad.init();
                }
            }
            if (Juniper.global.showUniversalShareWidget !== undefined && Juniper.global.showUniversalShareWidget) {
                if (storeUShareInit && typeof storeUShareInit === "function") {
                    storeUShareInit();
                }
            }
        });
        if ($("#userTools").hasClass("hide")) {
            $("#userTools").removeClass("hide");
        }
    },
    init: function () {
        $("a[rel='ajax']", "#dynamicContent").live("click", Juniper.content.linkHandler);
        $("a[rel='ajax-comment']").live("click", Juniper.content.commentLinkHandler);
        if (typeof $.ie6hover === "function") {
            $("span.button").ie6hover();
        }
    }
};
$(document).ready(function () {
    $.history.init(Juniper.content.pageload);
    Juniper.content.init();
});
var Juniper = window.Juniper || {};
Juniper.gridTip = {
    hideDelay: 1000,
    panel: null,
    showing: false,
    onTip: false,
    timeout: null,
    showPanel: function () {
        if (!Juniper.gridTip.showing) {
            Juniper.gridTip.panel.show();
            Juniper.gridTip.showing = true;
        }
    },
    hidePanel: function () {
        if (Juniper.gridTip.showing) {
            Juniper.gridTip.panel.hide();
            Juniper.gridTip.showing = false;
            Juniper.gridTip.onTip = false;
        }
    },
    isListView: function () {
        if ($(".listView").length) {
            return true;
        } else {
            return false;
        }
    },
    trimSummary: function (obj) {
        var maxlength = 120;
        var delim = "&hellip;";
        var str = $(".summary", obj).text();
        if (str.length > maxlength) {
            var regex = new RegExp("((.|\\n|\\r){" + maxlength + "}.*?)\\b");
            var matches = str.match(regex);
            trimmedStr = matches[0] + delim;
            return trimmedStr;
        } else {
            return str;
        }
    },
    populateTip: function (entity) {
        var summary = Juniper.gridTip.trimSummary(entity);
        $(".entityActions", Juniper.gridTip.panel).empty().append($(".entityActions li:not(.price, .downloaded)", entity).clone()).append($(".entityActions li.price", entity).clone()).append($(".entityActions li.downloaded", entity).clone());
        $(".tipContent", Juniper.gridTip.panel).empty().append($(".entityTitle", entity).clone()).append($(".beforeRating", entity).clone()).append($("h5", entity).clone()).append('<p class="summary">' + summary + "</p>");
    },
    positionTip: function (thumb) {
        var containerWidth = thumb.parents(".sectionContent").width();
        var tipWidth = parseInt((Juniper.gridTip.panel.width() + 40), 10);
        var thumbWidth = thumb.width();
        var tipYOffset = 20;
        var tipXOffset = thumbWidth;
        if (Juniper.gridTip.panel.hasClass("tipLeft")) {
            Juniper.gridTip.panel.removeClass("tipLeft");
            Juniper.gridTip.panel.addClass("tipLeft");
        } else {
            Juniper.gridTip.panel.addClass("tipLeft");
            Juniper.gridTip.panel.removeClass("tipLeft");
        }
        var thumbPosition = thumb.position();
        var tipY = thumbPosition.top - tipYOffset;
        var tipX = thumbPosition.left + tipXOffset;
        if ((tipX + tipWidth) > containerWidth) {
            tipXOffset = tipWidth;
            Juniper.gridTip.panel.removeClass("tipLeft");
            Juniper.gridTip.panel.addClass("tipLeft");
            tipX = thumbPosition.left - tipXOffset;
        } else {
            Juniper.gridTip.panel.addClass("tipLeft");
            Juniper.gridTip.panel.removeClass("tipLeft");
        }
        Juniper.gridTip.panel.css({
            top: tipY,
            left: tipX
        });
    },
    checkCooldown: function () {
        var $button = $("a[rel]", Juniper.gridTip.panel);
        if (!$button.length) {
            return
        }
        var DCCID = $button.attr("rel").replace(/^.+\:/, "");
        if (Juniper.sendToPhone.isInCooldown(DCCID)) {
            Juniper.sendToPhone.buttonDim();
        } else {
            Juniper.sendToPhone.buttonBrighten();
        }
    },
    onOver: function () {
        if (Juniper.gridTip.isListView()) {
            return
        }
        clearTimeout(Juniper.gridTip.timeout);
        Juniper.gridTip.onTip = false;
        Juniper.gridTip.populateTip($(this).parent());
        Juniper.gridTip.checkCooldown();
        Juniper.gridTip.positionTip($(this).parent("li"));
        Juniper.gridTip.showPanel();
    },
    onOut: function () {
        if (Juniper.gridTip.showing && !Juniper.gridTip.onTip) {
            Juniper.gridTip.timeout = setTimeout("Juniper.gridTip.hidePanel()", 500);
        }
    },
    onPanelOver: function () {
        if (Juniper.gridTip.isListView()) {
            return
        }
        Juniper.gridTip.onTip = true;
        clearTimeout(Juniper.gridTip.timeout);
    },
    onPanelOut: function () {
        Juniper.gridTip.timeout = setTimeout("Juniper.gridTip.hidePanel()", Juniper.gridTip.hideDelay);
    },
    init: function () {
        $("#gridViewContainer").append('<div id="hoverPanel"></div>');
        Juniper.gridTip.panel = $("#hoverPanel");
        Juniper.gridTip.panel.append('<div class="tipContent"/><ul class="entityActions actionsSm"/><div class="tip-top-left"/><div class="tip-top-right"/><div class="tip-bottom-left"/><div class="tip-bottom-right"/><div class="tip-v"/><div class="tip-h"/><div class="tip-pointer"/>');
        var thumbNails = $(".entity .thumb");
        thumbNails.hoverIntent(Juniper.gridTip.onOver, Juniper.gridTip.onOut);
        Juniper.gridTip.panel.hover(Juniper.gridTip.onPanelOver, Juniper.gridTip.onPanelOut);
    }
};
$(document).ready(function () {
    Juniper.gridTip.init();
});
var Juniper = window.Juniper || {};
Juniper.mystuffHover = {
    shown: false,
    showing: false,
    panel: null,
    button: null,
    showStatus: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        if (!Juniper.mystuffHover.showing && !Juniper.mystuffHover.shown) {
            Juniper.mystuffHover.shown = true;
            Juniper.mystuffHover.panel.fadeIn(500, function () {
                Juniper.mystuffHover.showing = true;
            });
        }
    },
    hideStatus: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        if (Juniper.mystuffHover.showing) {
            Juniper.mystuffHover.panel.fadeOut(500, function () {
                Juniper.mystuffHover.showing = false;
                Juniper.mystuffHover.button.removeClass("hasUpdate");
            });
        }
    },
    init: function () {
        Juniper.mystuffHover.panel = $("#myStuffOverlay");
        Juniper.mystuffHover.button = $("#homeNavMystuff");
        $(".closer", Juniper.mystuffHover.panel).bind("click", Juniper.mystuffHover.hideStatus);
        if (Juniper.mystuffHover.button.hasClass("hasUpdate")) {
            Juniper.mystuffHover.button.bind("mouseover", Juniper.mystuffHover.showStatus);
        }
    }
};
$(document).ready(function () {
    Juniper.mystuffHover.init();
});
var Juniper = window.Juniper || {};
Juniper.rating = {
    onRated: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        var currentStar = $("a", this).attr("rel");
        var myGroup = $(this).parents("ul.stars");
        Juniper.rating.resetRating(myGroup);
        $("li", myGroup).slice(0, currentStar).addClass("on");
        $(".rating", myGroup).text(currentStar);
        Juniper.rating.update(currentStar, myGroup, $(".contentID", myGroup).text());
    },
    onOver: function (e) {
        var myGroup = $(this).parents("ul");
        var currentStar = $("a", this).attr("rel");
        Juniper.rating.resetRating(myGroup);
        $("li", myGroup).slice(0, currentStar).addClass("over");
    },
    onOut: function (e) {
        var myGroup = $(this).parents("ul");
        Juniper.rating.resetRating(myGroup);
        var defaultRating = $(".rating", myGroup).text();
        Juniper.rating.setRating(myGroup, defaultRating);
    },
    update: function (rating, myGroup, contentID) {
        contentID = $.trim(contentID);
        var postURL = Juniper.global.baseURL + "/content/" + contentID + "/rate";
        $.post(postURL, {
            rating: rating,
            token: Juniper.global.token,
            format: "json"
        }, function (data) {
            if (data.success) {
                myGroup.css("background", "none");
                $(".star", myGroup).hide();
                $(".thankYou", myGroup).show();
            } else {
                $(".thankYou", myGroup).hide();
                $(".star", myGroup).show();
            }
        }, "json");
    },
    resetRating: function (myGroup) {
        $("li", myGroup).removeClass("on");
        $("li", myGroup).removeClass("over");
    },
    setRating: function (myGroup, myRating) {
        $("li", myGroup).slice(0, myRating).addClass("on");
    },
    bindStarActions: function (item) {
        item.bind("click", Juniper.rating.onRated);
        item.bind("mouseover", Juniper.rating.onOver);
        item.bind("mouseout", Juniper.rating.onOut);
    },
    init: function () {
        if (Juniper.global.loggedInUser) {
            $("ul.stars li.star").each(function (i, star) {
                Juniper.rating.bindStarActions($(star));
            });
        } else {
            $("ul.stars li.star").live("click", function () {
                return false;
            });
        }
    }
};
$(document).ready(function () {
    Juniper.rating.init();
});
var Juniper = window.Juniper || {};
Juniper.register = {
    showing: false,
    panel: null,
    showPanel: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        if (!Juniper.register.showing) {
            var queryStr = "";
            if (Juniper.deviceSelect && !Juniper.deviceSelect.tidSet && Juniper.deviceSelect.terminalId) {
                queryStr = "fragment=1&terminalid=" + Juniper.deviceSelect.terminalId;
            } else {
                queryStr = "fragment=1";
            } if (Juniper.deviceSelect && Juniper.deviceSelect.showing) {
                Juniper.deviceSelect.panel.fadeOut(500, function () {
                    Juniper.deviceSelect.showing = false;
                    Juniper.register.loadForm(queryStr);
                });
            } else {
                Juniper.register.loadForm(queryStr);
            }
        }
    },
    hidePanel: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        if (Juniper.register.showing) {
            Juniper.register.panel.fadeOut(500, function () {
                Juniper.register.showing = false;
            });
        }
    },
    loadForm: function (queryStr) {
        $("#registerContent").load("/register?" + queryStr, function () {
            Juniper.register.panel.fadeIn(500, function () {
                Juniper.register.showing = true;
            });
        });
    },
    submitForm: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        var regForm = $("#registrationForm");
        $.post(regForm.attr("action"), regForm.serialize(), function (data) {
            if (data.indexOf('id="success"') !== -1) {
                window.location = "/";
            } else {
                $("#registerContent").html(data);
            }
        }, "html");
    },
    changePhone: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        if (Juniper.deviceSelect) {
            if (Juniper.register.showing) {
                Juniper.register.showing = false;
                Juniper.register.panel.fadeOut(500, Juniper.deviceSelect.showPanel);
            }
        }
    },
    init: function () {
        Juniper.register.panel = $("#registerOverlay");
        $(".closer", Juniper.register.panel).bind("click", Juniper.register.hidePanel);
        $("#registerLater", Juniper.register.panel).live("click", Juniper.register.hidePanel);
        $("#accept", Juniper.register.panel).live("click", Juniper.register.submitForm);
        $("#changePhone", Juniper.register.panel).live("click", Juniper.register.changePhone);
        $("#testregister").bind("click", Juniper.register.showPanel);
    }
};
$(document).ready(function () {
    Juniper.register.init();
});
var Juniper = window.Juniper || {};
if (Juniper.global.showNextGenFulfillment) {
    Juniper.sendToPhone = {
        showing: false,
        panel: null,
        currentItem: null,
        DCCID: null,
        toPhoneSubmit: null,
        instructionMessage: null,
        sendingMessage: null,
        sentMessage: null,
        submitButton: null,
        cookieName: "sentToMobileItems",
        cookieOptions: {
            expires: 1,
            path: "/"
        },
        browserTimeOffset: 0,
        setServerTime: function (time) {
            if (typeof time !== "number") {
                return
            }
            var now = new Date().getTime();
            Juniper.sendToPhone.browserTimeOffset = now - time;
        },
        resetPanel: function () {
            console.log("Juniper.sendToPhone.resetPanel()");
            if (Juniper.sendToPhone.isInCooldown()) {
                Juniper.sendToPhone.cooldownMessage.show();
                Juniper.sendToPhone.instructionMessage.hide();
                Juniper.sendToPhone.formContainer.hide();
            } else {
                Juniper.sendToPhone.cooldownMessage.hide();
                Juniper.sendToPhone.instructionMessage.show();
                Juniper.sendToPhone.formContainer.show();
            }
            Juniper.sendToPhone.sendingMessage.hide();
            Juniper.sendToPhone.sentMessage.hide();
            Juniper.sendToPhone.panel.show();
        },
        parseErrors: function (errors) {
            console.log("Juniper.sendToPhone.parseErrors()");
            $("form#sendToPhoneForm p.error").remove();
            var errorStr = "";
            $.each(errors, function (i, error) {
                if (i > 0) {
                    errorStr += "<br />" + error;
                } else {
                    errorStr = error;
                }
            });
            $("div#changePhoneField").after('<p class="error">' + errorStr + "</p>");
        },
        submitPhone: function (e) {
            console.log("Juniper.sendToPhone.submitPhone()");
            if (e && e.preventDefault) {
                e.preventDefault();
            }
            if (Juniper.sendToPhone.toPhoneSubmit.hasClass("disabled")) {
                return false;
            }
            var num, newNumber, $newNumberInput = $("#newMobileNumber"),
                mobileNumber = $("#userMobile").val(),
                submitUrl = "/content/" + Juniper.sendToPhone.DCCID + "/send/to-device";
            if ($newNumberInput !== mobileNumber) {
                newNumber = "+" + $newNumberInput.val().replace(/\D/g, "");
                num = newNumber;
            } else {
                num = mobileNumber;
            }
            $("li.error:not(.cooldownMessage)", Juniper.sendToPhone.panel).remove();
            Juniper.sendToPhone.sendingMessage.css("display", "inline-block");
            Juniper.sendToPhone.toPhoneSubmit.addClass("disabled");
            $.post(submitUrl, {
                phoneNumber: num
            }, function (data) {
                if (data.success) {
                    Juniper.sendToPhone.instructionMessage.hide();
                    Juniper.sendToPhone.formContainer.hide();
                    Juniper.sendToPhone.sentMessage.show();
                    Juniper.sendToPhone.cookieItem();
                    s.pageName = "content:sms sent";
                    s.products = ";" + Juniper.sendToPhone.DCCID;
                    s.events = "event22";
                    s.t();
                    $("#sendViaAirImage").attr("src", Juniper.global.staticUrl + "/img/Overlay-Left-NowOpenText.png");
                    $("#sendViaAirStatus").text("sms sent");
                } else {
                    Juniper.sendToPhone.instructionMessage.show();
                    Juniper.sendToPhone.sendingMessage.hide();
                    Juniper.sendToPhone.parseErrors(data.errors);
                }
                Juniper.sendToPhone.toPhoneSubmit.removeClass("disabled");
            }, "json");
        },
        cookieItem: function () {
            var currentCookieValue = ($.cookie(Juniper.sendToPhone.cookieName) || ""),
                now = new Date().getTime() - Juniper.sendToPhone.browserTimeOffset,
                newEntry = (Juniper.sendToPhone.DCCID + ":" + now),
                newCookieValue = currentCookieValue + ((currentCookieValue === "") ? "" : "|") + newEntry;
            $.cookie(Juniper.sendToPhone.cookieName, newCookieValue, Juniper.sendToPhone.cookieOptions);
        },
        isInCooldown: function (id) {
            id = id || Juniper.sendToPhone.DCCID;
            var inCooldown = false,
                currentCookieValue = ($.cookie(Juniper.sendToPhone.cookieName) || "");
            if (currentCookieValue === "") {
                return inCooldown;
            }
            var cooldownItems = currentCookieValue.split("|"),
                cooldownPeriod = 60 * 60 * 1000,
                now = new Date().getTime() - Juniper.sendToPhone.browserTimeOffset,
                removeIndex;
            $.each(cooldownItems, function (i, entry) {
                var pair = entry.split(":"),
                    DCCID = pair[0],
                    sentTime = parseInt(pair[1], 10);
                if (DCCID === id) {
                    if (now - sentTime < cooldownPeriod) {
                        inCooldown = true;
                    } else {
                        removeIndex = i;
                    }
                    return false;
                }
            });
            if (typeof removeIndex === "number") {
                cooldownItems.splice(removeIndex, 1);
                cooldownItems = cooldownItems.join("|");
                $.cookie(Juniper.sendToPhone.cookieName, cooldownItems, Juniper.sendToPhone.cookieOptions);
            }
            return inCooldown;
        },
        init: function () {
            Juniper.sendToPhone.DCCID = $("#entityDccId").val();
            Juniper.sendToPhone.panel = $("#smsToDevice");
            Juniper.sendToPhone.currentMobile = $("#currentMobile");
            Juniper.sendToPhone.toPhoneSubmit = $("#toPhoneSubmit");
            Juniper.sendToPhone.cooldownMessage = $(".cooldownMessage");
            Juniper.sendToPhone.instructionMessage = $(".instructionMessage");
            Juniper.sendToPhone.sendingMessage = $("span.sendingMessage");
            Juniper.sendToPhone.sentMessage = $(".sentMessage");
            Juniper.sendToPhone.formContainer = $("li.overlayActions");
            Juniper.sendToPhone.resetPanel();
            $("#sendToPhoneForm").bind("submit", Juniper.sendToPhone.submitPhone);
        }
    };
} else {
    Juniper.sendToPhone = {
        showing: false,
        panel: null,
        currentItem: null,
        DCCID: null,
        instructionMessage: null,
        sendingMessage: null,
        sentMessage: null,
        submitButton: null,
        cookieName: "sentToMobileItems",
        cookieOptions: {
            expires: 1,
            path: "/"
        },
        browserTimeOffset: 0,
        setServerTime: function (time) {
            if (typeof time !== "number") {
                return
            }
            var now = new Date().getTime();
            Juniper.sendToPhone.browserTimeOffset = now - time;
        },
        resetPanel: function () {
            console.log("Juniper.sendToPhone.resetPanel()");
            $("#newMobileNumber").val("+");
            if (Juniper.sendToPhone.isInCooldown()) {
                Juniper.sendToPhone.cooldownMessage.show();
                Juniper.sendToPhone.currentMobile.hide();
                Juniper.sendToPhone.instructionMessage.hide();
                Juniper.sendToPhone.formContainer.hide();
                Juniper.sendToPhone.buttonDim();
            } else {
                Juniper.sendToPhone.cooldownMessage.hide();
                Juniper.sendToPhone.currentMobile.show();
                Juniper.sendToPhone.instructionMessage.show();
                Juniper.sendToPhone.formContainer.show();
                Juniper.sendToPhone.buttonBrighten();
            }
            Juniper.sendToPhone.sendingMessage.hide();
            Juniper.sendToPhone.sentMessage.hide();
            $("#currentMobile").length ? Juniper.sendToPhone.changePhoneField.hide() : Juniper.sendToPhone.changePhoneField.show();
            $("li.error:not(.cooldownMessage)", Juniper.sendToPhone.panel).remove();
        },
        buttonDim: function () {
            $(".sendViaPopup", Juniper.gridTip.panel).css("opacity", 0.5);
        },
        buttonBrighten: function () {
            $(".sendViaPopup", Juniper.gridTip.panel).css("opacity", 1);
        },
        showUpdate: function (e) {
            console.log("Juniper.sendToPhone.showUpdate()");
            if (e && e.preventDefault) {
                e.preventDefault();
            }
            if ($(this).hasClass("disableButton")) {
                return false;
            }
            Juniper.sendToPhone.currentItem = this.rel.split(":")[0];
            Juniper.sendToPhone.DCCID = this.rel.split(":")[1];
            Juniper.sendToPhone.resetPanel();
            if (!Juniper.sendToPhone.showing) {
                Juniper.sendToPhone.showing = true;
                Juniper.sendToPhone.panel.fadeIn(300);
            }
            var buttonPosition = $(this).offset();
            var newLeft = buttonPosition.left - 400;
            if (newLeft < 0) {
                newLeft = 0;
            }
            Juniper.sendToPhone.panel.css({
                left: newLeft,
                top: buttonPosition.top - 100
            });
        },
        hideStatus: function (e) {
            console.log("Juniper.sendToPhone.hideStatus()");
            if (e && e.preventDefault) {
                e.preventDefault();
            }
            if (Juniper.sendToPhone.showing) {
                Juniper.sendToPhone.showing = false;
                Juniper.sendToPhone.panel.fadeOut(500);
            }
        },
        changeMobileNumber: function (e) {
            console.log("Juniper.sendToPhone.changeMobileNumber()");
            if (e && e.preventDefault) {
                e.preventDefault();
            }
            Juniper.sendToPhone.currentMobile.hide();
            Juniper.sendToPhone.changePhoneField.show();
        },
        parseErrors: function (errors) {
            console.log("Juniper.sendToPhone.parseErrors()");
            $("li.error:not(.cooldownMessage)", Juniper.sendToPhone.panel).remove();
            $("#currentMobile").length ? Juniper.sendToPhone.changePhoneField.hide() : Juniper.sendToPhone.changePhoneField.show();
            var errorStr = "";
            $.each(errors, function (i, error) {
                if (i > 0) {
                    errorStr += "<br />" + error;
                } else {
                    errorStr = error;
                }
            });
            $(".highlight:last", Juniper.sendToPhone.panel).after('<li class="error">' + errorStr + "</li>");
        },
        submitPhone: function (e) {
            console.log("Juniper.sendToPhone.submitPhone()");
            if (e && e.preventDefault) {
                e.preventDefault();
            }
            var num, newNumber, $newNumberInput = $("#newMobileNumber"),
                mobileNumber = $("#userMobile").val(),
                submitUrl = "/content/" + Juniper.sendToPhone.DCCID + "/send/to-device";
            if ($newNumberInput.is(":visible")) {
                newNumber = "+" + $newNumberInput.val().replace(/\D/g, "");
                $newNumberInput.val(newNumber);
                num = newNumber;
            } else {
                num = mobileNumber;
            }
            $("li.error:not(.cooldownMessage)", Juniper.sendToPhone.panel).remove();
            Juniper.sendToPhone.instructionMessage.hide();
            Juniper.sendToPhone.sendingMessage.show();
            Juniper.sendToPhone.sentMessage.hide();
            Juniper.sendToPhone.currentMobile.hide();
            Juniper.sendToPhone.changePhoneField.show();
            Juniper.sendToPhone.formContainer.slideUp();
            $.post(submitUrl, {
                phoneNumber: num
            }, function (data) {
                if (data.success) {
                    Juniper.sendToPhone.instructionMessage.hide();
                    Juniper.sendToPhone.sendingMessage.hide();
                    Juniper.sendToPhone.sentMessage.show();
                    Juniper.sendToPhone.cookieItem();
                    s.linkTrackVars = "prop6,prop17,prop23,prop32,products,events";
                    s.linkTrackEvents = "event22";
                    s.prop32 = "fw:sent2phone";
                    s.products = ";" + Juniper.sendToPhone.DCCID;
                    s.events = "event22";
                    s.tl(this, "o", "ovi:store:fw:content sent to phone");
                } else {
                    Juniper.sendToPhone.instructionMessage.show();
                    Juniper.sendToPhone.sendingMessage.hide();
                    Juniper.sendToPhone.sentMessage.hide();
                    Juniper.sendToPhone.currentMobile.show();
                    Juniper.sendToPhone.formContainer.show();
                    Juniper.sendToPhone.parseErrors(data.errors);
                }
            }, "json");
        },
        cookieItem: function () {
            var currentCookieValue = ($.cookie(Juniper.sendToPhone.cookieName) || ""),
                now = new Date().getTime() - Juniper.sendToPhone.browserTimeOffset,
                newEntry = (Juniper.sendToPhone.DCCID + ":" + now),
                newCookieValue = currentCookieValue + ((currentCookieValue === "") ? "" : "|") + newEntry;
            $.cookie(Juniper.sendToPhone.cookieName, newCookieValue, Juniper.sendToPhone.cookieOptions);
        },
        isInCooldown: function (id) {
            id = id || Juniper.sendToPhone.DCCID;
            var inCooldown = false,
                currentCookieValue = ($.cookie(Juniper.sendToPhone.cookieName) || "");
            if (currentCookieValue === "") {
                return inCooldown;
            }
            var cooldownItems = currentCookieValue.split("|"),
                cooldownPeriod = 60 * 60 * 1000,
                now = new Date().getTime() - Juniper.sendToPhone.browserTimeOffset,
                removeIndex;
            $.each(cooldownItems, function (i, entry) {
                var pair = entry.split(":"),
                    DCCID = pair[0],
                    sentTime = parseInt(pair[1], 10);
                if (DCCID === id) {
                    if (now - sentTime < cooldownPeriod) {
                        inCooldown = true;
                    } else {
                        removeIndex = i;
                    }
                    return false;
                }
            });
            if (typeof removeIndex === "number") {
                cooldownItems.splice(removeIndex, 1);
                cooldownItems = cooldownItems.join("|");
                $.cookie(Juniper.sendToPhone.cookieName, cooldownItems, Juniper.sendToPhone.cookieOptions);
            }
            return inCooldown;
        },
        init: function () {
            console.log("Juniper.sendToPhone.init()");
            Juniper.sendToPhone.panel = $("#sendtophoneOverlay");
            Juniper.sendToPhone.currentMobile = $("#currentMobile");
            Juniper.sendToPhone.changePhoneField = $("#changePhoneField");
            Juniper.sendToPhone.cooldownMessage = $(".cooldownMessage", Juniper.sendToPhone.panel);
            Juniper.sendToPhone.instructionMessage = $(".instructionMessage", Juniper.sendToPhone.panel);
            Juniper.sendToPhone.sendingMessage = $(".sendingMessage", Juniper.sendToPhone.panel);
            Juniper.sendToPhone.sentMessage = $(".sentMessage", Juniper.sendToPhone.panel);
            Juniper.sendToPhone.formContainer = $("li.overlayActions", Juniper.sendToPhone.panel);
            $("#toPhoneSubmit", Juniper.sendToPhone.panel).bind("click", Juniper.sendToPhone.submitPhone);
            $("#changeMobile").bind("click", Juniper.sendToPhone.changeMobileNumber);
        }
    };
    $(document).ready(function () {
        if (Juniper.global.isLogged || Juniper.global.registrationForFreeContent == "0") {
            Juniper.sendToPhone.init();
        }
    });
}
var Juniper = window.Juniper || {};
Juniper.view = {
    current: "",
    setCurrent: function () {
        Juniper.view.current = ($(".entityList").hasClass("listView")) ? "List" : "Grid";
        Juniper.view.toggleButtons();
    },
    toggleButtons: function () {
        href = window.location.href;
        if ((href.indexOf("/content/") >= 0) || (href.indexOf("/mystuff") >= 0)) {} else {
            if ($(".searchGridViewContainer").length > 0) {
                Juniper.global.setCookie("view-search", Juniper.view.current);
            } else {
                Juniper.global.setCookie("view", Juniper.view.current);
            }
        } if (Juniper.view.current === "Grid") {
            $(".viewGrid a:first").addClass("selected");
            $(".viewList a:first").removeClass("selected");
        } else {
            $(".viewGrid a:first").removeClass("selected");
            $(".viewList a:first").addClass("selected");
        }
    },
    toggle: function (type, e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        if (type === Juniper.view.current) {
            return
        }
        Juniper.view.current = type;
        Juniper.view.toggleButtons();
        var theList = $("#columnTwo .entityList");
        theList.toggleClass("listView");
        theList.toggleClass("gridView");
    },
    init: function () {
        Juniper.view.setCurrent();
        $("#views .viewGrid a:first").bind("click", function (e) {
            Juniper.view.toggle("Grid", e);
        });
        $("#views .viewList a:first").bind("click", function (e) {
            Juniper.view.toggle("List", e);
        });
    }
};
$(document).ready(function () {
    Juniper.view.init();
});
(function ($) {
    $.fn.watermarkText = function () {
        return this.each(function () {
            var defaultText = $(this).attr("title");
            $(this).focus(function () {
                if ($(this).val() === defaultText) {
                    $(this).val("");
                }
            }).blur(function () {
                if ($(this).val() === "") {
                    $(this).val(defaultText);
                }
            });
        });
    };
})(jQuery);
var Void = function () {};
if (!console) {
    var console = {
        log: Void
    };
}
var Juniper = window.Juniper || {};
Juniper.global = Juniper.global || {};
Juniper.global.reloadCaptcha = function () {
    var now = new Date();
    $("#imgCaptcha").attr("src", Juniper.global.baseURL + "/image/captcha/?" + now.getTime());
};
Juniper.crumbs = {
    hidden: false,
    crumb: null,
    hideCrumb: function () {
        if (Juniper.crumbs.crumb) {
            Juniper.crumbs.hidden = true;
            Juniper.crumbs.crumb.hide();
        }
    },
    showCrumb: function () {
        if (Juniper.crumbs.crumb) {
            Juniper.crumbs.hidden = false;
            Juniper.crumbs.crumb.slideDown("slow");
        }
    },
    init: function () {
        Juniper.crumbs.crumb = $("#crumbTabs");
        if (Juniper.crumbs.crumb) {
            Juniper.crumbs.crumb.hide();
            if (!$("#contentNav").hasClass("menuOpen")) {
                Juniper.crumbs.showCrumb();
            }
        }
    }
};
Juniper.menu = {
    linkHandler: function (e) {
        e.preventDefault();
        Juniper.crumbs.hideCrumb();
        $("#expandedNav", "#contentNav").slideToggle("normal", function () {
            $("#contentNav").toggleClass("menuOpen");
            if ($("#contentNav").hasClass("menuOpen")) {
                var menuState = "menuOpen";
            } else {
                var menuState = "";
                Juniper.crumbs.showCrumb();
            }
            Juniper.global.setCookie("menu", menuState);
        });
    },
    init: function () {
        $(".menuToggle", "#contentNav").live("click", Juniper.menu.linkHandler);
    }
};
Juniper.fauxSelectBox = {
    closeSelect: function (e) {
        $(".dropdown").each(function () {
            if ($(this).hasClass("open")) {
                $(this).removeClass("open").find(".ddListOptions").hide();
            }
        });
    },
    linkHandler: function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).next().toggle().parent(".dropdown").toggleClass("open");
    },
    init: function () {
        $("a.ddListSelected", ".dropdown").live("click", Juniper.fauxSelectBox.linkHandler);
        $(window).bind("click", Juniper.fauxSelectBox.closeSelect);
    }
};

function openPhoneSelector() {
    if (Juniper.deviceSelect && Juniper.deviceSelect.showPanel) {
        Juniper.deviceSelect.page = "home";
        Juniper.deviceSelect.showPanel();
    }
}

function finishRegistering() {
    if (Juniper.register && Juniper.register.showPanel) {
        if (Juniper.deviceSelect) {
            Juniper.deviceSelect.page = "home";
        }
        Juniper.register.showPanel();
    }
}

function selectPhone(terminalId) {
    Juniper.deviceSelect.terminalId = terminalId;
    if (Juniper.deviceSelect && Juniper.deviceSelect.setDevice) {
        Juniper.deviceSelect.page = "home";
        Juniper.deviceSelect.setDevice();
    }
    s.products = "";
}

function newPhoneDisplay(terminalId, dccid) {
    Juniper.deviceSelect.terminalId = terminalId;
    if (Juniper.deviceSelect && Juniper.deviceSelect.sendTerminalId) {
        Juniper.deviceSelect.sendTerminalId();
    }
    s.linkTrackVars = "prop6,prop17,prop23,prop32,products,events";
    s.linkTrackEvents = "event27";
    s.products = ";" + dccid;
    s.prop32 = "new phone selected";
    s.events = "event27";
    s.tl(this, "o", "ovi:store:fw:new phone selected");
}

function SpotlightTracker(dccid) {
    if (dccid != "") {
        s.linkTrackVars = "prop6,prop17,prop21,prop22,prop23,products,events";
        s.linkTrackEvents = "event27";
        s.products = ";" + dccid;
        s.events = "event27";
        s.tl(this, "o", "ovi:store:fw:bso impression");
    }
}
Juniper.language = {
    change: function (e) {
        e.preventDefault();
        var uri = (location.href.indexOf("#/") > -1) ? location.hash.replace(/^#/, "") : location.href;
        var chosenLang = $("option:selected", this).val();
        uri = uri.replace(/#/, "").replace(/&?fragment=\d+/, "").replace(/&?lang=[a-zA-Z0-9_]*/, "").replace(/(\?)&/, "$1").replace(/\?priceType/, "&priceType");
        window.location.replace(uri + ((uri.indexOf("?") === -1) ? "?" : "&") + "lang=" + chosenLang);
    }
};
Juniper.contentDetail = {
    init: function () {
        var $previewContainer = $("#previewItem");
        var $preview = $(".preview img", $previewContainer);
        var osrc = $preview.attr("src");
        $(".thumb a", $previewContainer).bind("click mouseover focus", function (e) {
            e.preventDefault();
            $preview.attr("src", this.href);
        });
    }
};
Juniper.installClient = {
    init: function () {
        var $container = $("#install_client");
        var $close = $(".close", $container);
        $close.click(function () {
            $container.fadeOut();
        });
    }
};
Juniper.newWindow = {
    init: function (e) {
        e.preventDefault();
        var link = "";
        if (typeof (e.target.href) == "undefined") {
            link = "http://" + window.location.hostname;
        } else {
            link = e.target.href;
        }
        newWin = window.open(link);
        newWin.focus();
    }
};
Juniper.util = {
    loadMore: function (pos) {
        var divShort = ".descShort_" + pos;
        var divFull = ".descFull_" + pos;
        $(divFull).removeClass("hide");
        $(divShort).addClass("hide");
    }
};
$(document).ready(function () {
    $("a.newWindow").bind("click", Juniper.newWindow.init);
    $("body.newWindow a:not(.ignore)").bind("click", Juniper.newWindow.init);
    $("a#back").click(function (e) {
        window.history.back();
    });
    Juniper.menu.init();
    Juniper.fauxSelectBox.init();
    $("select[name=lang]").bind("change", Juniper.language.change);
    $(".overflow").ellipsis();
    Juniper.contentDetail.init();
    Juniper.installClient.init();
});
$(document).ready(function () {
    $("#search").watermarkText();
    if (Juniper.global.searchSuggestEnabled == "true") {
        $("#search").autocomplete("/suggest", {
            minChars: Juniper.global.searchSuggestMinChars,
            delay: Juniper.global.searchSuggestDelay,
            selectFirst: false,
            cacheLength: 0,
            matchCase: true,
            parse: function (data) {
                var json = $.parseJSON(data);
                var parsed = [];
                var max = json.rows.length;
                for (var i = 0; i < max; i++) {
                    parsed.push({
                        data: json.rows[i],
                        value: json.rows[i].name,
                        result: json.rows[i].name
                    });
                }
                return {
                    parsed: parsed,
                    search: json.search
                };
            },
            formatItem: function (item) {
                return item.name;
            }
        }).result(function (r, item) {
            if (Juniper.global.openContentPage == "true") {
                window.location.replace("/content/" + item.id);
            } else {
                window.location.replace("/search?q=" + item.name);
            }
        });
    }
});
(function (Juniper) {
    var _tmp = {},
        _event = null,
        _suiteReady = false,
        _dropReady = false,
        _pollOfflineInterval = 10000,
        _pollOnlineInterval = 60000,
        _maxTimerForSuite = 30000,
        _maxTimerForDrop = 15000,
        _suiteInstallationTimer = null,
        _suiteInstallationGoing = false,
        _dropInstallationTimer = null,
        _sendStarted = false,
        _showSmsOptio = true,
        _initDone = false,
        _suiteVersion = "",
        _suiteStr = "suite",
        _suiteUStr = "Suite",
        _dropStr = "drop",
        _ping = {
            drop: false,
            suite: false
        },
        _contentInfo = {},
        _suite = {
            state: 1
        },
        _drop = {
            state: 1
        };
    var _showElement = function (selector) {
        if ($.browser.msie) {
            $(selector).show();
        } else {
            $(selector).fadeIn();
        }
    };
    var _hideElement = function (selector) {
        if ($.browser.msie) {
            $(selector).hide();
        } else {
            $(selector).fadeOut();
        }
    };
    var _disableButton = function (name) {
        $("#sendVia" + name + "Btn").addClass("disabled");
        $("#sendVia" + name + "Btn").attr({
            disabled: "disabled"
        });
    };
    var _enableButton = function (name) {
        $("#sendVia" + name + "Btn").removeClass("disabled");
        $("#sendVia" + name + "Btn").attr({
            disabled: false
        });
    };
    var _updateHelpTexts = function (state, type) {
        if (type == _suiteStr || type == "both") {
            if (typeof _tmp.texts != "undefined") {
                _suite.state = state;
                $("#suiteHelpText").html(_tmp.texts.suite[state]);
            }
        }
        if (type == _dropStr || type == "both") {
            if (typeof _tmp.texts != "undefined") {
                _drop.state = state;
                $("#dropHelpText").html(_tmp.texts.drop[state]);
            }
        }
    };
    var _domBind = function (name) {
        var handler = function (e) {
            var id = $(e.target).attr("id");
            if (id == "suite_link" || id == "drop_link" || id == "sdk4LoginLink") {
                if (id == "sdk4LoginLink") {
                    clearTimeout(timer);
                    _hideElement(name);
                    if (_tmp.ssoOverlay) {
                        Juniper.sso.ssoSignIn();
                        return false;
                    }
                }
                return true;
            }
            clearTimeout(timer);
            _hideElement(name);
            $(document).unbind("click", handler);
            return false;
        };
        $(document).click(handler);
        var timer = setTimeout(function () {
            _hideElement(name);
        }, 7000);
    };
    var _activeBinds = function () {
        $("#sendViaSuiteHelp").click(function () {
            _hideElement("#dropHelp");
            _showHelp(_suite.state, "Suite", "suiteHelp", $(this));
            _domBind("#suiteHelp");
            return false;
        });
        $("#sendViaDropHelp").click(function () {
            _hideElement("#suiteHelp");
            _showHelp(_drop.state, "Drop", "dropHelp", $(this));
            _domBind("#dropHelp");
            return false;
        });
    };
    var _checkContentTypeSupport = function (supportedTypes) {
        if (supportedTypes === undefined) {
            return false;
        }
        if (_tmp.price == "paid") {
            return true;
        }
        return supportedTypes.indexOf(_tmp.contentType) >= 0;
    };
    var _checkDeviceTypeSupport = function (supportedDevices) {
        if (supportedDevices === undefined) {
            return false;
        }
        var device = _tmp.selectedDevice.substring(6);
        return supportedDevices.indexOf(device) >= 0;
    };
    var _checkSuiteUnsupportedDevices = function (unSupportedDevices) {
        if (unSupportedDevices === undefined) {
            return false;
        }
        return unSupportedDevices.indexOf(_tmp.selectedDevice) >= 0;
    };
    var _showLoader = function (name) {
        _showElement("#" + name);
        $("#" + name).animate({
            height: "25px"
        });
    };
    var _hideLoader = function (name, callback) {
        $("#" + name).animate({
            height: "0px"
        }, {
            complete: function () {
                _hideElement("#" + name);
                callback();
            }
        });
    };
    var _hideProgress = function (name) {
        _hideElement("#" + name);
    };
    var _showProgress = function (name, e) {
        _event = e;
        $("#sendVia" + name + "Btn").attr({
            style: "color:#EAEAEA !important;background: url(" + Juniper.global.staticUrl + "/img/progress.gif) no-repeat center center #FFFFFF;"
        });
    };
    var _smsOptio = function () {
        if (_ping.drop && _ping.suite && _showSmsOptio) {
            if (!_dropReady && !_suiteReady) {
                $("#toPhoneSubmit").corner("8px");
                $("#free_sms_content").fadeIn();
                if (!_initDone) {
                    _initDone = true;
                    Juniper.sendToPhone.init();
                }
            } else {
                $("#free_sms_content").fadeOut();
            }
        }
    };
    var _showHelp = function (state, name, helpname, e) {
        switch (state) {
        case 1:
            _showElement("#get" + name + "SigninLink");
            break;
        case 3:
            _showElement("#get" + name + "Link");
            break;
        default:
            _hideElement("#get" + name + "Link");
            _hideElement("#get" + name + "SigninLink");
            break;
        }
        var top = e.position().top - $("#" + helpname).height();
        top = top + 17;
        $("#" + helpname).attr({
            style: "top:" + top + "px"
        });
        _showElement("#" + helpname);
    };
    var _showFeedback = function (name, progress, text, textclass) {
        var timer = _dropInstallationTimer;
        var width = 146;
        if (name == "sendViaSuite") {
            timer = _suiteInstallationTimer;
            width = $("#sendViaSuiteBtn").width() + 3;
        } else {
            width = $("#sendViaAirBtn").width() + 3;
        }
        clearTimeout(timer);
        _showDownloaded(textclass);
        var top = _event.position().top;
        top += 25;
        $("#" + progress).attr({
            style: "top:" + top + "px;width:" + width + "px;"
        });
        _showLoader(progress);
        _updateButton(name, textclass, text);
        setTimeout(function () {
            _hideLoader(progress, function () {
                $("#" + name + "Feedback").hide();
                $("#" + name + "Btn").attr({
                    style: "background: none repeat scroll 0 0 #44AA33;"
                });
                $("#" + name + "Btn").attr({
                    disabled: false
                });
                $("#" + name + "Btn").removeClass("disabled");
                $("#" + name + "Feedback").removeClass(textclass);
                $("#" + name + "Btn").corner("8px");
            });
        }, 10000);
    };
    var _updateButton = function (name, textclass, text) {
        $("#" + name + "Feedback").addClass(textclass);
        $("#" + name + "Feedback").text(text);
        $("#" + name + "Feedback").fadeIn();
        $("#" + name + "Btn").attr({
            style: "background: none repeat scroll 0 0 #CFCFCF;"
        });
        $("#" + name + "Btn").corner("8px");
    };
    var _showDownloaded = function (textclass) {
        if (textclass == "ok") {
            var found = $(".contentActions").find(".downloaded");
            if (found.size() == 0) {
                $(".contentActions").prepend("<li class='downloaded'>" + _tmp.texts.downloaded + "</li>");
            }
        }
    };
    var _makeRequest = function (url, callback, errorcallback) {
        $.ajax({
            type: "GET",
            dataType: "json",
            url: url,
            success: function (data) {
                if (data.status == "ok") {
                    callback(data);
                } else {
                    errorcallback();
                }
            }
        });
    };
    var _installViaDrop = function (event) {
        s.pageName = "content:download on mobile";
        s.events = "event11";
        s.products = ";" + _tmp.contentId;
        s.t();
        var name = "sendViaAir";
        var progress_name = "dropProgress";
        var drop_prog = "sendViaAirProgress";
        $("#sendViaAirBtn").attr({
            disabled: "disabled"
        });
        $("#sendViaAirBtn").addClass("disabled");
        _dropInstallationTimer = setTimeout(function () {
            _hideProgress(drop_prog);
            _showFeedback(name, progress_name, _tmp.texts.errors.general, "error");
        }, _maxTimerForDrop);
        _showProgress("Air", event);
        $("#sendViaAirBtn").corner("8px");
        var response_callback = function (o) {
            _hideProgress(drop_prog);
            switch (o.status.toString()) {
            case "200":
            case "203":
                _showFeedback(name, progress_name, _tmp.texts.feedback.sent, "ok");
                break;
            case "404":
            default:
                _showFeedback(name, progress_name, _tmp.texts.errors.general, "error");
                break;
            }
        };
        var content = {
            link: Juniper.global.baseURL + "/content/" + _tmp.contentId,
            name: _tmp.appName,
            device: _tmp.selectedDevice,
            icon: _tmp.thumb,
            price: _tmp.price,
            contentType: _tmp.contentType,
            category: Juniper.global.contentCategory
        };
        if (_tmp.ssoOverlay) {} else {
            _makeRequest("/content/" + _tmp.contentId + "/entity-download-url?fragment=1", function (data) {
                var url = data.url;
                if (_tmp.contentType.indexOf("j2me") >= 0) {
                    var pathArray = url.split(":8080/");
                    var newUrl = "http://saas.store.ovi.com:8080/";
                    if (pathArray.length > 1) {
                        if (pathArray[0].indexOf("http://10.") == 0) {
                            newUrl += pathArray[1];
                            url = newUrl;
                        }
                    }
                }
                content.nid = data.nid;
                content.link = url;
                if (_tmp.price === "free") {
                    url = url.concat((url.indexOf("?") == -1) ? "?" : "&");
                    url = url.concat("dlsrc=STORE_DROP");
                    content.url = url;
                }
            }, function () {
                _showFeedback(name, progress_name, _tmp.texts.errors.general, "error");
            });
        }
    };
    var _installViaSuite = function (e) {
        s.pageName = "content:download via pc";
        s.events = "event8";
        s.products = ";" + _tmp.contentId;
        s.t();
        var name = "sendViaSuite";
        var progress_name = "suiteProgress";
        var suite_prog = "sendViaSuiteProgress";
        $("#sendViaSuiteBtn").attr({
            disabled: "disabled"
        });
        $("#sendViaSuiteBtn").addClass("disabled");
        _showProgress("Suite", e);
        $("#sendViaSuiteBtn").corner("8px");
        if (_suiteInstallationGoing) {
            return false;
        }
        var content = {
            productId: _tmp.contentId,
            name: _tmp.appName,
            icon: _tmp.thumb,
            contentType: _tmp.contentType,
            category: Juniper.global.contentCategory
        };
        if (_suiteVersion == "3.4") {
            _sideLoad(content, name, progress_name);
        } else {
            _makeRequest("/content/" + _tmp.contentId + "/entity-download-url?fragment=1", function (data) {
                _suiteInstallationGoing = true;
                var url = data.url;
                url = url.concat((url.indexOf("?") == -1) ? "?" : "&");
                url = url.concat("dlsrc=STORE_SUITE");
                url = encodeURIComponent(url);
                var content = {
                    url: url,
                    name: _tmp.appName,
                    icon: _tmp.thumb,
                    contentType: _tmp.contentType,
                    category: Juniper.global.contentCategory
                };
                _sideLoad(content, name, progress_name);
            }, function () {
                _showFeedback(name, progress_name, _tmp.texts.errors.general, "error");
            });
        }
    };
    var _sideLoad = function (content, name, progress_name) {
        var suite_prog = "sendViaSuiteProgress";
        nokia.drop.sideInstall(content, function (o) {
            switch (o.status) {
            case "202":
            case "600":
            case "603":
                break;
            case "200":
                _suiteInstallationGoing = false;
                _hideProgress(suite_prog);
                _showFeedback(name, progress_name, _tmp.texts.feedback.downloaded, "ok");
                break;
            case "601":
            case "602":
                _hideProgress(suite_prog);
                _showFeedback(name, progress_name, _tmp.texts.errors.installation_failed, "error");
                break;
            default:
                _hideProgress(suite_prog);
                _showFeedback(name, progress_name, _tmp.texts.errors.general + " (#" + o.status + ")!", "error");
                break;
            }
        }, function (o) {
            console.log("::sideInstall::error::", o);
        });
    };
    var _pingDrop = function () {
        var response_callback = function (o) {
            if (!_checkContentTypeSupport(o.contentTypes)) {
                _updateHelpTexts(2, _dropStr);
            } else {
                if (!_checkDeviceTypeSupport(o.deviceModels)) {
                    _updateHelpTexts(2, _dropStr);
                } else {
                    if (!o.forwardLocked && _contentInfo.forward_locked) {
                        _updateHelpTexts(2, _dropStr);
                    } else {
                        _dropReady = true;
                        if (o.online) {
                            _updateHelpTexts(5, _dropStr);
                            _enableButton("Air");
                        } else {
                            if (o.registered && !o.online) {
                                _updateHelpTexts(4, _dropStr);
                                _enableButton("Air");
                            } else {
                                _dropReady = false;
                                _updateHelpTexts(3, _dropStr);
                            }
                        }
                    }
                }
            }
            _ping.drop = true;
            _smsOptio();
        };
    };
    var _getContentInfo = function (callback) {
        _makeRequest("/content/" + _tmp.contentId + "/content-info", function (data) {
            _contentInfo = data;
            if (data.forward_locked == "true") {
                _contentInfo.forward_locked = true;
            } else {
                _contentInfo.forward_locked = false;
            }
            callback();
        });
    };
    Juniper.sideLoad = {
        init: function () {
            if (typeof Juniper.sideLoad.tmp == "undefined") {
                return false;
            }
            $("#sendViaSuiteBtn").corner("8px");
            $("#sendViaAirBtn").corner("8px");
            _updateHelpTexts(1, "both");
            _tmp = Juniper.sideLoad.tmp;
            Juniper.sideLoad.tmp = {};
            _activeBinds();
            if (_tmp.isLogged && _tmp.canSendToCell) {
                _updateHelpTexts(3, "both");
                _sendStarted = false;
                _getContentInfo(function () {
                    if (_contentInfo.status != "ok") {
                        return false;
                    }
                    if (_tmp.price == "free") {
                        $("#sendViaSuiteBtn").bind("click", function () {
                            _installViaSuite($(this));
                            return false;
                        });
                        Juniper.sideLoad.pollSuite();
                    } else {
                        _ping.suite = true;
                        _updateHelpTexts(2, _suiteStr);
                    }
                    _pingDrop();
                    $("#sendViaAirBtn").bind("click", function () {
                        _installViaDrop($(this));
                        return false;
                    });
                });
            } else {
                if (!_tmp.isLogged) {
                    _updateHelpTexts(1, "both");
                } else {
                    if (_tmp.selectedDevice == "") {
                        _tmp.texts.suite[6] = _tmp.texts.setphone;
                        _tmp.texts.drop[6] = _tmp.texts.setphone;
                        _updateHelpTexts(6, "both");
                    } else {
                        if (_tmp.isLogged && !_tmp.canSendToCell) {
                            _updateHelpTexts(2, "both");
                        } else {}
                    }
                }
            } if (!Array.indexOf) {
                Array.prototype.indexOf = function (obj) {
                    for (var i = 0; i < this.length; i++) {
                        if (this[i] == obj) {
                            return i;
                        }
                    }
                    return -1;
                };
            }
        },
        pollSuite: function () {
            if (_sendStarted) {
                return
            }
            nokia.drop.suiteReady(function (o) {
                if (typeof o.version != "undefined") {
                    _suiteVersion = o.version;
                }
                _suiteReady = false;
                _disableButton(_suiteUStr);
                if (o != undefined && o.ready && !_suiteReady) {
                    if (!_checkContentTypeSupport(o.contentTypes)) {
                        _updateHelpTexts(2, _suiteStr);
                    } else {
                        if (o.phoneModel == "") {
                            _updateHelpTexts(4, _suiteStr);
                        } else {
                            if (_checkSuiteUnsupportedDevices(o.unsupportedDevices)) {
                                _updateHelpTexts(2, _suiteStr);
                            } else {
                                if (!o.forwardLocked && _contentInfo.forward_locked) {
                                    _updateHelpTexts(2, _suiteStr);
                                } else {
                                    _tmp.texts.suite[5] = _tmp.texts.suite[5].replace("{DEVICE_MODEL}", o.phoneModel);
                                    _updateHelpTexts(5, _suiteStr);
                                    _enableButton(_suiteUStr);
                                    _suiteReady = true;
                                }
                            }
                        }
                    }
                } else {
                    if (o != undefined && !o.ready) {
                        _updateHelpTexts(3);
                    }
                }
                _ping.suite = true;
                _smsOptio();
            });
            if (!_suiteReady) {
                setTimeout(function () {
                    Juniper.sideLoad.pollSuite();
                }, _pollOfflineInterval);
            } else {
                setTimeout(function () {
                    Juniper.sideLoad.pollSuite();
                }, _pollOnlineInterval);
            }
        }
    };
})(Juniper);
var Juniper = window.Juniper || {};
$(document).ready(function () {
    Juniper.sideLoad.init();
});
var mboxCopyright = "Copyright 1996-2010. Adobe Systems Incorporated. All rights reserved.";
mboxUrlBuilder = function (a, b) {
    this.a = a;
    this.b = b;
    this.c = new Array();
    this.d = function (e) {
        return e;
    };
    this.f = null;
};
mboxUrlBuilder.prototype.addParameter = function (g, h) {
    var i = new RegExp("('|\")");
    if (i.exec(g)) {
        throw "Parameter '" + g + "' contains invalid characters";
    }
    for (var j = 0; j < this.c.length; j++) {
        var k = this.c[j];
        if (k.name == g) {
            k.value = h;
            return this;
        }
    }
    var l = new Object();
    l.name = g;
    l.value = h;
    this.c[this.c.length] = l;
    return this;
};
mboxUrlBuilder.prototype.addParameters = function (c) {
    if (!c) {
        return this;
    }
    for (var j = 0; j < c.length; j++) {
        var m = c[j].indexOf("=");
        if (m == -1 || m == 0) {
            continue;
        }
        this.addParameter(c[j].substring(0, m), c[j].substring(m + 1, c[j].length));
    }
    return this;
};
mboxUrlBuilder.prototype.setServerType = function (n) {
    this.o = n;
};
mboxUrlBuilder.prototype.setBasePath = function (f) {
    this.f = f;
};
mboxUrlBuilder.prototype.setUrlProcessAction = function (p) {
    this.d = p;
};
mboxUrlBuilder.prototype.buildUrl = function () {
    var q = this.f ? this.f : "/m2/" + this.b + "/mbox/" + this.o;
    var r = document.location.protocol == "file:" ? "http:" : document.location.protocol;
    var e = r + "//" + this.a + q;
    var s = e.indexOf("?") != -1 ? "&" : "?";
    for (var j = 0; j < this.c.length; j++) {
        var k = this.c[j];
        e += s + encodeURIComponent(k.name) + "=" + encodeURIComponent(k.value);
        s = "&";
    }
    return this.t(this.d(e));
};
mboxUrlBuilder.prototype.getParameters = function () {
    return this.c;
};
mboxUrlBuilder.prototype.setParameters = function (c) {
    this.c = c;
};
mboxUrlBuilder.prototype.clone = function () {
    var u = new mboxUrlBuilder(this.a, this.b);
    u.setServerType(this.o);
    u.setBasePath(this.f);
    u.setUrlProcessAction(this.d);
    for (var j = 0; j < this.c.length; j++) {
        u.addParameter(this.c[j].name, this.c[j].value);
    }
    return u;
};
mboxUrlBuilder.prototype.t = function (v) {
    return v.replace(/\"/g, "&quot;").replace(/>/g, "&gt;");
};
mboxStandardFetcher = function () {};
mboxStandardFetcher.prototype.getType = function () {
    return "standard";
};
mboxStandardFetcher.prototype.fetch = function (w) {
    w.setServerType(this.getType());
    document.write('<script src="' + w.buildUrl() + '" language="JavaScript"><\/script>');
};
mboxStandardFetcher.prototype.cancel = function () {};
mboxAjaxFetcher = function () {};
mboxAjaxFetcher.prototype.getType = function () {
    return "ajax";
};
mboxAjaxFetcher.prototype.fetch = function (w) {
    w.setServerType(this.getType());
    var e = w.buildUrl();
    this.x = document.createElement("script");
    this.x.src = e;
    document.body.appendChild(this.x);
};
mboxAjaxFetcher.prototype.cancel = function () {};
mboxMap = function () {
    this.y = new Object();
    this.z = new Array();
};
mboxMap.prototype.put = function (A, h) {
    if (!this.y[A]) {
        this.z[this.z.length] = A;
    }
    this.y[A] = h;
};
mboxMap.prototype.get = function (A) {
    return this.y[A];
};
mboxMap.prototype.remove = function (A) {
    this.y[A] = undefined;
};
mboxMap.prototype.each = function (p) {
    for (var j = 0; j < this.z.length; j++) {
        var A = this.z[j];
        var h = this.y[A];
        if (h) {
            var B = p(A, h);
            if (B === false) {
                break;
            }
        }
    }
};
mboxFactory = function (C, b, D) {
    this.E = false;
    this.C = C;
    this.D = D;
    this.F = new mboxList();
    mboxFactories.put(D, this);
    this.G = typeof document.createElement("div").replaceChild != "undefined" && (function () {
        return true;
    })() && typeof document.getElementById != "undefined" && typeof (window.attachEvent || document.addEventListener || window.addEventListener) != "undefined" && typeof encodeURIComponent != "undefined";
    this.H = this.G && mboxGetPageParameter("mboxDisable") == null;
    var I = D == "default";
    this.J = new mboxCookieManager("mbox" + (I ? "" : ("-" + D)), (function () {
        return mboxCookiePageDomain();
    })());
    if (this.isAdmin()) {
        this.enable();
    }
    this.K();
    this.L = mboxGenerateId();
    this.M = mboxScreenHeight();
    this.N = mboxScreenWidth();
    this.O = mboxBrowserWidth();
    this.P = mboxBrowserHeight();
    this.Q = mboxScreenColorDepth();
    this.R = mboxBrowserTimeOffset();
    this.S = new mboxSession(this.L, "mboxSession", "session", 31 * 60, this.J);
    this.T = new mboxPC("PC", 1209600, this.J);
    this.w = new mboxUrlBuilder(C, b);
    this.U(this.w, I);
    this.V = new Date().getTime();
    this.W = this.V;
    var X = this;
    this.addOnLoad(function () {
        X.W = new Date().getTime();
    });
    if (this.G) {
        this.addOnLoad(function () {
            X.E = true;
            X.getMboxes().each(function (Y) {
                Y.setFetcher(new mboxAjaxFetcher());
                Y.finalize();
            });
        });
        this.limitTraffic(100, 10368000);
        if (this.H) {
            this.Z();
            this._ = new mboxSignaler(function (ab, c) {
                return X.create(ab, c);
            }, this.J);
        }
    }
};
mboxFactory.prototype.isEnabled = function () {
    return this.H;
};
mboxFactory.prototype.getDisableReason = function () {
    return this.J.getCookie("disable");
};
mboxFactory.prototype.isSupported = function () {
    return this.G;
};
mboxFactory.prototype.disable = function (bb, cb) {
    if (typeof bb == "undefined") {
        bb = 60 * 60;
    }
    if (typeof cb == "undefined") {
        cb = "unspecified";
    }
    if (!this.isAdmin()) {
        this.H = false;
        this.J.setCookie("disable", cb, bb);
    }
};
mboxFactory.prototype.enable = function () {
    this.H = true;
    this.J.deleteCookie("disable");
};
mboxFactory.prototype.isAdmin = function () {
    return document.location.href.indexOf("mboxEnv") != -1;
};
mboxFactory.prototype.limitTraffic = function (db, bb) {};
mboxFactory.prototype.addOnLoad = function (eb) {
    if (this.isDomLoaded()) {
        eb();
    } else {
        var fb = false;
        var gb = function () {
            if (fb) {
                return
            }
            fb = true;
            eb();
        };
        this.hb.push(gb);
        if (this.isDomLoaded() && !fb) {
            gb();
        }
    }
};
mboxFactory.prototype.getEllapsedTime = function () {
    return this.W - this.V;
};
mboxFactory.prototype.getEllapsedTimeUntil = function (ib) {
    return ib - this.V;
};
mboxFactory.prototype.getMboxes = function () {
    return this.F;
};
mboxFactory.prototype.get = function (ab, jb) {
    return this.F.get(ab).getById(jb || 0);
};
mboxFactory.prototype.update = function (ab, c) {
    if (!this.isEnabled()) {
        return
    }
    if (!this.isDomLoaded()) {
        var X = this;
        this.addOnLoad(function () {
            X.update(ab, c);
        });
        return
    }
    if (this.F.get(ab).length() == 0) {
        throw "Mbox " + ab + " is not defined";
    }
    this.F.get(ab).each(function (Y) {
        Y.getUrlBuilder().addParameter("mboxPage", mboxGenerateId());
        Y.load(c);
    });
};
mboxFactory.prototype.create = function (ab, c, kb) {
    if (!this.isSupported()) {
        return null;
    }
    var e = this.w.clone();
    e.addParameter("mboxCount", this.F.length() + 1);
    e.addParameters(c);
    var jb = this.F.get(ab).length();
    var lb = this.D + "-" + ab + "-" + jb;
    var mb;
    if (kb) {
        mb = new mboxLocatorNode(kb);
    } else {
        if (this.E) {
            throw "The page has already been loaded, can't write marker";
        }
        mb = new mboxLocatorDefault(lb);
    }
    try {
        var X = this;
        var nb = "mboxImported-" + lb;
        var Y = new mbox(ab, jb, e, mb, nb);
        if (this.H) {
            Y.setFetcher(this.E ? new mboxAjaxFetcher() : new mboxStandardFetcher());
        }
        Y.setOnError(function (ob, n) {
            Y.setMessage(ob);
            Y.activate();
            if (!Y.isActivated()) {
                X.disable(60 * 60, ob);
                window.location.reload(false);
            }
        });
        this.F.add(Y);
    } catch (pb) {
        this.disable();
        throw 'Failed creating mbox "' + ab + '", the error was: ' + pb;
    }
    var qb = new Date();
    e.addParameter("mboxTime", qb.getTime() - (qb.getTimezoneOffset() * 60000));
    return Y;
};
mboxFactory.prototype.getCookieManager = function () {
    return this.J;
};
mboxFactory.prototype.getPageId = function () {
    return this.L;
};
mboxFactory.prototype.getPCId = function () {
    return this.T;
};
mboxFactory.prototype.getSessionId = function () {
    return this.S;
};
mboxFactory.prototype.getSignaler = function () {
    return this._;
};
mboxFactory.prototype.getUrlBuilder = function () {
    return this.w;
};
mboxFactory.prototype.U = function (e, I) {
    e.addParameter("mboxHost", document.location.hostname).addParameter("mboxSession", this.S.getId());
    if (!I) {
        e.addParameter("mboxFactoryId", this.D);
    }
    if (this.T.getId() != null) {
        e.addParameter("mboxPC", this.T.getId());
    }
    e.addParameter("mboxPage", this.L);
    e.addParameter("screenHeight", this.M);
    e.addParameter("screenWidth", this.N);
    e.addParameter("browserWidth", this.O);
    e.addParameter("browserHeight", this.P);
    e.addParameter("browserTimeOffset", this.R);
    e.addParameter("colorDepth", this.Q);
    e.addParameter("mboxXDomain", "x-only");
    e.addParameters(this.rb().split("&"));
    e.setUrlProcessAction(function (e) {
        e += "&mboxURL=" + encodeURIComponent(document.location);
        var sb = encodeURIComponent(document.referrer);
        if (e.length + sb.length < 2000) {
            e += "&mboxReferrer=" + sb;
        }
        e += "&mboxVersion=" + mboxVersion;
        return e;
    });
};
mboxFactory.prototype.rb = function () {
    var phone = tntReadCookie("tntPhone");
    if (phone != "") {
        return "selectedPhone=" + phone;
    }
    return "";
};
mboxFactory.prototype.Z = function () {
    document.write("<style>.mboxDefault { visibility:hidden; }</style>");
};
mboxFactory.prototype.isDomLoaded = function () {
    return this.E;
};
mboxFactory.prototype.K = function () {
    if (this.hb != null) {
        return
    }
    this.hb = new Array();
    var X = this;
    (function () {
        var tb = document.addEventListener ? "DOMContentLoaded" : "onreadystatechange";
        var ub = false;
        var vb = function () {
            if (ub) {
                return
            }
            ub = true;
            for (var i = 0; i < X.hb.length; ++i) {
                X.hb[i]();
            }
        };
        if (document.addEventListener) {
            document.addEventListener(tb, function () {
                document.removeEventListener(tb, arguments.callee, false);
                vb();
            }, false);
            window.addEventListener("load", function () {
                document.removeEventListener("load", arguments.callee, false);
                vb();
            }, false);
        } else {
            if (document.attachEvent) {
                if (self !== self.top) {
                    document.attachEvent(tb, function () {
                        if (document.readyState === "complete") {
                            document.detachEvent(tb, arguments.callee);
                            vb();
                        }
                    });
                } else {
                    var wb = function () {
                        try {
                            document.documentElement.doScroll("left");
                            vb();
                        } catch (xb) {
                            setTimeout(wb, 13);
                        }
                    };
                    wb();
                }
            }
        } if (document.readyState === "complete") {
            vb();
        }
    })();
};
mboxSignaler = function (yb, J) {
    this.J = J;
    var zb = J.getCookieNames("signal-");
    for (var j = 0; j < zb.length; j++) {
        var Ab = zb[j];
        var Bb = J.getCookie(Ab).split("&");
        var Y = yb(Bb[0], Bb);
        Y.load();
        J.deleteCookie(Ab);
    }
};
mboxSignaler.prototype.signal = function (Cb, ab) {
    this.J.setCookie("signal-" + Cb, mboxShiftArray(arguments).join("&"), 45 * 60);
};
mboxList = function () {
    this.F = new Array();
};
mboxList.prototype.add = function (Y) {
    if (Y != null) {
        this.F[this.F.length] = Y;
    }
};
mboxList.prototype.get = function (ab) {
    var B = new mboxList();
    for (var j = 0; j < this.F.length; j++) {
        var Y = this.F[j];
        if (Y.getName() == ab) {
            B.add(Y);
        }
    }
    return B;
};
mboxList.prototype.getById = function (Db) {
    return this.F[Db];
};
mboxList.prototype.length = function () {
    return this.F.length;
};
mboxList.prototype.each = function (p) {
    if (typeof p != "function") {
        throw "Action must be a function, was: " + typeof (p);
    }
    for (var j = 0; j < this.F.length; j++) {
        p(this.F[j]);
    }
};
mboxLocatorDefault = function (g) {
    this.g = "mboxMarker-" + g;
    document.write('<div id="' + this.g + '" style="visibility:hidden;display:none">&nbsp;</div>');
};
mboxLocatorDefault.prototype.locate = function () {
    var Eb = document.getElementById(this.g);
    while (Eb != null) {
        if (Eb.nodeType == 1) {
            if (Eb.className == "mboxDefault") {
                return Eb;
            }
        }
        Eb = Eb.previousSibling;
    }
    return null;
};
mboxLocatorDefault.prototype.force = function () {
    var Fb = document.createElement("div");
    Fb.className = "mboxDefault";
    var Gb = document.getElementById(this.g);
    Gb.parentNode.insertBefore(Fb, Gb);
    return Fb;
};
mboxLocatorNode = function (Hb) {
    this.Eb = Hb;
};
mboxLocatorNode.prototype.locate = function () {
    return typeof this.Eb == "string" ? document.getElementById(this.Eb) : this.Eb;
};
mboxLocatorNode.prototype.force = function () {
    return null;
};
mboxCreate = function (ab) {
    var Y = mboxFactoryDefault.create(ab, mboxShiftArray(arguments));
    if (Y) {
        Y.load();
    }
    return Y;
};
mboxDefine = function (kb, ab) {
    var Y = mboxFactoryDefault.create(ab, mboxShiftArray(mboxShiftArray(arguments)), kb);
    return Y;
};
mboxUpdate = function (ab) {
    mboxFactoryDefault.update(ab, mboxShiftArray(arguments));
};
mbox = function (g, Ib, w, Jb, nb) {
    this.Kb = null;
    this.Lb = 0;
    this.mb = Jb;
    this.nb = nb;
    this.Mb = null;
    this.Nb = new mboxOfferContent();
    this.Fb = null;
    this.w = w;
    this.message = "";
    this.Ob = new Object();
    this.Pb = 0;
    this.Ib = Ib;
    this.g = g;
    this.Qb();
    w.addParameter("mbox", g).addParameter("mboxId", Ib);
    this.Rb = function () {};
    this.Sb = function () {};
    this.Tb = null;
};
mbox.prototype.getId = function () {
    return this.Ib;
};
mbox.prototype.Qb = function () {
    if (this.g.length > 250) {
        throw "Mbox Name " + this.g + " exceeds max length of 250 characters.";
    } else {
        if (this.g.match(/^\s+|\s+$/g)) {
            throw "Mbox Name " + this.g + " has leading/trailing whitespace(s).";
        }
    }
};
mbox.prototype.getName = function () {
    return this.g;
};
mbox.prototype.getParameters = function () {
    var c = this.w.getParameters();
    var B = new Array();
    for (var j = 0; j < c.length; j++) {
        if (c[j].name.indexOf("mbox") != 0) {
            B[B.length] = c[j].name + "=" + c[j].value;
        }
    }
    return B;
};
mbox.prototype.setOnLoad = function (p) {
    this.Sb = p;
    return this;
};
mbox.prototype.setMessage = function (ob) {
    this.message = ob;
    return this;
};
mbox.prototype.setOnError = function (Rb) {
    this.Rb = Rb;
    return this;
};
mbox.prototype.setFetcher = function (Ub) {
    if (this.Mb) {
        this.Mb.cancel();
    }
    this.Mb = Ub;
    return this;
};
mbox.prototype.getFetcher = function () {
    return this.Mb;
};
mbox.prototype.load = function (c) {
    if (this.Mb == null) {
        return this;
    }
    this.setEventTime("load.start");
    this.cancelTimeout();
    this.Lb = 0;
    var w = (c && c.length > 0) ? this.w.clone().addParameters(c) : this.w;
    this.Mb.fetch(w);
    var X = this;
    this.Vb = setTimeout(function () {
        X.Rb("browser timeout", X.Mb.getType());
    }, 15000);
    this.setEventTime("load.end");
    return this;
};
mbox.prototype.loaded = function () {
    this.cancelTimeout();
    if (!this.activate()) {
        var X = this;
        setTimeout(function () {
            X.loaded();
        }, 100);
    }
};
mbox.prototype.activate = function () {
    if (this.Lb) {
        return this.Lb;
    }
    this.setEventTime("activate" + ++this.Pb + ".start");
    if (this.show()) {
        this.cancelTimeout();
        this.Lb = 1;
    }
    this.setEventTime("activate" + this.Pb + ".end");
    return this.Lb;
};
mbox.prototype.isActivated = function () {
    return this.Lb;
};
mbox.prototype.setOffer = function (Nb) {
    if (Nb && Nb.show && Nb.setOnLoad) {
        this.Nb = Nb;
    } else {
        throw "Invalid offer";
    }
    return this;
};
mbox.prototype.getOffer = function () {
    return this.Nb;
};
mbox.prototype.show = function () {
    this.setEventTime("show.start");
    var B = this.Nb.show(this);
    this.setEventTime(B == 1 ? "show.end.ok" : "show.end");
    return B;
};
mbox.prototype.showContent = function (Wb) {
    if (Wb == null) {
        return 0;
    }
    if (this.Fb == null || !this.Fb.parentNode) {
        this.Fb = this.getDefaultDiv();
        if (this.Fb == null) {
            return 0;
        }
    }
    if (this.Fb != Wb) {
        this.Xb(this.Fb);
        this.Fb.parentNode.replaceChild(Wb, this.Fb);
        this.Fb = Wb;
    }
    this.Yb(Wb);
    this.Sb();
    return 1;
};
mbox.prototype.hide = function () {
    this.setEventTime("hide.start");
    var B = this.showContent(this.getDefaultDiv());
    this.setEventTime(B == 1 ? "hide.end.ok" : "hide.end.fail");
    return B;
};
mbox.prototype.finalize = function () {
    this.setEventTime("finalize.start");
    this.cancelTimeout();
    if (this.getDefaultDiv() == null) {
        if (this.mb.force() != null) {
            this.setMessage("No default content, an empty one has been added");
        } else {
            this.setMessage("Unable to locate mbox");
        }
    }
    if (!this.activate()) {
        this.hide();
        this.setEventTime("finalize.end.hide");
    }
    this.setEventTime("finalize.end.ok");
};
mbox.prototype.cancelTimeout = function () {
    if (this.Vb) {
        clearTimeout(this.Vb);
    }
    if (this.Mb != null) {
        this.Mb.cancel();
    }
};
mbox.prototype.getDiv = function () {
    return this.Fb;
};
mbox.prototype.getDefaultDiv = function () {
    if (this.Tb == null) {
        this.Tb = this.mb.locate();
    }
    return this.Tb;
};
mbox.prototype.setEventTime = function (Zb) {
    this.Ob[Zb] = (new Date()).getTime();
};
mbox.prototype.getEventTimes = function () {
    return this.Ob;
};
mbox.prototype.getImportName = function () {
    return this.nb;
};
mbox.prototype.getURL = function () {
    return this.w.buildUrl();
};
mbox.prototype.getUrlBuilder = function () {
    return this.w;
};
mbox.prototype._b = function (Fb) {
    return Fb.style.display != "none";
};
mbox.prototype.Yb = function (Fb) {
    this.ac(Fb, true);
};
mbox.prototype.Xb = function (Fb) {
    this.ac(Fb, false);
};
mbox.prototype.ac = function (Fb, bc) {
    Fb.style.visibility = bc ? "visible" : "hidden";
    Fb.style.display = bc ? "block" : "none";
};
mboxOfferContent = function () {
    this.Sb = function () {};
};
mboxOfferContent.prototype.show = function (Y) {
    var B = Y.showContent(document.getElementById(Y.getImportName()));
    if (B == 1) {
        this.Sb();
    }
    return B;
};
mboxOfferContent.prototype.setOnLoad = function (Sb) {
    this.Sb = Sb;
};
mboxOfferAjax = function (Wb) {
    this.Wb = Wb;
    this.Sb = function () {};
};
mboxOfferAjax.prototype.setOnLoad = function (Sb) {
    this.Sb = Sb;
};
mboxOfferAjax.prototype.show = function (Y) {
    var cc = document.createElement("div");
    cc.id = Y.getImportName();
    cc.innerHTML = this.Wb;
    var B = Y.showContent(cc);
    if (B == 1) {
        this.Sb();
    }
    return B;
};
mboxOfferDefault = function () {
    this.Sb = function () {};
};
mboxOfferDefault.prototype.setOnLoad = function (Sb) {
    this.Sb = Sb;
};
mboxOfferDefault.prototype.show = function (Y) {
    var B = Y.hide();
    if (B == 1) {
        this.Sb();
    }
    return B;
};
mboxCookieManager = function mboxCookieManager(g, dc) {
    this.g = g;
    this.dc = dc == "" || dc.indexOf(".") == -1 ? "" : "; domain=" + dc;
    this.ec = new mboxMap();
    this.loadCookies();
};
mboxCookieManager.prototype.isEnabled = function () {
    this.setCookie("check", "true", 60);
    this.loadCookies();
    return this.getCookie("check") == "true";
};
mboxCookieManager.prototype.setCookie = function (g, h, bb) {
    if (typeof g != "undefined" && typeof h != "undefined" && typeof bb != "undefined") {
        var fc = new Object();
        fc.name = g;
        fc.value = escape(h);
        fc.expireOn = Math.ceil(bb + new Date().getTime() / 1000);
        this.ec.put(g, fc);
        this.saveCookies();
    }
};
mboxCookieManager.prototype.getCookie = function (g) {
    var fc = this.ec.get(g);
    return fc ? unescape(fc.value) : null;
};
mboxCookieManager.prototype.deleteCookie = function (g) {
    this.ec.remove(g);
    this.saveCookies();
};
mboxCookieManager.prototype.getCookieNames = function (gc) {
    var hc = new Array();
    this.ec.each(function (g, fc) {
        if (g.indexOf(gc) == 0) {
            hc[hc.length] = g;
        }
    });
    return hc;
};
mboxCookieManager.prototype.saveCookies = function () {};
mboxCookieManager.prototype.loadCookies = function () {
    this.ec = new mboxMap();
    var ic = document.cookie.indexOf(this.g + "=");
    if (ic != -1) {
        var jc = document.cookie.indexOf(";", ic);
        if (jc == -1) {
            jc = document.cookie.indexOf(",", ic);
            if (jc == -1) {
                jc = document.cookie.length;
            }
        }
        var kc = document.cookie.substring(ic + this.g.length + 1, jc).split("|");
        var lc = Math.ceil(new Date().getTime() / 1000);
        for (var j = 0; j < kc.length; j++) {
            var fc = kc[j].split("#");
            if (lc <= fc[2]) {
                var mc = new Object();
                mc.name = fc[0];
                mc.value = fc[1];
                mc.expireOn = fc[2];
                this.ec.put(mc.name, mc);
            }
        }
    }
};
mboxSession = function (nc, oc, Ab, pc, J) {
    this.oc = oc;
    this.Ab = Ab;
    this.pc = pc;
    this.J = J;
    this.qc = false;
    this.Ib = typeof mboxForceSessionId != "undefined" ? mboxForceSessionId : mboxGetPageParameter(this.oc);
    if (this.Ib == null || this.Ib.length == 0) {
        this.Ib = J.getCookie(Ab);
        if (this.Ib == null || this.Ib.length == 0) {
            this.Ib = nc;
            this.qc = true;
        }
    }
    J.setCookie(Ab, this.Ib, pc);
};
mboxSession.prototype.getId = function () {
    return this.Ib;
};
mboxSession.prototype.forceId = function (rc) {
    this.Ib = rc;
    this.J.setCookie(this.Ab, this.Ib, this.pc);
};
mboxPC = function (Ab, pc, J) {
    this.Ab = Ab;
    this.pc = pc;
    this.J = J;
    this.Ib = typeof mboxForcePCId != "undefined" ? mboxForcePCId : J.getCookie(Ab);
    if (this.Ib != null) {
        J.setCookie(Ab, this.Ib, pc);
    }
};
mboxPC.prototype.getId = function () {
    return this.Ib;
};
mboxPC.prototype.forceId = function (rc) {
    if (this.Ib != rc) {
        this.Ib = rc;
        this.J.setCookie(this.Ab, this.Ib, this.pc);
        return true;
    }
    return false;
};
mboxGetPageParameter = function (g) {
    var B = null;
    var sc = new RegExp(g + "=([^&]*)");
    var tc = sc.exec(document.location);
    if (tc != null && tc.length >= 2) {
        B = tc[1];
    }
    return B;
};
mboxSetCookie = function (g, h, bb) {
    return mboxFactoryDefault.getCookieManager().setCookie(g, h, bb);
};
mboxGetCookie = function (g) {
    return mboxFactoryDefault.getCookieManager().getCookie(g);
};
mboxCookiePageDomain = function () {
    var dc = (/([^:]*)(:[0-9]{0,5})?/).exec(document.location.host)[1];
    var uc = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/;
    if (!uc.exec(dc)) {
        var vc = (/([^\.]+\.[^\.]{3}|[^\.]+\.[^\.]+\.[^\.]{2})$/).exec(dc);
        if (vc) {
            dc = vc[0];
        }
    }
    return dc ? dc : "";
};
mboxShiftArray = function (wc) {
    var B = new Array();
    for (var j = 1; j < wc.length; j++) {
        B[B.length] = wc[j];
    }
    return B;
};
mboxGenerateId = function () {
    return (new Date()).getTime() + "-" + Math.floor(Math.random() * 999999);
};
mboxScreenHeight = function () {
    return screen.height;
};
mboxScreenWidth = function () {
    return screen.width;
};
mboxBrowserWidth = function () {
    return (window.innerWidth) ? window.innerWidth : document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth;
};
mboxBrowserHeight = function () {
    return (window.innerHeight) ? window.innerHeight : document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight;
};
mboxBrowserTimeOffset = function () {
    return -new Date().getTimezoneOffset();
};
mboxScreenColorDepth = function () {
    return screen.pixelDepth;
};
if (typeof mboxVersion == "undefined") {
    var mboxVersion = 40;
    var mboxFactories = new mboxMap();
    var mboxFactoryDefault = new mboxFactory("nokia.tt.omtrdc.net", "nokia", "default");
}
if (mboxGetPageParameter("mboxDebug") != null || mboxFactoryDefault.getCookieManager().getCookie("debug") != null) {
    setTimeout(function () {
        if (typeof mboxDebugLoaded == "undefined") {
            alert("Could not load the remote debug.\nPlease check your connection to Test&amp;Target servers");
        }
    }, 60 * 60);
    document.write('<script language="Javascript1.2" src="/static/mbox_debug.jsp"><\/script>');
}
mboxScPluginFetcher = function (b, xc) {
    this.b = b;
    this.xc = xc;
};
mboxScPluginFetcher.prototype.yc = function (w) {
    w.setBasePath("/m2/" + this.b + "/sc/standard");
    this.zc(w);
    var e = w.buildUrl();
    e += "&scPluginVersion=1";
    return e;
};
mboxScPluginFetcher.prototype.zc = function (w) {
    var Ac = ["dynamicVariablePrefix", "visitorID", "vmk", "ppu", "charSet", "visitorNamespace", "cookieDomainPeriods", "cookieLifetime", "pageName", "currencyCode", "variableProvider", "channel", "server", "pageType", "transactionID", "purchaseID", "campaign", "state", "zip", "events", "products", "linkName", "linkType", "resolution", "colorDepth", "javascriptVersion", "javaEnabled", "cookiesEnabled", "browserWidth", "browserHeight", "connectionType", "homepage", "pe", "pev1", "pev2", "pev3", "visitorSampling", "visitorSamplingGroup", "dynamicAccountSelection", "dynamicAccountList", "dynamicAccountMatch", "trackDownloadLinks", "trackExternalLinks", "trackInlineStats", "linkLeaveQueryString", "linkDownloadFileTypes", "linkExternalFilters", "linkInternalFilters", "linkTrackVars", "linkTrackEvents", "linkNames", "lnk", "eo"];
    for (var j = 0; j < Ac.length; j++) {
        this.Bc(Ac[j], w);
    }
    for (var j = 1; j <= 50; j++) {
        this.Bc("prop" + j, w);
        this.Bc("eVar" + j, w);
        this.Bc("hier" + j, w);
    }
};
mboxScPluginFetcher.prototype.Bc = function (g, w) {
    var h = this.xc[g];
    if (typeof (h) === "undefined" || h === null || h === "") {
        return
    }
    w.addParameter(g, h);
};
mboxScPluginFetcher.prototype.cancel = function () {};
mboxStandardScPluginFetcher = function (b, xc) {
    mboxScPluginFetcher.call(this, b, xc);
};
mboxStandardScPluginFetcher.prototype = new mboxScPluginFetcher;
mboxStandardScPluginFetcher.prototype.getType = function () {
    return "standard";
};
mboxStandardScPluginFetcher.prototype.fetch = function (w) {
    w.setServerType(this.getType());
    var e = this.yc(w);
    document.write('<script src="' + e + '" language="JavaScript"><\/script>');
};
mboxAjaxScPluginFetcher = function (b, xc) {
    mboxScPluginFetcher.call(this, b, xc);
};
mboxAjaxScPluginFetcher.prototype = new mboxScPluginFetcher;
mboxAjaxScPluginFetcher.prototype.fetch = function (w) {
    w.setServerType(this.getType());
    var e = this.yc(w);
    this.x = document.createElement("script");
    this.x.src = e;
    document.body.appendChild(this.x);
};
mboxAjaxScPluginFetcher.prototype.getType = function () {
    return "ajax";
};

function mboxLoadSCPlugin(xc) {
    if (!xc) {
        return null;
    }
    xc.m_tt = function (xc) {
        var Cc = xc.m_i("tt");
        Cc.H = true;
        Cc.b = "nokia";
        Cc._t = function () {
            if (!this.isEnabled()) {
                return
            }
            var Y = this.Ec();
            if (Y) {
                var Ub = mboxFactoryDefault.isDomLoaded() ? new mboxAjaxScPluginFetcher(this.b, this.s) : new mboxStandardScPluginFetcher(this.b, this.s);
                Y.setFetcher(Ub);
                Y.load();
            }
        };
        Cc.isEnabled = function () {
            return this.H && mboxFactoryDefault.isEnabled();
        };
        Cc.Ec = function () {
            var ab = this.Fc();
            var Fb = document.createElement("DIV");
            return mboxFactoryDefault.create(ab, new Array(), Fb);
        };
        Cc.Fc = function () {
            var Gc = this.s.events && this.s.events.indexOf("purchase") != -1;
            return "SiteCatalyst: " + (Gc ? "purchase" : "event");
        };
    };
    return xc.loadModule("tt");
}

function tntCreateCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function tntReadCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return "";
}
var mboxTrack = function (mbox, params) {
        var m, u, i, f = mboxFactoryDefault;
        if (f.getMboxes().length() > 0) {
            m = f.getMboxes().getById(0);
            u = m.getURL().replace("mbox=" + m.getName(), "mbox=" + mbox).replace("mboxPage=" + f.getPageId(), "mboxPage=" + mboxGenerateId()) + "&" + params, i = new Image();
            i.style.display = "none";
            i.src = u;
            document.body.appendChild(i);
        } else {
            f.getSignaler().signal("onEvent", mbox + "&" + params);
        }
    },
    mboxTrackLink = function (mbox, params, url) {
        mboxTrack(mbox, params);
        setTimeout("location='" + url + "'", 500);
    };
mboxDefine("", "Store_button_test_onClick");

function tt_Log(URL) {
    var mboxDestination = ("Destination=" + URL);
    mboxUpdate("Store_button_test_onClick", mboxDestination);
}

function tt_Redirect(URL) {
    var mboxDestination = ("Destination=" + URL);
    mboxUpdate("Store_button_test_onClick", mboxDestination);
    window.setTimeout("window.location.href='" + URL + "'", 500);
}
var Juniper = window.Juniper || {};
Juniper.banner = {
    currentBanner: 1,
    totalBanners: 0,
    spotlightId: "spotlight_",
    spotlightClass: "spotlight",
    contentIdList: [],
    init: function () {
        $("#previousBanner").bind("click", Juniper.banner.previous);
        $("#nextBanner").bind("click", Juniper.banner.next);
        Juniper.banner.currentBanner = 1;
    },
    previous: function () {
        Juniper.banner.currentBanner--;
        if (Juniper.banner.currentBanner < 1) {
            Juniper.banner.currentBanner = Juniper.banner.totalBanners;
        }
        Juniper.banner.tracking();
        return Juniper.banner.showCurrentBanner();
    },
    next: function () {
        Juniper.banner.currentBanner++;
        if (Juniper.banner.currentBanner > Juniper.banner.totalBanners) {
            Juniper.banner.currentBanner = 1;
        }
        Juniper.banner.tracking();
        return Juniper.banner.showCurrentBanner();
    },
    showCurrentBanner: function () {
        $("." + Juniper.banner.spotlightClass).hide();
        $("#" + Juniper.banner.spotlightId + Juniper.banner.currentBanner).show();
        return false;
    },
    tracking: function () {
        s.linkTrackVars = "prop6,prop4,prop17,prop23,evar22,prop21,prop43,prop40,prop22,products,channel,events";
        s.products = ";" + Juniper.banner.contentIdList[Juniper.banner.currentBanner];
        s.linkTrackEvents = "event27";
        s.events = "event27";
        s.tl(this, "o", "spotlight scrolled");
    }
};
$(document).ready(function () {
    Juniper.banner.init();
});
var Juniper = window.Juniper || {};
Juniper.nav = {
    toggleNav: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        var parent = $(this).parents("li");
        if (parent.hasClass("expanded")) {
            $("#navDebug").html("collapse");
            parent.removeClass("expanded");
            parent.find("ul.navCategoriesList").slideUp("fast");
        } else {
            $("#navDebug").html("expand");
            parent.addClass("expanded");
            parent.find("ul.navCategoriesList").slideDown("fast");
        }
    },
    jepTest: function (e) {
        $("#dynamicContent").html("jepTest");
    },
    init: function () {
        $("a.menuToggle").bind("click", Juniper.nav.toggleNav);
        $("a[rel='ajax']", ".listNavigation").live("click", Juniper.content.linkHandler);
        $("#jepTest").bind("click", Juniper.nav.jepTest);
    }
};
$(document).ready(function () {
    Juniper.nav.init();
});
var Juniper = window.Juniper || {};
Juniper.deviceSelect = {
    showing: false,
    panel: null,
    list: null,
    terminalId: null,
    terminalLabel: null,
    tidSet: null,
    page: null,
    selectedItemHref: null,
    imagesShowing: false,
    osSelected: false,
    osSelectionShown: false,
    showSelector: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        Juniper.deviceSelect.page = Juniper.deviceSelect.getPageName();
        if (Juniper.register && Juniper.register.showing) {
            Juniper.register.showing = false;
            Juniper.register.panel.fadeOut(500, Juniper.deviceSelect.showPanel);
        } else {
            Juniper.deviceSelect.showPanel(e);
        }
    },
    showPanel: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        Juniper.deviceSelect.osFamily = null;
        if (!Juniper.deviceSelect.showing) {
            if (Juniper.register && Juniper.register.showing) {
                Juniper.register.panel.fadeOut(500, function () {
                    Juniper.register.showing = false;
                });
            }
            tb_show("", "/deviceselection?height=500&width=900", null);
            Juniper.deviceSelect.resetSelected();
        }
        if (!Juniper.imagesShowing) {
            $("#deviceList li a img").each(function (i) {
                $(this).attr("src", $(this).attr("data-src"));
            });
            Juniper.imagesShowing = true;
        }
        s.pageName = "ovi:store:fw:device selector";
        s.products = "";
        s.events = "";
        s.t();
    },
    hidePanel: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        tb_remove();
    },
    selectItem: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        var family = $(this).attr("data-family");
        if (family != "") {
            Juniper.deviceSelect.osFamily = family;
        }
        Juniper.deviceSelect.terminalId = Juniper.deviceSelect.oldTerminalId = $(this).attr("rel");
        Juniper.deviceSelect.terminalLabel = Juniper.deviceSelect.oldTerminalLabel = $(this).attr("title");
        $("#terminalId").val($(this).attr("rel"));
        $(".deviceFooter .btn").removeClass("disabled");
        $("li", Juniper.deviceSelect.list).removeClass("selectedDevice");
        $(this).parent().addClass("selectedDevice");
    },
    processDevice: function (e) {
        if (Juniper.deviceSelect.osFamily) {
            Juniper.deviceSelect.osSelectionShown = true;
            tb_show("", "/osselection?terminalId=" + Juniper.deviceSelect.terminalId + "&height=500&width=900", null);
        } else {
            Juniper.deviceSelect.setDevice();
        }
    },
    setDevice: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        if (Juniper.deviceSelect.osSelectionShown == true && Juniper.deviceSelect.osSelected == false) {
            return false;
        }
        if (!Juniper.global.deviceIsSelected) {
            $.post("/index/flash-carousel", {
                deviceIsSelected: 1
            }, function (data) {
                if (data.success) {
                    Juniper.deviceSelect.submitDevice();
                }
            }, "json");
        } else {
            Juniper.deviceSelect.submitDevice();
        }
    },
    submitDevice: function () {
        if (Juniper.deviceSelect.terminalId) {
            if (document.getElementById("nokiaSpotlight")) {
                var swf = document.getElementById("nokiaSpotlight");
                swf.setPhone(Juniper.deviceSelect.terminalId);
            }
            $(".deviceChange .value").html(Juniper.deviceSelect.terminalLabel);
            $(".deviceChange.noneSelected").addClass("hide");
            $(".removeDevice").removeClass("hide");
            $(".deviceChange.selected").removeClass("hide");
            Juniper.deviceSelect.sendTerminalId(function () {
                Juniper.deviceSelect.tidSet = true;
                Juniper.deviceSelect.hidePanel();
            });
        }
    },
    sendTerminalId: function (callback) {
        var id = Juniper.deviceSelect.terminalId;
        if (id == null) {
            id = "any";
        }
        var path = window.location.pathname + window.location.search;
        var page = Juniper.deviceSelect.getPageName();
        var path = location.hash.length > 1 ? location.hash.substring(1) : path;
        var concat = path.indexOf("?") > 0 ? "&" : "?";
        var url = path + concat + "terminalId=" + id;
        switch (page) {
        case "content":
            url += "&reload=1";
        case "search":
            document.location.search.replace(/(\&terminalId=(.*)(\&|$))/, "");
        default:
            Juniper.content.replaceContent(url, "#content");
            break;
        }
        if (callback !== null && typeof callback === "function") {
            callback();
        }
    },
    selectOs: function (element) {
        Juniper.deviceSelect.terminalId = $(element).attr("rel");
        Juniper.deviceSelect.terminalLabel = $(element).attr("title");
        Juniper.deviceSelect.osSelected = true;
        $("#terminalId").val($(element).attr("rel"));
        $(".osFooter #submitOS").removeClass("disabled");
        $("#osOverlay #osList li a").removeClass("selectedImg");
        $(element).addClass("selectedImg");
        $(".osFooter #submitOs").removeClass("disabled");
    },
    getDefaultOs: function () {
        Juniper.deviceSelect.terminalId = Juniper.deviceSelect.oldTerminalId;
        Juniper.deviceSelect.terminalLabel = Juniper.deviceSelect.oldTerminalLabel;
        Juniper.deviceSelect.osSelected = true;
        Juniper.deviceSelect.setDevice();
    },
    hideOsInstruction: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        tb_show("", "/osselection?terminalId=" + Juniper.deviceSelect.terminalId + "&height=500&width=900", null);
    },
    hideOsSelection: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        Juniper.deviceSelect.osFamily = null;
        Juniper.deviceSelect.osSelectionShown = false;
        tb_show("", "/deviceselection?height=500&width=900", null);
    },
    removeDevice: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        $.post("/index/flash-carousel", {
            deviceIsSelected: 0
        }, function (data) {
            if (data.success) {
                Juniper.deviceSelect.clearDevice();
            }
        }, "json");
    },
    clearDevice: function () {
        Juniper.deviceSelect.terminalId = null;
        $(".deviceChange.noneSelected").removeClass("hide");
        $(".deviceChange.selected").addClass("hide");
        $(".contentFor").addClass("hide");
        Juniper.deviceSelect.sendTerminalId(function () {
            Juniper.deviceSelect.tidSet = false;
        });
    },
    getPageName: function () {
        var path = window.location.pathname;
        if (path == null || path == "/" || path == "/#") {
            return "index";
        } else {
            if (path.indexOf("content") > 0) {
                return "content";
            } else {
                if (path.indexOf("search") > 0) {
                    return "search";
                } else {
                    if (path.indexOf("mystuff") > 0) {
                        return "mystuff";
                    } else {
                        return null;
                    }
                }
            }
        }
    },
    resetSelected: function () {
        $("li", Juniper.deviceSelect.list).removeClass("selectedDevice");
        Juniper.deviceSelect.terminalId = "";
        Juniper.deviceSelect.terminalLabel = "";
        $("#terminalId").val("");
        $(".deviceFooter .btn").addClass("disabled");
    },
    testForDevice: function (e) {
        if ($(".deviceChange.selected").is(".hide")) {
            e.preventDefault();
            if (this.href) {
                Juniper.deviceSelect.selectedItemHref = this.href;
            }
            Juniper.deviceSelect.changePhone();
        }
    },
    filter: function () {
        var filter = $(this).parent().attr("class");
        if (filter == "allPhones") {
            $("li", Juniper.deviceSelect.list).show();
        } else {
            $("li", Juniper.deviceSelect.list).hide();
            $("li." + filter, Juniper.deviceSelect.list).show();
        }
    },
    registerNext: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        if (Juniper.deviceSelect.terminalId != null) {
            $("form#deviceInline").submit();
        }
    },
    init: function () {
        Juniper.deviceSelect.panel = $("#deviceOverlay");
        Juniper.deviceSelect.list = $("#deviceList");
        if ($.browser.msie && parseInt($.browser.version, 10) === 6) {
            Juniper.deviceSelect.panel.bgIframe();
        }
        $(".closer", Juniper.deviceSelect.panel).bind("click", Juniper.deviceSelect.hidePanel);
        $(".phoneCategory label input").bind("click", Juniper.deviceSelect.filter);
        $("li a", Juniper.deviceSelect.list).bind("click", Juniper.deviceSelect.selectItem);
        $("#submitDevice", Juniper.deviceSelect.panel).bind("click", Juniper.deviceSelect.processDevice);
        $("#submitDeviceRegis").bind("click", Juniper.deviceSelect.registerNext);
        $("#changePhone, .deviceChange .change, a.deviceChange").live("click", Juniper.deviceSelect.showSelector);
        $(".deviceChange .remove").live("click", Juniper.deviceSelect.removeDevice);
    }
};
$(document).ready(function () {
    Juniper.deviceSelect.init();
});