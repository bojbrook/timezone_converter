const TIMEZONES = [
  {
    "Europe/Andorra": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "Asia/Dubai": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Kabul": {
      standard_time: "UTC+4:30",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Tirane": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "Asia/Yerevan": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Antarctica/Casey": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Antarctica/Davis": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Antarctica/DumontDUrville": {
      standard_time: "UTC+10",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Antarctica/Mawson": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Antarctica/Palmer": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Antarctica/Rothera": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Antarctica/Syowa": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Antarctica/Troll": {
      standard_time: "UTC+0",
      daylight_saving_time: "UTC+2",
      hemisphere: "Southern",
    },
    "Antarctica/Vostok": {
      standard_time: "UTC+6",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Argentina/Buenos_Aires": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Argentina/Cordoba": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Argentina/Salta": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Argentina/Jujuy": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Argentina/Tucuman": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Argentina/Catamarca": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Argentina/La_Rioja": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Argentina/San_Juan": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Argentina/Mendoza": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Argentina/San_Luis": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Argentina/Rio_Gallegos": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Argentina/Ushuaia": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Pacific/Pago_Pago": {
      standard_time: "UTC-11",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Europe/Vienna": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "Australia/Lord_Howe": {
      standard_time: "UTC+10:30",
      daylight_saving_time: "UTC+11",
      hemisphere: "Southern",
    },
    "Antarctica/Macquarie": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Australia/Hobart": {
      standard_time: "UTC+10",
      daylight_saving_time: "UTC+11",
      hemisphere: "Southern",
    },
    "Australia/Currie": {
      standard_time: "UTC+10",
      daylight_saving_time: "UTC+11",
      hemisphere: "Southern",
    },
    "Australia/Melbourne": {
      standard_time: "UTC+10",
      daylight_saving_time: "UTC+11",
      hemisphere: "Southern",
    },
    "Australia/Sydney": {
      standard_time: "UTC+10",
      daylight_saving_time: "UTC+11",
      hemisphere: "Southern",
    },
    "Australia/Broken_Hill": {
      standard_time: "UTC+9:30",
      daylight_saving_time: "UTC+10:30",
      hemisphere: "Southern",
    },
    "Australia/Brisbane": {
      standard_time: "UTC+10",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Australia/Lindeman": {
      standard_time: "UTC+10",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Australia/Adelaide": {
      standard_time: "UTC+9:30",
      daylight_saving_time: "UTC+10:30",
      hemisphere: "Southern",
    },
    "Australia/Darwin": {
      standard_time: "UTC+9:30",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Australia/Perth": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Australia/Eucla": {
      standard_time: "UTC+8:45",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Asia/Baku": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Barbados": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Dhaka": {
      standard_time: "UTC+6",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Brussels": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "Europe/Sofia": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Atlantic/Bermuda": {
      standard_time: "UTC-4",
      daylight_saving_time: "UTC-3",
      hemisphere: "Northern",
    },
    "Asia/Brunei": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/La_Paz": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Noronha": {
      standard_time: "UTC-2",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Belem": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Fortaleza": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Recife": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Araguaina": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Maceio": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Bahia": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Sao_Paulo": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Campo_Grande": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Cuiaba": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Santarem": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Porto_Velho": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Boa_Vista": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Manaus": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Eirunepe": {
      standard_time: "UTC-5",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Rio_Branco": {
      standard_time: "UTC-5",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Nassau": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "Asia/Thimphu": {
      standard_time: "UTC+6",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Minsk": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Belize": {
      standard_time: "UTC-6",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/St_Johns": {
      standard_time: "UTC-3:30",
      daylight_saving_time: "UTC-2:30",
      hemisphere: "Northern",
    },
    "America/Halifax": {
      standard_time: "UTC-4",
      daylight_saving_time: "UTC-3",
      hemisphere: "Northern",
    },
    "America/Glace_Bay": {
      standard_time: "UTC-4",
      daylight_saving_time: "UTC-3",
      hemisphere: "Northern",
    },
    "America/Moncton": {
      standard_time: "UTC-4",
      daylight_saving_time: "UTC-3",
      hemisphere: "Northern",
    },
    "America/Goose_Bay": {
      standard_time: "UTC-4",
      daylight_saving_time: "UTC-3",
      hemisphere: "Northern",
    },
    "America/Blanc-Sablon": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Toronto": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "America/Nipigon": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "America/Thunder_Bay": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "America/Iqaluit": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "America/Pangnirtung": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "America/Atikokan": {
      standard_time: "UTC-5",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Winnipeg": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
      hemisphere: "Northern",
    },
    "America/Rainy_River": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
      hemisphere: "Northern",
    },
    "America/Resolute": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
      hemisphere: "Northern",
    },
    "America/Rankin_Inlet": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
      hemisphere: "Northern",
    },
    "America/Regina": {
      standard_time: "UTC-6",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Swift_Current": {
      standard_time: "UTC-6",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Edmonton": {
      standard_time: "UTC-7",
      daylight_saving_time: "UTC-6",
      hemisphere: "Northern",
    },
    "America/Cambridge_Bay": {
      standard_time: "UTC-7",
      daylight_saving_time: "UTC-6",
      hemisphere: "Northern",
    },
    "America/Yellowknife": {
      standard_time: "UTC-7",
      daylight_saving_time: "UTC-6",
      hemisphere: "Northern",
    },
    "America/Inuvik": {
      standard_time: "UTC-7",
      daylight_saving_time: "UTC-6",
      hemisphere: "Northern",
    },
    "America/Creston": {
      standard_time: "UTC-7",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Dawson_Creek": {
      standard_time: "UTC-7",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Fort_Nelson": {
      standard_time: "UTC-7",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Vancouver": {
      standard_time: "UTC-8",
      daylight_saving_time: "UTC-7",
      hemisphere: "Northern",
    },
    "America/Whitehorse": {
      standard_time: "UTC-7",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Dawson": {
      standard_time: "UTC-7",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Indian/Cocos": {
      standard_time: "UTC+6:30",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Europe/Zurich": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "Africa/Abidjan": {
      standard_time: "UTC+0",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Pacific/Rarotonga": {
      standard_time: "UTC-10",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Santiago": {
      standard_time: "UTC-4",
      daylight_saving_time: "UTC-3",
      hemisphere: "Southern",
    },
    "America/Punta_Arenas": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Pacific/Easter": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
      hemisphere: "Southern",
    },
    "Asia/Shanghai": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Urumqi": {
      standard_time: "UTC+6",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Bogota": {
      standard_time: "UTC-5",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Costa_Rica": {
      standard_time: "UTC-6",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Havana": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "Atlantic/Cape_Verde": {
      standard_time: "UTC-1",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Curacao": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Indian/Christmas": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Asia/Nicosia": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Asia/Famagusta": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Europe/Prague": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "Europe/Berlin": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "Europe/Copenhagen": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "America/Santo_Domingo": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Africa/Algiers": {
      standard_time: "UTC+1",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Guayaquil": {
      standard_time: "UTC-5",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Pacific/Galapagos": {
      standard_time: "UTC-6",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Europe/Tallinn": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Africa/Cairo": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Africa/El_Aaiun": {
      standard_time: "UTC+0",
      daylight_saving_time: "UTC+1",
      hemisphere: "Northern",
    },
    "Europe/Madrid": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "Africa/Ceuta": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "Atlantic/Canary": {
      standard_time: "UTC+0",
      daylight_saving_time: "UTC+1",
      hemisphere: "Northern",
    },
    "Europe/Helsinki": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Pacific/Fiji": {
      standard_time: "UTC+12",
      daylight_saving_time: "UTC+13",
      hemisphere: "Southern",
    },
    "Atlantic/Stanley": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Pacific/Chuuk": {
      standard_time: "UTC+10",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Pacific/Pohnpei": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Pacific/Kosrae": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Atlantic/Faroe": {
      standard_time: "UTC+0",
      daylight_saving_time: "UTC+1",
      hemisphere: "Northern",
    },
    "Europe/Paris": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "Europe/London": {
      standard_time: "UTC+0",
      daylight_saving_time: "UTC+1",
      hemisphere: "Northern",
    },
    "Asia/Tbilisi": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Cayenne": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Africa/Accra": {
      standard_time: "UTC+0",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Gibraltar": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "America/Godthab": {
      standard_time: "UTC-3",
      daylight_saving_time: "UTC-2",
      hemisphere: "Northern",
    },
    "America/Danmarkshavn": {
      standard_time: "UTC+0",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Scoresbysund": {
      standard_time: "UTC-1",
      daylight_saving_time: "UTC+0",
      hemisphere: "Northern",
    },
    "America/Thule": {
      standard_time: "UTC-4",
      daylight_saving_time: "UTC-3",
      hemisphere: "Northern",
    },
    "Europe/Athens": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Atlantic/South_Georgia": {
      standard_time: "UTC-2",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Guatemala": {
      standard_time: "UTC-6",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Pacific/Guam": {
      standard_time: "UTC+10",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Africa/Bissau": {
      standard_time: "UTC+0",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Guyana": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Hong_Kong": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Tegucigalpa": {
      standard_time: "UTC-6",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Port-au-Prince": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "Europe/Budapest": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "Asia/Jakarta": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Asia/Pontianak": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Asia/Makassar": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Asia/Jayapura": {
      standard_time: "UTC+9",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Europe/Dublin": {
      standard_time: "UTC+0",
      daylight_saving_time: "UTC+1",
      hemisphere: "Northern",
    },
    "Asia/Jerusalem": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Asia/Kolkata": {
      standard_time: "UTC+5:30",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Indian/Chagos": {
      standard_time: "UTC+6",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Asia/Baghdad": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Tehran": {
      standard_time: "UTC+3:30",
      daylight_saving_time: "UTC+4:30",
      hemisphere: "Northern",
    },
    "Atlantic/Reykjavik": {
      standard_time: "UTC+0",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Rome": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "America/Jamaica": {
      standard_time: "UTC-5",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Amman": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Asia/Tokyo": {
      standard_time: "UTC+9",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Africa/Nairobi": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Asia/Bishkek": {
      standard_time: "UTC+6",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Pacific/Tarawa": {
      standard_time: "UTC+12",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Pacific/Enderbury": {
      standard_time: "UTC+13",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Pacific/Kiritimati": {
      standard_time: "UTC+14",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Asia/Pyongyang": {
      standard_time: "UTC+9",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Seoul": {
      standard_time: "UTC+9",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Almaty": {
      standard_time: "UTC+6",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Qyzylorda": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Qostanay": {
      standard_time: "UTC+6",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Aqtobe": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Aqtau": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Atyrau": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Oral": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Beirut": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Asia/Colombo": {
      standard_time: "UTC+5:30",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Africa/Monrovia": {
      standard_time: "UTC+0",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Vilnius": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Europe/Luxembourg": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "Europe/Riga": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Africa/Tripoli": {
      standard_time: "UTC+2",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Africa/Casablanca": {
      standard_time: "UTC+0",
      daylight_saving_time: "UTC+1",
      hemisphere: "Northern",
    },
    "Europe/Monaco": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "Europe/Chisinau": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Pacific/Majuro": {
      standard_time: "UTC+12",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Pacific/Kwajalein": {
      standard_time: "UTC+12",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Yangon": {
      standard_time: "UTC+6:30",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Ulaanbaatar": {
      standard_time: "UTC+8",
      daylight_saving_time: "UTC+9",
      hemisphere: "Northern",
    },
    "Asia/Hovd": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Choibalsan": {
      standard_time: "UTC+8",
      daylight_saving_time: "UTC+9",
      hemisphere: "Northern",
    },
    "Asia/Macau": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Martinique": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Malta": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "Indian/Mauritius": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Indian/Maldives": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Mexico_City": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
      hemisphere: "Northern",
    },
    "America/Cancun": {
      standard_time: "UTC-5",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Merida": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
      hemisphere: "Northern",
    },
    "America/Monterrey": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
      hemisphere: "Northern",
    },
    "America/Matamoros": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
      hemisphere: "Northern",
    },
    "America/Mazatlan": {
      standard_time: "UTC-7",
      daylight_saving_time: "UTC-6",
      hemisphere: "Northern",
    },
    "America/Chihuahua": {
      standard_time: "UTC-7",
      daylight_saving_time: "UTC-6",
      hemisphere: "Northern",
    },
    "America/Ojinaga": {
      standard_time: "UTC-7",
      daylight_saving_time: "UTC-6",
      hemisphere: "Northern",
    },
    "America/Hermosillo": {
      standard_time: "UTC-7",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Tijuana": {
      standard_time: "UTC-8",
      daylight_saving_time: "UTC-7",
      hemisphere: "Northern",
    },
    "America/Bahia_Banderas": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
      hemisphere: "Northern",
    },
    "Asia/Kuala_Lumpur": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Kuching": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Africa/Maputo": {
      standard_time: "UTC+2",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Africa/Windhoek": {
      standard_time: "UTC+2",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Pacific/Noumea": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Pacific/Norfolk": {
      standard_time: "UTC+11",
      daylight_saving_time: "UTC+12",
      hemisphere: "Southern",
    },
    "Africa/Lagos": {
      standard_time: "UTC+1",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Managua": {
      standard_time: "UTC-6",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Amsterdam": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "Europe/Oslo": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "Asia/Kathmandu": {
      standard_time: "UTC+5:45",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Pacific/Nauru": {
      standard_time: "UTC+12",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Pacific/Niue": {
      standard_time: "UTC-11",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Pacific/Auckland": {
      standard_time: "UTC+12",
      daylight_saving_time: "UTC+13",
      hemisphere: "Southern",
    },
    "Pacific/Chatham": {
      standard_time: "UTC+12:45",
      daylight_saving_time: "UTC+13:45",
      hemisphere: "Southern",
    },
    "America/Panama": {
      standard_time: "UTC-5",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Lima": {
      standard_time: "UTC-5",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Pacific/Tahiti": {
      standard_time: "UTC-10",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Pacific/Marquesas": {
      standard_time: "UTC-9:30",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Pacific/Gambier": {
      standard_time: "UTC-9",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Pacific/Port_Moresby": {
      standard_time: "UTC+10",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Pacific/Bougainville": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Asia/Manila": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Karachi": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Warsaw": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "America/Miquelon": {
      standard_time: "UTC-3",
      daylight_saving_time: "UTC-2",
      hemisphere: "Northern",
    },
    "Pacific/Pitcairn": {
      standard_time: "UTC-8",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "America/Puerto_Rico": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Gaza": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Asia/Hebron": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Europe/Lisbon": {
      standard_time: "UTC+0",
      daylight_saving_time: "UTC+1",
      hemisphere: "Northern",
    },
    "Atlantic/Madeira": {
      standard_time: "UTC+0",
      daylight_saving_time: "UTC+1",
      hemisphere: "Northern",
    },
    "Atlantic/Azores": {
      standard_time: "UTC-1",
      daylight_saving_time: "UTC+0",
      hemisphere: "Northern",
    },
    "Pacific/Palau": {
      standard_time: "UTC+9",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Asuncion": {
      standard_time: "UTC-4",
      daylight_saving_time: "UTC-3",
      hemisphere: "Southern",
    },
    "Asia/Qatar": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Indian/Reunion": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Europe/Bucharest": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Europe/Belgrade": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "Europe/Kaliningrad": {
      standard_time: "UTC+2",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Moscow": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Simferopol": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Kirov": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Astrakhan": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Volgograd": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Saratov": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Ulyanovsk": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Samara": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Yekaterinburg": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Omsk": {
      standard_time: "UTC+6",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Novosibirsk": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Barnaul": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Tomsk": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Novokuznetsk": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Krasnoyarsk": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Irkutsk": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Chita": {
      standard_time: "UTC+9",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Yakutsk": {
      standard_time: "UTC+9",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Khandyga": {
      standard_time: "UTC+9",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Vladivostok": {
      standard_time: "UTC+10",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Ust-Nera": {
      standard_time: "UTC+10",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Magadan": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Sakhalin": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Srednekolymsk": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Kamchatka": {
      standard_time: "UTC+12",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Anadyr": {
      standard_time: "UTC+12",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Riyadh": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Pacific/Guadalcanal": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Indian/Mahe": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Africa/Khartoum": {
      standard_time: "UTC+2",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Stockholm": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
      hemisphere: "Northern",
    },
    "Asia/Singapore": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Paramaribo": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Africa/Juba": {
      standard_time: "UTC+2",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Africa/Sao_Tome": {
      standard_time: "UTC+0",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/El_Salvador": {
      standard_time: "UTC-6",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Damascus": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "America/Grand_Turk": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "Africa/Ndjamena": {
      standard_time: "UTC+1",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Indian/Kerguelen": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Asia/Bangkok": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Dushanbe": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Pacific/Fakaofo": {
      standard_time: "UTC+13",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Asia/Dili": {
      standard_time: "UTC+9",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Asia/Ashgabat": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Africa/Tunis": {
      standard_time: "UTC+1",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Pacific/Tongatapu": {
      standard_time: "UTC+13",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Europe/Istanbul": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Port_of_Spain": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Pacific/Funafuti": {
      standard_time: "UTC+12",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Asia/Taipei": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Europe/Kiev": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Europe/Uzhgorod": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Europe/Zaporozhye": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
      hemisphere: "Northern",
    },
    "Pacific/Wake": {
      standard_time: "UTC+12",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/New_York": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "America/Detroit": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "America/Kentucky/Louisville": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "America/Kentucky/Monticello": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "America/Indiana/Indianapolis": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "America/Indiana/Vincennes": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "America/Indiana/Winamac": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "America/Indiana/Marengo": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "America/Indiana/Petersburg": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "America/Indiana/Vevay": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
      hemisphere: "Northern",
    },
    "America/Chicago": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
      hemisphere: "Northern",
    },
    "America/Indiana/Tell_City": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
      hemisphere: "Northern",
    },
    "America/Indiana/Knox": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
      hemisphere: "Northern",
    },
    "America/Menominee": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
      hemisphere: "Northern",
    },
    "America/North_Dakota/Center": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
      hemisphere: "Northern",
    },
    "America/North_Dakota/New_Salem": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
      hemisphere: "Northern",
    },
    "America/North_Dakota/Beulah": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
      hemisphere: "Northern",
    },
    "America/Denver": {
      standard_time: "UTC-7",
      daylight_saving_time: "UTC-6",
      hemisphere: "Northern",
    },
    "America/Boise": {
      standard_time: "UTC-7",
      daylight_saving_time: "UTC-6",
      hemisphere: "Northern",
    },
    "America/Phoenix": {
      standard_time: "UTC-7",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Los_Angeles": {
      standard_time: "UTC-8",
      daylight_saving_time: "UTC-7",
      hemisphere: "Northern",
    },
    "America/Anchorage": {
      standard_time: "UTC-9",
      daylight_saving_time: "UTC-8",
      hemisphere: "Northern",
    },
    "America/Juneau": {
      standard_time: "UTC-9",
      daylight_saving_time: "UTC-8",
      hemisphere: "Northern",
    },
    "America/Sitka": {
      standard_time: "UTC-9",
      daylight_saving_time: "UTC-8",
      hemisphere: "Northern",
    },
    "America/Metlakatla": {
      standard_time: "UTC-8",
      daylight_saving_time: "UTC-7",
      hemisphere: "Northern",
    },
    "America/Yakutat": {
      standard_time: "UTC-9",
      daylight_saving_time: "UTC-8",
      hemisphere: "Northern",
    },
    "America/Nome": {
      standard_time: "UTC-9",
      daylight_saving_time: "UTC-8",
      hemisphere: "Northern",
    },
    "America/Adak": {
      standard_time: "UTC-10",
      daylight_saving_time: "UTC-9",
      hemisphere: "Northern",
    },
    "Pacific/Honolulu": {
      standard_time: "UTC-10",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "America/Montevideo": {
      standard_time: "UTC-3",
      daylight_saving_time: "UTC-2",
      hemisphere: "Southern",
    },
    "Asia/Samarkand": {
      standard_time: "UTC+5",
      daylight_saving_time: "UTC+6",
      hemisphere: "Northern",
    },
    "Asia/Tashkent": {
      standard_time: "UTC+5",
      daylight_saving_time: "UTC+6",
      hemisphere: "Northern",
    },
    "America/Caracas": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Asia/Ho_Chi_Minh": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
      hemisphere: "Northern",
    },
    "Pacific/Efate": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Pacific/Wallis": {
      standard_time: "UTC+12",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
    "Pacific/Apia": {
      standard_time: "UTC+13",
      daylight_saving_time: "UTC+14",
      hemisphere: "Southern",
    },
    "Africa/Johannesburg": {
      standard_time: "UTC+2",
      daylight_saving_time: "N/A",
      hemisphere: "Southern",
    },
  },
];

module.exports = TIMEZONES[0];
