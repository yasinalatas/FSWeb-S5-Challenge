import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  let cardbox = document.createElement("div");
  cardbox.setAttribute("class", "card");

  let headbox = document.createElement("div");
  headbox.setAttribute("class", "headline");
  headbox.textContent = `${makale.anabaslik}`;
  cardbox.append(headbox);

  let authorbox = document.createElement("div");
  authorbox.classList.add("author");
  cardbox.append(authorbox);

  let imgbox = document.createElement("div");
  imgbox.classList.add("img-container");
  authorbox.append(imgbox);

  let imgElement = document.createElement("img");
  imgElement.src = `${makale.yazarFoto}`;
  imgbox.append(imgElement);

  const spanbox = document.createElement("span");
  spanbox.textContent = `${makale.yazarAdı} tarafından`;
  authorbox.appendChild(spanbox);

  cardbox.addEventListener("click", () => {
    console.log(headbox.textContent);
  });

  return cardbox;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  // Make a request for a user with a given ID
  axios
    .get("http://localhost:5001/api/makaleler")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};

export { Card, cardEkleyici };
