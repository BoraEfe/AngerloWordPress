<?php
/**
 * Handles the customizer additional functionality.
 */
if( !function_exists( 'newsmatic_customizer_up_panel' ) ) :
    /**
     * Register controls for upsell, notifications and addtional info.
     * 
     */
    function newsmatic_customizer_up_panel( $wp_customize ) {
        // upgrade info box
        $wp_customize->add_setting( 'social_icons_upgrade_info', array(
            'sanitize_callback' => 'sanitize_text_field'
        ));
        $wp_customize->add_control( 
            new Newsmatic_WP_Info_Box_Control( $wp_customize, 'social_icons_upgrade_info', array(
                'label'	      => esc_html__( 'More Features', 'newsmatic' ),
                'description' => esc_html__( 'Unlimited social icons items with unlimited choices', 'newsmatic' ),
                'section'     => NEWSMATIC_PREFIX . 'social_icons_section',
                'priority'  => 200,
                'settings'    => 'social_icons_upgrade_info',
                'choices' => array(
                    array(
                        'label' => esc_html__( 'View Premium', 'newsmatic' ),
                        'url'   => esc_url( '//blazethemes.com/theme/newsmatic-pro/' )
                    )
                )
            ))
        );

        // upgrade info box
        $wp_customize->add_setting( 'preloader_upgrade_info', array(
            'sanitize_callback' => 'sanitize_text_field'
        ));
        $wp_customize->add_control( 
            new Newsmatic_WP_Info_Box_Control( $wp_customize, 'preloader_upgrade_info', array(
                'label'	      => esc_html__( '20 + Preloader', 'newsmatic' ),
                'description' => esc_html__( 'Dedicated technical support.', 'newsmatic' ),
                'section'     => NEWSMATIC_PREFIX . 'preloader_section',
                'settings'    => 'preloader_upgrade_info',
                'choices' => array(
                    array(
                        'label' => esc_html__( 'View Premium', 'newsmatic' ),
                        'url'   => esc_url( '//blazethemes.com/theme/newsmatic-pro/' )
                    )
                )
            ))
        );

        // upgrade info box
        $wp_customize->add_setting( 'bottom_footer_upgrade_info', array(
            'sanitize_callback' => 'sanitize_text_field'
        ));
        $wp_customize->add_control( 
            new Newsmatic_WP_Info_Box_Control( $wp_customize, 'bottom_footer_upgrade_info', array(
                'label'	      => esc_html__( 'More Features', 'newsmatic' ),
                'description' => esc_html__( 'Copyright editor, Text color, link color and background color, gradient colors.', 'newsmatic' ),
                'section'     => NEWSMATIC_PREFIX . 'bottom_footer_section',
                'settings'    => 'bottom_footer_upgrade_info',
                'priority'  => 100,
                'tab'  => 'design',
                'choices' => array(
                    array(
                        'label' => esc_html__( 'View Premium', 'newsmatic' ),
                        'url'   => esc_url( '//blazethemes.com/theme/newsmatic-pro/' )
                    )
                )
            ))
        );

        // upgrade info box
        $wp_customize->add_setting( 'single_post_upgrade_info', array(
            'sanitize_callback' => 'sanitize_text_field'
        ));
        $wp_customize->add_control( 
            new Newsmatic_WP_Info_Box_Control( $wp_customize, 'single_post_upgrade_info', array(
                'label'	      => esc_html__( 'More Features', 'newsmatic' ),
                'description' => esc_html__( 'Showor hide post title, meta, categories, author, elements reorder, typography and content background, ', 'newsmatic' ),
                'section'     => NEWSMATIC_PREFIX . 'single_post_section',
                'settings'    => 'single_post_upgrade_info',
                'priority'  => 100,
                'choices' => array(
                    array(
                        'label' => esc_html__( 'View Premium', 'newsmatic' ),
                        'url'   => esc_url( '//blazethemes.com/theme/newsmatic-pro/' )
                    )
                )
            ))
        );

        // upgrade info box
        $wp_customize->add_setting( 'top_header_upgrade_info', array(
            'sanitize_callback' => 'sanitize_text_field'
        ));
        $wp_customize->add_control( 
            new Newsmatic_WP_Info_Box_Control( $wp_customize, 'top_header_upgrade_info', array(
                'label'	      => esc_html__( 'More Features', 'newsmatic' ),
                'description' => esc_html__( 'Date time color, menu color social icons color and hover colors.', 'newsmatic' ),
                'section'     => NEWSMATIC_PREFIX . 'top_header_section',
                'settings'    => 'top_header_upgrade_info',
                'priority'  => 100,
                'tab'   => 'design',
                'choices' => array(
                    array(
                        'label' => esc_html__( 'View Premium', 'newsmatic' ),
                        'url'   => esc_url( '//blazethemes.com/theme/newsmatic-pro/' )
                    )
                )
            ))
        );

        // upgrade info box
        $wp_customize->add_setting( 'theme_header_upgrade_info', array(
            'sanitize_callback' => 'sanitize_text_field'
        ));
        $wp_customize->add_control( 
            new Newsmatic_WP_Info_Box_Control( $wp_customize, 'theme_header_upgrade_info', array(
                'label'	      => esc_html__( 'More Features', 'newsmatic' ),
                'description' => esc_html__( '2 layouts.', 'newsmatic' ),
                'section'     => NEWSMATIC_PREFIX . 'main_header_section',
                'settings'    => 'theme_header_upgrade_info',
                'priority'  => 100,
                'choices' => array(
                    array(
                        'label' => esc_html__( 'View Premium', 'newsmatic' ),
                        'url'   => esc_url( '//blazethemes.com/theme/newsmatic-pro/' )
                    )
                )
            ))
        );

        // upgrade info box
        $wp_customize->add_setting( 'theme_header_design_upgrade_info', array(
            'sanitize_callback' => 'sanitize_text_field'
        ));
        $wp_customize->add_control( 
            new Newsmatic_WP_Info_Box_Control( $wp_customize, 'theme_header_design_upgrade_info', array(
                'label'	      => esc_html__( 'More Features', 'newsmatic' ),
                'description' => esc_html__( 'Toggle bar color and search icon color.', 'newsmatic' ),
                'section'     => NEWSMATIC_PREFIX . 'main_header_section',
                'settings'    => 'theme_header_design_upgrade_info',
                'priority'  => 100,
                'tab'  => 'design',
                'choices' => array(
                    array(
                        'label' => esc_html__( 'View Premium', 'newsmatic' ),
                        'url'   => esc_url( '//blazethemes.com/theme/newsmatic-pro/' )
                    )
                )
            ))
        );

        // upgrade info box
        $wp_customize->add_setting( 'header_menu_upgrade_info', array(
            'sanitize_callback' => 'sanitize_text_field'
        ));
        $wp_customize->add_control( 
            new Newsmatic_WP_Info_Box_Control( $wp_customize, 'header_menu_upgrade_info', array(
                'label'	      => esc_html__( 'More Features', 'newsmatic' ),
                'description' => esc_html__( 'Menu color, active menu color, hover color, sub menu color, background color, border color and typography.', 'newsmatic' ),
                'section'     => NEWSMATIC_PREFIX . 'header_menu_option_section',
                'settings'    => 'header_menu_upgrade_info',
                'priority'  => 100,
                'choices' => array(
                    array(
                        'label' => esc_html__( 'View Premium', 'newsmatic' ),
                        'url'   => esc_url( '//blazethemes.com/theme/newsmatic-pro/' )
                    )
                )
            ))
        );

        // upgrade info box
        $wp_customize->add_setting( 'footer_upgrade_info', array(
            'sanitize_callback' => 'sanitize_text_field'
        ));
        $wp_customize->add_control( 
            new Newsmatic_WP_Info_Box_Control( $wp_customize, 'footer_upgrade_info', array(
                'label'	      => esc_html__( 'More Features', 'newsmatic' ),
                'description' => esc_html__( 'Text color and background color, image, gradient colors.', 'newsmatic' ),
                'section'     => NEWSMATIC_PREFIX . 'footer_section',
                'settings'    => 'footer_upgrade_info',
                'priority'  => 100,
                'tab'  => 'design',
                'choices' => array(
                    array(
                        'label' => esc_html__( 'View Premium', 'newsmatic' ),
                        'url'   => esc_url( '//blazethemes.com/theme/newsmatic-pro/' )
                    )
                )
            ))
        );

        // upgrade info box
        $wp_customize->add_setting( 'bottom_footer_upgrade_info', array(
            'sanitize_callback' => 'sanitize_text_field'
        ));
        $wp_customize->add_control( 
            new Newsmatic_WP_Info_Box_Control( $wp_customize, 'bottom_footer_upgrade_info', array(
                'label'	      => esc_html__( 'More Features', 'newsmatic' ),
                'description' => esc_html__( 'Copyright editor, Text color, link color and background color, gradient colors.', 'newsmatic' ),
                'section'     => NEWSMATIC_PREFIX . 'bottom_footer_section',
                'settings'    => 'bottom_footer_upgrade_info',
                'priority'  => 100,
                'tab'  => 'design',
                'choices' => array(
                    array(
                        'label' => esc_html__( 'View Premium', 'newsmatic' ),
                        'url'   => esc_url( '//blazethemes.com/theme/newsmatic-pro/' )
                    )
                )
            ))
        );
    }
    add_action( 'customize_register', 'newsmatic_customizer_up_panel', 20 );
endif;