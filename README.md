
# objectToFormData
transforms object into FormData. Very useful especially for uploading files with data. Very lightweight: less than 1kb

# Install
```sh
npm install @cresjie/object-to-form-data
```

# API
```javascript
objectToFormData(object)
```

# Usage
```javascript
import  objectToFormData  from '@cresjie/object-to-form-data'; //for node module

var obj = {
	/** key-value pair **/
	greetings: 'hey',
	sampleBoolean: true,
	number: 123,
	datenow: new Date,
	// touploadfile: File Object
	countries: ['PH', 'USA', 'UK'],
	users: [
		{
			id: 1,
			name: 'cres'
		},
		{
			id: 2,
			name: 'jane'
		}
	],
}
var fd = objectToFormData(obj);

console.log(fd.get('sampleBoolean'));
console.log(fd.get('number'));
console.log(fd.get('datenow'));
console.log(fd.get('countries[0]'));
console.log(fd.get('users[0][name]'));
```
