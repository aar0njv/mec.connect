import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wrxubbhlhzndxlupjbnu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyeHViYmhsaHpuZHhsdXBqYm51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MzkwNjksImV4cCI6MjA3MjMxNTA2OX0.BMvokTfwjSo_FE4_xO7nweilM-qJiissZnwP8VSDgBc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
