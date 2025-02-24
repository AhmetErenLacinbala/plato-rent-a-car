import Header from "@components/header";
import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="mt-32 text-white mx-auto rounded-lg shadow-lg pb-6">
            <Header text={"Gizlilik ve Çerez Politikası"} className="text-2xl font-bold border-b border-red-500 pb-2" />

            <div className="w-[80vw] mx-auto">

                {/* KVKK Bilgilendirmesi */}
                <section className="mt-4">
                    <h3 className="text-xl font-semibold">Kişisel Verilerin Korunması Aydınlatma Metni</h3>
                    <p className="mt-2">
                        Production a Car olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca,
                        kişisel verilerinizin işlenmesi ve korunması hususunda azami hassasiyet göstermekteyiz.
                        Bu aydınlatma metni, KVKK'nın 10. maddesi ve ilgili mevzuat çerçevesinde hazırlanmıştır.
                    </p>
                </section>

                {/* 1. Veri Sorumlusunun Kimliği */}
                <section className="mt-4">
                    <h4 className="text-lg font-semibold">1. Veri Sorumlusunun Kimliği</h4>
                    <p><strong>Unvan:</strong> Beplato</p>
                    <p><strong>Adres:</strong> Çavuşoğlu, Sanatkarlar Cd. No:36, 34873 Kartal/İstanbul</p>
                    <p><strong>E-posta:</strong> office@beplato.tv</p>
                    <p><strong>Telefon:</strong> 0501-352-60-15</p>
                </section>

                {/* 2. İşlenen Kişisel Veriler */}
                <section className="mt-4">
                    <h4 className="text-lg font-semibold">2. İşlenen Kişisel Veriler</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li>Kimlik Bilgileri: Ad, soyad</li>
                        <li>İletişim Bilgileri: E-posta adresi, telefon numarası</li>
                        <li>Demografik Bilgiler: Yaş, cinsiyet</li>
                        <li>Teknik Bilgiler: IP adresi, cihaz bilgileri</li>
                        <li>Lokasyon Bilgileri: Coğrafi konum verileri</li>
                        <li>Kullanım Verileri: Web sitesi kullanım bilgileri</li>
                    </ul>
                </section>

                {/* 3. Kişisel Verilerin İşlenme Amaçları */}
                <section className="mt-4">
                    <h4 className="text-lg font-semibold">3. Kişisel Verilerin İşlenme Amaçları</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li>Ürün ve hizmetlerimizin sunulması ve geliştirilmesi</li>
                        <li>Müşteri ilişkileri yönetimi süreçlerinin planlanması ve icrası</li>
                        <li>Ticari ve iş stratejilerinin belirlenmesi ve uygulanması</li>
                        <li>Hukuki, teknik ve ticari güvenliğin sağlanması</li>
                        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                        <li>Finansal işlemlerin gerçekleştirilmesi</li>
                        <li>Web sitesi performans analizinin yapılması</li>
                    </ul>
                </section>

                {/* 4. Kişisel Verilerin Aktarılması */}
                <section className="mt-4">
                    <h4 className="text-lg font-semibold">4. Kişisel Verilerin Aktarılması</h4>
                    <p>Kişisel verileriniz, aşağıdaki kişi ve kurumlarla paylaşılabilir:</p>
                    <ul className="list-disc ml-6 mt-2">
                        <li>İş ortaklarımız</li>
                        <li>Tedarikçilerimiz</li>
                        <li>Hissedarlarımız</li>
                        <li>Yetkili kamu kurumları</li>
                        <li>Kanunen yetkili özel kişiler</li>
                    </ul>
                </section>

                {/* 5. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi */}
                <section className="mt-4">
                    <h4 className="text-lg font-semibold">5. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h4>
                    <p>Kişisel verileriniz şu hukuki sebeplerle toplanmaktadır:</p>
                    <ul className="list-disc ml-6 mt-2">
                        <li>Şirketimizin hukuki yükümlülüklerini yerine getirebilmesi</li>
                        <li>Sözleşmelerin kurulması ve ifası</li>
                        <li>Meşru menfaatlerimizin korunması</li>
                    </ul>
                </section>

                {/* 6. İlgili Kişinin Hakları */}
                <section className="mt-4">
                    <h4 className="text-lg font-semibold">6. İlgili Kişinin Hakları</h4>
                    <p>KVKK'nın 11. maddesi uyarınca, kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:</p>
                    <ul className="list-disc ml-6 mt-2">
                        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                        <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                        <li>Kişisel verilerinizin işlenme amacını öğrenme</li>
                        <li>Kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                        <li>Eksik veya yanlış işlenen verilerin düzeltilmesini isteme</li>
                        <li>Kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                        <li>İşlenen verilerin münhasıran otomatik sistemler ile analiz edilmesine itiraz etme</li>
                    </ul>
                </section>

                {/* 7. İletişim */}
                <section className="mt-6">
                    <h4 className="text-lg font-semibold">7. İletişim</h4>
                    <p>Kişisel verilerinizle ilgili herhangi bir sorunuz olması durumunda aşağıdaki iletişim bilgilerinden bize ulaşabilirsiniz:</p>
                    <p><strong>E-posta:</strong> office@beplato.tv</p>
                    <p><strong>Adres:</strong> Çavuşoğlu, Sanatkarlar Cd. No:36, 34873 Kartal/İstanbul</p>
                    <p><strong>Telefon:</strong> 0501-352-60-15</p>
                </section>

                <section className="mt-6">
                    <h3 className="text-xl font-semibold">Çerez Politikası</h3>
                    <p>scenariobasket.com, çerezler ve benzer teknolojilerin kullanımında şeffaflığa büyük önem verir.</p>
                    <p>Aşağıda, sitemizde çerezlerin kullanımı, yönetimi ve kontrolü ile ilgili politikalarımızı bulabilirsiniz:</p>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Çerez Nedir:</strong> Çerezler, cihazınızda saklanan küçük metin dosyalarıdır ve web sitesinde tercihlerinizi ve eylemlerinizi hatırlayarak deneyiminizi geliştirmeye yardımcı olur.</li>
                        <li><strong>Kullandığımız Çerez Türleri:</strong>
                            <ul className="list-disc ml-6 mt-2">
                                <li>Temel Çerezler: Web sitesinin düzgün çalışması için gereklidir.</li>
                                <li>Performans Çerezleri: Site kullanımına dair verileri toplar.</li>
                                <li>Fonksiyonel Çerezler: Kullanıcı tercihlerini hatırlar.</li>
                                <li>Hedefleme/Reklam Çerezleri: Reklamların etkinliğini ölçer.</li>
                            </ul>
                        </li>
                        <li><strong>Çerez Yönetimi:</strong> Çoğu tarayıcıdan çerezleri kontrol edebilir veya silebilirsiniz.</li>
                        <li><strong>Üçüncü Taraf Çerezleri:</strong> Analiz ve reklam hizmetleri için üçüncü taraf çerezleri kullanılabilir.</li>
                        <li><strong>Çerez Süresi:</strong> Oturum bazlı veya kalıcı çerezler olabilir.</li>
                        <li><strong>Çerez Politikamızdaki Değişiklikler:</strong> Güncellemeler yapılabilir, düzenli olarak kontrol edilmelidir.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;