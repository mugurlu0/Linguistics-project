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
            link: '/dil-nedir-ve-dunya-dilleri-arasindaki-yeri',
          },
          {
            text: '2. Türk Yazı Dilinin Tarihî Gelişimi ve Kolları',
            link: '/turk-yazi-dilinin-tarihi-gelisimi-ve-kollari',
          },
          {
            text: '3. Ses Bilgisi (Fonetik) ve Seslerin Mahiyeti',
            link: '/ses-bilgisi-ve-seslerin-mahiyeti',
          },
          {
            text: '4. Türkçedeki Vokaller (Ünlüler) ve Tasnifi',
            link: '/turkcedeki-vokaller-ve-tasnifi',
          },
          {
            text: '5. Türkçede Ünlü (Vokal) Uyumları ve Kuralları',
            link: '/turkcede-unlu-uyumlari-ve-kurallari',
          },
          {
            text: '6. Konsonantlar (Ünsüzler) ve Sınıflandırılması',
            link: '/konsonantlar-ve-siniflandirilmasi',
          },
          {
            text: '7. Türkçedeki Ses Hadiseleri (Ses Olayları)',
            link: '/turkcedeki-ses-hadiseleri',
          },
          {
            text: '8. Şekil Bilgisi (Morfoloji) - Kelime Yapısı, Kökler ve Gövdeler',
            link: '/sekil-bilgisi-kelime-yapisi-kokler-ve-govdeler',
          },
          {
            text: '9. Şekil Bilgisi - Eklerin Dünyası ve Yapım Ekleri',
            link: '/sekil-bilgisi-eklerin-dunyasi-ve-yapim-ekleri',
          },
          {
            text: '10. Şekil Bilgisi - İsim Çekim Ekleri',
            link: '/sekil-bilgisi-isim-cekim-ekleri',
          },
          {
            text: '11. Şekil Bilgisi - Fiil Çekim Ekleri (Kip, Zaman ve Şahıs)',
            link: '/sekil-bilgisi-fiil-cekim-ekleri',
          },
          {
            text: '12. Kelime Türleri - İsimler ve İsim Tamlamaları',
            link: '/kelime-turleri-isimler-ve-isim-tamlamalari',
          },
          {
            text: '13. Kelime Türleri - Sıfatlar (Ön Adlar)',
            link: '/kelime-turleri-sifatlar',
          },
          {
            text: '14. Kelime Türleri - Zamirler (Adıllar)',
            link: '/kelime-turleri-zamirler',
          },
          {
            text: '15. Kelime Türleri - Zarflar (Belirteçler)',
            link: '/kelime-turleri-zarflar',
          },
          {
            text: '16. Kelime Türleri - Edatlar, Bağlaçlar ve Ünlemler',
            link: '/kelime-turleri-edatlar-baglaclar-ve-unlemler',
          },
          {
            text: '17. Kelime Türleri - Fiiller ve Fiil Çatıları',
            link: '/kelime-turleri-fiiller-ve-fiil-catilari',
          },
          {
            text: '18. Cümle Bilgisi (Sentaks) - Cümlenin Ögeleri',
            link: '/cumle-bilgisi-cumlenin-ogeleri',
          },
          {
            text: '19. (FİNAL) Cümle Türleri ve Yapısal Analiz',
            link: '/cumle-turleri-ve-yapisal-analiz',
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
