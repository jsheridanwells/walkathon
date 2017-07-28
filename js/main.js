var donorInfo = function() {
	var donors = [
		{
			'name': 'Jeremy Wells',
			'email': 'Jeremy@example.com',
			'amount': 100,
			'perLap': true
		},
		{
			'name': 'Jessica Petunia',
			'email': 'Jessica@example.com',
			'amount': 30,
			'perLap': false
		},
		{
			'name': 'John Styles',
			'email': 'john@example.com',
			'amount': 55,
			'perLap': true
		},
	];
	return {
		getDonors: function() {
			return donors;
		},
		addDonor: function(name, email, amount, perLap) {
			donors.push({
				'name': name,
				'email': email,
				'amount': amount,
				'perLap': perLap
			});
		}
	}
}();