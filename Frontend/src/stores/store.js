import { configureStore, combineReducers } from "@reduxjs/toolkit";
import selectedItemReducer from "./selectedItem";
import companyReducer from "./informationData/companySlice";
import vesselReducer from "./informationData/vesselSlice";
import { persistReducer, persistStore } from "redux-persist";
import scheduleReducer from "./informationData/scheduleSlice";
import recordReducer from "./informationData/flightrecordSlice";
import languageReducer from "../stores/language/languageSlice"; //translation
import videoReducer from "../stores/videodata/videoGallerySlice";
import workReducer from "../stores/informationData/workScheduleSlice";
import pilotReducer from "../stores/informationData/pilotSlice"
import mechanicReducer from "../stores/informationData/mechanicInfoSlice";
import ReportReducer from "./reportData/reportSlice";
import materialReducer from "../stores/informationData/materialSlice";
import imageReducer from "../stores/informationData/imageGallerySlice";
import flightLogReducer from "../stores/informationData/flightLogInfoSlice";
import droneInfoReducer from "../stores/informationData/droneSlice";
import documentReducer from "../stores/informationData/documentSlice";

import storage from "redux-persist/lib/storage";

// Persist Config
const persistConfig = {
  key: "root",
  storage,
};

// Root Reducer with Persist
const rootReducer = combineReducers({
  selectedItem: persistReducer(persistConfig, selectedItemReducer),
  companies: companyReducer,
  vessels: vesselReducer,
  language: languageReducer,
  videos: videoReducer,
  works: workReducer,
  pilots: pilotReducer,
  mechanics: mechanicReducer,
  reports: ReportReducer,
  schedules: scheduleReducer,
  records: recordReducer,
  images:imageReducer,
  materials: materialReducer,
  flightlogs:flightLogReducer,
  drones:droneInfoReducer,
  documents:documentReducer,
  
  
});

// Store Configuration
export const store = configureStore({
  reducer: rootReducer,
});

// Persistor
export const persistor = persistStore(store);
