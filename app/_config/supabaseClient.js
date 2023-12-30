import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_PROJECT_URL
const supabaseKey = process.env.NEXT_PUBLIC_API_URL
export const supabase = createClient(supabaseUrl, supabaseKey)