let name = document.getElementById('name');
let email = document.getElementById('email');
let donation = document.getElementById('donation');
let perLap = document.getElementById('per-lap');
let donateBtn = document.getElementById('donate-btn');
let cancelBtn = document.getElementById('cancel-btn');
let table = document.getElementById('table');


function addToTable() {
	let donors = donorInfo.getDonors();
	let content = '';
	for (let i = 0; i < donors.length; i++) {
		let tr = document.createElement('tr');
		content += `
			<tr>
				<td>${donors[i].name}</td>
				<td>${donors[i].email}</td>
				<td>${donors[i].amount}</td>
				<td>${checkPerLap(donors[i].perLap)}</td>
			</tr>
		`;
	}
	table.innerHTML = content;
}

function checkPerLap (bool) {
	if (bool) {return 'Yes';} else {return 'No';}
}

function inputDonor() {
	donorInfo.addDonor(name.value, email.value, donation.value, perLap.checked);
	console.log("donors", donorInfo.getDonors());
}

function clearInput() {
	name.value = '';
	email.value = '';
	donation.value = '';
}

donateBtn.addEventListener('click', function () {
	inputDonor();
	addToTable();
});
cancelBtn.addEventListener('click', clearInput);