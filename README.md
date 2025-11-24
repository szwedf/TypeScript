# My Lab – Frontend Portfolio (Vue + TypeScript)

個人のフロントエンドポートフォリオサイトです。  
Vue 3 / TypeScript / Vite を使って、デザインとコードの両面をアウトプットすることを目的に作成しました。

- デモサイト: https://type-script-lyart.vercel.app  
- リポジトリ: このページ

---

## Tech Stack

- **Framework**: Vue 3
- **Language**: TypeScript
- **Build Tool**: Vite
- **Router**: Vue Router
- **Chart**: Chart.js + vue-chartjs（スキルレーダーチャート）
- **Styling**: CSS3（レスポンシブ対応）
- **Deployment**: Vercel

---

## Pages & Features

### 🏠 Home / TopPage

- `Welcome to My Lab` のヒーローセクション
- シンプルなコピー＆CTAボタン（Discover More）
- スクロールを促すアニメーション

### 👤 About

- 自己紹介・エンジニアとしての方向性
- 得意分野・興味のある領域のテキスト整理
- 将来的に職務経歴書やNote記事などと連携しやすい構成

### 🧩 Skills

- `SkillRadarChart.vue` によるレーダーチャート表示  
  （例：HTML/CSS, JavaScript, Vue.js, CSS Framework, WordPress など）
- スキルセットを視覚的に把握できるように設計
- テキストによる補足説明と合わせて、採用担当者がレベル感をイメージしやすい構成

### 💼 Career

- `Career.vue` で職務経歴をタイムライン表示
- 金融系基盤保守・運用、テスト案件、QR決済営業などの実務経験を整理
- 下記のような要素を含む職務内容を記載:
  - JP1 を用いたジョブ監視・週次／月次バッチ運用
  - Solaris / Windows Server / Oracle などを使った基盤運用
  - bat / ksh / PowerShell などによるバッチ・調査スクリプトの作成／改修
  - 手順書・結合テスト要項書・本番作業の証跡作成
  - vCenter 証明書更新、暗号鍵更改、デバイスロック設定などのインフラ改善タスク

### 📩 Contact

- 連絡先情報や SNS（予定）への導線
- 将来的にフォームや外部サービス連携を追加できる構成

---

## Project Structure

主要なファイル・コンポーネントのみ抜粋しています。

```bash
src/
  components/
    Navbar.vue          # ナビゲーションバー
    Footer.vue          # フッター
    SkillRadarChart.vue # スキルのレーダーチャート
  views/
    TopPage.vue         # トップページ
    WelcomePage.vue     # Hero セクションなどを配置
    About.vue           # 自己紹介ページ
    Skills.vue          # スキル一覧ページ
    Career.vue          # 職務経歴タイムライン
    Contact.vue         # お問い合わせページ
  App.vue               # ルートコンポーネント
  main.ts               # エントリーポイント（Vue / Router のマウント）
  router/
    index.ts            # ルーティング設定（ホーム・各ページ）
