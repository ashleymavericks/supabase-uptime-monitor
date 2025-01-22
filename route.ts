// app/api/etc/supabase-activity-scheduler/route.ts

import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "<YOUR_SUPABASE_URL>"
const supabaseKey = "<YOUR_SUPABASE_KEY>"
const supabase = createClient(supabaseUrl, supabaseKey)

export async function GET() {
  try {
    // Fetch data to prevent Supabase project from pausing
    const { data, error } = await supabase.from("user").select()
    if (error) throw new Error(error.message)
    return Response.json(data)
  } catch (error) {
    const message = (error as Error).message ?? "An error occurred."
    return Response.json({ error: message }, { status: 400 })
  }
}
