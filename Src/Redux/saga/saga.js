import { call, put, takeLatest} from 'redux-saga/effects';

/**
 * Fetches airport details from the API endpoint.
 *
 * @return {Promise} A Promise that resolves to the JSON response of the airport details.
 */
function fetchAirportDetailsApi() {
    return fetch('https://dev-1o39o65bjej9342.api.raw-labs.com/airportDetails')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }

/**
 * Function that handles the airport details saga data retrieval and dispatches the appropriate actions based on success or failure.
 *
 * @return {void} No return value
 */
function* airpotDetailsSagaData() {
    try {
        const data = yield call(fetchAirportDetailsApi);
        // var data = yield fetch("https://dev-1o39o65bjej9342.api.raw-labs.com/airportDetails")
        // data = yield data.json()
        // console.log("Full data===>",data)
        yield put({ type: 'FETCH_SUCCEEDED', data });
      } catch (error) {
        yield put({ type: 'FETCH_FAILED', data });
      }
}

/**
 * Generator function that listens for the "airportDetailsAction" event and
 * dispatches the appropriate actions based on the success or failure of
 * retrieving airport details data.
 *
 * @return {Generator} A generator that yields the result of the takeLatest effect.
 */
function* airpotDetailsSaga() {
 yield takeLatest("airportDetailsAction", airpotDetailsSagaData);
}

export default airpotDetailsSaga