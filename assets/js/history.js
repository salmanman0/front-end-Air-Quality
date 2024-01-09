let lastco = measurements1[measurements1.length - 1];
let lastKelembapan = measurements2[measurements2.length - 1];
let lastnh3 = measurements3[measurements3.length - 1];
let lastno2 = measurements4[measurements4.length - 1];
let lasto3 = measurements5[measurements5.length - 1];
let lastso2 = measurements6[measurements6.length - 1];
let lastsuhu = measurements7[measurements7.length - 1];

let dayNames = ['Kamis', 'Jumat', 'Sabtu', 'Minggu','Senin', 'Selasa', 'Rabu']; // Nama hari
let nh3Data = [12, 22, 14, 25, 16, 17, lastnh3.value]; // Contoh data NH3
let no2Data = [10, 12, 14, 16, 18, 20, lastno2.value]; // Contoh data NO2
let kelembapanData = [14, 23, 37, 28, 29, 21, lastKelembapan.value]; // Contoh data kelembapan
let o3Data = [21, 22, 19, 18, 19, 22, lasto3.value]; // Contoh data O3
let so2Data = [24, 14, 11, 16, 11, 24, lastso2.value]; // Contoh data SO2
let suhuData = [25, 19, 12, 19, 12, 25, lastsuhu.value]; // Contoh data suhu
let coData = [22, 11, 17, 16, 17, 23, lastco.value]; // Contoh data CO

let ctx = document.getElementById('historicalChart').getContext('2d');

let historicalChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: dayNames,
    datasets: [
      {
        label: 'NH3',
        data: nh3Data,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        fill: false
      },
      {
        label: 'NO2',
        data: no2Data,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false
      },
      {
        label: 'Kelembapan',
        data: kelembapanData,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
        fill: false
      },
      {
        label: 'O3',
        data: o3Data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false
      },
      {
        label: 'SO2',
        data: so2Data,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        fill: false
      },
      {
        label: 'Suhu',
        data: suhuData,
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
        fill: false
      },
      {
        label: 'CO',
        data: coData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
