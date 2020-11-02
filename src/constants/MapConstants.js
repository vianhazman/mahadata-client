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
  RATIO: {
    TITLE_1: "Di Rumah Saja",
    TITLE_2: "Kepatuhan Di Rumah Saja",
    DESCRIPTION: "Tingkat kepatuhan untuk di rumah saja.",
  },
  MOBILITY: {
    TITLE_1: "Mobilitas",
    TITLE_2: "Perubahan Mobilitas Relatif",
    DESCRIPTION: "Mobilitas masyarakat dibandingkan pada bulan Februari.",
  },
};

export const RANKING_TITLE = {
  change: {
    MAIN: "Perubahan Mobilitas",
    TOP: "Mobilitas Rendah",
    BOTTOM: "Mobilitas Tinggi",
  },
  ratio: {
    MAIN: "Kepatuhan Di Rumah Saja",
    TOP: "Kepatuhan Tinggi",
    BOTTOM: "Kepatuhan Rendah",
  },
};

export const MAP_STYLE = "mapbox://styles/vianhazman/cke27qnxk0nr819qo5js4oxnf";
export const MAP_TOKEN =
  "pk.eyJ1Ijoidmlhbmhhem1hbiIsImEiOiJ3QnRpLU5RIn0.AChpzipgCTP_vD0LbO7OAg";

export const ANNOTATION_TYPE = { RANGE: "RANGE", EVENT: "EVENT" };
