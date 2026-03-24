import { neon } from '@neondatabase/serverless';

export default async (req, context) => {
  try {
    const dbUrl = process.env.NETLIFY_DATABASE_URL || process.env.DATABASE_URL || process.env.NEON_DATABASE_URL;
    if (!dbUrl) {
      return new Response(JSON.stringify({ error: "데이터베이스 연결 URL을 찾을 수 없습니다." }), { status: 500 });
    }

    const sql = neon(dbUrl);
    
    // Create the stats table if it doesn't already exist
    await sql`
      CREATE TABLE IF NOT EXISTS stats_counter (
        event_name VARCHAR(100) PRIMARY KEY,
        count INTEGER DEFAULT 0
      )
    `;

    const url = new URL(req.url);
    const action = url.searchParams.get('action'); // 'get' or 'inc'
    const name = url.searchParams.get('name') || 'unknown';

    if (action === 'inc') {
      const result = await sql`
        INSERT INTO stats_counter (event_name, count)
        VALUES (${name}, 1)
        ON CONFLICT (event_name)
        DO UPDATE SET count = stats_counter.count + 1
        RETURNING count
      `;
      return new Response(JSON.stringify({ success: true, count: result[0].count }), {
        status: 200, headers: { "Content-Type": "application/json" }
      });
    } else if (action === 'all') {
      const result = await sql`
        SELECT event_name, count FROM stats_counter
        ORDER BY count DESC
      `;
      return new Response(JSON.stringify({ success: true, data: result }), {
        status: 200, headers: { "Content-Type": "application/json" }
      });
    } else {
      // action === 'get'
      const result = await sql`
        SELECT count FROM stats_counter
        WHERE event_name = ${name}
      `;
      const count = result.length > 0 ? result[0].count : 0;
      return new Response(JSON.stringify({ success: true, count }), {
        status: 200, headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    console.error("DB Track Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

export const config = {
  path: "/api/track-stats"
};
