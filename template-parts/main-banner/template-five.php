<?php
/**
 * Main Banner template five
 * 
 * @package Newsmatic
 * @since 1.0.0
 */
use Newsmatic\CustomizerDefault as ND;

$slider_args = $args['slider_args'];
?>
<div class="main-banner-wrap">
    <div class="main-banner-slider">
        <?php
            $slider_args = apply_filters( 'newsmatic_query_args_filter', $slider_args );
            $slider_query = new WP_Query( $slider_args );
            if( $slider_query -> have_posts() ) :
                while( $slider_query -> have_posts() ) : $slider_query -> the_post();
                ?>
                    <article class="slide-item <?php if(!has_post_thumbnail()) { echo esc_attr('no-feat-img'); } ?>">
                        <figure class="post-thumb">
                            <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
                                <?php 
                                    if( has_post_thumbnail()) { 
                                        the_post_thumbnail( ND\newsmatic_get_customizer_option( 'banner_slider_image_size' ), array(
                                            'title' => the_title_attribute(array(
                                                'echo'  => false
                                            ))
                                        ));
                                    }
                                ?>
                            </a>
                        </figure>
                        <div class="post-element">
                            <div class="post-meta">
                                <?php newsmatic_get_post_categories( get_the_ID(), 2 ); ?>
                                <?php newsmatic_posted_on(); ?>
                            </div>
                            <h2 class="post-title"><a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
                            <div class="post-excerpt"><?php the_excerpt(); ?></div>
                            <?php
                                /**
                                 * hook - newsmatic_main_banner_post_append_hook
                                 * 
                                 */
                                do_action( 'newsmatic_main_banner_post_append_hook', get_the_ID() );
                            ?>
                        </div>
                    </article>
                <?php
                endwhile;
                wp_reset_postdata();
            endif;
        ?>
    </div>
</div>

<div class="main-banner-trailing-posts <?php echo esc_attr( 'layout--' . ND\newsmatic_get_customizer_option( 'main_banner_five_trailing_posts_layout' ) ); ?>">
    <div class="trailing-posts-wrap">
        <?php
            $main_banner_five_trailing_posts_order_by = ND\newsmatic_get_customizer_option( 'main_banner_five_trailing_posts_order_by' );
            $listPostsOrderArray = explode( '-', $main_banner_five_trailing_posts_order_by );
            $main_banner_five_trailing_post_filter = ND\newsmatic_get_customizer_option( 'main_banner_five_trailing_post_filter' );
            $trailing_posts_args = array(
                'numberposts' => 2,
                'order' => esc_html( $listPostsOrderArray[1] ),
                'orderby' => esc_html( $listPostsOrderArray[0] ),
            );
            if( $main_banner_five_trailing_post_filter == 'category' ) {
                $main_banner_five_trailing_posts_categories = json_decode( ND\newsmatic_get_customizer_option( 'main_banner_five_trailing_posts_categories' ) );
                if( $main_banner_five_trailing_posts_categories ) $trailing_posts_args['category_name'] = newsmatic_get_categories_for_args($main_banner_five_trailing_posts_categories);
            } else if( $main_banner_five_trailing_post_filter == 'title' ) {
                $main_banner_five_trailing_posts = json_decode( ND\newsmatic_get_customizer_option( 'main_banner_five_trailing_posts' ) );
                if( $main_banner_five_trailing_posts ) $trailing_posts_args['post_name__in'] = newsmatic_get_post_slugs_for_args($main_banner_five_trailing_posts);

            }
            $trailing_posts_args = apply_filters( 'newsmatic_query_args_filter', $trailing_posts_args );
            $trailing_posts = get_posts( $trailing_posts_args );
            if( $trailing_posts ) :
                foreach( $trailing_posts as $trailing_post_key => $trailing_post ) :
                    $trailing_post_id  = $trailing_post->ID;
                ?>
                        <article class="post-item <?php if(!has_post_thumbnail($trailing_post_id)){ echo esc_attr(' no-feat-img');} ?>">
                            <figure class="post-thumb">
                                <?php if( has_post_thumbnail($trailing_post_id) ): ?> 
                                    <a href="<?php echo esc_url(get_the_permalink($trailing_post_id)); ?>">
                                        <img src="<?php echo esc_url( get_the_post_thumbnail_url($trailing_post_id, ND\newsmatic_get_customizer_option( 'main_banner_five_trailing_posts_image_size' ) ) ); ?>" alt="<?php the_title_attribute([ 'post' => $trailing_post_id ]); ?>"/>
                                    </a>
                                <?php endif; ?>
                                <div class="post-element-wrap">
                                    <div class="post-element">
                                        <?php newsmatic_get_post_categories( $trailing_post_id, 2 ); ?>
                                        <h2 class="post-title"><a href="<?php the_permalink($trailing_post_id); ?>"><?php echo wp_kses_post( get_the_title($trailing_post_id) ); ?></a></h2>
                                    </div>
                                    <div class="post-meta">
                                        <?php newsmatic_posted_by(); ?>
                                        <?php newsmatic_posted_on(); ?>
                                    </div>
                                </div>
                            </figure>
                        </article>
                <?php
                endforeach;
            endif;
        ?>
    </div>
</div>