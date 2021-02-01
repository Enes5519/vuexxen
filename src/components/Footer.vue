<template>
  <footer>
    <ExxenLogo class="logo" />
    <footer-links title="Hakkımızda">
      <div>
        <a href="#">Yardım Merkezi</a>
        <a href="#">Kullanıcı Üyelik Sözleşmesi</a>
        <a href="#">Çerez Politikası</a>
        <a href="#">Gizlilik Politikası</a>
        <a href="#">Kullanım Şartları</a>
        <a href="#">Kurumsal Bilgiler</a>
      </div>
      <div>
        <a href="#">Mesafeli Satış Sözleşmesi</a>
        <a href="#">Ön Bilgilendirme Formu</a>
        <a href="#">Privacy Policy</a>
      </div>
    </footer-links>
    <footer-links title="Bizi Takip Edin">
      <div style="flex-direction: row">
        <facebook-logo class="icon" />
        <youtube-logo class="icon" />
        <twitter-logo class="icon" />
        <instagram-logo class="icon" />
        <tiktok-logo class="icon" />
      </div>
    </footer-links>
    <footer-links title="Uygulamalarımız" :column="true">
      <img
        style="width: 135px"
        src="../assets/play_store_badge.png"
        alt="Play Store Badge"
      />
      <app-store-badge style="margin-top: 5px" />
    </footer-links>
  </footer>
</template>

<script>
import ExxenLogo from '@/assets/logo.svg';
import FacebookLogo from '@/assets/icons/facebook.svg';
import InstagramLogo from '@/assets/icons/instagram.svg';
import TiktokLogo from '@/assets/icons/tiktok.svg';
import TwitterLogo from '@/assets/icons/twitter.svg';
import YoutubeLogo from '@/assets/icons/youtube.svg';
import AppStoreBadge from '@/assets/app_store_badge.svg';
import FooterLinks from '@/components/FooterLinks';

export default {
  name: 'Footer',
  components: {
    FooterLinks,
    ExxenLogo,
    FacebookLogo,
    InstagramLogo,
    TiktokLogo,
    TwitterLogo,
    YoutubeLogo,
    AppStoreBadge
  }
};
</script>

<style scoped>
footer {
  background-color: #212121;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-top: 30px;
  padding-bottom: 55px;
}

footer > .logo {
  width: 150px;
}

.icon {
  margin-right: 10px;
}

@media (max-width: 768px) {
  footer {
    flex-direction: column;
  }

  footer > * {
    width: 100%;
    padding: 15px;
  }
}
</style>
