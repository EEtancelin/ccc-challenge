export default function charactersReducer(state = null, action) {
  switch (action.type) {
    case 'CREATE_CHARACTER':
      return [action.payload, ...state];
    default:
      return state;
  }
}
