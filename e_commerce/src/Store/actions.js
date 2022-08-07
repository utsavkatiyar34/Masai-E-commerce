import {
        ADD_TODO_ERROR,
        ADD_TODO_LOADING,
        ADD_TODO_SUCCESS,
        GET_TODO_LOADING,
        GET_TODO_SUCCESS,
        GET_TODO_ERROR,
        PATCH_TODO_ERROR,
        PATCH_TODO_LOADING,
        PATCH_TODO_SUCCESS,
        DELETE_TODO_ERROR,
        DELETE_TODO_SUCCESS,
        DELETE_TODO_LOADING,
        SIGNUP_TODO_LOADING,
        SIGNUP_TODO_SUCCESS,
        SIGNUP_TODO_ERROR,
        LOGIN_TODO_LOADING,
        LOGIN_TODO_SUCCESS,
        LOGIN_TODO_ERROR,
        LOGOUT,
      } from "./actionTypes";
      
      export const addToDoLoading = () => {
        return {
          type: ADD_TODO_LOADING,
        };
      };
      export const addToDoSuccess = (payload) => {
        return {
          type: ADD_TODO_SUCCESS,
          payload,
        };
      };
      export const addToDoError = () => {
        return {
          type: ADD_TODO_ERROR,
        };
      };
      export const getToDoLoading = () => {
        return {
          type: GET_TODO_LOADING,
        };
      };
      export const getToDoSuccess = (payload) => {
        return {
          type: GET_TODO_SUCCESS,
          payload,
        };
      };
      export const getToDoError = () => {
        return {
          type: GET_TODO_ERROR,
        };
      };
      
      export const patchToDoLoading = () => {
        return {
          type: PATCH_TODO_LOADING,
        };
      };
      export const patchToDoSuccess = (payload) => {
        return {
          type: PATCH_TODO_SUCCESS,
          payload,
        };
      };
      export const patchToDoError = () => {
        return {
          type: PATCH_TODO_ERROR,
        };
      };
      
      export const deleteToDoLoading = () => {
        return {
          type: DELETE_TODO_LOADING,
        };
      };
      export const deleteToDoSuccess = () => {
        return {
          type: DELETE_TODO_SUCCESS,
        };
      };
      export const deleteToDoError = () => {
        return {
          type: DELETE_TODO_ERROR,
        };
      };
      export const signupToDoLoading = () => {
        return {
          type: SIGNUP_TODO_LOADING,
        };
      };
      export const signupToDoSuccess = () => {
        return {
          type: SIGNUP_TODO_SUCCESS,
        };
      };
      export const signupToDoError = () => {
        return {
          type: SIGNUP_TODO_ERROR,
        };
      };
      export const loginToDoLoading = () => {
        return {
          type: LOGIN_TODO_LOADING,
        };
      };
      export const loginToDoSuccess = (payload) => {
        return {
          type: LOGIN_TODO_SUCCESS,
          payload,
        };
      };
      export const loginToDoError = () => {
        return {
          type: LOGIN_TODO_ERROR,
        };
      };
      export const logOut = () => {
        return{
          type: LOGOUT,
        };
      };
      