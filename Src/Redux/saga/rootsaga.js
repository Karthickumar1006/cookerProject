import { all } from 'redux-saga/effects';
import airpotDetailsSaga from './saga';
/**
 * Generator function that runs all sagas in the rootSaga.
 *
 * @return {Generator} A generator that yields the result of the all effect.
 */
export default function* rootSaga() {
  yield all([
    airpotDetailsSaga()
  ]);
}