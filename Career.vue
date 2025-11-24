<template>
  <section class="career">
    <h1>経歴紹介</h1>

    <div class="timeline">
      <!-- ▼ 基盤保守（2024年〜 現在のログまとめ） -->
      <div class="timeline-item">
        <h2>2024年01月〜現在｜金融系 基盤保守・運用改善</h2>
        <p>
          【主な環境】Solaris 11／Windows Server 2016／Windows 10→11 Enterprise／Oracle 12cR2／
          JP1（AJS3／IM）／vCenter／Commvault／Windows Defender／TeraTerm／PowerShell／bat／ksh／
          Excel／Access／VBA など
        </p>
        <p>
          【担当業務】<br>
          ・JP1 を用いた週次／月次バッチの監視、異常終了時の切り分けとリラン・保留解除対応<br>
          ・TeraTerm＋シェルでのバッチ処理時間調査、サーバ容量／表領域／USNジャーナルなどの各種リソース調査<br>
          ・Windows Defender クイックスキャンの一斉実行とログ解析、Excel マクロでのグラフ化／可視化<br>
          ・EUC データロード、tar 取得やログファイルのマクロ整形など、運用データの集計・レポート作成<br>
          ・bat／ksh／パラメータファイルの修正（リトライ・スリープ挿入など）と単体／結合テスト、diff による差分取得と証跡作成<br>
          ・暗号鍵更改、デバイスロック設定、プリンタドライバ配布、JP1 ジョブ追加／設定変更などの
            設計〜手順書作成〜本番作業実施<br>
          ・障害訓練（フェイルオーバー／フェイルバック）の参加、本番障害時の原因調査用資料取得・手順整備<br>
          ・vCenter証明書更新、Commvault 文字化け調査などのインフラ改善タスク<br>
          ・サーバ稼働状況レポートの作成（CPU・メモリ Pages/sec 等のトレンドとイベントログの相関分析）と
            上位担当者への説明・質疑応答<br>
          ・結合テスト要項書／本番手順書／設計書の作成とレビュー対応を通じて、
            「設計〜テスト〜本番作業」の一連の流れを経験
        </p>
      </div>

      <!-- ▼ ここから下は前に渡した経歴（必要なら調整してOK） -->
      <div class="timeline-item">
        <h2>2024年09月〜2024年12月｜インフラ基盤のスクリプト改修・テスト</h2>
        <p>
          銀行システムのインフラ基盤で、既存スクリプトの調査・修正・改修、新規スクリプト作成を担当。
          Pacemaker／Lifekeeper／IBM Tivoli Monitoring Agent／Netcool Operation Insights 向けに
          シェルスクリプトや bat を実装し、UT・バッチ動作確認・エビデンス取得まで一貫して対応。
        </p>
      </div>

      <div class="timeline-item">
        <h2>2024年04月〜2024年07月｜携帯キャリア受付システムの品質管理</h2>
        <p>
          某携帯キャリアの受付システムにおけるテスト品質管理を担当。
          要件定義書からの見積・レビュー、テスト設計書／テストケース作成、テスト実施、
          回帰テスト、データ作成、チームミーティングの進行・状況報告などを実施。
        </p>
      </div>

      <div class="timeline-item">
        <h2>2023年07月〜2024年02月｜国保総合システムの運用テスト・調査</h2>
        <p>
          国保総合システムにて結合テスト／総合テスト／調査業務を担当。
          ジョブの正常終了確認と証跡取得、マクロを用いた稼働時間比較・集計、
          帳票と世帯数の整合性確認、SQL でのテーブル比較、
          VBS検索ツールの作成、異常終了時の原因調査などを実施。
        </p>
      </div>

      <div class="timeline-item">
        <h2>2021年04月〜2023年03月｜証券会社システムの運用保守</h2>
        <p>
          証券会社のオペレーター向けシステムの運用保守を担当。
          ジョブ異常時の一次切り分け・リラン依頼、Linuxサーバでのログ調査、
          ObjectBrowser／A5M2 を用いたデータ抽出・更新、
          Redmineでの障害記録・Wiki作成、新人教育などを経験。
        </p>
      </div>

      <div class="timeline-item">
        <h2>2020年10月〜2020年11月｜QR決済サービス導入営業</h2>
        <p>
          楽天系QR決済サービスの導入営業として、担当エリアの店舗への飛び込み営業、
          既存加盟店へのポップ掲示依頼、加盟店フォロー、Salesforceでの活動記録を担当。
        </p>
      </div>

      <div class="timeline-item">
        <h2>2020年02月〜2020年04月｜ショッピングセンターECサイトの運用監視</h2>
        <p>
          JP1 を用いた EC サイトの監視・運用保守を担当。
          監視アラート対応、本番環境へのファイル移管、AWS／Backlog を使った資材管理、
          セキュリティルーム入室申請、データ抽出・集計などを経験。
        </p>
      </div>
    </div>
  </section>
</template>

  
  <script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'Career'
  });
  </script>
  
  <style scoped>
  .career {
    padding: 40px 20px;
    text-align: center;
  }
  
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .timeline-item {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  /* レスポンシブ対応 */
  @media (max-width: 768px) {
    .timeline-item {
      padding: 15px;
    }
  }
  </style>
  