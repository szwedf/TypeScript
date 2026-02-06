<template>
  <section class="skills">
    <h1 class="skills-title">Skills</h1>
    <p class="skills-lead">
      日中はインフラ／運用でジョブとログと戦い、夜はフロントエンドのコードと戦う二刀流エンジニアです。
      「実務で叩き上げたスキル」と「自己学習で育成中のスキル」を分けて整理しました。
    </p>

    <!-- 上部：レーダーチャート＋簡単な凡例（あれば） -->
    <div class="skills-top">
      <div class="chart-card">
        <SkillRadarChart />
        <p class="chart-note">
          ※ フロントエンド寄りスキルの自己評価イメージです（実務ではまだこれから育成中）。
        </p>
      </div>

      <div class="legend-card">
        <h2 class="legend-title">レベル感メモ</h2>
        <ul class="legend-list">
          <li><span class="legend-dot level-4"></span>レベル4：一人で実務対応できる／周辺の調査も自走できる</li>
          <li><span class="legend-dot level-3"></span>レベル3：基本は自力でこなせるが、ときどき先輩に相談</li>
          <li><span class="legend-dot level-2"></span>レベル2：チュートリアル卒業〜小さな機能を自作できる</li>
          <li><span class="legend-dot level-1"></span>レベル1：触り始め〜雰囲気を掴んでいる段階</li>
        </ul>
        <p class="legend-footnote">
          ※ インフラは「実務寄り」、フロントは「自己学習寄り」のバランスです。
        </p>
      </div>
    </div>

    <!-- 中段：実務経験ゾーン -->
    <div class="skills-section">
      <h2 class="section-title">実務経験ゾーン（本業側）</h2>
      <p class="section-intro">
        金融系システムの基盤保守・運用、テスト業務で実際に手を動かしてきたスキル群です。
        「障害が起きたときにどう守るか」「本番作業をどう安全に回すか」に強みがあります。
      </p>

      <div class="skill-cards">
        <article
          v-for="skill in professionalSkills"
          :key="skill.name"
          class="skill-card"
        >
          <header class="skill-card-header">
            <h3 class="skill-name">{{ skill.name }}</h3>
            <span class="skill-level-pill">
              {{ skill.level }}
              <span v-if="skill.years" class="skill-years"> / {{ skill.years }}</span>
            </span>
          </header>

          <p class="skill-vibe">{{ skill.vibe }}</p>
          <p class="skill-examples" v-if="skill.examples">
            具体例：{{ skill.examples }}
          </p>

          <ul class="skill-tags">
            <li
              v-for="tag in skill.tags"
              :key="tag"
              class="skill-tag"
            >
              {{ tag }}
            </li>
          </ul>
        </article>
      </div>
    </div>

    <!-- 下段：自己学習ゾーン -->
    <div class="skills-section">
      <h2 class="section-title">自己学習ゾーン（フロントエンド側）</h2>
      <p class="section-intro">
        こちらは現在強化中のフロントエンド／Web 系スキルです。
        ポートフォリオ、カフェサイト、ホテルサイトなどの個人開発を通して育成しています。
        未経験からでも「案件に入って戦える」レベルまで持っていくのが目標です。
      </p>

      <div class="skill-cards">
        <article
          v-for="skill in learningSkills"
          :key="skill.name"
          class="skill-card learning"
        >
          <header class="skill-card-header">
            <h3 class="skill-name">
              {{ skill.name }}
              <span class="learning-badge">learning</span>
            </h3>
            <span class="skill-level-pill">
              {{ skill.level }}
              <span v-if="skill.years" class="skill-years"> / {{ skill.years }}</span>
            </span>
          </header>

          <p class="skill-vibe">{{ skill.vibe }}</p>
          <p class="skill-examples" v-if="skill.examples">
            取り組み例：{{ skill.examples }}
          </p>

          <ul class="skill-tags">
            <li
              v-for="tag in skill.tags"
              :key="tag"
              class="skill-tag"
            >
              {{ tag }}
            </li>
          </ul>
        </article>
      </div>
    </div>

    <p class="skills-footer-note">
      実務ではインフラ・運用の安定運用を武器にしつつ、  
      個人開発でフロントエンドを鍛えて「インフラも分かる Web エンジニア」を目指しています。
    </p>
  </section>
</template>

<script setup lang="ts">
import SkillRadarChart from './SkillRadarChart.vue';

type Level = 'レベル4（実務バリバリ）' | 'レベル3（実務経験あり）' | 'レベル2（基礎〜小規模開発）' | 'レベル1（触り始め）';

