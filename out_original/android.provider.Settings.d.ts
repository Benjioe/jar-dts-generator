/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module android {
	export module provider {
		export class Settings {
			public constructor();
			public static canDrawOverlays(param0: android.content.Context): boolean;
			public static ACTION_ACCESSIBILITY_SETTINGS: string;
			public static ACTION_ADD_ACCOUNT: string;
			public static ACTION_AIRPLANE_MODE_SETTINGS: string;
			public static ACTION_APN_SETTINGS: string;
			public static ACTION_APPLICATION_DETAILS_SETTINGS: string;
			public static ACTION_APPLICATION_DEVELOPMENT_SETTINGS: string;
			public static ACTION_APPLICATION_SETTINGS: string;
			public static ACTION_BATTERY_SAVER_SETTINGS: string;
			public static ACTION_BLUETOOTH_SETTINGS: string;
			public static ACTION_CAPTIONING_SETTINGS: string;
			public static ACTION_CAST_SETTINGS: string;
			public static ACTION_DATA_ROAMING_SETTINGS: string;
			public static ACTION_DATE_SETTINGS: string;
			public static ACTION_DEVICE_INFO_SETTINGS: string;
			public static ACTION_DISPLAY_SETTINGS: string;
			public static ACTION_DREAM_SETTINGS: string;
			public static ACTION_HOME_SETTINGS: string;
			public static ACTION_IGNORE_BATTERY_OPTIMIZATION_SETTINGS: string;
			public static ACTION_INPUT_METHOD_SETTINGS: string;
			public static ACTION_INPUT_METHOD_SUBTYPE_SETTINGS: string;
			public static ACTION_INTERNAL_STORAGE_SETTINGS: string;
			public static ACTION_LOCALE_SETTINGS: string;
			public static ACTION_LOCATION_SOURCE_SETTINGS: string;
			public static ACTION_MANAGE_ALL_APPLICATIONS_SETTINGS: string;
			public static ACTION_MANAGE_APPLICATIONS_SETTINGS: string;
			public static ACTION_MANAGE_OVERLAY_PERMISSION: string;
			public static ACTION_MANAGE_WRITE_SETTINGS: string;
			public static ACTION_MEMORY_CARD_SETTINGS: string;
			public static ACTION_NETWORK_OPERATOR_SETTINGS: string;
			public static ACTION_NFCSHARING_SETTINGS: string;
			public static ACTION_NFC_PAYMENT_SETTINGS: string;
			public static ACTION_NFC_SETTINGS: string;
			public static ACTION_NOTIFICATION_LISTENER_SETTINGS: string;
			public static ACTION_NOTIFICATION_POLICY_ACCESS_SETTINGS: string;
			public static ACTION_PRINT_SETTINGS: string;
			public static ACTION_PRIVACY_SETTINGS: string;
			public static ACTION_QUICK_LAUNCH_SETTINGS: string;
			public static ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS: string;
			public static ACTION_SEARCH_SETTINGS: string;
			public static ACTION_SECURITY_SETTINGS: string;
			public static ACTION_SETTINGS: string;
			public static ACTION_SHOW_REGULATORY_INFO: string;
			public static ACTION_SOUND_SETTINGS: string;
			public static ACTION_SYNC_SETTINGS: string;
			public static ACTION_USAGE_ACCESS_SETTINGS: string;
			public static ACTION_USER_DICTIONARY_SETTINGS: string;
			public static ACTION_VOICE_CONTROL_AIRPLANE_MODE: string;
			public static ACTION_VOICE_CONTROL_BATTERY_SAVER_MODE: string;
			public static ACTION_VOICE_CONTROL_DO_NOT_DISTURB_MODE: string;
			public static ACTION_VOICE_INPUT_SETTINGS: string;
			public static ACTION_WIFI_IP_SETTINGS: string;
			public static ACTION_WIFI_SETTINGS: string;
			public static ACTION_WIRELESS_SETTINGS: string;
			public static AUTHORITY: string;
			public static EXTRA_ACCOUNT_TYPES: string;
			public static EXTRA_AIRPLANE_MODE_ENABLED: string;
			public static EXTRA_AUTHORITIES: string;
			public static EXTRA_BATTERY_SAVER_MODE_ENABLED: string;
			public static EXTRA_DO_NOT_DISTURB_MODE_ENABLED: string;
			public static EXTRA_DO_NOT_DISTURB_MODE_MINUTES: string;
			public static EXTRA_INPUT_METHOD_ID: string;
			public static INTENT_CATEGORY_USAGE_ACCESS_CONFIG: string;
			public static METADATA_USAGE_ACCESS_REASON: string;
		}
		export module Settings {
			export class Global {
				public constructor();
				public static getString(param0: android.content.ContentResolver, param1: string): string;
				public static putString(param0: android.content.ContentResolver, param1: android.net.Uri, param2: string, param3: string): boolean;
				public static putString(param0: android.content.ContentResolver, param1: string, param2: string): boolean;
				public static getUriFor(param0: android.net.Uri, param1: string): android.net.Uri;
				public static getUriFor(param0: string): android.net.Uri;
				public static getInt(param0: android.content.ContentResolver, param1: string, param2: number): number;
				public static getInt(param0: android.content.ContentResolver, param1: string): number;
				public static putInt(param0: android.content.ContentResolver, param1: string, param2: number): boolean;
				public static getLong(param0: android.content.ContentResolver, param1: string, param2: number): number;
				public static getLong(param0: android.content.ContentResolver, param1: string): number;
				public static putLong(param0: android.content.ContentResolver, param1: string, param2: number): boolean;
				public static getFloat(param0: android.content.ContentResolver, param1: string, param2: number): number;
				public static getFloat(param0: android.content.ContentResolver, param1: string): number;
				public static putFloat(param0: android.content.ContentResolver, param1: string, param2: number): boolean;
				public static ADB_ENABLED: string;
				public static AIRPLANE_MODE_ON: string;
				public static AIRPLANE_MODE_RADIOS: string;
				public static ALWAYS_FINISH_ACTIVITIES: string;
				public static ANIMATOR_DURATION_SCALE: string;
				public static AUTO_TIME: string;
				public static AUTO_TIME_ZONE: string;
				public static BLUETOOTH_ON: string;
				public static CONTENT_URI: android.net.Uri;
				public static DATA_ROAMING: string;
				public static DEBUG_APP: string;
				public static DEVELOPMENT_SETTINGS_ENABLED: string;
				public static DEVICE_PROVISIONED: string;
				public static HTTP_PROXY: string;
				public static INSTALL_NON_MARKET_APPS: string;
				public static MODE_RINGER: string;
				public static NETWORK_PREFERENCE: string;
				public static RADIO_BLUETOOTH: string;
				public static RADIO_CELL: string;
				public static RADIO_NFC: string;
				public static RADIO_WIFI: string;
				public static SHOW_PROCESSES: string;
				public static STAY_ON_WHILE_PLUGGED_IN: string;
				public static SYS_PROP_SETTING_VERSION: string;
				public static TRANSITION_ANIMATION_SCALE: string;
				public static USB_MASS_STORAGE_ENABLED: string;
				public static USE_GOOGLE_MAIL: string;
				public static WAIT_FOR_DEBUGGER: string;
				public static WIFI_DEVICE_OWNER_CONFIGS_LOCKDOWN: string;
				public static WIFI_MAX_DHCP_RETRY_COUNT: string;
				public static WIFI_MOBILE_DATA_TRANSITION_WAKELOCK_TIMEOUT_MS: string;
				public static WIFI_NETWORKS_AVAILABLE_NOTIFICATION_ON: string;
				public static WIFI_NETWORKS_AVAILABLE_REPEAT_DELAY: string;
				public static WIFI_NUM_OPEN_NETWORKS_KEPT: string;
				public static WIFI_ON: string;
				public static WIFI_SLEEP_POLICY: string;
				public static WIFI_SLEEP_POLICY_DEFAULT: number;
				public static WIFI_SLEEP_POLICY_NEVER: number;
				public static WIFI_SLEEP_POLICY_NEVER_WHILE_PLUGGED: number;
				public static WIFI_WATCHDOG_ON: string;
				public static WINDOW_ANIMATION_SCALE: string;
			}
			export class NameValueTable {
				public constructor();
				public static putString(param0: android.content.ContentResolver, param1: android.net.Uri, param2: string, param3: string): boolean;
				public static getUriFor(param0: android.net.Uri, param1: string): android.net.Uri;
				public static NAME: string;
				public static VALUE: string;
			}
			export class Secure {
				public constructor();
				public static getString(param0: android.content.ContentResolver, param1: string): string;
				public static putString(param0: android.content.ContentResolver, param1: android.net.Uri, param2: string, param3: string): boolean;
				public static putString(param0: android.content.ContentResolver, param1: string, param2: string): boolean;
				public static getUriFor(param0: android.net.Uri, param1: string): android.net.Uri;
				public static getUriFor(param0: string): android.net.Uri;
				public static getInt(param0: android.content.ContentResolver, param1: string, param2: number): number;
				public static getInt(param0: android.content.ContentResolver, param1: string): number;
				public static putInt(param0: android.content.ContentResolver, param1: string, param2: number): boolean;
				public static getLong(param0: android.content.ContentResolver, param1: string, param2: number): number;
				public static getLong(param0: android.content.ContentResolver, param1: string): number;
				public static putLong(param0: android.content.ContentResolver, param1: string, param2: number): boolean;
				public static getFloat(param0: android.content.ContentResolver, param1: string, param2: number): number;
				public static getFloat(param0: android.content.ContentResolver, param1: string): number;
				public static putFloat(param0: android.content.ContentResolver, param1: string, param2: number): boolean;
				public static isLocationProviderEnabled(param0: android.content.ContentResolver, param1: string): boolean;
				public static setLocationProviderEnabled(param0: android.content.ContentResolver, param1: string, param2: boolean): void;
				public static ACCESSIBILITY_DISPLAY_INVERSION_ENABLED: string;
				public static ACCESSIBILITY_ENABLED: string;
				public static ACCESSIBILITY_SPEAK_PASSWORD: string;
				public static ADB_ENABLED: string;
				public static ALLOWED_GEOLOCATION_ORIGINS: string;
				public static ALLOW_MOCK_LOCATION: string;
				public static ANDROID_ID: string;
				public static BACKGROUND_DATA: string;
				public static BLUETOOTH_ON: string;
				public static CONTENT_URI: android.net.Uri;
				public static DATA_ROAMING: string;
				public static DEFAULT_INPUT_METHOD: string;
				public static DEVELOPMENT_SETTINGS_ENABLED: string;
				public static DEVICE_PROVISIONED: string;
				public static ENABLED_ACCESSIBILITY_SERVICES: string;
				public static ENABLED_INPUT_METHODS: string;
				public static HTTP_PROXY: string;
				public static INPUT_METHOD_SELECTOR_VISIBILITY: string;
				public static INSTALL_NON_MARKET_APPS: string;
				public static LOCATION_MODE: string;
				public static LOCATION_MODE_BATTERY_SAVING: number;
				public static LOCATION_MODE_HIGH_ACCURACY: number;
				public static LOCATION_MODE_OFF: number;
				public static LOCATION_MODE_SENSORS_ONLY: number;
				public static LOCATION_PROVIDERS_ALLOWED: string;
				public static LOCK_PATTERN_ENABLED: string;
				public static LOCK_PATTERN_TACTILE_FEEDBACK_ENABLED: string;
				public static LOCK_PATTERN_VISIBLE: string;
				public static LOGGING_ID: string;
				public static NETWORK_PREFERENCE: string;
				public static PARENTAL_CONTROL_ENABLED: string;
				public static PARENTAL_CONTROL_LAST_UPDATE: string;
				public static PARENTAL_CONTROL_REDIRECT_URL: string;
				public static SELECTED_INPUT_METHOD_SUBTYPE: string;
				public static SETTINGS_CLASSNAME: string;
				public static SKIP_FIRST_USE_HINTS: string;
				public static SYS_PROP_SETTING_VERSION: string;
				public static TOUCH_EXPLORATION_ENABLED: string;
				public static TTS_DEFAULT_COUNTRY: string;
				public static TTS_DEFAULT_LANG: string;
				public static TTS_DEFAULT_PITCH: string;
				public static TTS_DEFAULT_RATE: string;
				public static TTS_DEFAULT_SYNTH: string;
				public static TTS_DEFAULT_VARIANT: string;
				public static TTS_ENABLED_PLUGINS: string;
				public static TTS_USE_DEFAULTS: string;
				public static USB_MASS_STORAGE_ENABLED: string;
				public static USE_GOOGLE_MAIL: string;
				public static WIFI_MAX_DHCP_RETRY_COUNT: string;
				public static WIFI_MOBILE_DATA_TRANSITION_WAKELOCK_TIMEOUT_MS: string;
				public static WIFI_NETWORKS_AVAILABLE_NOTIFICATION_ON: string;
				public static WIFI_NETWORKS_AVAILABLE_REPEAT_DELAY: string;
				public static WIFI_NUM_OPEN_NETWORKS_KEPT: string;
				public static WIFI_ON: string;
				public static WIFI_WATCHDOG_ACCEPTABLE_PACKET_LOSS_PERCENTAGE: string;
				public static WIFI_WATCHDOG_AP_COUNT: string;
				public static WIFI_WATCHDOG_BACKGROUND_CHECK_DELAY_MS: string;
				public static WIFI_WATCHDOG_BACKGROUND_CHECK_ENABLED: string;
				public static WIFI_WATCHDOG_BACKGROUND_CHECK_TIMEOUT_MS: string;
				public static WIFI_WATCHDOG_INITIAL_IGNORED_PING_COUNT: string;
				public static WIFI_WATCHDOG_MAX_AP_CHECKS: string;
				public static WIFI_WATCHDOG_ON: string;
				public static WIFI_WATCHDOG_PING_COUNT: string;
				public static WIFI_WATCHDOG_PING_DELAY_MS: string;
				public static WIFI_WATCHDOG_PING_TIMEOUT_MS: string;
				public static WIFI_WATCHDOG_WATCH_LIST: string;
			}
			export class SettingNotFoundException {
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Exception);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: string);
			}
			export class System {
				public constructor();
				public static getString(param0: android.content.ContentResolver, param1: string): string;
				public static putString(param0: android.content.ContentResolver, param1: android.net.Uri, param2: string, param3: string): boolean;
				public static putString(param0: android.content.ContentResolver, param1: string, param2: string): boolean;
				public static getUriFor(param0: android.net.Uri, param1: string): android.net.Uri;
				public static getUriFor(param0: string): android.net.Uri;
				public static getInt(param0: android.content.ContentResolver, param1: string, param2: number): number;
				public static getInt(param0: android.content.ContentResolver, param1: string): number;
				public static putInt(param0: android.content.ContentResolver, param1: string, param2: number): boolean;
				public static getLong(param0: android.content.ContentResolver, param1: string, param2: number): number;
				public static getLong(param0: android.content.ContentResolver, param1: string): number;
				public static putLong(param0: android.content.ContentResolver, param1: string, param2: number): boolean;
				public static getFloat(param0: android.content.ContentResolver, param1: string, param2: number): number;
				public static getFloat(param0: android.content.ContentResolver, param1: string): number;
				public static putFloat(param0: android.content.ContentResolver, param1: string, param2: number): boolean;
				public static getConfiguration(param0: android.content.ContentResolver, param1: android.content.res.Configuration): void;
				public static putConfiguration(param0: android.content.ContentResolver, param1: android.content.res.Configuration): boolean;
				public static getShowGTalkServiceStatus(param0: android.content.ContentResolver): boolean;
				public static setShowGTalkServiceStatus(param0: android.content.ContentResolver, param1: boolean): void;
				public static canWrite(param0: android.content.Context): boolean;
				public static ACCELEROMETER_ROTATION: string;
				public static ADB_ENABLED: string;
				public static AIRPLANE_MODE_ON: string;
				public static AIRPLANE_MODE_RADIOS: string;
				public static ALARM_ALERT: string;
				public static ALWAYS_FINISH_ACTIVITIES: string;
				public static ANDROID_ID: string;
				public static ANIMATOR_DURATION_SCALE: string;
				public static AUTO_TIME: string;
				public static AUTO_TIME_ZONE: string;
				public static BLUETOOTH_DISCOVERABILITY: string;
				public static BLUETOOTH_DISCOVERABILITY_TIMEOUT: string;
				public static BLUETOOTH_ON: string;
				public static CONTENT_URI: android.net.Uri;
				public static DATA_ROAMING: string;
				public static DATE_FORMAT: string;
				public static DEBUG_APP: string;
				public static DEFAULT_ALARM_ALERT_URI: android.net.Uri;
				public static DEFAULT_NOTIFICATION_URI: android.net.Uri;
				public static DEFAULT_RINGTONE_URI: android.net.Uri;
				public static DEVICE_PROVISIONED: string;
				public static DIM_SCREEN: string;
				public static DTMF_TONE_TYPE_WHEN_DIALING: string;
				public static DTMF_TONE_WHEN_DIALING: string;
				public static END_BUTTON_BEHAVIOR: string;
				public static FONT_SCALE: string;
				public static HAPTIC_FEEDBACK_ENABLED: string;
				public static HTTP_PROXY: string;
				public static INSTALL_NON_MARKET_APPS: string;
				public static LOCATION_PROVIDERS_ALLOWED: string;
				public static LOCK_PATTERN_ENABLED: string;
				public static LOCK_PATTERN_TACTILE_FEEDBACK_ENABLED: string;
				public static LOCK_PATTERN_VISIBLE: string;
				public static LOGGING_ID: string;
				public static MODE_RINGER: string;
				public static MODE_RINGER_STREAMS_AFFECTED: string;
				public static MUTE_STREAMS_AFFECTED: string;
				public static NETWORK_PREFERENCE: string;
				public static NEXT_ALARM_FORMATTED: string;
				public static NOTIFICATION_SOUND: string;
				public static PARENTAL_CONTROL_ENABLED: string;
				public static PARENTAL_CONTROL_LAST_UPDATE: string;
				public static PARENTAL_CONTROL_REDIRECT_URL: string;
				public static RADIO_BLUETOOTH: string;
				public static RADIO_CELL: string;
				public static RADIO_NFC: string;
				public static RADIO_WIFI: string;
				public static RINGTONE: string;
				public static SCREEN_BRIGHTNESS: string;
				public static SCREEN_BRIGHTNESS_MODE: string;
				public static SCREEN_BRIGHTNESS_MODE_AUTOMATIC: number;
				public static SCREEN_BRIGHTNESS_MODE_MANUAL: number;
				public static SCREEN_OFF_TIMEOUT: string;
				public static SETTINGS_CLASSNAME: string;
				public static SETUP_WIZARD_HAS_RUN: string;
				public static SHOW_GTALK_SERVICE_STATUS: string;
				public static SHOW_PROCESSES: string;
				public static SHOW_WEB_SUGGESTIONS: string;
				public static SOUND_EFFECTS_ENABLED: string;
				public static STAY_ON_WHILE_PLUGGED_IN: string;
				public static SYS_PROP_SETTING_VERSION: string;
				public static TEXT_AUTO_CAPS: string;
				public static TEXT_AUTO_PUNCTUATE: string;
				public static TEXT_AUTO_REPLACE: string;
				public static TEXT_SHOW_PASSWORD: string;
				public static TIME_12_24: string;
				public static TRANSITION_ANIMATION_SCALE: string;
				public static USB_MASS_STORAGE_ENABLED: string;
				public static USER_ROTATION: string;
				public static USE_GOOGLE_MAIL: string;
				public static VIBRATE_ON: string;
				public static VIBRATE_WHEN_RINGING: string;
				public static WAIT_FOR_DEBUGGER: string;
				public static WALLPAPER_ACTIVITY: string;
				public static WIFI_MAX_DHCP_RETRY_COUNT: string;
				public static WIFI_MOBILE_DATA_TRANSITION_WAKELOCK_TIMEOUT_MS: string;
				public static WIFI_NETWORKS_AVAILABLE_NOTIFICATION_ON: string;
				public static WIFI_NETWORKS_AVAILABLE_REPEAT_DELAY: string;
				public static WIFI_NUM_OPEN_NETWORKS_KEPT: string;
				public static WIFI_ON: string;
				public static WIFI_SLEEP_POLICY: string;
				public static WIFI_SLEEP_POLICY_DEFAULT: number;
				public static WIFI_SLEEP_POLICY_NEVER: number;
				public static WIFI_SLEEP_POLICY_NEVER_WHILE_PLUGGED: number;
				public static WIFI_STATIC_DNS1: string;
				public static WIFI_STATIC_DNS2: string;
				public static WIFI_STATIC_GATEWAY: string;
				public static WIFI_STATIC_IP: string;
				public static WIFI_STATIC_NETMASK: string;
				public static WIFI_USE_STATIC_IP: string;
				public static WIFI_WATCHDOG_ACCEPTABLE_PACKET_LOSS_PERCENTAGE: string;
				public static WIFI_WATCHDOG_AP_COUNT: string;
				public static WIFI_WATCHDOG_BACKGROUND_CHECK_DELAY_MS: string;
				public static WIFI_WATCHDOG_BACKGROUND_CHECK_ENABLED: string;
				public static WIFI_WATCHDOG_BACKGROUND_CHECK_TIMEOUT_MS: string;
				public static WIFI_WATCHDOG_INITIAL_IGNORED_PING_COUNT: string;
				public static WIFI_WATCHDOG_MAX_AP_CHECKS: string;
				public static WIFI_WATCHDOG_ON: string;
				public static WIFI_WATCHDOG_PING_COUNT: string;
				public static WIFI_WATCHDOG_PING_DELAY_MS: string;
				public static WIFI_WATCHDOG_PING_TIMEOUT_MS: string;
				public static WINDOW_ANIMATION_SCALE: string;
			}
		}
	}
}
