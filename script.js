const { useState } = React;

function Dashboard() {
  return (
    <div>

      <h1>Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h3>Consultas Hoje</h3>
          <p>12</p>
        </div>

        <div className="card">
          <h3>Pacientes</h3>
          <p>248</p>
        </div>

        <div className="card">
          <h3>Consultas do Mês</h3>
          <p>97</p>
        </div>

      </div>

    </div>
  );
}

function Pacientes() {

  function cadastrarPaciente(){
    alert("Paciente cadastrado com sucesso!");
  }

  return (
    <div>

      <h1>Cadastro de Pacientes</h1>

      <div className="form">

        <input type="text" placeholder="Nome completo"/>

        <input type="text" placeholder="CPF"/>

        <input type="text" placeholder="Telefone"/>

        <input type="text" placeholder="Convênio"/>

        <button onClick={cadastrarPaciente}>
          Cadastrar
        </button>

      </div>

      <table>

        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Telefone</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>João Silva</td>
            <td>123.456.789-00</td>
            <td>(83) 99999-9999</td>
          </tr>

          <tr>
            <td>Maria Clara</td>
            <td>987.654.321-00</td>
            <td>(83) 98888-8888</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

function Agendamentos() {

  function agendarConsulta(){
    alert("Agendamento realizado com sucesso!");
  }

  return (
    <div>

      <h1>Agendamentos</h1>

      <div className="form">

        <input type="text" placeholder="Paciente"/>

        <select>
          <option>Médico</option>
          <option>Dr. Lucas</option>
          <option>Dra. Ana</option>
        </select>

        <input type="date"/>

        <input type="time"/>

        <button onClick={agendarConsulta}>
          Agendar
        </button>

      </div>

      <div className="agenda">

        <div className="consulta">
          <strong>08:00</strong>
          <p>Maria Clara - Dr. Lucas</p>
        </div>

        <div className="consulta">
          <strong>09:00</strong>
          <p>João Silva - Dra. Ana</p>
        </div>

      </div>

    </div>
  );
}

function Prontuario() {

  function salvarProntuario(){
    alert("Prontuário salvo com sucesso!");
  }

  return (
    <div>

      <h1>Prontuário Eletrônico</h1>

      <div className="prontuario">

        <div className="historico">

          <h3>Histórico</h3>

          <div className="registro">
            <strong>10/05/2026</strong>
            <p>Consulta de rotina</p>
          </div>

          <div className="registro">
            <strong>20/04/2026</strong>
            <p>Solicitação de exames</p>
          </div>

        </div>

        <div className="area-form">

          <textarea placeholder="Queixa principal"></textarea>

          <textarea placeholder="Diagnóstico"></textarea>

          <textarea placeholder="Prescrição"></textarea>

          <textarea placeholder="Observações"></textarea>

          <button onClick={salvarProntuario}>
            Salvar
          </button>

        </div>

      </div>

    </div>
  );
}

function App() {

  const [pagina, setPagina] = useState("dashboard");

  function renderizarPagina(){

    if(pagina === "dashboard"){
      return <Dashboard />;
    }

    if(pagina === "pacientes"){
      return <Pacientes />;
    }

    if(pagina === "agendamentos"){
      return <Agendamentos />;
    }

    if(pagina === "prontuario"){
      return <Prontuario />;
    }

  }

  return (
    <div className="container">

      <div className="sidebar">

        <h2>MedSync</h2>

        <button onClick={() => setPagina("dashboard")}>
          Dashboard
        </button>

        <button onClick={() => setPagina("pacientes")}>
          Pacientes
        </button>

        <button onClick={() => setPagina("agendamentos")}>
          Agendamentos
        </button>

        <button onClick={() => setPagina("prontuario")}>
          Prontuário
        </button>

      </div>

      <div className="content">
        {renderizarPagina()}
      </div>

    </div>
  );
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);