/*export default () => (
    <>
        <h1>Algum texto aqui</h1>
        <p>Algum outro texto</p>
    </>
)*/   
import db from "@/lib/db"
export default async () => {
    const alunos = await db.query("select * from usuario")
 return (<>
    <h1>Lista de usuários</h1>
    <div>
      {
         alunos.rows.map( 
            a => (
               <div>
                  {a.nome} faz parte do projeto {a.cargo}
               </div>
            ) 
         )
      }
   </div>
 </>);
}