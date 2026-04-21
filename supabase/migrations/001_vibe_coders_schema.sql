-- VillageCircle / Vibe Coders — Supabase PostgreSQL Schema
-- Run via: supabase db push

create extension if not exists "uuid-ossp";

-- ══════════════════════════════════════════════════
-- COHORTS
-- ══════════════════════════════════════════════════
create table public.vc_cohorts (
  id          text primary key,
  name        text not null,
  status      text not null default 'upcoming'
    check (status in ('upcoming','open','closed','active','completed')),
  start_date  date not null,
  end_date    date not null,
  capacity    integer not null default 30,
  enrolled_count integer not null default 0,
  application_deadline date not null,
  price_min   integer not null,
  price_max   integer not null,
  created_at  timestamptz default now() not null
);

insert into public.vc_cohorts
  (id, name, status, start_date, end_date, capacity, application_deadline, price_min, price_max)
values
  ('cohort-1','Cohort 1 — The Founding Circle','open','2026-07-07','2027-01-07',30,'2026-06-15',3500000,6000000);

-- ══════════════════════════════════════════════════
-- APPLICATIONS (Step 1 — Interest Form)
-- ══════════════════════════════════════════════════
create table public.vc_applications (
  id           uuid default uuid_generate_v4() primary key,
  created_at   timestamptz default now() not null,
  updated_at   timestamptz default now() not null,

  name         text not null,
  email        text not null unique,
  whatsapp_number text not null,
  archetype    text not null check (archetype in ('dreamer','professionaliser','rural_builder','career_switcher')),

  idea         text not null,
  obstacle     text not null,
  commitment   text not null,

  status       text not null default 'interest_submitted'
    check (status in ('interest_submitted','shortlisted','assessment_sent','assessment_completed','accepted','rejected','enrolled','withdrawn')),

  assessment_token         uuid unique default uuid_generate_v4(),
  assessment_token_expires_at timestamptz default (now() + interval '72 hours'),
  assessment_completed_at  timestamptz,

  payment_preference text check (payment_preference in ('one_time','installment','isa','scholarship')),
  payment_status     text default 'unpaid' check (payment_status in ('unpaid','partial','paid','waived')),
  paystack_reference text,

  cohort_id      text references public.vc_cohorts(id),
  reviewer_notes text,
  score          integer,

  constraint email_format check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- ══════════════════════════════════════════════════
-- ASSESSMENTS (Step 2 — Deep Psychology Form)
-- ══════════════════════════════════════════════════
create table public.vc_assessments (
  id             uuid default uuid_generate_v4() primary key,
  created_at     timestamptz default now() not null,
  application_id uuid not null references public.vc_applications(id) on delete cascade,

  -- Dimension 1: Mindset & Resilience
  p1_failure     text,
  p2_feedback    integer check (p2_feedback between 1 and 7),
  p3_patience    text,
  p4_identity    text,
  p5_grit        text,

  -- Dimension 2: Clarity & Vision
  p6_problem     text,
  p7_user        text,
  p8_existing    text,
  p9_urgency     text,

  -- Dimension 3: Learning Style & Capacity
  p10_learn      text,
  p11_device     text,
  p12_internet   text,
  p13_schedule   text,

  -- Dimension 4: Community & Accountability
  p14_support    text,
  p15_accountability integer check (p15_accountability between 1 and 7),
  p16_contribute text,
  p17_payment    text,
  p18_final      text
);

-- ══════════════════════════════════════════════════
-- STUDENTS (enrolled)
-- ══════════════════════════════════════════════════
create table public.vc_students (
  id             uuid default uuid_generate_v4() primary key,
  created_at     timestamptz default now() not null,
  application_id uuid not null references public.vc_applications(id),
  cohort_id      text not null references public.vc_cohorts(id),
  user_id        uuid references auth.users(id),

  name           text not null,
  email          text not null,
  whatsapp_number text,
  archetype      text not null,
  bio            text,
  location       text,
  avatar_url     text,

  current_week   integer default 1,
  completed_weeks integer[] default '{}',
  status         text not null default 'active'
    check (status in ('active','paused','graduated','withdrawn')),
  graduated_at   timestamptz,

  payment_status text default 'unpaid',
  payment_tier   text,

  portfolio_visible boolean default false,
  product_url       text,
  product_name      text,
  product_description text
);

-- ══════════════════════════════════════════════════
-- PROJECTS
-- ══════════════════════════════════════════════════
create table public.vc_projects (
  id           uuid default uuid_generate_v4() primary key,
  created_at   timestamptz default now() not null,
  updated_at   timestamptz default now() not null,
  student_id   uuid not null references public.vc_students(id) on delete cascade,
  cohort_id    text not null references public.vc_cohorts(id),

  name         text not null,
  tagline      text,
  description  text,
  status       text default 'in_progress'
    check (status in ('in_progress','shipped','paused','graduated')),
  live_url     text,
  github_url   text,
  demo_video_url text,
  thumbnail_url  text,
  tech_stack   text[] default '{}',
  river        text,
  featured     boolean default false,
  showcase_approved boolean default false
);

-- ══════════════════════════════════════════════════
-- MENTOR BOOKINGS
-- ══════════════════════════════════════════════════
create table public.vc_mentor_bookings (
  id           uuid default uuid_generate_v4() primary key,
  created_at   timestamptz default now() not null,
  student_id   uuid not null references public.vc_students(id),
  mentor_name  text not null,
  session_type text not null check (session_type in ('code_review','product_review','general','crisis')),
  scheduled_at timestamptz not null,
  status       text default 'pending' check (status in ('pending','confirmed','completed','cancelled')),
  notes        text,
  recording_url text
);

-- ══════════════════════════════════════════════════
-- PAYMENTS
-- ══════════════════════════════════════════════════
create table public.vc_payments (
  id           uuid default uuid_generate_v4() primary key,
  created_at   timestamptz default now() not null,
  application_id uuid references public.vc_applications(id),
  student_id   uuid references public.vc_students(id),
  amount       integer not null,
  currency     text default 'NGN',
  status       text not null default 'pending'
    check (status in ('pending','success','failed','refunded')),
  paystack_reference text unique,
  paystack_transaction_id text,
  payment_type text check (payment_type in ('enrollment','installment_1','installment_2','installment_3','premium_monthly')),
  metadata     jsonb default '{}'
);

-- ══════════════════════════════════════════════════
-- ROW LEVEL SECURITY
-- ══════════════════════════════════════════════════
alter table public.vc_applications   enable row level security;
alter table public.vc_assessments    enable row level security;
alter table public.vc_cohorts        enable row level security;
alter table public.vc_students       enable row level security;
alter table public.vc_projects       enable row level security;
alter table public.vc_mentor_bookings enable row level security;
alter table public.vc_payments       enable row level security;

-- Cohorts: public read
create policy "Cohorts public read" on public.vc_cohorts for select using (true);

-- Applications: anyone can insert (apply), users read own
create policy "Anyone can apply" on public.vc_applications for insert with check (true);
create policy "Users read own application" on public.vc_applications for select
  using (email = (select email from auth.users where id = auth.uid()));

-- Students: read/update own profile
create policy "Students read own profile" on public.vc_students for select using (user_id = auth.uid());
create policy "Students update own profile" on public.vc_students for update using (user_id = auth.uid());

-- Projects: public for showcase-approved, CRUD own
create policy "Public approved projects" on public.vc_projects for select using (showcase_approved = true);
create policy "Students manage own projects" on public.vc_projects for all
  using (student_id in (select id from public.vc_students where user_id = auth.uid()));

-- ══════════════════════════════════════════════════
-- UPDATED_AT TRIGGERS
-- ══════════════════════════════════════════════════
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger vc_applications_updated
  before update on public.vc_applications
  for each row execute procedure public.handle_updated_at();

create trigger vc_projects_updated
  before update on public.vc_projects
  for each row execute procedure public.handle_updated_at();
