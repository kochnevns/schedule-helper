export default function app(state = false, action) {
  if (action.type === 'CONFIRM_REPOS') {
      return action.payload ? true : state
  }
  return state
}
