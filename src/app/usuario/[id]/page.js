import db from "@/lib/db";

export default async () => {
    const aluno = db.query(
        "select * from aluno where id = 7"
    );
    return (
        <>
            <h1>Página do aluno: 
                {aluno.rows[0].name}
            </h1>
            <p>O aluno faz parte do projeto 
                {(await aluno).rows[0].project}
            </p>
        </>
    )
}