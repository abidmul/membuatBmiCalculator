//membuat bmi kalkulator sederhana
// tinggi badan dalam cm
const height = 170;

// berat badan dalam kg
const weight = 80;

// tinggi badan dari cm ke meter
const heightMeter = height / 100;

// Hitung BMI
const bmiResult =(weight / (heightMeter*heightMeter));

// Pembulatan dengan dua angka desimal menggunakan method tofixed(2)
const fixedBmi = bmiResult.toFixed(2)

// Tentukan kategori BMI
let category = '';
if (fixedBmi < 18.5) {
    category = 'Underweight';
} else if (fixedBmi >= 18.5 && fixedBmi <=24.9) {
    category = 'Normal';
} else if (fixedBmi >=25 && fixedBmi < 29.9) {
    category = 'Overweight';
} else {
    category = 'Obesitas';
}

// Tampilkan hasil
console.log(`BMI Kamu adalah ${fixedBmi} dan masuk ke category ${category}`);
