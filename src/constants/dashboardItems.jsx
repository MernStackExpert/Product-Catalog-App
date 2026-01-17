import { FaUser, FaPlusSquare, FaList, FaHome } from "react-icons/fa";

export const dashboardItems = [
  { label: "Profile", path: "/dashboard/profile", icon: <FaUser /> },
  { label: "Add Grocery", path: "/dashboard/add-item", icon: <FaPlusSquare /> },
  { label: "Manage Groceries", path: "/dashboard/manage-items", icon: <FaList /> },
  { label: "Back to Home", path: "/", icon: <FaHome /> },
];