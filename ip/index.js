//axios import buraya gelecek
import axios from 'axios';

var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
//require("babel-core/register");
//require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/188.119.61.110
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*const data={
  "sorgu":"188.119.61.110",
  "durum":"OK",
  "kıta":"Asia",
  "ülke":"Turkey",
  "ülkeKodu":"TR",
  "ülkebayrağı":"https:\/\/apis.ergineer.com\/ulkebayraklari\/TR",
  "bölge":"34",
  "bölgeAdı":"Istanbul",
  "şehir":"Istanbul",
  "zip":"34440",
  "enlem":41.03009999999999735109668108634650707244873046875,
  "boylam":28.96509999999999962483343551866710186004638671875,
  "saatdilimi":"Europe\/Istanbul",
  "parabirimi":"TRY",
  "isp":"TurkNet Iletisim Hizmetleri A.S.",
  "organizasyon":"TurkNet Iletisim Hizmetleri",
  "as":"AS12735 TurkNet Iletisim Hizmetleri A.S."
}	*/


/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/





const kartOlustur=(data)=>{
	const containerDiv=document.createElement("div");
containerDiv.classList.add("card");
const img1=document.createElement("img");
img1.src=data.ülkebayrağı;
const containerDiv2=document.createElement("div");
containerDiv2.classList.add("card-info");
const h3=document.createElement("h3");
h3.classList.add("ip");
h3.textContent=data.sorgu;
const p=document.createElement("p");
p.classList.add("ulke");
p.textContent=`${data.ülke} (${data.ülkeKodu})`;
const p1=document.createElement("p");
p1.textContent=`Enlem: ${data.enlem} Boylam: ${data.boylam}`;
const p2=document.createElement("p");
p2.textContent=`Şehir: ${data.şehir}`;
const p3=document.createElement("p");
p3.textContent=`Saat Dilimi: ${data.saatdilimi}`;
const p4=document.createElement("p");
p4.textContent=`Para Birimi: ${data.parabirimi}`;
const p5=document.createElement("p");
p5.textContent=`ISP: ${data.isp}`;
containerDiv2.append(h3,p,p1,p2,p3,p4,p5);
containerDiv.append(img1,containerDiv2);
	return containerDiv;
}
async function getData(){
await	ipAdresimiAl();
axios.get("https://apis.ergineer.com/ipgeoapi/"+benimIP).then((response)=>{
	document.querySelector(".cards").append(kartOlustur(response.data))});
}

getData();

/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek