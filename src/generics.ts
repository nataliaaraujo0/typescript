function useState() {
  let state: number | string;

  function getState() {
    return state;
  }

  function setState(newState: number | string) {
    state = newState;
  }

  return { getState: getState, setState: setState };
}

const newState = useState();
newState.setState("alucard");
console.log(newState.getState());