interface SkillDetail {
  name: string;
  level: Level;
  years?: string;
  vibe: string; // 雰囲気説明
  examples?: string; // 具体的な取り組み
  tags: string[];
}

const professionalSkills: SkillDetail[] = [
  {
    name: 'インフラ運用・基盤保守（金融系）',
    level: 'レベル4（実務バリバリ）',
    years: '約2年',
    vibe: 'Solaris / Windows Server 上の金融系システムで、ジョブ監視・障害対応・本番作業までを一通り経験。',
    examples:
      'JP1 での週次・月次ジョブ監視、障害発生時の一次切り分け・リラン、vCenter 証明書更新、暗号鍵更改、本番作業手順書の作成と実施など。',
    tags: ['Solaris 11', 'Windows Server 2016', 'vCenter', 'Commvault', '運用設計', '本番作業']
  },
  {
    name: 'ジョブ管理・バッチ運用',
    level: 'レベル4（実務バリバリ）',
    years: '約2年',
    vibe: '「バッチが回らない夜」を減らすために、ジョブとログを見続けてきたタイプ。',
    examples:
      'JP1（AJS3/IM）によるジョブ監視／保留解除／再実行、障害訓練でのフェイルオーバー／フェイルバック、JASTEM/EUC ジョブの監視とレポート作成。',
    tags: ['JP1 AJS3', 'JP1 IM', '障害訓練', 'スケジューリング']
  },
  {
    name: 'スクリプト・バッチ（bat / ksh / PowerShell）',
    level: 'レベル3（実務経験あり）',
    years: '約2年',
    vibe: '既存バッチの読解と改修、リトライ処理やログ出力の改善など「運用しやすくする」方向の改修が得意。',
    examples:
      'bat ファイルのリトライ機能追加（errorlevel とスリープ処理）、ksh/grep でのリポジトリ調査、PowerShell でイベントログを集計し稼働レポートを自動化。',
    tags: ['bat', 'ksh', 'PowerShell', 'shell', 'ログ調査']
  },
  {
    name: 'DB・レポート周り（Oracle / Excel / Access）',
    level: 'レベル3（実務経験あり）',
    years: '約2年',
    vibe: 'DB そのものの設計より、「運用視点での統計・証跡・レポート作成」に強み。',
    examples:
      'Oracle 表領域の使用率調査、Access での統計データ抽出、Excel マクロでサーバ稼働状況のグラフ化・半期レポート作成など。',
    tags: ['Oracle 12c', 'Excel', 'Access', 'マクロ', '統計レポート']
  },
  {
    name: 'テスト設計・手順書作成',
    level: 'レベル3（実務経験あり）',
    years: '約1年',
    vibe: '結合テスト要項書や本番手順書を何度もレビューで叩かれながら、だいぶ鍛えられた分野。',
    examples:
      '結合テスト要項書の作成・修正、期待値の文章化、本番作業手順書の作成・対面レビュー・証跡まとめ、障害訓練用手順書の読み解き。',
    tags: ['テスト設計', '結合テスト', '本番手順書', '証跡作成']
  }
];

const learningSkills: SkillDetail[] = [
  {
    name: 'Vue 3 + TypeScript',
    level: 'レベル2（基礎〜小規模開発）',
    years: '学習中（〜1年）',
    vibe: 'ポートフォリオサイトをベースに、Router・コンポーネント分割・型付きデータ構造に慣れつつある段階。',
    examples:
      '今回のポートフォリオ（Welcome / Home / About / Career / Skills / Works / Contact）の実装、Works ページでの型付きデータ駆動 UI など。',
    tags: ['Vue 3', 'TypeScript', 'Vite', 'SPA', 'コンポーネント設計']
  },
  {
    name: 'HTML / CSS / レイアウト・アニメーション',
    level: 'レベル2（基礎〜小規模開発）',
    years: '学習中（〜2年）',
    vibe: 'シンプルなポートフォリオから、カフェ／ホテルサイトのようなデザイン寄り LP まで試行錯誤中。',
    examples:
      '表参道カフェサイト風の LP、ホテルサイト風ギャラリーページの実装、レスポンシブレイアウト・ホバーアニメーションの調整。',
    tags: ['HTML5', 'CSS3', 'レスポンシブ', 'Flexbox', 'Grid', 'アニメーション']
  },
  {
    name: 'JavaScript（ブラウザ）',
    level: 'レベル2（基礎〜小規模開発）',
    years: '学習中',
    vibe: 'フレームワーク任せにせず、素の JS でのロジックや DOM 操作もできるようにトレーニング中。',
    examples:
      'メニューのフィルタリング、スクロール時のアニメーション制御、シンプルなフォームバリデーションなどを実装。',
    tags: ['ES6+', 'DOM 操作', '非同期処理', 'ロジック']
  },
  {
    name: 'デザイン・UI/UX 感覚',
    level: 'レベル1（触り始め）',
    years: '学習中',
    vibe: 'モネ展やホテルサイト・カフェサイトを参考にしながら、「余白」「色」「フォント」を意識したデザインを練習中。',
    examples:
      'My Lab のトップページデザイン、カフェ／ホテルサイトの配色とタイポグラフィの研究、海外ポートフォリオサイトの模写など。',
    tags: ['UI デザイン', '配色', 'タイポグラフィ', 'モダンポートフォリオ']
  },
  {
    name: 'Git / GitHub',
    level: 'レベル2（基礎〜小規模開発）',
    years: '学習中',
    vibe: '個人開発レベルのブランチ運用やコミットログ管理は可能。今後はチーム開発の運用ルールも学んでいきたい。',
    examples:
      'ポートフォリオ用リポジトリの運用、GitHub Pages / Vercel へのデプロイ、README の整備。',
    tags: ['Git', 'GitHub', 'ブランチ運用', 'Vercel']
  }
];
</script>

