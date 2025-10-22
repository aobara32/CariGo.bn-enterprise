# 🐛 Toast デバッグガイド

このガイドでは、`use-toast.ts` フックの動作をデバッグして確認する方法を説明します。

## 📦 実装内容

### 1. デバッグログの追加

`src/hooks/use-toast.ts` に以下のコンソールログを追加しました：

- **`dispatch` 関数**: すべてのアクション（ADD_TOAST、UPDATE_TOAST、DISMISS_TOAST、REMOVE_TOAST）をログに記録
- **`toast` 関数**: 新しいトーストが作成されたときにIDとプロパティをログに記録
- **`useToast` フック**: コンポーネントのマウント/アンマウント時とアクティブなリスナー数をログに記録

### 2. デバッガーコンポーネント

`src/components/ToastDebugger.tsx` - 画面右下に表示されるデバッグパネル

**機能:**
- ✅ 成功トーストの表示テスト
- ❌ エラートーストの表示テスト
- ⚠️ 警告トーストの表示テスト
- 🗑️ すべてのトーストを閉じる
- 📊 アクティブなトーストのリアルタイム表示
- 🔍 各トーストの詳細情報（ID、タイトル、状態）

## 🚀 使用方法

### ステップ 1: 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
```

### ステップ 2: ブラウザでアプリを開く

通常は `http://localhost:5173` で起動します。

### ステップ 3: デバッガーパネルの使用

画面右下に「🐛 Toast Debugger」パネルが表示されます（開発環境のみ）。

### ステップ 4: ブラウザのコンソールを開く

- **Chrome/Edge**: `F12` または `Ctrl+Shift+I` (Windows/Linux) / `Cmd+Option+I` (Mac)
- **Firefox**: `F12` または `Ctrl+Shift+K` (Windows/Linux) / `Cmd+Option+K` (Mac)

### ステップ 5: トーストをテスト

デバッガーパネルのボタンをクリックして、コンソールに以下のようなログが表示されることを確認：

```
[ToastDebugger] Showing success toast
[Toast Debug] Creating toast with id: 1 props: {title: "成功！", description: "これは成功メッセージです。", variant: "default"}
[Toast Debug] Action dispatched: ADD_TOAST {type: "ADD_TOAST", toast: {...}}
[Toast Debug] New state: {toasts: Array(1)}
```

## 📝 デバッグログの見方

### トースト作成時
```
[Toast Debug] Creating toast with id: 1 props: {...}
[Toast Debug] Action dispatched: ADD_TOAST {...}
[Toast Debug] New state: {toasts: [...]}
```

### トースト削除時
```
[Toast Debug] Action dispatched: DISMISS_TOAST {toastId: "1"}
[Toast Debug] New state: {toasts: [...]}
[Toast Debug] Action dispatched: REMOVE_TOAST {toastId: "1"}
[Toast Debug] New state: {toasts: []}
```

### useToast フックのマウント/アンマウント
```
[Toast Debug] useToast mounted, active listeners: 1
[Toast Debug] useToast unmounted, remaining listeners: 0
```

## 🔧 重要な設定

### TOAST_LIMIT
```typescript
const TOAST_LIMIT = 1;  // 同時に表示できるトーストの最大数
```

### TOAST_REMOVE_DELAY
```typescript
const TOAST_REMOVE_DELAY = 1000000;  // トーストが閉じられてから削除されるまでの遅延（ミリ秒）
```

## 🎯 デバッグのヒント

1. **トーストが表示されない場合**
   - コンソールで `ADD_TOAST` アクションが発行されているか確認
   - `state.toasts` 配列に項目が追加されているか確認
   - `Toaster` コンポーネントが正しくレンダリングされているか確認

2. **トーストが閉じない場合**
   - `DISMISS_TOAST` と `REMOVE_TOAST` アクションが発行されているか確認
   - `TOAST_REMOVE_DELAY` の値を確認

3. **複数のトーストが表示されない場合**
   - `TOAST_LIMIT` の値を確認（現在は1に設定）
   - より多くのトーストを表示したい場合は、この値を増やす

## 🧹 デバッグ後のクリーンアップ

デバッグが完了したら、以下のファイルを削除または修正できます：

1. **ログを削除する場合**: `src/hooks/use-toast.ts` から `console.log` を削除
2. **デバッガーを削除する場合**: 
   - `src/components/ToastDebugger.tsx` を削除
   - `src/App.tsx` から `ToastDebugger` のインポートと使用を削除

## 📚 追加リソース

- [Radix UI Toast Documentation](https://www.radix-ui.com/docs/primitives/components/toast)
- [React Hooks Documentation](https://react.dev/reference/react)

---

**作成日**: 2025-10-14  
**目的**: `use-toast.ts` フックのデバッグと動作確認



