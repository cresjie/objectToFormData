(function(global, factory){
	"use strict";
	
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.objectToFormData = factory());

})(this, function(global){

	function isArray(d) {
		return Array.isArray(d)
	}

	function isObject(d){
		return Object(d) === d
	}

	function appendFormdata(formdata, data, name){
		name = name || '';
	    if (data && ( isObject(data) ||  isArray(data) ) ){


	    	var keyCount = 	(isObject(data) ? Object.keys(data) : data).length;
	    	if (!keyCount) {
	    		formdata.append(name, '');
	    	} else {
	    		for(var index in data) {

		    		appendFormdata(formdata, data[index], name == '' ? index : name + '['+index+']' ); 
		    		
		    	}
	    	}

	    	
	       
	    } else {

	    	formdata.append(name, data == null || data == undefined ? '' : 

	    		typeof value == 'boolean' ? Number(data) : 
	    		data instanceof Date? data.toISOString() :
	    		data
	    	);
	    }

	    return formdata

	}

	return function(obj){
		return appendFormdata(new FormData, obj);
	};
});