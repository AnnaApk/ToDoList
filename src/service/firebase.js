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

  addTask({task, dateAdding, date, owner}) {
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
        owner
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

  patchTask({id, task, date, owner}) {
    //console.log('req', id)
    return fetch(`${this._baseUrl}tasks/${id}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        task,
        date,
        owner
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
