export const APPLY_JOB = 'APPLY_JOB';

// Action creator to update fetched data
export  function applyJobAction(data, prevState) {
  return {
    type: APPLY_JOB,
    data: [...prevState, ...data]      
  }
}
