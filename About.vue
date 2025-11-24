<template>
  <section class="about">
    <div class="about-content">
      <div class="about-card">
        <h2>自己紹介</h2>
        <p>
  こんにちは、現在27歳、東京都生まれのSESエンジニアです。<br />
  Vue.jsやJavaScriptを中心に、ポートフォリオを開発中!<br />
  エンジニアとしては、約5年の経験があります。
</p>

<p>
  仕事の話はあとにしまして、まずは趣味の話を少し。<br />
  4年ほど前から競馬にハマっており、きっかけは「エフフォーリア世代」から。<br />
  レースの予想や馬券が当たった瞬間は、本当にたまりません！
</p>

<p>
  今では一口馬主にも挑戦していて、まだ勝利はないものの、<br />
  馬の成長を見守る日々がとても楽しいです。<br />
  推しの産駒は、エフフォーリアとコントレイルの子供たち。<br />
  特に、エフフォーリアの子がどんな成績を残すのか、ワクワクしています。
</p>

<p>
  競馬の話はこの辺にして、もうひとつの趣味。<br />
  野球観戦も好きで、特にジャイアンツ（巨人）のファンです。<br />
  最近はあまり現地に行けていませんが、昔は東京ドームによく足を運んでいました。
</p>

<p>
  今はネットで観戦できる時代。現地の雰囲気も好きですが、<br />
  負け試合に行くと、ちょっと…悔しさが倍増しちゃいますよね（笑）。
</p>
<p>
  三つ目の趣味で絵画鑑賞
 去年くらいから印象派にハマっていて特にモネの絵が好きで美術館に行くようになりました。
 最近も上野の美術館に行き、ゴッホ家族が繋いだ画家の夢とオルセー美術館貯蔵印象派展に行き、音声ガイドを聞きながらその絵画達を鑑賞しました。
</p>
<h2>仕事について</h2>
<p>
  今は大手銀行の基盤保守の業務にアサインされまして、本番環境で障害のおきた事象の修正作業を行うのに開発環境での手順書作成や設計書修正、テスト要項書の作成等のドキュメント作成<br>
  たまにシェルスクリプトやbatファイル,JP1のジョブネットの追加修正などを行いました。
</p>
    </div>
    </div>
  </section>

</template>

<style scoped>
.about {
  padding: 80px 20px;
  background: #f1f7fa;
  display: flex;
  justify-content: center;
}

.about-content {
  max-width: 800px;
  width: 100%;
}

.about-card {
  background: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08); /* 💡ふんわり影 */
  border: 1px solid #ddd;
  text-align: left;
}

.about-card h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #111;
}

.about-card p {
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
}



.about h2:hover {
  transform: scale(1.03);
}


.about-content img {
  width: 150px;
  border-radius: 50%;
}
@media (max-width: 600px) {
  .about-card {
    padding: 24px;
  }

  .about-card h2 {
    font-size: 1.5rem;
  }
}

/* PC用横並び対応 */
@media (min-width: 768px) {
  .about-content {
    flex-direction: row;
    text-align: left;
  }

  .about-content img {
    margin-right: 40px;
    width: 200px;
  }
}
</style>
