<? php
?>
<div id="page-wrapper">
	<div id="page">
		<div id="header">
			<?php if ($logo): ?>
			    <div id="logo">
			    	<a href="<?php print $front_page ?>" id="logo-link">
                    	<img src="<?php print $logo ?>" alt="<?php print t('Home') ?>" />
			    	</a>
			    </div>
			<?php endif; ?>

<!--             <div class="carousel" id="carousel">
                <ul class="carousel-list">
                     <li class="pic-item"><img src="sites/all/themes/acg/images/1.jpg"></img></li>
                     <li class="pic-item"><img src="sites/all/themes/acg/images/2.jpg"></img></li>
                     <li class="pic-item"><img src="sites/all/themes/acg/images/3.jpg"></img></li>
                     <li class="pic-item"><img src="sites/all/themes/acg/images/4.jpg"></img></li>
                     <li class="pic-item"><img src="sites/all/themes/acg/images/5.jpg"></img></li>
                </ul>
            </div> -->
            
            <div class="carousel">
                <img src="sites/all/themes/acg/images/4.jpg"></img>
            </div>
			<?php if ($site_name): ?>
                <div id="site-name-wrapper">
                    <h1>Welcome to <span id="site-name"><?php print $site_name ?></span></h1>
                    <?php if($site_slogan): ?>
                        <h2 id="slogan"><?php print $site_slogan ?><h2/>
                    <?php endif; ?>
                </div>
			<?php endif; ?>

			<?php if ($site_slogan): ?>
			    <div id="site-slogan">
			    	<?php print $site_slogan ?>
			    </div>
		    <?php endif; ?>

		    <?php print render($page['header']); ?>

            <?php if ($main_menu): ?>
                <div id="main-menu">
                	<?php print theme('line_system_main_menu', array(
                        'links' => $main_menu,
                        'attributes' => array(
                            'id' => 'main-menu-links',
                            'class' => array('links')
                        ),
                        'heading' => array(
                            'text' => t('Main menu'),
                            'level' => 'h2'
                        ),
                	)); ?>
                </div>
            <?php endif; ?>

            <?php if ($secondary_menu): ?>
                <div id="secondary-menu">
                	<?php print theme('line_system_secondary_menu', array(
                        'links' => '$secondary_menu',
                        'attributes' => array(
                            'id' => 'secondary-menu-links',
                            'class' => array('links')
                        ),
                        'heading' => array(
                            'text' => t('Secondary menu'),
                            'level' => 'h2'
                        ),
                	)); ?>
                </div>
            <?php endif; ?>

		</div>

        <?php if ($messages): ?>
            <div id="messages">
                <?php print $messages ?>
            <div/>
        <?php endif; ?>

        <div id="main-wrapper">
            <div id="main">
                <?php if ($breadcrumb): ?>
                    <?php print $breadcrumb ?>
                <?php endif; ?>
                <table border="0" cellpadding="0" cellspacing="0" id="content">
                    <tr>
                        <?php if ($page['sidebar_first']): ?>
                            <td id="sidebar-first">
                                <?php print render($page['sidebar_first']); ?>
                            </td>
                        <?php endif ?>
                        <td id="main-content">
                            <h1 class="title"><?php print $title; ?></h1>
                            <?php if ($tabs): ?>
                                <div class="tabs"><?php print render($tabs); ?></div>
                            <?php endif; ?>
                            <?php print render($page['content']); ?>
                            <?php print $feed_icons ?>
                        </td>
                        <?php if ($page['sidebar_second']): ?>
                            <td id="sidebar-second">
                                <?php print render($page['sidebar_second']); ?>
                            </td>
                        <?php endif ?>
                    </tr>
                </table> 
            </div>
        </div>

        <div id="footer-wrapper">
            <div class="section">
                <?php if ($page['footer']): ?>
                    <?php print render($page['footer']); ?>
                <?php endif; ?>
            </div>
        </div>
	</div>
</div>