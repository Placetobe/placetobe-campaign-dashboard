Polymer({
	is: "can-country-selectbox",
	properties: {
		name: String,
		required: {
			type: Boolean,
			value: false
		},
		value: {
			type: String,
			notify: true,
			value: "Nederland"
		},
		placeholder: String,
		countries: {
			type: Array,
			value: [
				{name:"Nederland", value: "Nederland"},
				{name:"Afghanistan", value: "Afghanistan"},
				{name:"Albanië", value: "Albanië"},
				{name:"Algerije", value: "Algerije"},
				{name:"Amerikaanse Maagdeneilanden", value: "Amerikaanse Maagdeneilanden"},
				{name:"Andorra", value: "Andorra"},
				{name:"Angola", value: "Angola"},
				{name:"Anguilla", value: "Anguilla"},
				{name:"Antigua en Barbuda", value: "Antigua en Barbuda"},
				{name:"Argentinië", value: "Argentinië"},
				{name:"Armenië", value: "Armenië"},
				{name:"Aruba", value: "Aruba"},
				{name:"Australië", value: "Australië"},
				{name:"Azerbeidzjan", value: "Azerbeidzjan"},
				{name:"Bahama's", value: "Bahama's"},
				{name:"Bahrein", value: "Bahrein"},
				{name:"Bangladesh", value: "Bangladesh"},
				{name:"Barbados", value: "Barbados"},
				{name:"België", value: "België"},
				{name:"Belize", value: "Belize"},
				{name:"Benin", value: "Benin"},
				{name:"Bermuda", value: "Bermuda"},
				{name:"Bhutan", value: "Bhutan"},
				{name:"Bolivia", value: "Bolivia"},
				{name:"Bosnië en Herzegovina", value: "Bosnië en Herzegovina"},
				{name:"Botswana", value: "Botswana"},
				{name:"Brazilië", value: "Brazilië"},
				{name:"Britse Maagdeneilanden", value: "Britse Maagdeneilanden"},
				{name:"Brunei", value: "Brunei"},
				{name:"Bulgarije", value: "Bulgarije"},
				{name:"Burkina Faso", value: "Burkina Faso"},
				{name:"Burundi", value: "Burundi"},
				{name:"Cambodja", value: "Cambodja"},
				{name:"Canada", value: "Canada"},
				{name:"Centraal-Afrikaanse Republiek", value: "Centraal-Afrikaanse Republiek"},
				{name:"Chili", value: "Chili"},
				{name:"China", value: "China"},
				{name:"Colombia", value: "Colombia"},
				{name:"Comoren", value: "Comoren"},
				{name:"Congo-Brazzaville", value: "Congo-Brazzaville"},
				{name:"Congo-Kinshasa", value: "Congo-Kinshasa"},
				{name:"Cookeilanden", value: "Cookeilanden"},
				{name:"Costa Rica", value: "Costa Rica"},
				{name:"Cuba", value: "Cuba"},
				{name:"Curacao", value: "Curacao"},
				{name:"Cyprus", value: "Cyprus"},
				{name:"Denemarken", value: "Denemarken"},
				{name:"Djibouti", value: "Djibouti"},
				{name:"Dominica", value: "Dominica"},
				{name:"Dominicaanse Republiek", value: "Dominicaanse Republiek"},
				{name:"Duitsland", value: "Duitsland"},
				{name:"Ecuador", value: "Ecuador"},
				{name:"Egypte", value: "Egypte"},
				{name:"El Salvador", value: "El Salvador"},
				{name:"Engeland", value: "Engeland"},
				{name:"Equatoriaal Guinea", value: "Equatoriaal Guinea"},
				{name:"Eritrea", value: "Eritrea"},
				{name:"Estland", value: "Estland"},
				{name:"Ethiopië", value: "Ethiopië"},
				{name:"Faeröer", value: "Faeröer"},
				{name:"Fiji", value: "Fiji"},
				{name:"Filipijnen", value: "Filipijnen"},
				{name:"Finland", value: "Finland"},
				{name:"Frankrijk", value: "Frankrijk"},
				{name:"Frans Polynesië", value: "Frans Polynesië"},
				{name:"Gabon", value: "Gabon"},
				{name:"Gambia", value: "Gambia"},
				{name:"Georgië", value: "Georgië"},
				{name:"Ghana", value: "Ghana"},
				{name:"Gibraltar", value: "Gibraltar"},
				{name:"Grenada", value: "Grenada"},
				{name:"Griekenland", value: "Griekenland"},
				{name:"Groenland", value: "Groenland"},
				{name:"Guam", value: "Guam"},
				{name:"Guatamala", value: "Guatamala"},
				{name:"Guernsey", value: "Guernsey"},
				{name:"Guinee", value: "Guinee"},
				{name:"Guinee-Bissau", value: "Guinee-Bissau"},
				{name:"Guyana", value: "Guyana"},
				{name:"Haïti", value: "Haïti"},
				{name:"Honduras", value: "Honduras"},
				{name:"Hong Kong", value: "Hong Kong"},
				{name:"Hongarije", value: "Hongarije"},
				{name:"Ierland", value: "Ierland"},
				{name:"IJsland", value: "IJsland"},
				{name:"India", value: "India"},
				{name:"Indonesië", value: "Indonesië"},
				{name:"Irak", value: "Irak"},
				{name:"Iran", value: "Iran"},
				{name:"Israël", value: "Israël"},
				{name:"Italië", value: "Italië"},
				{name:"Ivoorkust", value: "Ivoorkust"},
				{name:"Jamaica", value: "Jamaica"},
				{name:"Japan", value: "Japan"},
				{name:"Jemen", value: "Jemen"},
				{name:"Jersey", value: "Jersey"},
				{name:"Jordanië", value: "Jordanië"},
				{name:"Kaaimaneilanden", value: "Kaaimaneilanden"},
				{name:"Kaapverdië", value: "Kaapverdië"},
				{name:"Kameroen", value: "Kameroen"},
				{name:"Kazachstan", value: "Kazachstan"},
				{name:"Kenia", value: "Kenia"},
				{name:"Kirgizië", value: "Kirgizië"},
				{name:"Kiribati", value: "Kiribati"},
				{name:"Koeweit", value: "Koeweit"},
				{name:"Kosovo", value: "Kosovo"},
				{name:"Kroatië", value: "Kroatië"},
				{name:"Laos", value: "Laos"},
				{name:"Lesotho", value: "Lesotho"},
				{name:"Letland", value: "Letland"},
				{name:"Libanon", value: "Libanon"},
				{name:"Liberia", value: "Liberia"},
				{name:"Libië", value: "Libië"},
				{name:"Liechtenstein", value: "Liechtenstein"},
				{name:"Litouwen", value: "Litouwen"},
				{name:"Luxemburg", value: "Luxemburg"},
				{name:"Macau", value: "Macau"},
				{name:"Macedonië", value: "Macedonië"},
				{name:"Madagaskar", value: "Madagaskar"},
				{name:"Malawi", value: "Malawi"},
				{name:"Malediven", value: "Malediven"},
				{name:"Maleisië", value: "Maleisië"},
				{name:"Mali", value: "Mali"},
				{name:"Malta", value: "Malta"},
				{name:"Man", value: "Man"},
				{name:"Marokko", value: "Marokko"},
				{name:"Marshalleilanden", value: "Marshalleilanden"},
				{name:"Mauritanië", value: "Mauritanië"},
				{name:"Mauritius", value: "Mauritius"},
				{name:"Mexico", value: "Mexico"},
				{name:"Micronesia", value: "Micronesia"},
				{name:"Moldavië", value: "Moldavië"},
				{name:"Monaco", value: "Monaco"},
				{name:"Mongolië", value: "Mongolië"},
				{name:"Montenegro", value: "Montenegro"},
				{name:"Montserrat", value: "Montserrat"},
				{name:"Mozambique", value: "Mozambique"},
				{name:"Myanmar", value: "Myanmar"},
				{name:"Namibië", value: "Namibië"},
				{name:"Nauru", value: "Nauru"},
				{name:"Nepal", value: "Nepal"},
				{name:"Nicaragua", value: "Nicaragua"},
				{name:"Nieuw-Zeeland", value: "Nieuw-Zeeland"},
				{name:"Niger", value: "Niger"},
				{name:"Nigeria", value: "Nigeria"},
				{name:"Niue", value: "Niue"},
				{name:"Noord-Ierland", value: "Noord-Ierland"},
				{name:"Noord-Korea", value: "Noord-Korea"},
				{name:"Noordelijke Marianen", value: "Noordelijke Marianen"},
				{name:"Noorwegen", value: "Noorwegen"},
				{name:"Oeganda", value: "Oeganda"},
				{name:"Oekraïne", value: "Oekraïne"},
				{name:"Oezbekistan", value: "Oezbekistan"},
				{name:"Oman", value: "Oman"},
				{name:"Oostenrijk", value: "Oostenrijk"},
				{name:"Oost-Timor", value: "Oost-Timor"},
				{name:"Pakistan", value: "Pakistan"},
				{name:"Palau", value: "Palau"},
				{name:"Panama", value: "Panama"},
				{name:"Papoea-Nieuw-Guinea", value: "Papoea-Nieuw-Guinea"},
				{name:"Paraguay", value: "Paraguay"},
				{name:"Peru", value: "Peru"},
				{name:"Polen", value: "Polen"},
				{name:"Portugal", value: "Portugal"},
				{name:"Puerto Rico", value: "Puerto Rico"},
				{name:"Qatar", value: "Qatar"},
				{name:"Roemenië", value: "Roemenië"},
				{name:"Rusland", value: "Rusland"},
				{name:"Rwanda", value: "Rwanda"},
				{name:"Saint Kitts en Nevis", value: "Saint Kitts en Nevis"},
				{name:"Saint Lucia", value: "Saint Lucia"},
				{name:"Saint Vincent en de Grenadines", value: "Saint Vincent en de Grenadines"},
				{name:"Salomonseilanden", value: "Salomonseilanden"},
				{name:"Samoa", value: "Samoa"},
				{name:"San Marino", value: "San Marino"},
				{name:"Sao Tomé en Principe", value: "Sao Tomé en Principe"},
				{name:"Saoedi-Arabië", value: "Saoedi-Arabië"},
				{name:"Schotland", value: "Schotland"},
				{name:"Senegal", value: "Senegal"},
				{name:"Servië", value: "Servië"},
				{name:"Seychellen", value: "Seychellen"},
				{name:"Sierra Leone", value: "Sierra Leone"},
				{name:"Singapore", value: "Singapore"},
				{name:"Sint Maarten", value: "Sint Maarten"},
				{name:"Slovenië", value: "Slovenië"},
				{name:"Slowakije", value: "Slowakije"},
				{name:"Soedan", value: "Soedan"},
				{name:"Somalië", value: "Somalië"},
				{name:"Spanje", value: "Spanje"},
				{name:"Sri Lanka", value: "Sri Lanka"},
				{name:"Suriname", value: "Suriname"},
				{name:"Swaziland", value: "Swaziland"},
				{name:"Syrië", value: "Syrië"},
				{name:"Tadzjikistan", value: "Tadzjikistan"},
				{name:"Taiwan", value: "Taiwan"},
				{name:"Tanzania", value: "Tanzania"},
				{name:"Thailand", value: "Thailand"},
				{name:"Togo", value: "Togo"},
				{name:"Tonga", value: "Tonga"},
				{name:"Trinidad en Tobago", value: "Trinidad en Tobago"},
				{name:"Tsjaad", value: "Tsjaad"},
				{name:"Tsjechië", value: "Tsjechië"},
				{name:"Tunesië", value: "Tunesië"},
				{name:"Turkije", value: "Turkije"},
				{name:"Turkmenistan", value: "Turkmenistan"},
				{name:"Turks en Caicoseilanden", value: "Turks en Caicoseilanden"},
				{name:"Tuvalu", value: "Tuvalu"},
				{name:"Uruguay", value: "Uruguay"},
				{name:"Vanuatu", value: "Vanuatu"},
				{name:"Vaticaanstad", value: "Vaticaanstad"},
				{name:"Venezuela", value: "Venezuela"},
				{name:"Verenigd Koninkrijk", value: "Verenigd Koninkrijk"},
				{name:"Verenigde Arabische Emiraten", value: "Verenigde Arabische Emiraten"},
				{name:"Verenigde Staten van Amerika", value: "Verenigde Staten van Amerika"},
				{name:"Vietnam", value: "Vietnam"},
				{name:"Wales", value: "Wales"},
				{name:"Wit-Rusland", value: "Wit-Rusland"},
				{name:"Zambia", value: "Zambia"},
				{name:"Zimbabwe", value: "Zimbabwe"},
				{name:"Zuid-Afrika", value: "Zuid-Afrika"},
				{name:"Zuid-Korea", value: "Zuid-Korea"},
				{name:"Zweden", value: "Zweden"},
				{name:"Zwitserland", value: "Zwitserland"}
			]
		}
	}
})
