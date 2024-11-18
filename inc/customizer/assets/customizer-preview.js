/* global wp, jQuery */
/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */
( function( $ ) {
    const themeContstants = {
		prefix: 'newsmatic_'
	}
	const themeCalls = {
		newsmaticGenerateStyleTag: function( code, id ) {
			if( code ) {
				if( $( "head #" + id ).length > 0 ) {
					$( "head #" + id ).html( code )
				} else {
					$( "head" ).append( '<style id="' + id + '">' + code + '</style>' )
				}
			}
		},
		newsmaticGenerateLinkTag: function( action, id ) {
			$.ajax({
				method: "GET",
				url: newsmaticPreviewObject.ajaxUrl,
				data: ({
					action: action,
					_wpnonce: newsmaticPreviewObject._wpnonce
				}),
				success: function(response) {
					if( response ) {
						if( $( "head #" + id ).length > 0 ) {
							$( "head #" + id ).attr( "href", response )
						} else {
							$( "head" ).append( '<link rel="stylesheet" id="' + id + '" href="' + response + '"></link>' )
						}
					}
				}
			})
		},
		newsmaticGenerateTypoCss: function(selector,value) {
			var cssCode = ''
			if( value.font_family ) {
				cssCode += '.newsmatic_font_typography { ' + selector + '-family: ' + value.font_family.value + '; } '
			}
			if( value.font_weight ) {
				cssCode += '.newsmatic_font_typography { ' + selector + '-weight: ' + value.font_weight.value + '; } '
			}
			if( value.text_transform ) {
				cssCode += '.newsmatic_font_typography { ' + selector + '-texttransform: ' + value.text_transform + '; } '
			}
			if( value.text_decoration ) {
				cssCode += '.newsmatic_font_typography { ' + selector + '-textdecoration: ' + value.text_decoration + '; } '
			}
			if( value.font_size ) {
				if( value.font_size.desktop ) {
					cssCode += '.newsmatic_font_typography { ' + selector + '-size: ' + value.font_size.desktop + 'px; } '
				}
				if( value.font_size.tablet ) {
					cssCode += '.newsmatic_font_typography { ' + selector + '-size-tab: ' + value.font_size.tablet + 'px; } '
				}
				if( value.font_size.smartphone ) {
					cssCode += '.newsmatic_font_typography { ' + selector + '-size-mobile: ' + value.font_size.smartphone + 'px; } '
				}
			}
			if( value.line_height ) {
				if( value.line_height.desktop ) {
					cssCode += '.newsmatic_font_typography { ' + selector + '-lineheight: ' + value.line_height.desktop + 'px; } '
				}
				if( value.line_height.tablet ) {
					cssCode += '.newsmatic_font_typography { ' + selector + '-lineheight-tab: ' + value.line_height.tablet + 'px; } '
				}
				if( value.line_height.smartphone ) {
					cssCode += '.newsmatic_font_typography { ' + selector + '-lineheight-mobile: ' + value.line_height.smartphone + 'px; } '
				}
			}
			if( value.letter_spacing ) {
				if( value.letter_spacing.desktop ) {
					cssCode += '.newsmatic_font_typography { ' + selector + '-letterspacing: ' + value.letter_spacing.desktop + 'px; } '
				}
				if( value.letter_spacing.tablet ) {
					cssCode += '.newsmatic_font_typography { ' + selector + '-letterspacing-tab: ' + value.letter_spacing.tablet + 'px; } '
				}
				if( value.letter_spacing.smartphone ) {
					cssCode += '.newsmatic_font_typography { ' + selector + '-letterspacing-mobile: ' + value.letter_spacing.smartphone + 'px; } '
				}
			}
			return cssCode
		}
	}

	// theme color bind changes
	wp.customize( 'theme_color', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-color-style', '--theme-color-red')
		});
	});

	// preset 1 bind changes
	wp.customize( 'preset_color_1', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-color-1-style', '--newsmatic-global-preset-color-1')
		});
	});

	// preset 2 bind changes
	wp.customize( 'preset_color_2', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-color-2-style', '--newsmatic-global-preset-color-2')
		});
	});

	// preset 3 bind changes
	wp.customize( 'preset_color_3', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-color-3-style', '--newsmatic-global-preset-color-3')
		});
	});

	// preset 4 bind changes
	wp.customize( 'preset_color_4', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-color-4-style', '--newsmatic-global-preset-color-4')
		});
	});

	// preset 5 bind changes
	wp.customize( 'preset_color_5', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-color-5-style', '--newsmatic-global-preset-color-5')
		});
	});

	// preset 6 bind changes
	wp.customize( 'preset_color_6', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-color-6-style', '--newsmatic-global-preset-color-6')
		});
	});

	// preset 7 bind changes
	wp.customize( 'preset_color_7', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-color-7-style', '--newsmatic-global-preset-color-7')
		});
	});

	// preset 8 bind changes
	wp.customize( 'preset_color_8', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-color-8-style', '--newsmatic-global-preset-color-8')
		});
	});

	// preset 9 bind changes
	wp.customize( 'preset_color_9', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-color-9-style', '--newsmatic-global-preset-color-9')
		});
	});

	// preset 10 bind changes
	wp.customize( 'preset_color_10', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-color-10-style', '--newsmatic-global-preset-color-10')
		});
	});

	// preset 11 bind changes
	wp.customize( 'preset_color_11', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-color-11-style', '--newsmatic-global-preset-color-11')
		});
	});

	// preset 12 bind changes
	wp.customize( 'preset_color_12', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-color-12-style', '--newsmatic-global-preset-color-12')
		});
	});

	// preset gradient 1 bind changes
	wp.customize( 'preset_gradient_1', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-gradient-color-1-style', '--newsmatic-global-preset-gradient-color-1')
		});
	});

	// preset gradient 2 bind changes
	wp.customize( 'preset_gradient_2', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-gradient-color-2-style', '--newsmatic-global-preset-gradient-color-2')
		});
	});

	// preset gradient 3 bind changes
	wp.customize( 'preset_gradient_3', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-gradient-color-3-style', '--newsmatic-global-preset-gradient-color-3')
		});
	});

	// preset gradient 4 bind changes
	wp.customize( 'preset_gradient_4', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-gradient-color-4-style', '--newsmatic-global-preset-gradient-color-4')
		});
	});

	// preset gradient 5 bind changes
	wp.customize( 'preset_gradient_5', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-gradient-color-5-style', '--newsmatic-global-preset-gradient-color-5')
		});
	});

	// preset gradient 6 bind changes
	wp.customize( 'preset_gradient_6', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-gradient-color-6-style', '--newsmatic-global-preset-gradient-color-6')
		});
	});

	// preset gradient 7 bind changes
	wp.customize( 'preset_gradient_7', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-gradient-color-7-style', '--newsmatic-global-preset-gradient-color-7')
		});
	});

	// preset gradient 8 bind changes
	wp.customize( 'preset_gradient_8', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-gradient-color-8-style', '--newsmatic-global-preset-gradient-color-8')
		});
	});

	// preset gradient 9 bind changes
	wp.customize( 'preset_gradient_9', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-gradient-color-9-style', '--newsmatic-global-preset-gradient-color-9')
		});
	});

	// preset gradient 10 bind changes
	wp.customize( 'preset_gradient_10', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-gradient-color-10-style', '--newsmatic-global-preset-gradient-color-10')
		});
	});

	// preset gradient 11 bind changes
	wp.customize( 'preset_gradient_11', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-gradient-color-11-style', '--newsmatic-global-preset-gradient-color-11')
		});
	});

	// preset gradient 12 bind changes
	wp.customize( 'preset_gradient_12', function( value ) {
		value.bind( function( to ) {
			helperFunctions.generateStyle(to, 'theme-preset-gradient-color-12-style', '--newsmatic-global-preset-gradient-color-12')
		});
	});
	
	// site block border top
	wp.customize( 'website_block_border_top_option', function( value ) {
		value.bind( function(to) {
			if( to ) {
				$( "body" ).addClass( "newsmatic_site_block_border_top" )
			} else {
				$( "body" ).removeClass( "newsmatic_site_block_border_top" )
			}
		});
	});

    // website style block top color
	wp.customize( 'website_block_border_top_color', function( value ) {
		value.bind( function( to ) {
            var value = JSON.parse( to )
            var cssCode = 'body.newsmatic_font_typography { --theme-block-top-border-color: '+ helperFunctions.getFormatedColor( value[value.type] ) + '}'
			themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-block-border-top-color' )
		});
	});

    // website layout
	wp.customize( 'website_layout', function( value ) {
		value.bind( function( to ) {
            $('body').removeClass('site-boxed--layout site-full-width--layout').addClass( 'site-' + to )
		});
	});
    
    // post title hover effect
	wp.customize( 'post_title_hover_effects', function( value ) {
		value.bind( function( to ) {
            $('body').removeClass('newsmatic-title-none newsmatic-title-one newsmatic-title-two').addClass( 'newsmatic-title-' + to )
		});
	});

    // image hover effect
	wp.customize( 'site_image_hover_effects', function( value ) {
		value.bind( function( to ) {
            $('body').removeClass('newsmatic-image-hover--effect-none newsmatic-image-hover--effect-one newsmatic-image-hover--effect-two').addClass( 'newsmatic-image-hover--effect-' + to )
		});
	});
		
	// scroll to top visibility
	wp.customize( 'stt_responsive_option', function( value ) {
		value.bind(function( to ){
			var cssCode = ''
			if( ! to.desktop ) {
				cssCode += 'body #newsmatic-scroll-to-top.show { display: none }';
			}
			if( ! to.tablet ) {
				cssCode += '@media(max-width: 940px) { body #newsmatic-scroll-to-top.show { display : none } }'
			} else {
				cssCode += '@media(max-width: 940px) { body #newsmatic-scroll-to-top.show { display : block } }'
			}
			if( to.mobile ) {
				cssCode += '@media(max-width: 610px) { body #newsmatic-scroll-to-top.show { display : block } }'
			} else {
				cssCode += '@media(max-width: 610px) { body #newsmatic-scroll-to-top.show { display : none } }'
			}
			themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-scroll-to-top-responsive-option' )
		})
	})

	// scroll to top align
	wp.customize( 'stt_alignment', function( value ) {
		value.bind( function( to ) {
			$( "#newsmatic-scroll-to-top" ).removeClass( "align--left align--center align--right" )
			$( "#newsmatic-scroll-to-top" ).addClass( "align--" + to )
		});
	});

	// scroll to top icon text color
	wp.customize('stt_color_group', function( value ) {
		value.bind(function( to ){	
			if( to ) {
				var cssCode = ''
				var selector = '--move-to-top-color'
				if( to.color ) {
					cssCode += 'body.newsmatic_font_typography { ' + selector + ' : ' + helperFunctions.getFormatedColor( to.color ) +  ' } '
				}
				if( to.hover ) {
					cssCode += 'body.newsmatic_font_typography { ' + selector + '-hover : ' + helperFunctions.getFormatedColor( to.hover ) +  ' } '
				}
				themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-stt-icon-text-color' )
			} else {
				themeCalls.newsmaticGenerateStyleTag( '', 'newsmatic-stt-icon-text-color' )
			}
		})
	})

	// scroll to top background
	wp.customize('stt_background_color_group', function( value ) {
		value.bind(function( to ){	
			if( to ) {
				var cssCode = ''
				var selector = '--move-to-top-background-color'
				if( to.color ) {
					cssCode += 'body.newsmatic_font_typography { ' + selector + ' : ' + helperFunctions.getFormatedColor( to.color ) +  ' } '
				}
				if( to.hover ) {
					cssCode += 'body.newsmatic_font_typography { ' + selector + '-hover : ' + helperFunctions.getFormatedColor( to.hover ) +  ' } '
				}
				themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-stt-background-color' )
			} else {
				themeCalls.newsmaticGenerateStyleTag( '', 'newsmatic-stt-background-color' )
			}
		})
	})

	// site logo width
	wp.customize( 'newsmatic_site_logo_width', function( value ) {
		value.bind( function( to ) {
			var cssCode = ''
			if( to.desktop ) {
				cssCode += 'body .site-branding img.custom-logo { width: ' + to.desktop + 'px }';
			}
			if( to.tablet ) {
				cssCode += '@media(max-width: 940px) { body .site-branding img.custom-logo { width: ' + to.tablet + 'px } }';
			}
			if( to.smartphone ) {
				cssCode += '@media(max-width: 610px) { body .site-branding img.custom-logo { width: ' + to.smartphone + 'px } }';
			}
			themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-site-logo-width' )
		})
	})

	// site title typo
	wp.customize('site_title_typo', function( value ) {
		value.bind(function( to ) {
			ajaxFunctions.typoFontsEnqueue()
			var cssCode = ''
			var selector = '--site-title'
			cssCode = themeCalls.newsmaticGenerateTypoCss(selector,to)
			themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-site-title-typo' )
		})
	})

	// site tagline typo
	wp.customize('site_tagline_typo', function( value ) {
		value.bind(function( to ) {
			ajaxFunctions.typoFontsEnqueue()
			var cssCode = ''
			var selector = '--site-tagline'
			cssCode = themeCalls.newsmaticGenerateTypoCss(selector,to)
			themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-site-tagline-typo' )
		})
	})

	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.site-title' ).css( {
					clip: 'rect(1px, 1px, 1px, 1px)',
					position: 'absolute',
				} );
			} else {
				$( '.site-title' ).css( {
					clip: 'auto',
					position: 'relative',
				} );
				$( '.site-title a' ).css( {
					color: to,
				} );
			}
		} );
	});

	// blog description
	wp.customize( 'blogdescription_option', function( value ) {
		value.bind(function(to) {
			if( to ) {
				$( '.site-description' ).css( {
					clip: 'auto',
					position: 'relative',
				} );
			} else {
				$( '.site-description' ).css( {
					clip: 'rect(1px, 1px, 1px, 1px)',
					position: 'absolute',
				} );
			}
		})
	});

	// site title hover color
	wp.customize( 'site_title_hover_textcolor', function( value ) {
		value.bind( function( to ) {
			var color = helperFunctions.getFormatedColor( to )
			themeCalls.newsmaticGenerateStyleTag( 'header .site-title a:hover { color : ' + color + ' }', 'newsmatic-site-title-hover-color' )
		})
	})

	// site description color
	wp.customize( 'site_description_color', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).css( {
				color: to,
			});
		} );
	});
	
	// category colors text colors
	var parsedCats = newsmaticPreviewObject.totalCats
	if( parsedCats ) {
		parsedCats = Object.keys( parsedCats ).map(( key ) => { return parsedCats[key] })
		parsedCats.forEach(function(item) {
			wp.customize( 'category_' + item.term_id + '_color', function( value ) {
				value.bind( function(to) {
					var cssCode = ''
					if( to ) {
						cssCode += "body article:not(.newsmatic-category-no-bk) .post-categories .cat-item.cat-" + item.term_id + " a { background : " + helperFunctions.getFormatedColor( to ) + " } "
						cssCode += "body .newsmatic-category-no-bk .post-categories .cat-item.cat-" + item.term_id + " a { color : " + helperFunctions.getFormatedColor( to ) + " } "
					}
					themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-category-' + item.term_id + '-style' )
				})
			})
		})
	}

	// top header background color
	wp.customize( 'top_header_background_color_group', function( value ) {
		value.bind( function( to ) {
			var value = JSON.parse( to )
			var color = helperFunctions.getFormatedColor( value[value.type] )
			themeCalls.newsmaticGenerateStyleTag( 'body.newsmatic_main_body .site-header.layout--default .top-header { background : ' + color + ' }', 'newsmatic-top-header-background-color' )
		})
	})

	// header elements order class
	wp.customize( 'main_header_elements_order', function( value ) {
		value.bind( function(to) {
				$( ".main-header" ).removeClass( "order--buttons-logo-social order--social-logo-buttons" )
				$( ".main-header" ).addClass( "order--" + to )
		});
	});

	// main header vertical padding
	wp.customize( 'header_vertical_padding', function( value ) {
		value.bind( function( to ) {
            var cssCode = ''
            if( to.desktop ) {
				cssCode += 'body.newsmatic_font_typography { --header-padding: ' + to.desktop + 'px }';
			}
			if( to.tablet ) {
				cssCode += '@media(max-width: 940px) { body.newsmatic_font_typography { --header-padding-tablet: ' + to.tablet + 'px } }';
			}
			if( to.smartphone ) {				
				cssCode += '@media(max-width: 610px) { body.newsmatic_font_typography { --header-padding-smartphone: ' + to.smartphone + 'px } }';
			}
			themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-main-header-vertical-padding' )
		});
	});

	// main header toggle bar color
	wp.customize('header_sidebar_toggle_color', function( value ) {
		value.bind(function( to ){	
			if( to ) {
				var cssCode = ''
				var selector = '--sidebar-toggle-color'
				if( to.color ) {
					cssCode += 'body.newsmatic_font_typography { ' + selector + ' : ' + helperFunctions.getFormatedColor( to.color ) +  ' } '
				}
				if( to.hover ) {
					cssCode += 'body.newsmatic_font_typography { ' + selector + '-hover : ' + helperFunctions.getFormatedColor( to.hover ) +  ' } '
				}
				themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-main-header-toggle-bar-color' )
			} else {
				themeCalls.newsmaticGenerateStyleTag( '', 'newsmatic-main-header-toggle-bar-color' )
			}
		})
	})

	// main header search icon color
	wp.customize('header_search_icon_color', function( value ) {
		value.bind(function( to ){	
			if( to ) {
				var cssCode = ''
				var selector = '--search-color'
				if( to.color ) {
					cssCode += 'body.newsmatic_font_typography { ' + selector + ' : ' + helperFunctions.getFormatedColor( to.color ) +  ' } '
				}
				if( to.hover ) {
					cssCode += 'body.newsmatic_font_typography { ' + selector + '-hover : ' + helperFunctions.getFormatedColor( to.hover ) +  ' } '
				}
				themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-main-header-search-icon-color' )
			} else {
				themeCalls.newsmaticGenerateStyleTag( '', 'newsmatic-main-header-search-icon-color' )
			}
		})
	})

	// main header background
	wp.customize( 'header_background_color_group', function( value ) {
		value.bind( function(to) {
			var value = JSON.parse( to )
			if( value ) {
				var cssCode = ''
				cssCode += 'body.newsmatic_main_body .site-header.layout--default .site-branding-section {' + newsmatic_get_background_style( value ) + '}'
				themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-main-header-background' )
			} else {
				themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-main-header-background' )
			}
		});
	})

	// header menu hover effect 
	wp.customize( 'header_menu_hover_effect', function( value ) {
		value.bind( function(to) {
			$( "#site-navigation" ).removeClass( "hover-effect--one hover-effect--none" )
			$( "#site-navigation" ).addClass( "hover-effect--" + to )
		});
	});

	// menu options text color
	wp.customize('header_menu_color', function( value ) {
		value.bind(function( to ){	
			if( to ) {
				var cssCode = ''
				var selector = '--menu-color'
				if( to.color ) {
					cssCode += 'body.newsmatic_font_typography { ' + selector + ' : ' + helperFunctions.getFormatedColor( to.color ) +  ' } '
				}
				if( to.hover ) {
					cssCode += 'body.newsmatic_font_typography { ' + selector + '-hover : ' + helperFunctions.getFormatedColor( to.hover ) +  ' } '
				}
				themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-menu-options-text-color' )
			} else {
				themeCalls.newsmaticGenerateStyleTag( '', 'newsmatic-menu-options-text-color' )
			}
		})
	})

	// menu options background color
	wp.customize( 'header_menu_background_color_group', function( value ) {
		value.bind( function( to ) {
			var value = JSON.parse( to )
			var color = helperFunctions.getFormatedColor( value[value.type] )
			themeCalls.newsmaticGenerateStyleTag( 'body.newsmatic_main_body .site-header.layout--default .menu-section { background : ' + color + ' }', 'newsmatic-menu-background-color' )
		})
	})

	// menu options border top
	wp.customize( 'header_menu_top_border', function( value ) {
		value.bind( function( to ) {
			var cssCode = 'body .site-header.layout--default .menu-section .row { border-top: '+ to.width +'px '+ to.type +' '+ helperFunctions.getFormatedColor( to.color ) +'}'
			themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-header-menu-border-top' )
		});
	});
	
	// custom button icon text color
	wp.customize('header_custom_button_color_group', function( value ) {
		value.bind(function( to ){	
			if( to ) {
				var cssCode = ''
				var selector = '--custom-btn-color'
				if( to.color ) {
					cssCode += 'body.newsmatic_font_typography { ' + selector + ' : ' + helperFunctions.getFormatedColor( to.color ) +  ' } '
				}
				if( to.hover ) {
					cssCode += 'body.newsmatic_font_typography { ' + selector + '-hover : ' + helperFunctions.getFormatedColor( to.hover ) +  ' } '
				}
				themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-custom-button-icon-text-color' )
			} else {
				themeCalls.newsmaticGenerateStyleTag( '', 'newsmatic-custom-button-icon-text-color' )
			}
		})
	})

	// custom buttom background
	wp.customize( 'header_custom_button_background_color_group', function( value ) {
		value.bind( function( to ) {
			var value = JSON.parse( to )
			var color = helperFunctions.getFormatedColor( value[value.type] )
			var cssCode = 'body.newsmatic_font_typography .header-custom-button { background: '+ color +' }'
			themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-custom-button-background' )
		})
	})

	// custom buttom background hover
	wp.customize( 'header_custom_button_background_hover_color_group', function( value ) {
		value.bind( function( to ) {
			var value = JSON.parse( to )
			var color = helperFunctions.getFormatedColor( value[value.type] )
			var cssCode = 'body.newsmatic_font_typography .header-custom-button:hover { background: '+ color +' }'
			themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-custom-button-background-hover' )
		})
	})

	// main banner slider image border radius
	wp.customize( 'banner_slider_image_border_radius', function( value ) {
		value.bind( function( to ) {
            var cssCode = ''
            var selector = '#main-banner-section .main-banner-slider figure.post-thumb, #main-banner-section .main-banner-slider .post-element'
            if( to.desktop ) {
				cssCode += selector +' { border-radius: ' + to.desktop + 'px }';
			}
			if( to.tablet ) {
				cssCode += '@media(max-width: 940px) { '+ selector +' { border-radius: ' + to.tablet + 'px } }';
			}
			if( to.smartphone ) {				
				cssCode += '@media(max-width: 610px) { '+ selector +' { border-radius: ' + to.smartphone + 'px } }';
			}
			themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-main-bannr-slider-border-radius' )
		});
	});

	// main banner block image border radius
	wp.customize( 'banner_slider_block_posts_image_border_radius', function( value ) {
		value.bind( function( to ) {
            var cssCode = ''
            var selector = '#main-banner-section .main-banner-trailing-posts figure.post-thumb, #main-banner-section .banner-trailing-posts figure.post-thumb, #main-banner-section .banner-trailing-posts .post-element'
            if( to.desktop ) {
				cssCode += selector +' { border-radius: ' + to.desktop + 'px }';
			}
			if( to.tablet ) {
				cssCode += '@media(max-width: 940px) { '+ selector +' { border-radius: ' + to.tablet + 'px } }';
			}
			if( to.smartphone ) {				
				cssCode += '@media(max-width: 610px) { '+ selector +' { border-radius: ' + to.smartphone + 'px } }';
			}
			themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-main-bannr-block-border-radius' )
		});
	});

	// main banner slider image border radius
	wp.customize( 'main_banner_five_trailing_posts_layout', function( value ) {
		value.bind( function( to ) {
			console.log( to )
			$('body #main-banner-section.banner-layout--five .main-banner-trailing-posts').removeClass( 'layout--row layout--column' ).addClass( 'layout--' + to )
		});
	});
	
	// archive page layout
	wp.customize( 'archive_page_layout', function( value ) {
		value.bind( function(to) {
			$('body').removeClass( 'post-layout--one post-layout--two post-layout--three post-layout--four post-layout--five' ).addClass( 'post-layout--' + to )
		});
	})
	
	// archive image ratio
	wp.customize( 'archive_page_image_ratio', function( value ) {
		value.bind( function( to ) {
			// console.log( (to.desktop * 100%) )
            var cssCode = ''
            var selector = 'main.site-main .primary-content article figure.post-thumb-wrap'
            if( to.desktop ) {
				cssCode += selector +' { padding-bottom: calc( '+ to.desktop +'* 100% ) }';
			}
			if( to.tablet ) {
				cssCode += '@media(max-width: 940px) { '+ selector +' { padding-bottom: calc(' + to.tablet + '* 100%) } }';
			}
			if( to.smartphone ) {				
				cssCode += '@media(max-width: 610px) { '+ selector +' { padding-bottom: calc(' + to.smartphone + '* 100%) } }';
			}
			themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-archive-page-image-ratio' )
		});
	});

	// archive image radius
	wp.customize( 'archive_page_image_border_radius', function( value ) {
		value.bind( function( to ) {
            var cssCode = ''
            var selector = 'main.site-main .primary-content article figure.post-thumb-wrap img'
            if( to.desktop ) {
				cssCode += selector +' { border-radius: ' + to.desktop + 'px }';
			}
			if( to.tablet ) {
				cssCode += '@media(max-width: 940px) { '+ selector +' { border-radius: ' + to.tablet + 'px } }';
			}
			if( to.smartphone ) {				
				cssCode += '@media(max-width: 610px) { '+ selector +' { border-radius: ' + to.smartphone + 'px } }';
			}
			themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-archive-page-image-radius' )
		});
	});

	// single post related articles title option
	wp.customize( 'single_post_related_posts_title', function( value ) {
		value.bind( function(to) {
			if( $( ".single-related-posts-section-wrap" ).find('.newsmatic-block-title span').length > 0 ) {
				$( ".single-related-posts-section-wrap" ).find('.newsmatic-block-title span').text( to )
			} else {
				$( ".single-related-posts-section-wrap .single-related-posts-section" ).prepend('<h2 class="newsmatic-block-title"><span>'+ to +'</span></h2>')
			}
		});
	});

	// theme footer border top
	wp.customize( 'footer_top_border', function( value ) {
		value.bind( function( to ) {
			var cssCode = 'body .site-footer.dark_bk{ border-top: '+ to.width +'px '+ to.type +' '+ helperFunctions.getFormatedColor( to.color ) +'}'
			themeCalls.newsmaticGenerateStyleTag( cssCode, 'newsmatic-theme-footer-border-top' )
		});
	});

	// bottom footer copyright gext
	wp.customize( 'bottom_footer_site_info', function( value ) {
		value.bind( function(to) {
			if( $('body footer .bottom-inner-wrapper .site-info').length > 0 ) {
				$('body footer .bottom-inner-wrapper .site-info').html( to )
			} else {
				$('body footer .bottom-inner-wrapper').append('<div class="site-info">'+ to +'</div>')
			}
		});
	})

	const ajaxFunctions = {
		typoFontsEnqueue: function() {
			var action = themeContstants.prefix + "typography_fonts_url",id ="newsmatic-customizer-typo-fonts-css"
			themeCalls.newsmaticGenerateLinkTag( action, id )
		}
	}

	// returns css property and value of background
	function newsmatic_get_background_style( control ) {
		if( control ) {
			var cssCode = '', mediaUrl = '', repeat = '', position = '', attachment = '', size = ''
			switch( control.type ) {
				case 'image' : 
						if( 'media_id' in control.image ) mediaUrl = 'background-image: url(' + control.image.media_url + ');'
						if( 'repeat' in control ) repeat = " background-repeat: "+ control.repeat + ';'
						if( 'position' in control ) position = " background-position: "+ control.position + ';'
						if( 'attachment' in control ) attachment = " background-attachment: "+ control.attachment + ';'
						if( 'size' in control ) size = " background-size: "+ control.size + ';'
						return cssCode.concat( mediaUrl, repeat, position, attachment, size )
					break;
				default: 
				if( 'type' in control ) return "background: " + helperFunctions.getFormatedColor( control[control.type] )
	   		}
		}
	}

    // constants
	const helperFunctions = {
		generateStyle: function(color, id, variable) {
			if(color) {
				if( id == 'theme-color-style' ) {
					var styleText = 'body.newsmatic_main_body, body.newsmatic_dark_mode { ' + variable + ': ' + helperFunctions.getFormatedColor(color) + '}';
				} else {
					var styleText = 'body.newsmatic_main_body { ' + variable + ': ' + helperFunctions.getFormatedColor(color) + '}';
				}
				if( $( "head #" + id ).length > 0 ) {
					$( "head #" + id).text( styleText )
				} else {
					$( "head" ).append( '<style id="' + id + '">' + styleText + '</style>' )
				}
			}
		},
		getFormatedColor: function(color) {
			if( color == null ) return
			if( color.includes('preset') ) {
				return 'var(' + color + ')'
			} else {
				return color
			}
		}
	}
} ( jQuery ) )