import React, { useEffect, useReducer } from "react";
import { createContext } from "react";
export const context = createContext({
  allfounditem: [],
  addItem: () => {},
});
function reducer(currentstate, action) {
  let newlist = currentstate;
  if (action.type === "ADD_ITEM") {
    newlist = [
      {
        title: action.payload.title,
        describe: action.payload.description,
        location: action.payload.location,
        date: action.payload.date,
        contact: action.payload.contact,
      },
      ...currentstate,
    ];
  }
  if (action.type === "ADD_ITEMS") {
    newlist = action.payload.post;
  }
  return newlist;
}

export default function Storage({ children }) {
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        add_Items(data);
      });
  }, []);

  function add_Items(post) {
    dispatch({
      type: "ADD_ITEMS",
      payload: {
        post,
      },
    });
  }
  function addItem(title, description, location, date, contact) {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        title,
        description,
        location,
        date,
        contact,
      },
    });
  }
  return (
    <div>
      <context.Provider value={{ allfounditem: state, addItem }}>
        {children}
      </context.Provider>
      ;
    </div>
  );
}
// const DEFAULT = [
//   {
//     id: "1",
//     title: "title1",
//     description: "description",
//     location: "location",
//     date: "date",
//     contact: "98766676",
//   },
//   {
//     id: "2",
//     title: "title2",
//     description: "description",
//     location: "location",
//     date: "date",
//     contact: "98766676",
//   },
// ];
