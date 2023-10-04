import Card from "./Card";
import logo from '../images/logo.png'; // Tell Webpack this JS file uses this image
<img src={logo}/>

function Services() {
    return (
        <div className="container services">
            <h2 className="main-title text-center">UZMANLIK ALANLARIM</h2>
            <div className="card-cover">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Card title="Obezite Cerrahisi" img={logo} short="Özellikle endüstrileşmiş toplumlarda sıklığı giderek artan obezite sigaradan sonra en sık önlenebilir ölüm nedenidir.
                                  Obezite basitçe  vücuttaki yağ oranının normalden fazla bulunması olarak tanımlanabilir."
                                  text="Özellikle endüstrileşmiş toplumlarda sıklığı giderek artan obezite sigaradan sonra en sık önlenebilir ölüm nedenidir.
                                  Obezite basitçe  vücuttaki yağ oranının normalden fazla bulunması olarak tanımlanabilir. Bu durum belli sınırları aştığında artık bir hastalık olarak kabul edilir (morbid obezite) ve beraberinde pek çok hastalığa zemin hazırlar. Kalp damar hastalıkları, diyabet, uyku apnesi , polikistik over sendromları, çeşitli kas iskelet sistemi bozuklukları gibi pek çok hastalık  bu duruma eşlik edebilir. Bunların dışında bireyin özbeğeni sorunları, yeterliliklerinin azalması, toplumsal dışlanma da yaşam kalitesini olumsuz etkiler.
                                  En doğru yaklaşım öncelikle diyet, egzersiz  ve yaşam değişikliklerini uygulayarak  sorunun morbid obezite düzeyine ulaşmadan çözülmesi olmalıdır. Buna karşın bunu sağlamada veya idamede zorluk yaşayan bireyler için destek tedavileri gündeme gelir.
Bu konuda çeşitli çözüm araçları bize yardımcı olur:
Beraberinde insülin direnci veya diyabeti bulunan hastalarda çeşitli ilaç tedavileri
Ameliyat dışı yöntemler
Mide balonu uygulamaları
Yutulabilir mide balonu
Endoskopik yerleştirilen mide balonları
6  aylık mide balonları
12 aylık ayarlanabilir mide balonları
Mide Botoksu ( etkinliği ile ilgili tartışmalar devam etmektedir)
Obezite veya metabolik cerrahi ameliyatları
Tüp mide (sleeve gastrektomi)
Bypass prosedürleri ( Roux en Y veya mini gastrik by-pass)
Biliopankreatik diversiyon, duodenal switch, transit bipartisyon gibi yöntemler
  Şu anda kabul edilebilir kalıcı kilo kaybı sağlayan tek işlem cerrahi operasyonlardır.
"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Card title="Meme Hastalıkları" img={logo}
                                  short="Meme, bebeğin beslenme ihtiyaçlarını karşılamak görevi olan, değişime uğramış bir ter bezidir.
Organa ait pek çok iyi ve kötü huylu hastalık gelişebilir. Meme kanseri kadınlarda en sık rastlanan kanser türüdür ve maalesef sıklığı giderek artmaktadır."
                                  text="Meme, bebeğin beslenme ihtiyaçlarını karşılamak görevi olan, değişime uğramış bir ter bezidir.
Organa ait pek çok iyi ve kötü huylu hastalık gelişebilir. Meme kanseri kadınlarda en sık rastlanan kanser türüdür ve maalesef sıklığı giderek artmaktadır. Bunun yanında kadınların yaklaşık %75’i hayatlarının bir döneminde meme ile ilgili sorun yaşarlar. En sık gözlenen hastalıkları; meme ağrısı (dönemsel veya sürekli), memenin iltihabi durumları (en sık emzirme döneminde), memenin  iyi huylu kitleleri (kist ve solid kitleler), meme başı akıntıları  ve meme kanseridir.
Unutulmaması gereken meme ile ilgili hiç bir şikayetin ihmal edilmemesi ve atlanmamasıdır. Ergenlikten itibaren kendi kendine meme muayenesi ve ilerleyen yaşlarda doktor muayenesi, görüntüleme yöntemleri ile tanısal yaklaşımlar her kadın için gereklidir.

Meme hastalıklarında karşılaşılan bulgular neler olabilir?

Memede ağrı,
Ele gelen yumru veya sertlik varlığı,
Kızarıklık, apse gelişimi
Meme başından akıntı gelmesi (çeşitli renklerde),
Meme derisinde renk değişiklikleri ve yapısal farklılıklar (kızarıklık, şişlik kabuklanma) ,
Memeler arasında şekil farklılıkları, çekinti ve gamzelenmeler,
Koltukaltında şişlik ve yumrular,
Kolda şişlik ve ödem olması "/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Card title="Anal Bölge Hastalıkları" img={logo}
                                  short="Anal bölge; bağırsakların son kısmı ile cildin birleşme alanı arasındaki bölge olarak tanımlanabilir. Halk arasında makat bölgesi olarak da adlandırılır. Anal bölgede gelişebilen pek çok hastalık rektal (makattan) kanama, ağrı  ve irinli akıntı, bu bölgede meme oluşumu  şeklinde bulgu ile karşımıza çıkabilir. "
                                  text="Anal bölge; bağırsakların son kısmı ile cildin birleşme alanı arasındaki bölge olarak tanımlanabilir. Halk arasında makat bölgesi olarak da adlandırılır. Anal bölgede gelişebilen pek çok hastalık rektal (makattan) kanama, ağrı  ve irinli akıntı, bu bölgede meme oluşumu  şeklinde bulgu ile karşımıza çıkabilir. Her ne kadar bulgular birbirine benzese de bu şikayetleri yapan hastalıklar ve tedavi yöntemleri birbirinden tamamen farklıdır. Yanlış bir kanı anüsten kan gelmesinin sadece hemoroide bağlı olduğunun sanılmasıdır. En kötü olasılık olsa da bağırsağın son kısımlarında gelişen kanserler de bu bulguyu yaratabilir. Toplumsal çekincelerin olması bu alandaki şikayetler için hekime gitmenin gecikmesine yol açar ve bu da erken dönemde çok kolay tedavi olabilecek hastalıkların karmaşıklaşmasına ve tedavilerinin zorlaşmasına neden olur.
 Başlıca anal bölge ve çevre hastalıkları şunlardır:
Hemoroidal hastalıklar
Anal fissürler (makat çatlağı)
Anal fistüller
Perianal ve anal apseler
Pilonidal sinüs hastalığı (kıl dönmesi)
Rektal kanserler
Soliter rektal ülser, Crohn hastalığı, Colitis ülseroza gibi daha nadir gözlenen hastalıklar
Rektal prolapsus (bardağın dışarı doğru sarkması)
"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
