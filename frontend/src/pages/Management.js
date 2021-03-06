import { Formik, Field, FieldArray } from 'formik'
function Management(){
return (
    <div>
        <>
      <h1>Gerir Doações</h1>
      <Formik
        initialValues={
          { alimentos: [], 
            freguesias: '',
            rua: ''}}
        
        onSubmit={async (values, { resetForm }) => {
          console.log(values)
          const res = await fetch(`/api/donations/`, {
            method: "POST",
            body: JSON.stringify(values),
            headers: { "Content-Type": "application/json" }
          })
          console.log(res.status)
          if (res.status === 201) {
            const {id} = await res.json()
            resetForm()
          }
        }}
      >
        {
          ({ values, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <h2>Adiciona os alimentos e as respetivas quantidades</h2>
            <FieldArray
              name="alimentos"
              render={arrayHelpers => (
                <div>
                  {values.alimentos && values.alimentos.length > 0 ? (
                    values.alimentos.map((alimento, index) => (
                      <div key={index}>
                        <Field name={`alimentos.${index}.name`}/>
                        <Field type="number"
                          min={0}
                          name={`alimentos.${index}.number`}
                          placeholder="Quantidade (unidade)" />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} 
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.insert(index + 1, {name: "", number: ""})} 
                        >
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push({name: "", number: ""})}>
                     Adicionar Alimentos
                    </button>
                  )}
                </div>
              )}
            />
            
            <h2>Escolhe a freguesia</h2>
            <Field
              as="select"
              name="freguesias" >
              <option value="empty"></option>
              <option value="Agualva e Mira-Sintra">Agualva e Mira-Sintra</option>
              <option value="Algueirão - Mem Martins">Algueirão - Mem Martins</option>
              <option value="Cabrela">Cabrela</option>
              <option value="Cacém e São Marcos">Cacém e São Marcos</option>
              <option value="Casal de Cambra">Casal de Cambra</option>
              <option value="Queluz e Belas">Queluz e Belas</option>
              <option value="São João das Lampas e Terrugem">São João das Lampas e Terrugem</option>
              <option value="Almargem do Bispo, Pero Pinheiro e Montelavar">Almargem do Bispo, Pero Pinheiro e Montelavar</option>
              <option value="Santa Maria e São Miguel, São Martinho e São Pedro de Penaferrim">Santa Maria e São Miguel, São Martinho e São Pedro de Penaferrim</option>
            </Field>
            <h2>Escolhe o teu Ponto de Recolha</h2>
            <Field
              as="select"
              name="rua" >
              <option value="empty"></option>
              <option value="Escola">Escola</option>
              <option value="PSP">PSP</option>
              <option value="Junta da Freguesia">Junta da Freguesia</option>
              <option value="Clube Desportivo">Clube Desportivo</option>
            </Field>
            {/* <Field type="text" name="rua" placeholder="Ponto de Recolha"/> */}
            <br/>

            <button type="submit">Inserir Doação</button>
            </form>
          )
        }
      </Formik>
    </>
    </div>
)
}
export default Management;