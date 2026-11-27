import mock from "../pages/analytics/mock";

export const RECEIVED_DATA_SUCCESSS = 'RECEIVED_DATA_SUCCESSS';
export const RECEIVING_DATA = 'RECEIVING_DATA';

export function receivedDataRequest() {
    return (dispatch) => {
        dispatch(receivingData());
        new Promise((resolve) => {
            resolve(mock.backendData);
        }).then(data => {
            dispatch(receiveDataSuccess(mock.backendData));
        })
    };
}

export function receiveDataSuccess(payload) {
    return {
        type: RECEIVED_DATA_SUCCESSS,
        payload
    }
}

export function receivingData() {
    return {
        type: RECEIVING_DATA
    }
}