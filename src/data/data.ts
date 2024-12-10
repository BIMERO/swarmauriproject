export const tableColumns = [
  { label: "ID", key: "id", field: "id", align: "left" as "left" },
  { label: "Name", key: "name", field: "name", align: "left" as "left" },
  { label: "Role", key: "role", field: "role", align: "center" as "center" },
  {
    label: "Status",
    key: "status",
    field: "status",
    align: "center" as "center",
  },
  {
    label: "Status",
    key: "status",
    field: "status",
    align: "center" as "center",
  },
];

export const tableRows = [
  { id: 1, name: "Alice Johnson", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Smith", role: "User", status: "Inactive" },
  { id: 3, name: "Charlie Brown", role: "Moderator", status: "Active" },
  { id: 4, name: "Diana Prince", role: "Admin", status: "Active" },
  { id: 5, name: "Evan Williams", role: "User", status: "Inactive" },
];

export const progressData = [
  { label: "Active Listings", progress: 45 },
  { label: "Claimed Listings", progress: 75 },
  { label: "Pending Listings", progress: 90 },
  { label: "Rejected Listings", progress: 30 },
  { label: "Completed Listings", progress: 60 },
];

export const progressData2 = [
  { id: 1, progress: 25, label: "Tasks Completed", background: "#4caf50" },
  { id: 2, progress: 50, label: "Project Progress", background: "#2196f3" },
  { id: 3, progress: 75, label: "Sales Target", background: "#ff9800" },
  {
    id: 4,
    progress: 90,
    label: "Customer Satisfaction",
    background: "#e91e63",
  },
];
