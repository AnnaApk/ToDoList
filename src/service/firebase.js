class Api {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
  }
  
  _getResponseData(res) {
    if (!res.ok) {
       return Promise.reject(`${res.status}`);
    }
    return res.json();
  } 

  getTasks() {
    //console.log('req')
    return fetch(`${this._baseUrl}tasks.json`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(this._getResponseData)
  }

  addTask({task, dateAdding, date, owner, isDone}) {
    //console.log('req')
    return fetch(`${this._baseUrl}tasks.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        task,
        dateAdding,
        date,
        owner,
        isDone
      })
    })
    .then(this._getResponseData)
  }

  deleteTask({id}) {
    //console.log('req', id)
    return fetch(`${this._baseUrl}tasks/${id}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(this._getResponseData)
  }

  patchTask({id, task, date}) {
    console.log('req', id, date)
    return fetch(`${this._baseUrl}tasks/${id}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        task,
        date,
      })
    })
    .then(this._getResponseData)
  }
  
}
  
const baseUrl = 'https://todolist-4f9ee-default-rtdb.firebaseio.com/';
const api = new Api({
  baseUrl: baseUrl
})
  
export default api;
