/**
 * Theme Info
 * 
 * @package Newsmatic
 * @since 1.2.0
 */
 jQuery(document).ready(function($) {
    var ajaxUrl = newsmaticThemeInfoObject.ajaxUrl, _wpnonce = newsmaticThemeInfoObject._wpnonce, container = $( ".newsmatic-admin-notice" )

    // dismiss admin welcome notice
    var dismissWelcomeNotice = $( ".newsmatic-welcome-notice .notice-dismiss-button" )
    if( dismissWelcomeNotice.length > 0 ) {
        dismissWelcomeNotice.on( "click", function(e) {
            e.preventDefault();
            _this = $(this)
            $.ajax({
                url: ajaxUrl,
                type: 'post',
                data: {
                    "action": "newsmatic_dismiss_welcome_notice",
                    "_wpnonce": _wpnonce
                },
                beforeSend: function() {
                    _this.text(newsmaticThemeInfoObject.dismissingText)
                },
                success: function(res) {
                    var notice = JSON.parse(res);
                    if( notice.status ) {
                        dismissWelcomeNotice.parents(".newsmatic-welcome-notice").fadeOut();
                    }
                }
            })
        })
    }

    // redirect notice button
    if( container.length ) {
        container.on( "click", ".notice-actions .button", function(e) {
            e.preventDefault();
            var _this = $(this), redirect = _this.data("redirect")
            $.ajax({
                url: ajaxUrl,
                type: 'post',
                data: {
                    "action": "newsmatic_set_ajax_transient",
                    "_wpnonce": _wpnonce
                },
                success: function(res) {
                    var notice = JSON.parse(res);
                    if( notice.status ) {
                        container.fadeOut();
                    }
                },
                complete: function() {
                    if( redirect ) {
                        window.open( redirect, "_blank" )
                    }
                }
            })
        })
    }
 })