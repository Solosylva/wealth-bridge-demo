-- Run this in Supabase SQL Editor after the existing profiles table has been created.
-- Creates a profile automatically when a new auth user registers.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name, referral_code)
  values (new.id, new.raw_user_meta_data ->> 'full_name', 'WB' || upper(substr(replace(new.id::text, '-', ''), 1, 8)))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- Allow a signed-in user to read and update only their own profile.
-- The existing policies from your earlier setup should already provide these rules.
-- Do not add broad public INSERT/UPDATE policies.
