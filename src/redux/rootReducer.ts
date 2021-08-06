import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// slices
import tutorReducer from './slices/tutor';
// ----------------------------------------------------------------------

import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    }
  };
};

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};

const tutorPersistConfig = {
  key: 'tutor',
  storage,
  keyPrefix: 'redux-'
};

const rootReducer = combineReducers({
  tutor: persistReducer(tutorPersistConfig, tutorReducer)
});

export { rootPersistConfig, rootReducer };
