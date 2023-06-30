import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contractsSlice from "./reducers/ContractReducer";

export default configureStore({
  reducer: {
    contract: contractsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignora las acciones que coincidan con esta ruta (usa una expresión regular o una función).
        ignoredActions: [],
        // Ignora estas rutas en el estado (usa una expresión regular o una función).
        ignoredPaths: [],
        // Advertencia cuando se supera este tiempo (en milisegundos)
        warnAfter: 200, // Aumenta el límite a 200ms
      },
    }),
});
