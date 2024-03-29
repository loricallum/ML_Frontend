export const initTutorsState = {
  list: [
    {
      id: 1,
      name: "Lori Callum",
      email: "something@me.com",
      subject: "ESL",
      about:
        "Imagine learning a language and every time you took a class, spoke with a language partner, or updated your friends on what you’d learned, you were given a percentage of the profits of a multi-million dollar company?",
      img:
        "https://images.unsplash.com/photo-1617870952348-7524edfb61b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      rate: "$ 154/hr",
      experience: "4 years"
    },
    {
      id: 2,
      name: "Lori Callum",
      email: "something@me.com",
      subject: "ESL",
      about:
        "Imagine learning a language and every time you took a class, spoke with a language partner, or updated your friends on what you’d learned, you were given a percentage of the profits of a multi-million dollar company?",
      img:
        "https://images.unsplash.com/photo-1617870952348-7524edfb61b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      rate: "$ 154/hr",
      experience: "4 years"
    },
    {
      id: 3,
      name: "Lori Callum",
      email: "something@me.com",
      subject: "ESL",
      about:
        "Imagine learning a language and every time you took a class, spoke with a language partner, or updated your friends on what you’d learned, you were given a percentage of the profits of a multi-million dollar company?",
      img:
        "https://images.unsplash.com/photo-1617870952348-7524edfb61b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      rate: "$ 154/hr",
      experience: "4 years"
    }
  ],
  fetching: true,
  message: "",
  currentTutor: {}
};

export const initAuthState = {
  authToken: "",
  fetching: true,
  message: ""
};

export const initApptState = {
  list: [
    {
      id: 1,
      location: "London",
      tutor_id: 1,
      canceled: false,
      created_at: "2020-06-08 16:51:35",
      updated_at: "2020-06-08 16:51:35",
      user_id: 1,
      date: "2020-07-05",
      time: "1  8:00:00"
    },
    {
      id: 2,
      location: "Mexico City",
      tutor_id: 1,
      canceled: false,
      created_at: "2020-06-08 16:51:35",
      updated_at: "2020-06-08 16:51:35",
      user_id: 1,
      date: "2020-07-05",
      time: "15:00:00"
    },
    {
      id: 3,
      location: "Mexico City",
      tutor_id: 1,
      canceled: false,
      created_at: "2020-06-08 16:51:35",
      updated_at: "2020-06-08 16:51:35",
      user_id: 1,
      date: "2020-07-05",
      time: "15:00:00"
    },
    {
      id: 4,
      location: "Mexico City",
      tutor_id: 1,
      canceled: false,
      created_at: "2020-06-08 16:51:35",
      updated_at: "2020-06-08 16:51:35",
      user_id: 1,
      date: "2020-07-05",
      time: "15:00:00"
    }
  ],
  fetching: true,
  message: ""
};
