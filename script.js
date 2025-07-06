// Membuat tombol piihan Batu, Gunting dan Kertas
function buatTombol(element, arrayTeks) {
  const wrap = document.createElement("div");
  for (let i = 0; i < element; i++) {
    const button = document.createElement("button");
    const teks = document.createTextNode(arrayTeks[i]);
    button.appendChild(teks);
    wrap.appendChild(button, teks);
    document.body.appendChild(wrap, button, teks);
    button.style.cursor = "pointer";
  }
  wrap.setAttribute("id", "wrap");
}
buatTombol(3, ["Batu", "Gunting", "Kertas"]);

// Buat pilihan random komputer
function komputer(komp) {
  const random = Math.floor(Math.random() * 100);
  komp = "";
  if (random < 30) {
    komp += "Batu";
  } else if (random >= 30 && random < 60) {
    komp += "Gunting";
  } else {
    komp += "Kertas";
  }
  return komp;
}

// Aturan main
function aturanMain() {
  const container = document.createElement("div");
  const info = document.createElement("h2");
  container.setAttribute("id", "popup");
  container.appendChild(info);
  
  document.body.appendChild(container, info);
  
  // mengambil button pada document
  const button = document.getElementsByTagName("button");
  
  // aturannya
  for (let i = 0; i < button.length; i++) {
    const element = button[i];
    element.addEventListener("click", () => {
      if (element.textContent === "Batu" && komputer() === "Gunting") {
        info.textContent = "Kamu Menang ,Komputer Kalah";
      } else if (element.textContent === "Batu" && komputer() === "Kertas") {
        info.textContent = "Kamu Kalah, Komputer Menang";
      } else if (element.textContent === "Gunting" && komputer() === "Batu") {
        info.textContent = "Kamu Kalah, Komputer Menang";
      } else if (element.textContent === "Gunting" && komputer() === "Kertas") {
        info.textContent = "Kamu Menang, Komputer Kalah";
      } else if (element.textContent === "Kertas" && komputer() === "Batu") {
        info.textContent = "Kamu Menang, Komputer Kalah";
      } else {
        info.textContent = "SERI";
      }
    });
  }
}

// Menambahkan Skor
function tambahSkor(judulKontainer) {
  // Buat elemen div sebagai pembungkusnya
  const div1 = document.createElement("div");
  judulKontainer = document.createElement(`${judulKontainer}`);
  div1.setAttribute("id", "container");
  
  // informasi skor
  const div2 = document.createElement("div");
  div2.setAttribute("class", "badan-skor")
  
  div1.appendChild(judulKontainer, div2);
  judulKontainer.setAttribute("class", "judul-container");
  judulKontainer.textContent = "Hasil Permainan";
  
  document.body.appendChild(div1, judulKontainer, div2);
  
  // fungsi untuk menambahkan skor otomatis
}
tambahSkor("h2");

// Ubah warna pada button secara acak
function ubahWarna() {
  const button = document.querySelectorAll("button");
  
  button.forEach((element) => {
    setInterval(() => {
      const r = Math.floor(Math.random() * 1 * 255);
      const g = Math.floor(Math.random() * 1 * 255);
      const b = Math.floor(Math.random() * 1 * 255);
      
      element.addEventListener("click", () => {
        element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      });
    }, 500);
  });
  aturanMain();
}
ubahWarna();