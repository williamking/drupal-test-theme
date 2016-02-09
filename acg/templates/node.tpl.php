<?php
?>

<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
    <?php print render($title_prefix); ?>
    <?php if ($title): ?>
         <h2 <?php print $title_attributes ?>>
         	<a href="<?php print $node_url; ?>"><?php print $title; ?></a>
         </h2>
    <?php endif; ?>
    <?php print render($title_suffix); ?>

    <div class="user-info">
        <?php print $user_picture; ?>
        <?php print $submitted; ?>
    </div>

    <div class="content clearfix">
        <?php print render($content) ?>
    </div>

    <?php print render($content['comments']); ?>
</div>