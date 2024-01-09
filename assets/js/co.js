  let measurements1 = [
    { time: '00:00', value: 8 },
    { time: '04:00', value: 19 },
    { time: '08:00', value: 30 },
    { time: '12:00', value: 22 },
    { time: '16:00', value: 12 },
    { time: '20:00', value: 23 },
    // Tambahkan data pengukuran berikutnya di sini
  ];

  // Mengambil elemen canvas untuk grafik
  let ctx1 = document.getElementById('coChart').getContext('2d');

  // Membuat objek grafik dengan Chart.js
  let myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: measurements1.map(entry => entry.time), // Waktu pengukuran
      datasets: [{
        label: 'Carbon Monoxide',
        data: measurements1.map(entry => entry.value), // Nilai SO2
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