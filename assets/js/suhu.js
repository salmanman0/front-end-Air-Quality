  // Data pengukuran suhu (contoh data)
  let measurements7 = [
    { time: '00:00', value: 10 },
    { time: '04:00', value: 15 },
    { time: '08:00', value: 12 },
    { time: '12:00', value: 18 },
    { time: '16:00', value: 10 },
    { time: '20:00', value: 20 },
    // Tambahkan data pengukuran berikutnya di sini
  ];

  // Mengambil elemen canvas untuk grafik
  let ctx7 = document.getElementById('suhuChart').getContext('2d');

  // Membuat objek grafik dengan Chart.js
  let myChart7 = new Chart(ctx7, {
    type: 'line',
    data: {
      labels: measurements7.map(entry => entry.time), // Waktu pengukuran
      datasets: [{
        label: 'SUHU',
        data: measurements7.map(entry => entry.value), // Nilai suhu
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Warna area di bawah grafik
        borderColor: 'rgba(255, 99, 132, 1)', // Warna garis grafik
        borderWidth: 1,
        fill: true // Mengisi area di bawah grafik
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true // Mulai skala dari nol
        }
      }
    }
  });