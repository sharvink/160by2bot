var onesixtybytwo = {
	
	cookies : [],

	login: function( mobile , password ,cb ){

		const http = require("http");
		
		const postData = JSON.stringify({
		  "userMobile1": mobile,
		  "userPwd1" : password
		});

		const options = {
		  hostname: 'm.160by2.com',
		  port: 80,
		  path: '/re-login',
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/x-www-form-urlencoded',
		    'Content-Length': Buffer.byteLength(postData)
		  }
		};

		const req = http.request(options, (res) => {
		  console.log(`STATUS: ${res.statusCode}`);
		  this.cookies = res.headers['set-cookie'];
		  res.setEncoding('utf8');
		  res.on('data', (chunk) => {
		    console.log(`BODY: ${chunk}`);
		  });
		  res.on('end', () => {
		    console.log('No more data in response.');
		    cb();
		  });
		});

		req.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);
		
		req.on('error', (e) => {
		  console.error(`problem with request: ${e.message}`);
		  cb(e);
		});

		// write data to request body
		req.write(postData);
		req.end();


	},
	send : function(){
//	http://m.160by2.com/Main.action?id=E9275275A705B815666DF4E64893F43C.8501


		const http = require("http");
		
		const options = {
		  hostname: 'm.160by2.com',
		  port: 80,
		  path: '/Main.action?id=E9275275A705B815666DF4E64893F43C.8501',
		  method: 'GET'
		};

		const req = http.request(options, (res) => {
		  console.log(`STATUS: ${res.statusCode}`);
		  //this.cookies = res.headers['set-cookie'];
		  res.setEncoding('utf8');
		  res.on('data', (chunk) => {
		    console.log(`BODY: ${chunk}`);
		  });
		  res.on('end', () => {
		    console.log('No more data in response.');
		    cb();
		  });
		});

		req.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);
		
		req.on('error', (e) => {
		  console.error(`problem with request: ${e.message}`);
		  cb(e);
		});

		// write data to request body
		req.write(postData);
		req.end();


	}

}

module.exports = onesixtybytwo;
