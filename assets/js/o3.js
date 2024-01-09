let measurements5 = [
  { time: '00:00', value: 10 },
  { time: '04:00', value: 15 },
  { time: '08:00', value: 12 },
  { time: '12:00', value: 18 },
  { time: '16:00', value: 10 },
  { time: '20:00', value: 17 },
  // Tambahkan data pengukuran berikutnya di sini
];

// Mengambil elemen canvas untuk grafik
let ctx5 = document.getElementById('o3Chart').getContext('2d');

// Membuat objek grafik dengan Chart.js
let myChart5 = new Chart(ctx5, {
  type: 'line',
  data: {
    labels: measurements5.map(entry => entry.time), // Waktu pengukuran
    datasets: [{
      label: 'Ozone',
      data: measurements5.map(entry => entry.value), // Nilai SO2
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