<style scoped>
.skills {
  max-width: 1120px;
  margin: 0 auto;
  padding: 4rem 1.5rem 5rem;
}

.skills-title {
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
}

.skills-lead {
  max-width: 760px;
  margin: 0 auto 2.8rem;
  text-align: center;
  line-height: 1.8;
  color: #4b5563;
}

.skills-top {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 1.8rem;
  margin-bottom: 3rem;
}

.chart-card,
.legend-card {
  background: rgba(255, 255, 255, 0.92);
  border-radius: 18px;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.06);
  padding: 1.6rem 1.8rem;
}

.chart-note {
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 0.6rem;
}

.legend-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.legend-list {
  list-style: none;
  padding: 0;
  margin: 0 0 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.9rem;
  color: #4b5563;
}

.legend-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  margin-right: 0.4rem;
}

.level-4 {
  background: #16a34a;
}
.level-3 {
  background: #22c55e;
}
.level-2 {
  background: #facc15;
}
.level-1 {
  background: #f97316;
}

.legend-footnote {
  font-size: 0.8rem;
  color: #9ca3af;
}

.skills-section {
  margin-top: 3rem;
}

.section-title {
  font-size: 1.6rem;
  font-weight: 650;
  margin-bottom: 0.5rem;
}

.section-intro {
  max-width: 800px;
  font-size: 0.95rem;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 1.8rem;
}

.skill-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.4rem;
}

.skill-card {
  background: rgba(255, 255, 255, 0.96);
  border-radius: 18px;
  padding: 1.2rem 1.3rem 1.2rem;
  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.05);
  border: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;
}

.skill-card.learning {
  border-style: dashed;
  border-color: #bfdbfe;
  background: linear-gradient(135deg, rgba(239, 246, 255, 0.9), rgba(255, 255, 255, 0.96));
}

.skill-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
  border-color: #93c5fd;
}

.skill-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
}

.skill-name {
  font-size: 1.02rem;
  font-weight: 600;
}

.skill-level-pill {
  font-size: 0.78rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  background: #f9fafb;
  color: #374151;
  white-space: nowrap;
}

.skill-years {
  color: #6b7280;
}

.learning-badge {
  font-size: 0.7rem;
  margin-left: 0.35rem;
  padding: 0.1rem 0.4rem;
  border-radius: 999px;
  background: #e0f2fe;
  color: #0369a1;
}

.skill-vibe {
  font-size: 0.9rem;
  color: #4b5563;
}

.skill-examples {
  font-size: 0.88rem;
  color: #6b7280;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.3rem;
}

.skill-tag {
  font-size: 0.78rem;
  padding: 0.18rem 0.55rem;
  border-radius: 999px;
  background: #eff6ff;
  color: #1d4ed8;
}

.skills-footer-note {
  margin-top: 3.2rem;
  text-align: center;
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.8;
}

/* レスポンシブ */
@media (max-width: 840px) {
  .skills-top {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 640px) {
  .skills {
    padding-top: 3rem;
  }

  .skills-title {
    font-size: 2rem;
  }

  .skill-card-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .skill-level-pill {
    margin-top: 0.2rem;
  }
}
</style>
