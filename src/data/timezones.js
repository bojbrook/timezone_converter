const TIMEZONES = [
  {
    "Europe/Andorra": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "Asia/Dubai": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
    },
    "Asia/Kabul": {
      standard_time: "UTC+4:30",
      daylight_saving_time: "N/A",
    },
    "Europe/Tirane": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "Asia/Yerevan": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
    },
    "Antarctica/Casey": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
    },
    "Antarctica/Davis": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
    },
    "Antarctica/DumontDUrville": {
      standard_time: "UTC+10",
      daylight_saving_time: "N/A",
    },
    "Antarctica/Mawson": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
    },
    "Antarctica/Palmer": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "Antarctica/Rothera": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "Antarctica/Syowa": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
    },
    "Antarctica/Troll": {
      standard_time: "UTC+0",
      daylight_saving_time: "UTC+2",
    },
    "Antarctica/Vostok": {
      standard_time: "UTC+6",
      daylight_saving_time: "N/A",
    },
    "America/Argentina/Buenos_Aires": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Argentina/Cordoba": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Argentina/Salta": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Argentina/Jujuy": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Argentina/Tucuman": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Argentina/Catamarca": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Argentina/La_Rioja": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Argentina/San_Juan": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Argentina/Mendoza": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Argentina/San_Luis": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Argentina/Rio_Gallegos": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Argentina/Ushuaia": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "Pacific/Pago_Pago": {
      standard_time: "UTC-11",
      daylight_saving_time: "N/A",
    },
    "Europe/Vienna": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "Australia/Lord_Howe": {
      standard_time: "UTC+10:30",
      daylight_saving_time: "UTC+11",
    },
    "Antarctica/Macquarie": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
    },
    "Australia/Hobart": {
      standard_time: "UTC+10",
      daylight_saving_time: "UTC+11",
    },
    "Australia/Currie": {
      standard_time: "UTC+10",
      daylight_saving_time: "UTC+11",
    },
    "Australia/Melbourne": {
      standard_time: "UTC+10",
      daylight_saving_time: "UTC+11",
    },
    "Australia/Sydney": {
      standard_time: "UTC+10",
      daylight_saving_time: "UTC+11",
    },
    "Australia/Broken_Hill": {
      standard_time: "UTC+9:30",
      daylight_saving_time: "UTC+10:30",
    },
    "Australia/Brisbane": {
      standard_time: "UTC+10",
      daylight_saving_time: "N/A",
    },
    "Australia/Lindeman": {
      standard_time: "UTC+10",
      daylight_saving_time: "N/A",
    },
    "Australia/Adelaide": {
      standard_time: "UTC+9:30",
      daylight_saving_time: "UTC+10:30",
    },
    "Australia/Darwin": {
      standard_time: "UTC+9:30",
      daylight_saving_time: "N/A",
    },
    "Australia/Perth": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
    },
    "Australia/Eucla": {
      standard_time: "UTC+8:45",
      daylight_saving_time: "N/A",
    },
    "Asia/Baku": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
    },
    "America/Barbados": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
    },
    "Asia/Dhaka": {
      standard_time: "UTC+6",
      daylight_saving_time: "N/A",
    },
    "Europe/Brussels": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "Europe/Sofia": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },
    "Atlantic/Bermuda": {
      standard_time: "UTC-4",
      daylight_saving_time: "UTC-3",
    },
    "Asia/Brunei": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
    },
    "America/La_Paz": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
    },

    "America/Noronha": {
      standard_time: "UTC-2",
      daylight_saving_time: "N/A",
    },
    "America/Belem": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Fortaleza": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Recife": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Araguaina": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Maceio": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Bahia": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Sao_Paulo": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Campo_Grande": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
    },
    "America/Cuiaba": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
    },
    "America/Santarem": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "America/Porto_Velho": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
    },
    "America/Boa_Vista": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
    },
    "America/Manaus": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
    },
    "America/Eirunepe": {
      standard_time: "UTC-5",
      daylight_saving_time: "N/A",
    },
    "America/Rio_Branco": {
      standard_time: "UTC-5",
      daylight_saving_time: "N/A",
    },
    "America/Nassau": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "Asia/Thimphu": {
      standard_time: "UTC+6",
      daylight_saving_time: "N/A",
    },
    "Europe/Minsk": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
    },
    "America/Belize": {
      standard_time: "UTC-6",
      daylight_saving_time: "N/A",
    },
    "America/St_Johns": {
      standard_time: "UTC-3:30",
      daylight_saving_time: "UTC-2:30",
    },
    "America/Halifax": {
      standard_time: "UTC-4",
      daylight_saving_time: "UTC-3",
    },
    "America/Glace_Bay": {
      standard_time: "UTC-4",
      daylight_saving_time: "UTC-3",
    },
    "America/Moncton": {
      standard_time: "UTC-4",
      daylight_saving_time: "UTC-3",
    },
    "America/Goose_Bay": {
      standard_time: "UTC-4",
      daylight_saving_time: "UTC-3",
    },
    "America/Blanc-Sablon": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
    },
    "America/Toronto": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "America/Nipigon": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "America/Thunder_Bay": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "America/Iqaluit": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "America/Pangnirtung": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "America/Atikokan": {
      standard_time: "UTC-5",
      daylight_saving_time: "N/A",
    },
    "America/Winnipeg": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
    },
    "America/Rainy_River": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
    },
    "America/Resolute": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
    },
    "America/Rankin_Inlet": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
    },
    "America/Regina": {
      standard_time: "UTC-6",
      daylight_saving_time: "N/A",
    },
    "America/Swift_Current": {
      standard_time: "UTC-6",
      daylight_saving_time: "N/A",
    },
    "America/Edmonton": {
      standard_time: "UTC-7",
      daylight_saving_time: "UTC-6",
    },
    "America/Cambridge_Bay": {
      standard_time: "UTC-7",
      daylight_saving_time: "UTC-6",
    },
    "America/Yellowknife": {
      standard_time: "UTC-7",
      daylight_saving_time: "UTC-6",
    },
    "America/Inuvik": {
      standard_time: "UTC-7",
      daylight_saving_time: "UTC-6",
    },
    "America/Creston": {
      standard_time: "UTC-7",
      daylight_saving_time: "N/A",
    },
    "America/Dawson_Creek": {
      standard_time: "UTC-7",
      daylight_saving_time: "N/A",
    },
    "America/Fort_Nelson": {
      standard_time: "UTC-7",
      daylight_saving_time: "N/A",
    },
    "America/Vancouver": {
      standard_time: "UTC-8",
      daylight_saving_time: "UTC-7",
    },
    "America/Whitehorse": {
      standard_time: "UTC-7",
      daylight_saving_time: "N/A",
    },
    "America/Dawson": {
      standard_time: "UTC-7",
      daylight_saving_time: "N/A",
    },
    "Indian/Cocos": {
      standard_time: "UTC+6:30",
      daylight_saving_time: "N/A",
    },
    "Europe/Zurich": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "Africa/Abidjan": {
      standard_time: "UTC+0",
      daylight_saving_time: "N/A",
    },
    "Pacific/Rarotonga": {
      standard_time: "UTC-10",
      daylight_saving_time: "N/A",
    },
    "America/Santiago": {
      standard_time: "UTC-4",
      daylight_saving_time: "UTC-3",
    },
    "America/Punta_Arenas": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "Pacific/Easter": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
    },
    "Asia/Shanghai": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
    },
    "Asia/Urumqi": {
      standard_time: "UTC+6",
      daylight_saving_time: "N/A",
    },
    "America/Bogota": {
      standard_time: "UTC-5",
      daylight_saving_time: "N/A",
    },
    "America/Costa_Rica": {
      standard_time: "UTC-6",
      daylight_saving_time: "N/A",
    },
    "America/Havana": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "Atlantic/Cape_Verde": {
      standard_time: "UTC-1",
      daylight_saving_time: "N/A",
    },
    "America/Curacao": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
    },
    "Indian/Christmas": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
    },
    "Asia/Nicosia": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },
    "Asia/Famagusta": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },
    "Europe/Prague": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "Europe/Berlin": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "Europe/Copenhagen": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "America/Santo_Domingo": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
    },
    "Africa/Algiers": {
      standard_time: "UTC+1",
      daylight_saving_time: "N/A",
    },
    "America/Guayaquil": {
      standard_time: "UTC-5",
      daylight_saving_time: "N/A",
    },
    "Pacific/Galapagos": {
      standard_time: "UTC-6",
      daylight_saving_time: "N/A",
    },
    "Europe/Tallinn": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },
    "Africa/Cairo": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },

    "Africa/El_Aaiun": {
      standard_time: "UTC+0",
      daylight_saving_time: "UTC+1",
    },
    "Europe/Madrid": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "Africa/Ceuta": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "Atlantic/Canary": {
      standard_time: "UTC+0",
      daylight_saving_time: "UTC+1",
    },
    "Europe/Helsinki": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },
    "Pacific/Fiji": {
      standard_time: "UTC+12",
      daylight_saving_time: "UTC+13",
    },
    "Atlantic/Stanley": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "Pacific/Chuuk": {
      standard_time: "UTC+10",
      daylight_saving_time: "N/A",
    },
    "Pacific/Pohnpei": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
    },
    "Pacific/Kosrae": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
    },
    "Atlantic/Faroe": {
      standard_time: "UTC+0",
      daylight_saving_time: "UTC+1",
    },
    "Europe/Paris": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "Europe/London": {
      standard_time: "UTC+0",
      daylight_saving_time: "UTC+1",
    },
    "Asia/Tbilisi": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
    },
    "America/Cayenne": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "Africa/Accra": {
      standard_time: "UTC+0",
      daylight_saving_time: "N/A",
    },
    "Europe/Gibraltar": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "America/Godthab": {
      standard_time: "UTC-3",
      daylight_saving_time: "UTC-2",
    },
    "America/Danmarkshavn": {
      standard_time: "UTC+0",
      daylight_saving_time: "N/A",
    },
    "America/Scoresbysund": {
      standard_time: "UTC-1",
      daylight_saving_time: "UTC+0",
    },
    "America/Thule": {
      standard_time: "UTC-4",
      daylight_saving_time: "UTC-3",
    },
    "Europe/Athens": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },
    "Atlantic/South_Georgia": {
      standard_time: "UTC-2",
      daylight_saving_time: "N/A",
    },
    "America/Guatemala": {
      standard_time: "UTC-6",
      daylight_saving_time: "N/A",
    },
    "Pacific/Guam": {
      standard_time: "UTC+10",
      daylight_saving_time: "N/A",
    },
    "Africa/Bissau": {
      standard_time: "UTC+0",
      daylight_saving_time: "N/A",
    },
    "America/Guyana": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
    },
    "Asia/Hong_Kong": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
    },
    "America/Tegucigalpa": {
      standard_time: "UTC-6",
      daylight_saving_time: "N/A",
    },
    "America/Port-au-Prince": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "Europe/Budapest": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "Asia/Jakarta": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
    },
    "Asia/Pontianak": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
    },
    "Asia/Makassar": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
    },
    "Asia/Jayapura": {
      standard_time: "UTC+9",
      daylight_saving_time: "N/A",
    },
    "Europe/Dublin": {
      standard_time: "UTC+0",
      daylight_saving_time: "UTC+1",
    },
    "Asia/Jerusalem": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },
    "Asia/Kolkata": {
      standard_time: "UTC+5:30",
      daylight_saving_time: "N/A",
    },
    "Indian/Chagos": {
      standard_time: "UTC+6",
      daylight_saving_time: "N/A",
    },
    "Asia/Baghdad": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
    },
    "Asia/Tehran": {
      standard_time: "UTC+3:30",
      daylight_saving_time: "UTC+4:30",
    },
    "Atlantic/Reykjavik": {
      standard_time: "UTC+0",
      daylight_saving_time: "N/A",
    },
    "Europe/Rome": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "America/Jamaica": {
      standard_time: "UTC-5",
      daylight_saving_time: "N/A",
    },
    "Asia/Amman": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },
    "Asia/Tokyo": {
      standard_time: "UTC+9",
      daylight_saving_time: "N/A",
    },
    "Africa/Nairobi": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
    },
    "Asia/Bishkek": {
      standard_time: "UTC+6",
      daylight_saving_time: "N/A",
    },
    "Pacific/Tarawa": {
      standard_time: "UTC+12",
      daylight_saving_time: "N/A",
    },
    "Pacific/Enderbury": {
      standard_time: "UTC+13",
      daylight_saving_time: "N/A",
    },
    "Pacific/Kiritimati": {
      standard_time: "UTC+14",
      daylight_saving_time: "N/A",
    },
    "Asia/Pyongyang": {
      standard_time: "UTC+9",
      daylight_saving_time: "N/A",
    },
    "Asia/Seoul": {
      standard_time: "UTC+9",
      daylight_saving_time: "N/A",
    },
    "Asia/Almaty": {
      standard_time: "UTC+6",
      daylight_saving_time: "N/A",
    },
    "Asia/Qyzylorda": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
    },
    "Asia/Qostanay": {
      standard_time: "UTC+6",
      daylight_saving_time: "N/A",
    },
    "Asia/Aqtobe": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
    },
    "Asia/Aqtau": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
    },
    "Asia/Atyrau": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
    },
    "Asia/Oral": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
    },
    "Asia/Beirut": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },
    "Asia/Colombo": {
      standard_time: "UTC+5:30",
      daylight_saving_time: "N/A",
    },
    "Africa/Monrovia": {
      standard_time: "UTC+0",
      daylight_saving_time: "N/A",
    },
    "Europe/Vilnius": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },

    "Europe/Luxembourg": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "Europe/Riga": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },
    "Africa/Tripoli": {
      standard_time: "UTC+2",
      daylight_saving_time: "N/A",
    },
    "Africa/Casablanca": {
      standard_time: "UTC+0",
      daylight_saving_time: "UTC+1",
    },
    "Europe/Monaco": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "Europe/Chisinau": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },
    "Pacific/Majuro": {
      standard_time: "UTC+12",
      daylight_saving_time: "N/A",
    },
    "Pacific/Kwajalein": {
      standard_time: "UTC+12",
      daylight_saving_time: "N/A",
    },
    "Asia/Yangon": {
      standard_time: "UTC+6:30",
      daylight_saving_time: "N/A",
    },
    "Asia/Ulaanbaatar": {
      standard_time: "UTC+8",
      daylight_saving_time: "UTC+9",
    },
    "Asia/Hovd": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
    },
    "Asia/Choibalsan": {
      standard_time: "UTC+8",
      daylight_saving_time: "UTC+9",
    },
    "Asia/Macau": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
    },
    "America/Martinique": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
    },
    "Europe/Malta": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "Indian/Mauritius": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
    },
    "Indian/Maldives": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
    },
    "America/Mexico_City": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
    },
    "America/Cancun": {
      standard_time: "UTC-5",
      daylight_saving_time: "N/A",
    },
    "America/Merida": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
    },
    "America/Monterrey": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
    },
    "America/Matamoros": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
    },
    "America/Mazatlan": {
      standard_time: "UTC-7",
      daylight_saving_time: "UTC-6",
    },
    "America/Chihuahua": {
      standard_time: "UTC-7",
      daylight_saving_time: "UTC-6",
    },
    "America/Ojinaga": {
      standard_time: "UTC-7",
      daylight_saving_time: "UTC-6",
    },
    "America/Hermosillo": {
      standard_time: "UTC-7",
      daylight_saving_time: "N/A",
    },
    "America/Tijuana": {
      standard_time: "UTC-8",
      daylight_saving_time: "UTC-7",
    },
    "America/Bahia_Banderas": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
    },
    "Asia/Kuala_Lumpur": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
    },
    "Asia/Kuching": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
    },
    "Africa/Maputo": {
      standard_time: "UTC+2",
      daylight_saving_time: "N/A",
    },
    "Africa/Windhoek": {
      standard_time: "UTC+2",
      daylight_saving_time: "N/A",
    },
    "Pacific/Noumea": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
    },
    "Pacific/Norfolk": {
      standard_time: "UTC+11",
      daylight_saving_time: "UTC+12",
    },
    "Africa/Lagos": {
      standard_time: "UTC+1",
      daylight_saving_time: "N/A",
    },
    "America/Managua": {
      standard_time: "UTC-6",
      daylight_saving_time: "N/A",
    },
    "Europe/Amsterdam": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "Europe/Oslo": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "Asia/Kathmandu": {
      standard_time: "UTC+5:45",
      daylight_saving_time: "N/A",
    },
    "Pacific/Nauru": {
      standard_time: "UTC+12",
      daylight_saving_time: "N/A",
    },
    "Pacific/Niue": {
      standard_time: "UTC-11",
      daylight_saving_time: "N/A",
    },
    "Pacific/Auckland": {
      standard_time: "UTC+12",
      daylight_saving_time: "UTC+13",
    },
    "Pacific/Chatham": {
      standard_time: "UTC+12:45",
      daylight_saving_time: "UTC+13:45",
    },
    "America/Panama": {
      standard_time: "UTC-5",
      daylight_saving_time: "N/A",
    },
    "America/Lima": {
      standard_time: "UTC-5",
      daylight_saving_time: "N/A",
    },
    "Pacific/Tahiti": {
      standard_time: "UTC-10",
      daylight_saving_time: "N/A",
    },
    "Pacific/Marquesas": {
      standard_time: "UTC-9:30",
      daylight_saving_time: "N/A",
    },
    "Pacific/Gambier": {
      standard_time: "UTC-9",
      daylight_saving_time: "N/A",
    },
    "Pacific/Port_Moresby": {
      standard_time: "UTC+10",
      daylight_saving_time: "N/A",
    },
    "Pacific/Bougainville": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
    },
    "Asia/Manila": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
    },
    "Asia/Karachi": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
    },
    "Europe/Warsaw": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "America/Miquelon": {
      standard_time: "UTC-3",
      daylight_saving_time: "UTC-2",
    },
    "Pacific/Pitcairn": {
      standard_time: "UTC-8",
      daylight_saving_time: "N/A",
    },
    "America/Puerto_Rico": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
    },
    "Asia/Gaza": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },
    "Asia/Hebron": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },
    "Europe/Lisbon": {
      standard_time: "UTC+0",
      daylight_saving_time: "UTC+1",
    },
    "Atlantic/Madeira": {
      standard_time: "UTC+0",
      daylight_saving_time: "UTC+1",
    },
    "Atlantic/Azores": {
      standard_time: "UTC-1",
      daylight_saving_time: "UTC+0",
    },
    "Pacific/Palau": {
      standard_time: "UTC+9",
      daylight_saving_time: "N/A",
    },
    "America/Asuncion": {
      standard_time: "UTC-4",
      daylight_saving_time: "UTC-3",
    },
    "Asia/Qatar": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
    },
    "Indian/Reunion": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
    },
    "Europe/Bucharest": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },
    "Europe/Belgrade": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "Europe/Kaliningrad": {
      standard_time: "UTC+2",
      daylight_saving_time: "N/A",
    },
    "Europe/Moscow": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
    },
    "Europe/Simferopol": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
    },
    "Europe/Kirov": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
    },
    "Europe/Astrakhan": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
    },
    "Europe/Volgograd": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
    },
    "Europe/Saratov": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
    },
    "Europe/Ulyanovsk": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
    },
    "Europe/Samara": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
    },

    "Asia/Yekaterinburg": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
    },
    "Asia/Omsk": {
      standard_time: "UTC+6",
      daylight_saving_time: "N/A",
    },
    "Asia/Novosibirsk": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
    },
    "Asia/Barnaul": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
    },
    "Asia/Tomsk": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
    },
    "Asia/Novokuznetsk": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
    },
    "Asia/Krasnoyarsk": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
    },
    "Asia/Irkutsk": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
    },
    "Asia/Chita": {
      standard_time: "UTC+9",
      daylight_saving_time: "N/A",
    },
    "Asia/Yakutsk": {
      standard_time: "UTC+9",
      daylight_saving_time: "N/A",
    },
    "Asia/Khandyga": {
      standard_time: "UTC+9",
      daylight_saving_time: "N/A",
    },
    "Asia/Vladivostok": {
      standard_time: "UTC+10",
      daylight_saving_time: "N/A",
    },
    "Asia/Ust-Nera": {
      standard_time: "UTC+10",
      daylight_saving_time: "N/A",
    },
    "Asia/Magadan": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
    },
    "Asia/Sakhalin": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
    },
    "Asia/Srednekolymsk": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
    },
    "Asia/Kamchatka": {
      standard_time: "UTC+12",
      daylight_saving_time: "N/A",
    },
    "Asia/Anadyr": {
      standard_time: "UTC+12",
      daylight_saving_time: "N/A",
    },
    "Asia/Riyadh": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
    },
    "Pacific/Guadalcanal": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
    },
    "Indian/Mahe": {
      standard_time: "UTC+4",
      daylight_saving_time: "N/A",
    },
    "Africa/Khartoum": {
      standard_time: "UTC+2",
      daylight_saving_time: "N/A",
    },
    "Europe/Stockholm": {
      standard_time: "UTC+1",
      daylight_saving_time: "UTC+2",
    },
    "Asia/Singapore": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
    },
    "America/Paramaribo": {
      standard_time: "UTC-3",
      daylight_saving_time: "N/A",
    },
    "Africa/Juba": {
      standard_time: "UTC+2",
      daylight_saving_time: "N/A",
    },
    "Africa/Sao_Tome": {
      standard_time: "UTC+0",
      daylight_saving_time: "N/A",
    },
    "America/El_Salvador": {
      standard_time: "UTC-6",
      daylight_saving_time: "N/A",
    },
    "Asia/Damascus": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },
    "America/Grand_Turk": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "Africa/Ndjamena": {
      standard_time: "UTC+1",
      daylight_saving_time: "N/A",
    },
    "Indian/Kerguelen": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
    },
    "Asia/Bangkok": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
    },
    "Asia/Dushanbe": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
    },
    "Pacific/Fakaofo": {
      standard_time: "UTC+13",
      daylight_saving_time: "N/A",
    },
    "Asia/Dili": {
      standard_time: "UTC+9",
      daylight_saving_time: "N/A",
    },
    "Asia/Ashgabat": {
      standard_time: "UTC+5",
      daylight_saving_time: "N/A",
    },
    "Africa/Tunis": {
      standard_time: "UTC+1",
      daylight_saving_time: "N/A",
    },
    "Pacific/Tongatapu": {
      standard_time: "UTC+13",
      daylight_saving_time: "N/A",
    },
    "Europe/Istanbul": {
      standard_time: "UTC+3",
      daylight_saving_time: "N/A",
    },
    "America/Port_of_Spain": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
    },
    "Pacific/Funafuti": {
      standard_time: "UTC+12",
      daylight_saving_time: "N/A",
    },
    "Asia/Taipei": {
      standard_time: "UTC+8",
      daylight_saving_time: "N/A",
    },
    "Europe/Kiev": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },
    "Europe/Uzhgorod": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },
    "Europe/Zaporozhye": {
      standard_time: "UTC+2",
      daylight_saving_time: "UTC+3",
    },
    "Pacific/Wake": {
      standard_time: "UTC+12",
      daylight_saving_time: "N/A",
    },
    "America/New_York": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "America/Detroit": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "America/Kentucky/Louisville": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "America/Kentucky/Monticello": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "America/Indiana/Indianapolis": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "America/Indiana/Vincennes": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "America/Indiana/Winamac": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "America/Indiana/Marengo": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "America/Indiana/Petersburg": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "America/Indiana/Vevay": {
      standard_time: "UTC-5",
      daylight_saving_time: "UTC-4",
    },
    "America/Chicago": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
    },
    "America/Indiana/Tell_City": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
    },
    "America/Indiana/Knox": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
    },
    "America/Menominee": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
    },
    "America/North_Dakota/Center": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
    },
    "America/North_Dakota/New_Salem": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
    },
    "America/North_Dakota/Beulah": {
      standard_time: "UTC-6",
      daylight_saving_time: "UTC-5",
    },
    "America/Denver": {
      standard_time: "UTC-7",
      daylight_saving_time: "UTC-6",
    },
    "America/Boise": {
      standard_time: "UTC-7",
      daylight_saving_time: "UTC-6",
    },
    "America/Phoenix": {
      standard_time: "UTC-7",
      daylight_saving_time: "N/A",
    },
    "America/Los_Angeles": {
      standard_time: "UTC-8",
      daylight_saving_time: "UTC-7",
    },
    "America/Anchorage": {
      standard_time: "UTC-9",
      daylight_saving_time: "UTC-8",
    },
    "America/Juneau": {
      standard_time: "UTC-9",
      daylight_saving_time: "UTC-8",
    },
    "America/Sitka": {
      standard_time: "UTC-9",
      daylight_saving_time: "UTC-8",
    },
    "America/Metlakatla": {
      standard_time: "UTC-8",
      daylight_saving_time: "UTC-7",
    },
    "America/Yakutat": {
      standard_time: "UTC-9",
      daylight_saving_time: "UTC-8",
    },
    "America/Nome": {
      standard_time: "UTC-9",
      daylight_saving_time: "UTC-8",
    },
    "America/Adak": {
      standard_time: "UTC-10",
      daylight_saving_time: "UTC-9",
    },
    "Pacific/Honolulu": {
      standard_time: "UTC-10",
      daylight_saving_time: "N/A",
    },
    "America/Montevideo": {
      standard_time: "UTC-3",
      daylight_saving_time: "UTC-2",
    },
    "Asia/Samarkand": {
      standard_time: "UTC+5",
      daylight_saving_time: "UTC+6",
    },
    "Asia/Tashkent": {
      standard_time: "UTC+5",
      daylight_saving_time: "UTC+6",
    },
    "America/Caracas": {
      standard_time: "UTC-4",
      daylight_saving_time: "N/A",
    },
    "Asia/Ho_Chi_Minh": {
      standard_time: "UTC+7",
      daylight_saving_time: "N/A",
    },
    "Pacific/Efate": {
      standard_time: "UTC+11",
      daylight_saving_time: "N/A",
    },
    "Pacific/Wallis": {
      standard_time: "UTC+12",
      daylight_saving_time: "N/A",
    },
    "Pacific/Apia": {
      standard_time: "UTC+13",
      daylight_saving_time: "UTC+14",
    },
    "Africa/Johannesburg": {
      standard_time: "UTC+2",
      daylight_saving_time: "N/A",
    },
  },
];

module.exports = TIMEZONES;
