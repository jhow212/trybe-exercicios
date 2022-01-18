const newEmployees = (func) => {
    const employees = {
      id1:func('Pedro Guerra') , // Nome:  -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2:func('Luiza Drumond') , // Nome: -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3:func('Carla Paiva') , // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const nome = (fullName) => {
    const arrumando = fullName.toLowerCase().replace(" ", "_") 
    const eMail = `${arrumando}@trybe.com`;
    return {fullName, eMail};
  }

  console.log(newEmployees(nome));