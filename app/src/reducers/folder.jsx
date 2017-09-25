export default function folder(state = '', action) {
  if (action.type === 'SELECT_FOLDER') {
      // TODO: such a dumb thing
      return (action.payload + state).replace('undefined','')
  }

  return state
}
