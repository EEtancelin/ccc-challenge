const BASE_URL = '/api/v1/channels';

export function createCharacter(values) {
  return {
    type: 'CREATE_CHARACTER',
    payload: values // Will be resolved by redux-promise
  };
}
