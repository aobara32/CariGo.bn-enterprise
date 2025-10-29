# Supabase接続設定手順

## 現在の問題
コードでは以下のテーブルを使用していますが、Supabaseに存在しない可能性があります：
- `contact_submissions`
- `career_applications`
- `support_submissions`
- `investment_inquiries`

## 解決方法

### 1. Supabaseダッシュボードで確認
Supabaseダッシュボードにアクセスして、実際に作成されているテーブル名を確認してください。

### 2. テーブルが存在しない場合
`supabase-home-tables-security.sql`を実行してテーブルを作成してください。

または、以下のテーブルを作成：

#### contact_submissions テーブル
```sql
CREATE TABLE contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  category TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### career_applications テーブル
```sql
CREATE TABLE career_applications (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  position TEXT NOT NULL,
  experience TEXT,
  motivation TEXT,
  resume_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### support_submissions テーブル
```sql
CREATE TABLE support_submissions (
  id BIGSERIAL PRIMARY KEY,
  donation_amount TEXT,
  custom_amount TEXT,
  donor_name TEXT NOT NULL,
  donor_email TEXT NOT NULL,
  donor_phone TEXT,
  donor_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### investment_inquiries テーブル
```sql
CREATE TABLE investment_inquiries (
  id BIGSERIAL PRIMARY KEY,
  investment_type TEXT NOT NULL,
  investment_amount TEXT,
  investor_name TEXT NOT NULL,
  investor_email TEXT NOT NULL,
  investor_phone TEXT,
  investor_company TEXT,
  investor_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 3. RLSポリシーの設定
各テーブルに対して`anon`キーからのINSERTを許可する必要があります：

```sql
-- RLSを有効にする
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE investment_inquiries ENABLE ROW LEVEL SECURITY;

-- パブリックINSERTポリシーを追加
CREATE POLICY "Allow public insert on contact_submissions" 
ON contact_submissions FOR INSERT 
TO public 
WITH CHECK (true);

CREATE POLICY "Allow public insert on career_applications" 
ON career_applications FOR INSERT 
TO public 
WITH CHECK (true);

CREATE POLICY "Allow public insert on support_submissions" 
ON support_submissions FOR INSERT 
TO public 
WITH CHECK (true);

CREATE POLICY "Allow public insert on investment_inquiries" 
ON investment_inquiries FOR INSERT 
TO public 
WITH CHECK (true);
```

### 4. サービスの役割キーについて
⚠️ **重要なセキュリティ注意事項**:

- `VITE_SUPABASE_SERVICE_ROLE_KEY`は**クライアントサイド（ブラウザ）では使用しない**でください
- サービスロールキーをブラウザに含めると、RLS（Row Level Security）を完全にバイパスできてしまいます
- これは極めて危険です！データベース全体への完全アクセスが可能になります

**正しい使用方法**:
- **クライアントサイド**: `anon`キーを使用（RLSポリシーが適用される）
- **サーバーサイドのみ**: `service_role`キーを使用（管理処理のみ）

現在の実装は正しいです。`anon`キーを使用しています。


