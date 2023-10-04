import logo from '../images/IMG_0773.jpg'; // Tell Webpack this JS file uses this image
<img src={logo}/>

function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6">
            <img alt="about" src={logo} className="img-about" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">HAKKIMDA</h2>
            <p className="main-p">
              Münevver Moran Ankara Üniversitesi Ankara Tıp Fakültesinden 1994 yılında mezun oldu, Genel  Cerrahi asistanlık eğitimini Ankara Numune Eğitim ve Araştırma Hastanesi Genel Cerrahi kliniğinde  Ocak 1999’da tamamlayıp ve genel cerrahi uzmanı olarak  aynı hastanede çalışmaya başladı. 2011 Ocak ayında Genel Cerrahi Doçenti sıfatını aldı ve 2011 Kasım’dan itibaren Eğitim Görevlisi sıfatıyla görev yapmaya devam etti. 2019’dan itibaren Liv Ankara Hastanesinde 4 yıl süre ile çalıştı, bu sırada eş zamanlı olarak 2019’da Genel Cerrahi Profesörü ünvanını alarak İstinye Üniversitesi Tıp Fakültesi ve ardından Yüksek İhtisas Üniversitesi Tıp Fakültesi’nde öğretim üyeliği yaptı.  Mayıs 2023 den itibaren üniversitedeki görevinden emekli olup kendi kliniğinde görev yapmaktadır.
              <br></br>
              Türk Cerrahi Derneği Yeterlilik Soru Komisyonu, TCD  Yürütme Kurulu, Bariatrik ve Metabolik Cerrahi Derneği Yönetim Kurulu Üyeliği, Ulusal Travma ve Acil Cerrahi Derneği Yönetim Kurulu, Geriatri derneği yönetim kurulu üyeliği görevlerini yaptı.Ulusal ve uluslararası bilimsel dergilerde hakemlik görevini yürütmektedir.
              <br></br>
              Birisi Türk Cerrahi Yeterlilik Sınavı birinciliği olmak üzere  sekiz adet ulusal ve uluslararası kongre ödüllerine sahiptir.
              <br></br>
              Cerrahi alanında üç kongrenin düzenlenmesinde görev almıştır. Kongrelerin bilimsel kurullarında yer almıştır.
              <br></br>
              Tıbbi kitap bölüm yazarlıkları, editör yardımcılığı, çok sayıda uluslararası kitap bölümünün  dilimize çevirilmesinde katkıları vardır yapmıştır. Uluslararası dergilerde yayınlanmış 40 dan fazla bilimsel yayını ve makalelerine  2023 verilerine göre 943 atıfı bulunmaktadır ISI Web of Science verilerine göre SCI’deki dergilerde yapılmış çok sayıda atıf bulunmaktadır.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
