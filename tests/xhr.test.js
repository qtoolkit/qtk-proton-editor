describe('xhr', function() {
	before('xhr before', function() {
		console.log("xhr before");
	});
	
	beforeEach('xhr beforeEach', function() {
		console.log("xhr beforeEach");
	});

  it('get exist file', (done) => {
	fetch('/base/www/index.html')
	  .then(function(response) {
	  	done(response.ok ? null : new Error("File Should Exist."));
		return response.text();
	  }).then(function(body) {
	  	console.log(body);
	  });
  });
  
  this.timeout(1000);
  it('get not exist file', (done) => {
	fetch('/base/www/not_exist.html')
	  .then(function(response) {
	  	done(response.ok ? new Error("File Should Not Exist.") : null);
	  })
  });

});
