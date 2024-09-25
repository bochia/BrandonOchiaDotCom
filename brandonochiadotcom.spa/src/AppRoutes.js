import { BodyComposition } from "./pages/BodyComposition";
import { Home } from "./pages/Home";
import PdfSplitterContainer from "./pages/pdfSplitter/PdfSplitterContainer";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/pdfSplitter',
        element: <PdfSplitterContainer />
    },
    {
        path: '/bodyComposition',
        element: <BodyComposition />
    }
];

export default AppRoutes;