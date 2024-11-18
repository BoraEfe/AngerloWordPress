/**
 * Theme Info
 * 
 * @package Newsmatic
 * @since 1.0.0
 */

/**
 * Plugin install and activate
 * 
 */
jQuery(document).ready(function($) {
    var ajaxUrl = newsmaticThemeInfoObject.ajaxUrl, _wpnonce = newsmaticThemeInfoObject._wpnonce
    
    /**
     * On click
     * 
     */
    $(document).on( "click", ".newsmatic-importer-action-trigger", function() {
        var _this = $(this), param;
        plugin_action = _this.data( "action" );
        plugin_process_message = _this.data( "process" );
        $.ajax({
            url: ajaxUrl,
            type: 'post',
            data: {
                "action": "newsmatic_importer_plugin_action",
                "_wpnonce": _wpnonce,
                "plugin_action": plugin_action
            },
            beforeSend: function () {
                if ( plugin_process_message ) {
                    _this.hide().html('').fadeIn().html(plugin_process_message);
                }
            },
            success: function(res) {
                var info = JSON.parse(res);
                if( info.message ) {
                    _this.hide().html('').fadeIn().html(info.message);   
                }
            },
            complete: function() {
                location.reload();
            }
        })
    })

    // filter demos tab
    $(".blaze-demo-importer-tab-filter").on( "click", ".blaze-demo-importer-tab", function() {
        var _this = $(this)
        _this.siblings().removeClass("blaze-demo-importer-active")
        _this.addClass("blaze-demo-importer-active")
        var currentTab = _this.data("filter")
        if( currentTab == "all" ) {
            $(".blaze-demo-importer-demo-box-wrap").find( ".blaze-demo-importer-demo-box" ).show()
        } else {
            $(".blaze-demo-importer-demo-box-wrap").find( ".blaze-demo-importer-demo-box." + currentTab ).siblings().hide()
            $(".blaze-demo-importer-demo-box-wrap").find( ".blaze-demo-importer-demo-box." + currentTab ).show()
        }
    })
})