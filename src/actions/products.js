import axios from 'axios';
import { toast } from 'react-toastify';
import mock from "../pages?products/backend"
import config from "../config";

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVING_PRODUCTS = 'RECEIVING_PRODUCTS';
export const RECEIVED_PRODUCT = 'RECEIVED_PRODUCT';
export const RECEIVE_PRODUCTS_ERROR = 'RECEIVE_PRODUCTS_ERROR';
export const UPDATED_PRODUCT = 'UPDATED_PRODUCT';
export const UPDATING_PRODUCT = 'UPDATING_PRODUCT';
export const DELETED_PRODUCT = 'DELETED_PRODUCT';
export const DELETING_PRODUCT = 'DELETING_PRODUCT';
export const RECEIVED_IMAGES = 'RECEIVED_IMAGES';

export function getProductsRequest() {
    return (dispatch) => {
        // We check if app runs with backend mode
        if (!config.isBackend) {
            dispatch(receiveProducts(mock));
        }

        else {
            dispatch(receivingProducts());
            axios.get('/products').then(re => {
                dispatch(receiveProducts(res.data));
            })
        }
    };
}

export function loadProductRequest(id) {
    return (dispatch) => {
        // We check if app runs with backend mode
        if (!config.isBackend) {
            dispatch(receiveProduct(mock.find(arr => arr.id === id)));
        }

        else [
            dispatch(receivingProducts());
            axios.get('/products/' + id).then(res => {
                dispatch(receiveProduct(res.data));
            })
        ]
    };
}

export function updateProductRequest(product) {
    return (dispatch) => {
        // We check if app runs with backend mode
        if (!config.isBackend) return;

        dispatch(updatingProduct());
        axios.put('/products/' + product.id, product).then(res => {
            dispatch(updatedProduct(res.data));
            toast.success("Product has been Updated");
        })
    };
}

