let img;
let bgatas;
//let populationSize = 0; // Ukuran populasi awal
//let carryingCapacity = 2000; // Kapasitas dukungan maksimum
let growthRate = 0.001; // Tingkat pertumbuhan populasi
let carryingCapacity;
let populationSize;
let population = [];
function preload() {
  img=loadImage('grafik.jpeg');
  bgatas=loadImage("bgatas.jpeg");
}
function setup() {
  createCanvas(1200, 2350);
  //input carrying c
  p=createInput(2000)
  p.position(1000, 525)
  p.changed(CP)
  CP();
 function CP(){
   carryingCapacity = (p.value())
} 
//input population
  j=createInput(10)
  j.position(700, 525)
  j.changed(popu)
  popu();
function popu(){
   populationSize = (j.value())
}
  for (let i = 0; i < populationSize; i++) {
    population.push(new Organism(random(width/2), random(2440,2800)));
  } 
}
function draw() {
  background("#FFEBCD");
  image(bgatas, 0, 0, 1200, 350);
  //Judul
  fill("black")
  textSize(40)
  textFont("Georgia")
  text("CARRYING CAPACITY",400,160)
  fill("white")
  textSize(40)
  textFont("Georgia")
  text("CARRYING CAPACITY",402,162)
  fill("black")
  textSize(30)
  textFont("Georgia")
  text("Petumbuhan Penduduk",450,200)
  fill("white")
  textSize(30)
  textFont("Georgia")
  text("Petumbuhan Penduduk",452,202)
   //SIMULASI
  // fill("#778899")
  // rect(0,1835,1200,450)
  image(img,360,1035,400,400) 
  fill("black")
  textSize(30)
  textFont("Georgia")
  text("SIMULASI",475,1020)
  fill("white")
  textSize(18)
  textFont("Courier New")
  text("",150,1900)
  text("",150,1930)
  text("",150,1960)
  text("",150,1990)
  //Anggota Kelompok
  fill("black")
  textSize(20)
  textFont("Times New Roman")
  text("By : ",10,1900)
  text("1. Desi Era P. Siregar", 10,1930)
  text("2. Lala Nathasya", 10,1960)
  text("3. Ike Mastita", 10,1990)
  text("4. Meliana Debora", 10,2020)
  text("5. Derri Setiawan", 10,2050)
  text("NIM",400,1900)
  text("121160029",400,1930)
  text("121160023",400,1960)
  text("121160036",400,1990)
  text("121160042",400,2020)
  text("122160051",400,2050)
  fill("black")
  textSize(50)
  text("Thank You",500,2200)
   //PEMBAHASAN
  noStroke();
  fill("#6495ED")
  rect(50,1470,1000,210, 20)
  fill("black")
  textSize(25)
  textFont("Georgia")
  text("PEMBAHASAN",475,1505)
  textSize(15)
  text("Lihat Proyek 3 untuk deskripsi   fungsi   kapasitas angkut logistik" ,120,1545)
  text("Dengan menggunakan informasi itu, kembangkan model untuk populasi Jepang  dari tahun 1100 hingga 2000.",120,1575)
  text("Dengan populasi awal 126,5 juta, populasi pulau itu terutama merupakan masyarakat feodal yang mendatar menjadi sekitar 130 juta. ",120,1605)
  text("Revolusi industri datang ke Jepang pada akhir abad kesembilan belas, dan populasi meningkat pesat selama periode 77 tahun,",120,1635)
  text("dengan titik belok terjadi sekitar tahun 1908 (Meyer dan Ausubel 1999)",120,1665)
  text("",120,1695)
  fill("black")
  textSize(30)
  textFont("Georgia")
  text("VISUALISASI",400,430)
  fill("black")
  textSize(15)
  textFont("Georgia")
  text("Masukan nilai populasi awal",700,515)
  text("Masukan nilai Carrying Capacity",1000,515)
//KESIMPULAN
  noStroke();
  fill("#6495ED")
  rect(50,1700,1000,110, 20)
  fill("black")
  textSize(25)
  text("KESIMPULAN",400,1730)
  textSize(15)
  text("Kesimpulan yang dapat diambil dari simulasi dan visualisasi data penduduk Jepang, dari tahun 1100-2000 jumlah penduduk Jepang",120,1760)
  text("mengalami pertumbuhan yang sangat pesat sehingga jumlah penduduk Jepang dari tahun ke ahun meningkat hingga tahun 2000.", 120,1790)
  // Menggambar populasi
  fill("white")
  rect(0,580,1200,390)
  for (let i = 1; i < population.length; i++) {
    population[i].display();
    population[i].update();
  }
  // Menghitung jumlah populasi
  let currentPopulation = population.length;
  // Menambahkan populasi jika belum mencapai kapasitas dukungan
  if (currentPopulation < carryingCapacity) {
    let newPopulation = currentPopulation * growthRate;
    for (let i = 0; i < newPopulation; i++) {
      population.push(new Organism(random(width), random(600,950)));
    }
  }
  // Membatasi jumlah populasi agar tidak melebihi kapasitas dukungan
  if (currentPopulation > carryingCapacity) {
    let excess = currentPopulation - carryingCapacity;
    population.splice(0, excess);
  }
  // Menampilkan informasi
  textSize(25);
  fill("black");
  text("Population: " + currentPopulation, 0, 500);
  text("Carrying Capacity: " + carryingCapacity, 0, 550);
}
// Kelas Organism (Organisme)
class Organism {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(0, 1), random(0, 1));
    this.radius = 4;
  }
  display() {
    fill("black");
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  }
  update() {
    this.position.add(this.velocity);
    // Memantulkan organisme ketika mencapai tepi
    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x *= -1;
    }
    if (this.position.y > 2800 || this.position.y < 2440) {
      this.velocity.y *= -1;
    }
  }
}