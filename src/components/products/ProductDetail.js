import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

function ProductDetail({ categories, product, onSave, onChange, errors }) {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error={errors.productName}
      />
      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
        error={errors.categoryId}
      />
      <TextInput
        name="unitPrice"
        label="unitPrice"
        value={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      />
      <TextInput
        name="quantityPerUnit"
        label="quantityPerUnit"
        value={product.quantityPerUnit}
        onChange={onChange}
        error={errors.quantityPerUnit}
      />
      <TextInput
        name="unitsInStock"
        label="unitsInStock"
        value={product.unitsInStock}
        onChange={onChange}
        error={errors.unitsInStock}
      />
      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
}

export default ProductDetail;
