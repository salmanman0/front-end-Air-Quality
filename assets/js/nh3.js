  let measurements3 = [
    { time: '00:00', value: 10 },
    { time: '04:00', value: 15 },
    { time: '08:00', value: 12 },
    { time: '12:00', value: 18 },
    { time: '16:00', value: 10 },
    { time: '20:00', value: 22 },
    // Tambahkan data pengukuran berikutnya di sini
  ];

  // Mengambil elemen canvas untuk grafik
  let ctx3 = document.getElementById('nh3Chart').getContext('2d');

  // Membuat objek grafik dengan Chart.js
  let myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
      labels: measurements3.map(entry => entry.time), // Waktu pengukuran
      datasets: [{
        label: 'NH3',
        data: measurements3.map(entry => entry.value), // Nilai SO2
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