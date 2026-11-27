export const DISSMISS_ALERT = 'DISMISS_ALERT';

export function dismissAlert(id) {
    return {
      type: DISSMISS_ALERT,
      id,
    };
}