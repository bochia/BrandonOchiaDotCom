import { BodyComposition } from "./pages/BodyComposition";
import { Home } from "./pages/Home";
import PdfSplitter from "./pages/PdfSplitter";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/pdfSplitter',
        element: <PdfSplitter />
    },
    {
        path: '/bodyComposition',
        element: <BodyComposition />
    }
];

export default AppRoutes;