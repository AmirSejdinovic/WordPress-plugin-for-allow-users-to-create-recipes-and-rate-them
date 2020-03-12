<?php
//Creating function which we called in index.php
function r_activate_plugin(){
  //Checking the version of WP and allow the activation or disable the activation if the version is bllow
  //Version_compare is the php function which allow to compare verison
  if(version_compare(get_bloginfo('version'), '5.0', '<')){
     wp_die(__('You must update WordPress to use this plugin','recipe'));
  }
}