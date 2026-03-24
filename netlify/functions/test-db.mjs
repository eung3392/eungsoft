import { neon } from '@neondatabase/serverless';

export default async (req, context) => {
  try {
    // Netlify에서 Neon 익스텐션을 설치하면 주로 DATABASE_URL 또는 NEON_DATABASE_URL이 환경 변수로 등록됩니다.
    const dbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL;
    
    if (!dbUrl) {
      return new Response(JSON.stringify({ error: "데이터베이스 연결 URL을 찾을 수 없습니다." }), { status: 500 });
    }

    const sql = neon(dbUrl);
    
    // DB가 정상적으로 연결되었는지 확인하기 위한 간단한 쿼리입니다.
    // 처음 사용이시라면 CREATE TABLE 등을 이용해 테이블을 구성하신 후 사용할 수 있습니다.
    const result = await sql`SELECT version()`;

    return new Response(JSON.stringify({ 
      message: "Neon DB 연결 성공!", 
      db_version: result[0].version 
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

export const config = {
  path: "/api/test-db"
};
