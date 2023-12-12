export const addBook = (data) => {
  return {
    type: 'ADD_BOOK',
    payload: data,
  };
};
export const deleteBook = (id) => {
  return {
    type: 'DELETE_BOOK',
    payload: id,
  };
};
export const editBook = (id) => {
  return {
    type: 'EDIT_BOOK',
    payload: id,
  };
};
export const update = (id, data) => {
  console.log(id);
  return {
    type: 'UPDATE',
    payload: id,
    data,
  };
};
