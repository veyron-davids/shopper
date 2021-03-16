import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import CategorySelect from "./categorySelect";
import { uploadProducts } from "./services/movieService";
import DropZone from "./dropZone";
import TagSelect from "./tagSelect";
import UploadInput from "./uploadInput";

const ProductUpload = ({ history }) => {
  const [pname, setPname] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [numberInStock, setNumberInStock] = useState(0);
  const [tag, setTag] = useState(1);
  const [category, setCategory] = useState(1);
  const [errors, setErrors] = useState("");

  //   console.log(props);

  const [Images, setImages] = useState([]);

  const onPnameChange = (event) => {
    setPname(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.currentTarget.value);
  };

  const onPriceChange = (event) => {
    setPrice(event.currentTarget.value);
  };
  const onStockChange = (event) => {
    setNumberInStock(event.currentTarget.value);
  };

  const onTagChange = (event) => {
    setTag(event.currentTarget.value);
  };

  const onCategorySelectChange = (event) => {
    setCategory(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  //   function validateUser(product) {
  //     const schema = {
  //       pname: Joi.string().min(2).max(50).required(),
  //       description: Joi.string().min(2).max(50).required(),
  //       price: Joi.number().min(5).max(255).required(),
  //       numberInStock: Joi.number().required(),
  //       category: Joi.number().min(5).required(),
  //       tag: Joi.number().min(5).required(),
  //       images: Joi.array().min(5).required(),
  //     };

  //     return Joi.validate(product, schema);
  //   }

  const onSubmit = async (event) => {
    // event.preventDefault();
    const variables = {
      pname: pname,
      description: description,
      price: price,
      numberInStock: numberInStock,
      category: category,
      tag: tag,
      images: Images,
    };

    // validateUser(variables);

    try {
      const response = await uploadProducts(variables);
      toast.success(`${response.data.pname} has been registered successfully `);
      // console.log(props)
      console.log(response);
      setPname("");
      setDescription("");
      setPrice("");
      // window.location = "/admin";
    } catch (err) {
      if (err.response) {
        //  toast.error(err.response.message)
      }
    }
  };

  return (
    <div className="ProductUpload">
      <div className="upload-container">
        <span className="upload-title">Create a New Product</span>
        <DropZone refreshFunction={updateImages} />
        <UploadInput label="Name" onChange={onPnameChange} value={pname} />
        <UploadInput
          label="Description"
          onChange={onDescriptionChange}
          value={description}
        />
        <UploadInput label="Price(₦)" onChange={onPriceChange} value={price} />
        <UploadInput
          label="Number In Stock"
          onChange={onStockChange}
          value={numberInStock}
        />
        <CategorySelect
          onCategorySelectChange={onCategorySelectChange}
          CategoryValue={category}
        />
        <TagSelect onTagChange={onTagChange} tagValue={tag} />
        <button
          onClick={() => {
            onSubmit();
            history.push("/admin");
          }}
          className="upload-submit-button"
        >
          UPLOAD PRODUCT
        </button>
      </div>
    </div>
  );
};

export default ProductUpload;
