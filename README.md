# React Practice

## 前提条件

- [Docker](https://www.docker.com/) および [Docker Compose](https://docs.docker.com/compose/) がインストールされていること
- （必要に応じて）git がインストールされていること

---

## 主な使用パッケージ・ツール

- **React**: フロントエンド UI ライブラリ
- **TypeScript**: 型安全な JavaScript
- **Tailwind CSS**: ユーティリティファーストな CSS フレームワーク
- **Emotion**: CSS-in-JS スタイリングライブラリ（Tailwind で対応できない箇所に使用）
- **Docker / Docker Compose**: 開発・実行環境のコンテナ化
- **Prettier**: コードフォーマッター
- **npm**: パッケージ管理・スクリプト実行
- **その他**: 詳細は `app/package.json` を参照

---

## ディレクトリ構造

- **app/**: React アプリ本体のソースコードや設定ファイルを管理しています。
  - **src/assets/**: 画像やフォントなどのアセットファイルを格納します。
  - **src/components/**: ボタンやヘッダーなどの再利用可能なUI部品（FigmaのStyles&Componentsで定義されているものなど）。
  - **src/layouts/**: 複数ページで共通利用するレイアウト（例：共通ヘッダー＋フッターなど）。
  - **src/pages/**: 各画面（ルーティング単位）のページコンポーネント。
  - **src/styles/**: グローバルCSSやカラーバリアブル（variables.css など）。
  - **src/firebase.ts**: Firebaseの設定ファイル。
  - **src/App.tsx**: アプリ全体のルーティングやレイアウトを管理するエントリーポイント。
  - **src/main.tsx**: Reactアプリの最上位エントリーポイント。App.tsxをブラウザに描画します。
- **docker/**: Docker 関連の設定ファイル（Dockerfile, docker-compose.yml など）が含まれています。
- **run.sh**: 開発やビルド、依存関係のインストールなどを簡単に実行できるコマンドスクリプトです。

---

## 開発環境のセットアップ

以下の手順で開発環境をセットアップできます。

1. **リポジトリをクローンする**

2. **Docker を起動する**

   ```bash
   ./run.sh up
   ```

3. **依存関係をインストールする**

   ```bash
   ./run.sh install
   ```

4. **開発サーバーを起動する**

   ```bash
   ./run.sh dev
   ```

5. **ブラウザでアプリケーションにアクセスする**

   [http://localhost:3000](http://localhost:3000)

---

## コマンド

- `./run.sh up` - Docker コンテナを起動します。
- `./run.sh install` - 依存関係をインストールします。
- `./run.sh dev` - 開発モードでアプリケーションを起動します（ホットリロード）。
- `./run.sh build` - アプリケーションをビルドします。
- `./run.sh exec` - コンテナ内でシェルを実行します。
- `./run.sh down` - Docker コンテナを停止します。
- `./run.sh format` - コードフォーマットを実施します。
- `./run.sh help` - 利用可能なコマンド一覧と説明を表示します。

---

## リリース手順

リリース時には、以下のコマンドを実行してアプリケーションをビルドします。
必要なファイルをサーバーにアップロードしてください。

```bash
./run.sh build
```

ビルドされたファイルは、`app/build`ディレクトリに出力されます。

---

## スタイルガイドライン

このプロジェクトでは、スタイル実装に以下のルールを設けています。

### 1. 基本は Tailwind CSS を使用する

- 各コンポーネントのスタイルは **Tailwind CSS のユーティリティクラス**を基本としてください。
- Tailwind v4.x では `@theme` を使ってデザイントークン（カラーパレットなど）を定義できます。詳細は[こちら](https://tailwindcss.com/docs/theme)ご確認ください。
- `@theme` で定義した変数は、`bg-mint-500` や `text-mint-500` のようなユーティリティクラスとして自動で利用できるようになります。
- `@theme` は`variables.css` で定義しています。
- これらのテーマ変数は通常の CSS 変数としても出力されるためインラインや emotion などでも利用できます。

例）
`variables.css`で定義
```css
@theme {
  --color-mint-500: oklch(0.72 0.11 178);
}
```

CSS変数として使用
```css
p {
  color: var(--color-mint-500);
}
```

Tailwindユーティリティクラスとして使用
```html
<div class="bg-mint-500">
  <!-- テーマ変数を使った背景色 -->
</div>
```

### 2. Tailwind で表現しきれないスタイルは Emotion で補完

- Tailwind で難しい複雑なメディアクエリや JavaScript との連携が必要な場合は、**Emotion（css-in-js）** を使ってスタイルを記述してください。

例:
```tsx
import { css } from '@emotion/react';

const boxStyle = css`
  background: linear-gradient(to right, var(--color-mint-500), #fff);
  padding: 16px;
`;

<div css={boxStyle}>Emotion を使ったボックス</div>
```

### 3. サイト全体に関わるスタイルはグローバル CSS に記述

- サイト全体で共通して使うCSSは、`src/styles/xxx.css` などのグローバルCSSファイルにまとめて記述してください。

---

## トラブルシューティング

- **ポートが既に使用されている場合**
  他のアプリケーションが `3000` 番ポートを使用していないか確認し、必要に応じて停止してください。

- **依存関係のインストールでエラーが発生する場合**
  `./run.sh install` を再実行してください。それでも解決しない場合は `docker-compose down` で一度コンテナを停止し、再度 `up` からやり直してください。

- **Docker が起動しない場合**
  Docker Desktop などが正しく起動しているか確認してください。
