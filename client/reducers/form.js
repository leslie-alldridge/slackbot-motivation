export default function form(state = [], action) {
  switch (action.type) {
    case 'FORM_ADDED':
      return {
        outcome: action.outcome
      };
    default:
      return state;
  }
}
