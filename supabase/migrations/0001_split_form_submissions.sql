-- Splits the single `form_submissions` table into typed tables for the
-- two data-heavy funnels (applications, assessments) and a generic `leads`
-- table for the three simple lead-capture forms (contact, school-partner,
-- newsletter).
--
-- Run this in the Supabase Dashboard SQL Editor for the project, or via
-- `supabase db push` once the CLI is linked to the correct account/project.

-- 1. applications ------------------------------------------------------

create table if not exists applications (
  id                    uuid primary key default gen_random_uuid(),
  created_at            timestamptz not null default now(),
  status                text not null default 'new'
                          check (status in ('new', 'reviewing', 'accepted', 'rejected')),

  full_name             text not null,
  email                 text not null,
  phone                 text,
  whatsapp              text,
  dob                   date,
  city                  text,
  preferred_language    text,

  school_name           text,
  grade                 text,
  board                 text,
  stream                text,
  most_recent_result    text,
  subject_areas         text[],

  target_university_type text,
  application_timeline   text,
  previous_courses        boolean,
  previous_courses_description text,
  hopes_for_gec         text,

  transcript_path       text,
  id_path                text,
  confirm_accurate      boolean not null default false
);

alter table applications enable row level security;

create policy "public can insert applications"
  on applications for insert
  to anon
  with check (true);

-- 2. assessments --------------------------------------------------------

create table if not exists assessments (
  id                      uuid primary key default gen_random_uuid(),
  created_at              timestamptz not null default now(),

  child_name              text,
  parent_name             text,
  parent_email            text,
  whatsapp                text,

  grade                   text,
  board                   text,
  city                    text,
  city_other              text,
  school_type             text,

  strongest_subject       text,
  academic_performance    text,
  study_abroad_interest   text,
  career_interest         text,
  application_timeline    text,
  target_university_type  text,
  primary_goal            text,
  family_us_history       text
);

alter table assessments enable row level security;

create policy "public can insert assessments"
  on assessments for insert
  to anon
  with check (true);

-- 3. leads (contact, school-partner, newsletter) -------------------------

create table if not exists leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  form_type   text not null check (form_type in ('contact', 'school-partner', 'newsletter')),
  payload     jsonb not null
);

alter table leads enable row level security;

create policy "public can insert leads"
  on leads for insert
  to anon
  with check (true);

-- 4. retire the old catch-all table --------------------------------------
-- Left in place (not dropped) so nothing breaks mid-cutover. Once the app
-- code below is deployed and verified against the new tables, drop it with:
--   drop table form_submissions;
