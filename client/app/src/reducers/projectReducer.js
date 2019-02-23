const initialState = {
  projects: [
    {
      id: "1",
      title: "Some title goes here.",
      content: "Just a dummy data to test redux."
    },
    {
      id: "2",
      title: "Some second title goes here.",
      content: "Just a dummy data to test redux."
    },
    {
      id: "3",
      title: "Some third title goes here.",
      content: "Just a dummy data to test redux."
    }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Created Project!");
      console.log(action.project);
  }
  return state;
};

export default projectReducer;
