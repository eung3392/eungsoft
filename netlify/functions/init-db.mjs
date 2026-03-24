import { neon } from '@neondatabase/serverless';

export default async (req, context) => {
  try {
    const dbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL;
    if (!dbUrl) {
      return new Response(JSON.stringify({ error: "데이터베이스 연결 URL을 찾을 수 없습니다." }), { status: 500 });
    }

    const sql = neon(dbUrl);
    
    // 테이블 생성 확인
    await sql`
      CREATE TABLE IF NOT EXISTS stats_counter (
        event_name VARCHAR(100) PRIMARY KEY,
        count INTEGER DEFAULT 0
      )
    `;

    const records = [
      { name: 'EKHome', count: 29 },
      { name: 'EKLiveCam', count: 21 },
      { name: 'RokidConnectHud2', count: 11 },
      { name: 'RokidConnectHud', count: 9 },
      { name: 'web-install', count: 7 },
      { name: 'Persona', count: 5 },
      { name: 'EKArrow', count: 4 },
      { name: 'MatrixVision', count: 1 },
      { name: 'zoom', count: 1 },
      { name: 'Trans', count: 1 },
      { name: 'EKFind', count: 1 },
      { name: 'EKBookScan', count: 1 },
      { name: 'eungTableClock', count: 1 }
    ];

    for (const record of records) {
      // ON CONFLICT UPDATE: 기존에 데이터가 있으면 덮어쓰기! (원치 않으면 DO NOTHING이나 + 처리 가능)
      // 여기서는 초기값이므로 덮어씌웁니다.
      await sql`
        INSERT INTO stats_counter (event_name, count)
        VALUES (${record.name}, ${record.count})
        ON CONFLICT (event_name)
        DO UPDATE SET count = ${record.count}
      `;
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: "초기 데이터(다운로드 수) 업데이트가 완료되었습니다!" 
    }), {
      status: 200, headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("DB Init Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

export const config = {
  path: "/api/init-db"
};
