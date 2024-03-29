import { Grid } from "@mui/material";
import React from "react";
import { Product } from "./Product/Product";

const products = [
  { id: 1, name: "Shoes", descripton: "Running shoes.", price: "$5" },
  { id: 2, name: "Macbook", descripton: "Apple macbook.", price: "$10" },
];

export const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
