const VisibilityFilters = {
  SHOW_ALL: "All",
  SHOW_ACTIVE: "Active",
  SHOW_COMPLETED: "Completed",
};

const INITIAL_STATE = {
  todos: [],
  filter: VisibilityFilters.SHOW_ALL
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
