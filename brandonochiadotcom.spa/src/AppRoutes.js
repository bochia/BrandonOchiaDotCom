import { BodyComposition } from "./components/BodyComposition";
import { Home } from "./components/Home";

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