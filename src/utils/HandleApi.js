import axios from 'axios';

const baseUrl = 'http://localhost:8080';

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data --->', data);
            setToDo(data)
        })
}
const addToDo = (text, setText, setToDo) => {
    axios
        .post(`${baseUrl}/insert`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}
const updateToDo = (toDoId, text, setToDo, setText, setIsUpdate) => {
    axios
        .post(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdate(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}
const deleteToDo = (_id, setToDo) => {
    axios
        .post(`${baseUrl}/delete`, { _id})
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}
export { getAllToDo, addToDo, updateToDo, deleteToDo }