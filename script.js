// Membuat tombol piihan Batu, Gunting dan Kertas
function buatTombol(element, arrayTeks) {
  for (let i = 0; i < element; i++) {
    let button = document.createElement("button");
    let teks = document.createTextNode(arrayTeks[i]);
    button.appendChild(teks);
    document.body.appendChild(button, teks);
    button.style.cursor = "pointer";
  }
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
  // mengambil button pada document
  const button = document.getElementsByTagName("button");
  for (let i = 0; i < button.length; i++) {
    const element = button[i];
    element.addEventListener("click", () => {
      if (element.textContent === "Batu" && komputer() === "Gunting") {
        console.log("Kamu Menang ,Komputer Kalah");
      } else if (element.textContent === "Batu" && komputer() === "Kertas") {
        console.log("Kamu Kalah, Komputer Menang");
      } else if (element.textContent === "Gunting" && komputer() === "Batu") {
        console.log("Kamu Kalah, Komputer Menang");
      } else if (element.textContent === "Gunting" && komputer() === "Kertas") {
        console.log("Kamu Menang, Komputer Kalah");
      } else if (element.textContent === "Kertas" && komputer() === "Batu") {
        console.log("Kamu Menang, Komputer Kalah");
      } else {
        console.log("SERI");
      }
    });
  }
}
aturanMain();

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

        if (r <= 30 && g <= 30 && b <= 30) {
          element.style.color = "white";
          console.log(true);
        } else {
          element.style.color = "black";
          console.log(false);
        }
      });
    }, 500);
  });
}

ubahWarna();
