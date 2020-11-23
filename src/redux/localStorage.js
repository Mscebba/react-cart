// load string from localStarage and convert into an Object
export function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('persistantState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

// convert object to string and store in localStorage
export function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('persistantState', serializedState);
  } catch (e) {
    console.warn(e);
  }
}
