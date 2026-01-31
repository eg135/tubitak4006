// Haritadaki tüm illeri seçiyoruz
const iller = document.querySelectorAll('svg path');
const bilgiKutusu = document.getElementById('bilgi');

// Özel sayfası olan illerin listesi (Küçük harf ve Türkçe karakter olmadan yazıyoruz)
const ozelIller = [
    "istanbul", 
    "bursa", 
    "edirne", 
    "izmir", 
    "burdur", 
    "manisa", 
    "ankara", 
    "kayseri", 
    "kirsehir", 
    "kahramanmaras", 
    "trabzon", 
    "antalya"
];

// Türkçe karakterleri İngilizceye çeviren fonksiyon
// Örnek: "Kırşehir" -> "kirsehir" yapar
function dosyaIsmineCevir(text) {
    return text
        .replace(/Ğ/g, "g").replace(/ğ/g, "g")
        .replace(/Ü/g, "u").replace(/ü/g, "u")
        .replace(/Ş/g, "s").replace(/ş/g, "s")
        .replace(/İ/g, "i").replace(/ı/g, "i")
        .replace(/Ö/g, "o").replace(/ö/g, "o")
        .replace(/Ç/g, "c").replace(/ç/g, "c")
        .toLowerCase(); // Hepsini küçük harf yap
}

iller.forEach(il => {
    // 1. Mouse üzerine gelince
    il.addEventListener('mouseenter', function() {
        const ilAdi = this.getAttribute('title') || "Bilinmeyen İl";
        bilgiKutusu.innerHTML = `<strong>${ilAdi}</strong>`;
    });

    // 2. Mouse gidince
    il.addEventListener('mouseleave', function() {
        bilgiKutusu.innerHTML = "Lütfen bir il seçiniz...";
    });

    // 3. Tıklama Olayı (Yönlendirme Mantığı Burada)
    il.addEventListener('click', function() {
        // SVG'den ilin adını alıyoruz (Örn: "Kahramanmaraş")
        const orjinalIsim = this.getAttribute('title'); 
        
        if (orjinalIsim) {
            // İsmi dosya adına çeviriyoruz (Örn: "kahramanmaras")
            const dosyaAdi = dosyaIsmineCevir(orjinalIsim);

            // Eğer bu isim bizim özel listemizde varsa
            if (ozelIller.includes(dosyaAdi)) {
                // O ilin sayfasına git
                window.location.href = dosyaAdi + ".html";
            } else {
                // Listede yoksa "yakında" sayfasına git
                window.location.href = "yakinda.html";
            }
        }
    });
});