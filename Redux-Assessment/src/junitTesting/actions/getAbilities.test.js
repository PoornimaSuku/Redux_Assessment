import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getabilities } from "../../actions/getAbilities";
const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();

describe("fetchabilities actions", () => {
  it("dispatches fetchabilities after a successfull API requets", () => {
    mock
      .onGet("https://pokeapi.co/api/v2/pokemon/wartortle")
      .reply(200, { result:{data: [{ name: "torrent" }, { name: "rain-dish" }]} });
    const newstate = store.dispatch(getabilities('wartortle')).then(() => {
      let expectedActions = [
        {
          type: "FETCH_ABILITIES",
          payload: { result:{ data: [{ name: "torrent" }, { name: "rain-dish" }]} },
        },
      ];

      expect(newstate).toEqual(expectedActions);
    });
  });
it("dispatches INVALID_REQST after a FAILED API requets", () => {
  
  const newstate = store.dispatch(getabilities())
  .catch(() => {
    let expectedActions = [
      {
        type: "INVALID_REQST",
        payload: { error: { message: "error message" } },
      },
    ];
    expect(newstate).toEqual(expectedActions);
  });
});
})