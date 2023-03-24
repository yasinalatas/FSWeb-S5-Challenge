const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  let headbox = document.createElement("div");
  headbox.classList.add("header");

  let spanbox = document.createElement("span");
  spanbox.classList.add("date");
  spanbox.textContent = tarih;

  let createdh1 = document.createElement("h1");
  createdh1.textContent = baslik;

  let createdspan = document.createElement("span");
  createdspan.classList.add("temp");
  createdspan.textContent = yazi;

  headbox.append(spanbox, createdh1, createdspan);

  return headbox;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  const baslik = "Turkiyede Bugün";
  const tarih = "24.03.2023";
  const yazi = "Türkiyede bugün dolar artmadı.";

  const headerBileseni = Header(baslik, tarih, yazi);

  const seciliEleman = document.querySelector(secici);
  seciliEleman.appendChild(headerBileseni);
};

export { Header, headerEkleyici };
