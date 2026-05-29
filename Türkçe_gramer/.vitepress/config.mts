import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'bölümler',
  lang: 'tr-TR',
  title: 'Türkçe gramer Prof. Dr. Muharrem Ergin',
  description: "Prof. Dr. Muharrem Ergin'in Türkçe grameri",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Ana sayfa', link: '/' },
      { text: 'İçindekiler', link: '/İçindekiler' },
    ],

    sidebar: [
      {
        text: 'Hızlı erişim',
        items: [
          { text: 'İçindekiler', link: '/İçindekiler' },
          {
            text: '1. Dil Nedir ve Dünya Dilleri Arasındaki Yeri',
            link: '/1 Dil Nedir ve Dünya Dilleri Arasındaki Yeri',
          },
          {
            text: '2. Türk Yazı Dilinin Tarihî Gelişimi ve Kolları',
            link: '/2 Türk Yazı Dilinin Tarihî Gelişimi ve Kolları',
          },
          {
            text: '3. Ses Bilgisi (Fonetik) ve Seslerin Mahiyeti',
            link: '/3 Ses Bilgisi (Fonetik) ve Seslerin Mahiyeti',
          },
          {
            text: '4. Türkçedeki Vokaller (Ünlüler) ve Tasnifi',
            link: '/4 Türkçedeki Vokaller (Ünlüler) ve Tasnifi',
          },
          {
            text: '5. Türkçede Ünlü (Vokal) Uyumları ve Kuralları',
            link: '/5 Türkçede Ünlü (Vokal) Uyumları ve Kuralları',
          },
          {
            text: '6. Konsonantlar (Ünsüzler) ve Sınıflandırılması',
            link: '/6 Konsonantlar (Ünsüzler) ve Sınıflandırılması',
          },
          {
            text: '7. Türkçedeki Ses Hadiseleri (Ses Olayları)',
            link: '/7 Türkçedeki Ses Hadiseleri (Ses Olayları)',
          },
          {
            text: '8. Şekil Bilgisi (Morfoloji) - Kelime Yapısı, Kökler ve Gövdeler',
            link: '/8 Şekil Bilgisi (Morfoloji) - Kelime Yapısı, Kökler ve Gövdeler',
          },
          {
            text: '9. Şekil Bilgisi - Eklerin Dünyası ve Yapım Ekleri',
            link: '/9 Şekil Bilgisi - Eklerin Dünyası ve Yapım Ekleri',
          },
          {
            text: '10. Şekil Bilgisi - İsim Çekim Ekleri',
            link: '/10 Şekil Bilgisi - İsim Çekim Ekleri',
          },
          {
            text: '11. Şekil Bilgisi - Fiil Çekim Ekleri (Kip, Zaman ve Şahıs)',
            link: '/11 Şekil Bilgisi - Fiil Çekim Ekleri (Kip, Zaman ve Şahıs)',
          },
          {
            text: '12. Kelime Türleri - İsimler ve İsim Tamlamaları',
            link: '/12 Kelime Türleri - İsimler ve İsim Tamlamaları',
          },
          {
            text: '13. Kelime Türleri - Sıfatlar (Ön Adlar)',
            link: '/13 Kelime Türleri - Sıfatlar (Ön Adlar)',
          },
          {
            text: '14. Kelime Türleri - Zamirler (Adıllar)',
            link: '/14 Kelime Türleri - Zamirler (Adıllar)',
          },
          {
            text: '15. Kelime Türleri - Zarflar (Belirteçler)',
            link: '/15 Kelime Türleri - Zarflar (Belirteçler)',
          },
          {
            text: '16. Kelime Türleri - Edatlar, Bağlaçlar ve Ünlemler',
            link: '/16 Kelime Türleri - Edatlar, Bağlaçlar ve Ünlemler',
          },
          {
            text: '17. Kelime Türleri - Fiiller ve Fiil Çatıları',
            link: '/17 Kelime Türleri - Fiiller ve Fiil Çatıları',
          },
          {
            text: '18. Cümle Bilgisi (Sentaks) - Cümlenin Ögeleri',
            link: '/18 Cümle Bilgisi (Sentaks) - Cümlenin Ögeleri',
          },
          {
            text: '19. (FİNAL) Cümle Türleri ve Yapısal Analiz',
            link: '/19 (FİNAL) Cümle Türleri ve Yapısal Analiz',
          },
        ],
      },
    ],
    search: {
      provider: 'local',
    },
    docFooter: {
      prev: 'Önceki sayfa',
      next: 'Sonraki sayfa',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
