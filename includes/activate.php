<?php
//Creating function which we called in index.php
function r_activate_plugin(){
  //Checking the version of WP and allow the activation or disable the activation if the version is bllow
  //Version_compare is the php function which allow to compare verison
  if(version_compare(get_bloginfo('version'), '5.0', '<')){
     wp_die(__('You must update WordPress to use this plugin','recipe'));
  }
  //This default WP global variable has the data and methods for interacting with database
  global $wpdb;
  //Query for creating the table inside the WP database 
  $createSQL = "CREATE TABLE `". $wpdb->prefix ."recipe_ratings` (
    `ID` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `recipe_id` BIGINT(20) UNSIGNED NOT NULL,
    `rating` FLOAT(3,2) UNSIGNED NOT NULL,
    `user_ip` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`ID`)
  )
  COLLATE='latin1_swedish_ci'
  ENGINE=MyISAM;";

  //Must include the upgrade.php before calling function dbDelta which will execute sql query
   require(ABSPATH . "/wp-admin/includes/upgrade.php");
  //Calling the dbDelta function and passing the variable which helds the sql query for creating database
   dbDelta($createSQL);

}