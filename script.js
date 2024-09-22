document.getElementById('ageForm').addEventListener('submit', function(event) {
	event.preventDefault();

	var tanggalLahir = new Date(document.getElementById('tanggalLahir').value);
	var hariIni = new Date();
	var umur = hariIni.getFullYear() - tanggalLahir.getFullYear();
	var bulan = hariIni.getMonth() - tanggalLahir.getMonth();
	var hari = hariIni.getDate() - tanggalLahir.getDate();

	if (bulan < 0 || (bulan === 0 && hari < 0)) {
		umur--;
		bulan += 12;
	}

	if (hari < 0) {
		var bulanLalu = new Date(hariIni.getFullYear(), hariIni.getMonth() - 1, 0);
		hari += bulanLalu.getDate();
		bulan--;
	}

	document.getElementById('result').innerHTML = 'umur anda adalah ' + umur + ' tahun, ' + bulan + ' bulan, dan ' + hari + ' hari.';
});