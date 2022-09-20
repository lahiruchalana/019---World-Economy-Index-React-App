import {createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    textFieldNumber: null,
})

export { useGlobalState, setGlobalState };