import axios from 'axios';
const api = 'http://localhost:4001/api/todos';

// GETALL data
export const getAll = () =>
    axios.get(api)
    .then(res => {
        return res.data;
    }).catch((error) => {
        console.log("Error While getting todos")
        return(error)
    });

// ADD data
export const add = (data) =>
    axios.post(api, data)
    .then(res => console.log(res.data))
    .catch((error) => {
    console.log("Error While Add data")
    return(error)
});

//GET-data
export const getWithId = (id) => {
    console.log("Getting data ...");
    return axios.get(`${api}/${id}`)
      .then(res => res.data)
      .catch((error) => {
        console.log("Error While get data",error);
        return(error)
      })
  };

//UPDATE data
export const update = (id,data) => {
    console.log("Adding data ...",data);
   return axios.put(`${api}/${id}`, data)
    .then((res) => console.log("res",res.data))
    .catch((error) => {
        console.log("Error While Add data",error);
        return(error)
    })
};

//DELETE-data
export const deleteWithId = (id) => {
    console.log("Getting data ...");
    return axios.delete(`${api}/${id}`)
      .then(res => res.data)
      .catch((error) => {
        console.log("Error While deleting data",error);
        return(error)
      })
  }