import { BodyComposition } from "./pages/BodyComposition";
import { Home } from "./pages/Home";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/bodyComposition',
        element: <BodyComposition />
    }
];

export default AppRoutes;