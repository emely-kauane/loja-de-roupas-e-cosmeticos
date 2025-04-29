/*export default () => (
    <>
        <h1>Algum texto aqui</h1>
        <p>Algum outro texto</p>
    </>
)*/   
import db from "@/lib/db"
export default async () => {
    const alunos = await db.query("select * from aluno")
 return (<>
    <h1>Lista de alunos</h1>
    <div>
      {
         alunos.rows.map( 
            a => (
               <div>
                  {a.name} faz parte do projeto {a.project}
               </div>
            ) 
         )
      }
   </div>
 </>);
}