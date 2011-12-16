(function(global){
	console.log('Why do we need bones, Dr Victor Frankenstein?')
	
	if(global.Loki){
		var Loki = global.Loki
	}else{
		var Loki = global;
	}

	Loki.Bones = function(){
		this.isBones = true;
	}

})(typeof window  === 'undefined' ? exports : window);