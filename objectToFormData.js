(function(global, factory){
	"use strict";
	
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.objectToFormData = factory());

})(this, function(global){

	 function appendFormdata(formdata, data, name){
		name = name || '';
	    if (data && (data.constructor == Object || data.constructor == Array) ){
	    	for(var index in data) {

	    		appendFormdata(formdata, data[index], name == '' ? index : name + '['+index+']' ); 
	    		
	    	}
	       
	    } else {

	    	formdata.append(name, data == null || data == undefined ? '' : 

	    		data.constructor == Boolean ? Number(data) : 
	    		data.constructor == Date ? data.toISOString() :
	    		data
	    	);
	    }

	    return formdata

	}

	return function(obj){
		return appendFormdata(new FormData, obj);
	};
});