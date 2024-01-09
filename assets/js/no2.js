let measurements4 = [
  { time: '00:00', value: 10 },
  { time: '04:00', value: 15 },
  { time: '08:00', value: 12 },
  { time: '12:00', value: 18 },
  { time: '16:00', value: 10 },
  { time: '20:00', value: 15 },
  // Tambahkan data pengukuran berikutnya di sini
];

// Mengambil elemen canvas untuk grafik
let ctx4 = document.getElementById('no2Chart').getContext('2d');

// Membuat objek grafik dengan Chart.js
let myChart4 = new Chart(ctx4, {
  type: 'line',
  data: {
    labels: measurements4.map(entry => entry.time), // Waktu pengukuran
    datasets: [{
      label: 'Nitrogen Dioxide',
      data: measurements4.map(entry => entry.value), // Nilai SO2
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