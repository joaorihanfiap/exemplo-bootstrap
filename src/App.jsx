
import './App.css'

function App() {

  return (
    <>
          <h1>Aula Bootstrap</h1>
      <div className="row">
        {/* Soma das colunas tem q dar 12 */}
        <div className="col-md-6 col-lg-4 col-xl-3">Col-3</div>
        <div className="col-md-6 col-lg-4 col-xl-3">Col-3</div>
        <div className="col-md-6 col-lg-4 col-xl-3">Col-3</div>
        <div className="col-md-6 col-lg-4 col-xl-3">Col-3</div>
      </div>


      <div className="text-primary container border border-dark">Container</div>
      <div className="text-secondary container-sm border border-dark">Container</div>
      <div className="text-success container-md border border-dark">Container</div>
      <div className="text-danger container-lg border border-dark">Container</div>
      <div className="bg-primary container-xl border border-dark">Container</div>
      <div className="bg-success container-xxl border border-dark">Container</div>
      <div className="container-fluid border border-dark"><p className='ms-5 border border.primary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum delectus dolores corrupti perspiciatis harum esse ut, fugiat accusantium nulla perferendis alias eius qui reiciendis sint libero quae ad. Atque, rerum?</p></div>

    <button className="btn btn-primary">Click me</button>
    <button className="btn btn-secondary">Click me</button>
    <button className="btn btn-success">Click me</button>
    <button className="btn btn-danger">Click me</button>
    <button className="btn btn-info">Click me</button>
    <button className="btn btn-light">Click me</button>
    <button className="btn btn-dark">Click me</button>
    <button className="btn btn-link">Click me</button>
    <br />
    <button className="btn btn-outline-primary">Click me</button>
    <button className="btn btn-outline-secondary">Click me</button>
    <button className="btn btn-outline-success">Click me</button>
    <button className="btn btn-outline-danger">Click me</button>
    <button className="btn btn-outline-info">Click me</button>
    <button className="btn btn-outline-light">Click me</button>
    <button className="btn btn-outline-dark">Click me</button>
    <button className="btn btn-outline-link">Click me</button>


    <br /><br /><br />
    <table className='table table-stripped table-bordered table-hover'>
      <thead>
        <th>Nome</th>
        <th>Endereço</th>
        <th>Telefone</th>
      </thead>
      <tbody>
        <tr className='table-primary'>
          <td>Rodnei</td>
          <td>Rua Dos Rodrigos</td>
          <td>12348819</td>
        </tr>
        <tr>
          <td>@Eric Rodrigues</td>
          <td>Instagram</td>
          <td>696969696969</td>
        </tr>
        <tr className='table-primary'>
          <td>Matthew Zanardi</td>
          <td>Gym</td>
          <td>11993920088</td>
        </tr>
      </tbody>
    </table>

    </>
  )
}

export default App
