fetch('https://mocki.io/v1/836315f2-b480-49e2-a57a-e814c93db2f2')
//api compelta nova https://mocki.io/v1/ae743462-104f-43d5-9916-a644a12b84a2
  .then(response => response.json())
  .then(data => {
    console.table(data.clientes);
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped', 'table-hover');
    const headers = ['Nome', 'Email', 'Data/Hora', 'Pagamento Pendente', ''];
    const headerRow = document.createElement('tr');
    headerRow.style.textAlign = 'left';
    headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      th.style.paddingRight = '15px';
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    data.clientes.forEach(cliente => {
      const row = document.createElement('tr');
      const nomeCell = document.createElement('td');
      nomeCell.textContent = cliente.nome;
      nomeCell.style.paddingRight = '15px';
      row.appendChild(nomeCell);
      const emailCell = document.createElement('td');
      emailCell.textContent = cliente.email;
      emailCell.style.paddingRight = '15px';
      row.appendChild(emailCell);
      const dataHoraCell = document.createElement('td');
      dataHoraCell.textContent = cliente.dataHora;
      dataHoraCell.style.paddingRight = '15px';
      row.appendChild(dataHoraCell);
      const pagamentoPendenteCell = document.createElement('td');
      if (cliente.pagamentoPendente) {
        pagamentoPendenteCell.textContent = 'Pendente';
        pagamentoPendenteCell.style.color = 'red';
      } else {
        pagamentoPendenteCell.textContent = 'Recebido';
        pagamentoPendenteCell.style.color = 'green';
      }
      pagamentoPendenteCell.style.paddingRight = '15px';
      row.appendChild(pagamentoPendenteCell);
      const buttonCell = document.createElement('td');
      const button = document.createElement('button');
      button.textContent = 'Enviar';
      button.classList.add('btn', 'btn-success');
      button.style.backgroundColor = '#8bc34a';
      button.style.borderColor = '#8bc34a';
      button.style.marginLeft = '10px';
      button.onclick = function() {
        window.location.href = `mailto:${cliente.email}?subject=Me%20pague&body=Pague%20o%20que%20voc%C3%AA%20me%20deve!`;
      };
      buttonCell.appendChild(button);
      row.appendChild(buttonCell);
      table.appendChild(row);
      const separatorRow = document.createElement('tr');
      const separatorCell = document.createElement('td');
      separatorCell.colSpan = '5';
      separatorCell.style.borderTop = '1px solid #ccc';
      separatorRow.appendChild(separatorCell);
      table.appendChild(separatorRow);
    });
    console.log(table);
    document.body.appendChild(table);
  })
  .catch(error => console.error(error));


const inputBusca = document.getElementById('input-busca');
inputBusca.addEventListener('input', function() {
  const busca = inputBusca.value.toLowerCase().trim();
  const linhas = document.querySelectorAll('table tr:not(:first-child)');
  linhas.forEach(linha => {
    const nome = linha.querySelector('td:nth-child(1)').textContent.toLowerCase();
    if (nome.includes(busca)) {
      linha.style.display = '';
    } else {
      linha.style.display = 'none';
    }
  });
});


