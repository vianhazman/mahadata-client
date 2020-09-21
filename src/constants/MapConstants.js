import { FlyToInterpolator } from "deck.gl";

export const INITIAL_VIEW_STATE = {
  longitude: 118.0148634,
  latitude: -2.548926,
  zoom: 4,
  minZoom: 4,
  pitch: 0,
  bearing: 0,
  transitionDuration: 1000,
  transitionInterpolator: new FlyToInterpolator(),
};

export const TOGGLE = {
  PROVINCE: "Provinsi",
  CITY: "Kota/Kabupaten",
};

export const MAP_STYLE = "mapbox://styles/vianhazman/cke27qnxk0nr819qo5js4oxnf";
export const MAP_TOKEN =
  "pk.eyJ1Ijoidmlhbmhhem1hbiIsImEiOiJ3QnRpLU5RIn0.AChpzipgCTP_vD0LbO7OAg";

export const ANNOTATION_TYPE = { RANGE: "RANGE", EVENT: "EVENT" };
