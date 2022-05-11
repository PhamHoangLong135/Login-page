import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Navbar } from "../../components/navbar/Navbar";
import "./product.scss";
import { Box, Button } from "@mui/material";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "product", headerName: "Product", width: 130 },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, product: "TV" },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    product: "Phone",
  },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, product: "TV" },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, product: "Fan" },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    product: "Phone",
  },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150, product: "TV" },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    product: "Fan",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    product: "Phone",
  },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, product: null },
];

export const Product = () => {
  return (
    <div className="productPage">
      <Navbar />
      <div style={{ height: 371, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          checkboxSelection
        />
      </div>
      <Box sx={{ mt: 4 }}>
        <Button sx={{ mr: 4 }} variant="contained">
          Update
        </Button>
        <Button variant="outlined">Delete</Button>
      </Box>
    </div>
  );
};
