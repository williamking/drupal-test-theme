<?php
?>

<div class="<?php print $classes; ?> clearfix" <?php print $attributes; ?>>

    <div class="comment-text">
    	<?php if ($new): ?>
    	    <span class="new"><?php print $new; ?></span>
        <?php endif; ?>

        <?php print render($title_prefix); ?>
        <h3<?php print $title_attributes; ?>><?php print $title; ?></h3>
        <?php print render($title_suffix); ?>

        <div class="content"<?php print $content_attributes; ?>>
        	<?php print render($content); ?>
        	<?php if ($signature): ?>
        	    <div class="comment-signature">
        	    	<?php print $signature; ?>
        	    <div>
            <?php endif; ?>
        </div>

    </div>

    <div class="comment-attr">
    	<?php print $picture; ?>

    	<div id="comment-info">
    		<p class="comment-author">
    			<?php print $author ?> commented on <span class="comment-time"><?php print $created ?>  <span class="comment-link"><?php print $permalink ?></span></span>
    	    </p>
    	</div>
    </div>

</div>