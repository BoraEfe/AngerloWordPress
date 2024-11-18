/**
 * Hjandles widgets scripts
 * 
 * @package Newsmatic
 * @since 1.0.0
 */
jQuery(document).ready( function($) {
    function newsmatic_widgets_handler() {
        // multicheckbox field
        $( ".newsmatic-multicheckbox-field" ).on( "click, change", ".multicheckbox-content input", function() {
            var _this = $(this), parent = _this.parents( ".newsmatic-multicheckbox-field" ), currentVal, currentFieldVal = parent.find( ".widefat" ).val();
            currentFieldVal = JSON.parse( currentFieldVal )
            currentVal = _this.val();
            if( _this.is(":checked") ) {
                if( currentFieldVal != 'null' ) {
                    currentFieldVal.push(currentVal)
                }
            } else {
                if( currentFieldVal != 'null' ) {
                    currentFieldVal.splice( $.inArray( currentVal, currentFieldVal ), 1 );
                }
            }
            parent.find( ".widefat" ).val(JSON.stringify(currentFieldVal))
        })

        // checkbox field
        $( ".newsmatic-checkbox-field" ).on( "click, change", "input", function() {
            var _this = $(this)
            if( _this.is(":checked") ) {
                _this.val( "1" )
            } else {
                _this.val( "0" )
            }
        })

        // responsive number field 
        $( ".newsmatic-responsive-number-field" ).on( "change", ".responsive-fields-wrapper .single-field", function() {
            var _thisField = $(this), fields = _thisField.parent().find(".single-field"), elmToStoreValue = _thisField.parents(".newsmatic-responsive-number-field").find(".widefat")
            var fieldsValues = {}
            fields.each(function() {
                fieldsValues[$(this).data("device")] = $(this).val()
            })
            elmToStoreValue.val(JSON.stringify(fieldsValues))
        })

        $( ".newsmatic-responsive-number-field" ).on( "click", ".responsive-devices span", function() {
            var _thisField = $(this), fieldsWrapper = _thisField.parents(".newsmatic-responsive-number-field").find(".responsive-fields-wrapper")
            var currentDevice = _thisField.data("device")
            _thisField.removeClass("isActive").addClass("isActive").siblings().removeClass("isActive")
            fieldsWrapper.find( "." + currentDevice + "-field").show().siblings().hide()
            _thisField.parents(".newsmatic-responsive-number-field").siblings(".newsmatic-responsive-number-field").find( '.responsive-devices span[data-device="' + currentDevice + '"]' ).removeClass("isActive").addClass("isActive").siblings().removeClass("isActive")  // trigger another field responsive control
            _thisField.parents(".newsmatic-responsive-number-field").siblings(".newsmatic-responsive-number-field").find( '.responsive-fields-wrapper input[data-device="' + currentDevice + '"]' ).show().siblings().hide()  // trigger another field responsive control
        })
        
        // upload field
        $( ".newsmatic-upload-field" ).on( "click", ".upload-trigger", function(event) {
            event.preventDefault();
            if ( frame ) {
                frame.open();
                return;
            }
            var _this = $(this), frame = wp.media({
                title: 'Select or Upload Author Image',
                button: {
                    text: 'Add Author Image'
                },
                multiple: false
            });
            frame.open();
            frame.on( 'select', function() {
                var attachment = frame.state().get('selection').first().toJSON();
                _this.toggleClass( "selected not-selected" );
                _this.next().toggleClass( "selected not-selected" );
                _this.next().find("img").attr( "src", attachment.url ).toggleClass( "nothasImage" );
                _this.siblings(".widefat").val( attachment.url ).trigger("change");
            })
        })
        // remove image
        $( ".newsmatic-upload-field" ).on( "click", ".upload-buttons .remove-image", function(event) {
            event.preventDefault();
            var _this = $(this);
            _this.prev().attr( "src", "" ).toggleClass( "nothasImage" );
            _this.parent().toggleClass( "selected not-selected" ).prev().toggleClass( "selected not-selected" );
            _this.parent().next().val( "" ).trigger("change");
        })

        // icon text handler
        var iconTextContainer = $( ".newsmatic-icon-text-field" )
        iconTextContainer.each(function() {
            var _this = $(this), iconSelector = _this.find( ".icon-selector-wrap" ), iconField = _this.find( ".icon-field" ), textField = _this.find( ".text-field input" )
            iconSelector.on( "click", "i", function() {
                var newIcon = $(this).attr( "class" )
                iconField.data( "value", newIcon )
                iconField.find( ".icon-selector i" ).removeClass().addClass(newIcon)
                setIconTextFieldValue(_this,iconField,textField)
            })
            textField.on( "change", function() {
                setIconTextFieldValue(_this,iconField,textField)
            })
            iconField.on( "click", function() {
                var innerThis = $(this)
                innerThis.siblings(".icon-selector-wrap" ).slideDown()
            })
        })

        function setIconTextFieldValue(el,iconEl,txtEl) {
            el.find( 'input.widefat[type="hidden"]' ).val(JSON.stringify( {icon: iconEl.data( "value" ), title: txtEl.val()} )).trigger("change")
        }
    }
    newsmatic_widgets_handler();
    
    // run on widgets added and updated
    $( document ).on( 'load widget-added widget-updated', function() {
        newsmatic_widgets_handler();
    });
})