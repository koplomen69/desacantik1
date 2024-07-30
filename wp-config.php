<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'fY4><+[-N4H%iB$!eE_| Psyzm{g<4P7]>Yg2b5Cw#kRp.5>f1]ak?fW~3bu^P90' );
define( 'SECURE_AUTH_KEY',  '4a^?XB10Vv{y%K(4.x&z(#S6B|=7F(s ~jx&=V86W7|gjlO^C@ H@:MhNv9kQm2(' );
define( 'LOGGED_IN_KEY',    '9 BX7 !WK1.Q*Vb1nHG8I1%;:}`ENVz+{byHQ:?ZNB!(,#L*^pl./1z&F9SQ9nAz' );
define( 'NONCE_KEY',        '.T,v45+}.G}N<=IqB*t|OlIysKUiaQ/k8R{YBdb!(#h]Vn+KJ~SN1}eWk!>9+ky!' );
define( 'AUTH_SALT',        'No9_aBG%K%UHN(Z:F!dK.hKN21#RD$gUd?0J#VQ/eHSD1#YTa,QN.HUkliiDU?O1' );
define( 'SECURE_AUTH_SALT', 'H-tLj1ve+ck 59vUa,XB`9!_|{ZrA(1,??&&alQeed`3+tMOslS;YRi4Th>Y%Ng2' );
define( 'LOGGED_IN_SALT',   'zT:5PefrGK>){tEimN8nQ]qv!`&5@JG(6y+]-{?oj2#=~7mRm$2FK+gPN|GB<HVZ' );
define( 'NONCE_SALT',       'Rz>,YWS$$pvtBuJm_[}VEzZC:+8QUhIPhSkzCKmZ7NLxb*:F93gRM^i2H, _umsr' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
