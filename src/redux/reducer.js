let initialstate = [
  {
    id: 1,
    name: "Phone",
    image: "phone.jpeg",
    incart: 0,
  },
  {
    id: 2,
    name: "Laptop",
    image: "laptop.jpg",
    incart: 0,
  },
  {
    id: 3,
    name: "Watch",
    image: "watch.jpg",
    incart: 0,
  },
  {
    id: 4,
    name: "HeadPhone",
    image: "headphone.png",
    incart: 0,
  },
  {
      id:5,
      name:"Mouse",
      image:"mouse.jpg",
      incart:0
  },
  {
      id:6,
      name:"KeyBoard",
      image:"keyboard.jpeg",
      incart:0
  },
  {
      id:7,
      name:"Helmet",
      image:"helmet.jpeg",
      incart:0
  }
];

export const reducer = (state = initialstate, action) => {
  let idx = -1;
  let copy;
  switch (action.type) {
    case "ADD_TO_CART":
      copy = state.map((el) => el);
      idx = copy.findIndex((el) => el.id === action.payload);
      copy[idx].incart = copy[idx].incart + 1;
      return copy;

    case "REMOVE_FROM_CART":
      copy = state.map((el) => el);
      idx = copy.findIndex((el) => el.id === action.payload);
      if (copy[idx].incart > 0) copy[idx].incart = copy[idx].incart - 1;
      return copy;
    
      case "DELETE_FROM_CART":
        copy = state.map((el) => el);
        idx = copy.findIndex((el) => el.id === action.payload);
        if (copy[idx].incart > 0) copy[idx].incart = 0;
        return copy;
    default:
      return state;
  }
};
