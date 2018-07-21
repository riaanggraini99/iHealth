const create = (patient) => {
    return fetch('/patient', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
  }