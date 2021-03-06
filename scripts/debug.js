var queryName = 'debug';
var query = window.location.search.substring(1);
var vars = query.split('&');
var sanitized = [];
var addParam = true;

if(debugTypeValue == undefined || debugTypeValue == null) {
	debugTypeValue = 'basic';
}

for (var i = 0; i < vars.length; i++) {
	var pair = vars[i].split('=');
	if (pair[0] != queryName) {
		if(pair[1] != undefined || pair[1] != null) {
			sanitized.push(pair[0]+'='+pair[1]);   
		} else {
			sanitized.push(pair[0]);
		}
	} else {
		if(pair[1] != undefined || pair[1] != null) {
			if(pair[1] != debugTypeValue) {
				addParam = true;
			} else {
				addParam = false;
			}
		} else {
			addParam = false;
		}
	}
}

if(sanitized.length > 0) {
	 query = sanitized.join('&');   
} else {
	query = '';   
}

if(query.length > 0) {
	if(addParam == true) {
		query = '?'+query+'&'+queryName+'='+debugTypeValue;
	} else {
		query = '?'+query;
	}
} else {
	if(addParam == true) {
		query = '?'+queryName+'='+debugTypeValue;
	} else {
		query = '';
	}
}

window.location.search = query;
