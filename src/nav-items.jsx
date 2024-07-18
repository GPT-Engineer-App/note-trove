import { Home, PlusCircle } from "lucide-react";
import Index from "./pages/Index.jsx";
import CreateNote from "./pages/CreateNote.jsx";
import NoteDetail from "./pages/NoteDetail.jsx";
import EditNote from "./pages/EditNote.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "New Note",
    to: "/create",
    icon: <PlusCircle className="h-4 w-4" />,
    page: <CreateNote />,
  },
];

export const routes = [
  ...navItems,
  {
    to: "/note/:id",
    page: <NoteDetail />,
  },
  {
    to: "/edit/:id",
    page: <EditNote />,
  },
];