-- Tables for autodiag-eu.com website
-- Project: wikoprywqzpovgknqihz (existing Supabase project)

-- Table: beta_requests
CREATE TABLE IF NOT EXISTS beta_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  vehicle text,
  country text NOT NULL,
  email_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Table: ios_waitlist
CREATE TABLE IF NOT EXISTS ios_waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

-- RLS: beta_requests
ALTER TABLE beta_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_beta" ON beta_requests
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "service_role_all_beta" ON beta_requests
  FOR ALL TO service_role
  USING (true)
  WITH CHECK (true);

-- RLS: ios_waitlist
ALTER TABLE ios_waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_ios" ON ios_waitlist
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "service_role_all_ios" ON ios_waitlist
  FOR ALL TO service_role
  USING (true)
  WITH CHECK (true);
