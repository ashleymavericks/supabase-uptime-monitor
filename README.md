# Supabase Uptime Monitor using Github Actions

Keep your Supabase project active and prevent automatic pausing in the free tier by implementing an uptime monitor with GitHub Actions. This solution provides:

- Automated health checks at configurable intervals
- Zero-cost monitoring using GitHub's free tier
- Simple setup with minimal configuration required
- Reliable uptime for your Supabase projects

## Supabase Native Scheduling (Alternate approach)
If you aim to fully integrate into Supabase's ecosystem, you can conveniently [schedule Supabase's edge functions](https://supabase.com/docs/guides/functions/schedule-functions) using pg_cron and pg_net extension directly from the dashboard. This approach leverages Postgres's built-in scheduling capabilities through pg_cron to make periodic HTTP requests to your edge functions using pg_net. Here's how it works:

1. pg_cron acts as a cron server within Postgres, allowing you to schedule jobs with minute-level precision
2. pg_net enables making HTTP POST requests to your edge functions from within Postgres
3. Combined, they let you trigger your edge functions on a schedule without external dependencies

Note that pg_net has some limitations to keep in mind:
- Handles up to 200 requests per second by default
- Responses are stored for 6 hours
- Only supports POST requests with JSON data

If you are looking for a cron provider with a generous free tier, Vercel has a few listed [here.](https://vercel.com/guides/how-to-setup-cron-jobs-on-vercel#alternative-cron-providers)
