export const addBook = (data: {
  id: Date;
  title: string;
  message: string;
  price: string;
  category: string;
  editing: boolean;
}) => {
  return {
    type: 'ADD_BOOK',
    payload: data,
  };
};
export const deleteBook = (id: any) => {
  return {
    type: 'DELETE_BOOK',
    payload: id,
  };
};
export const editBook = (id: any) => {
  return {
    type: 'EDIT_BOOK',
    payload: id,
  };
};
export const update = (
  id: any,
  data: { newTitle: string; newMessage: string; newCategory: string; newPrice: string }
) => {
  console.log(id);
  return {
    type: 'UPDATE',
    payload: id,
    data,
  };
};
