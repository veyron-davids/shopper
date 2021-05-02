import axios from "axios";
import React, { useState } from "react";
import Roll from "react-reveal/Roll";
import { toast } from "react-toastify";
import CategorySelect from "./categorySelect";
import { UPLOAD_SERVER } from "./config";
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

  const [Images, setImages] = useState([]); // images being received back from server
  const [preview, setPreview] = useState([]); // images that is displayed for preview before sending to server
  const [serverImageOne, setServerImageOne] = useState(null); // images that is being sent to server
  const [serverImageTwo, setServerImageTwo] = useState(null); // images that is being sent to server
  const [serverImageThree, setServerImageThree] = useState(null); // images that is being sent to server
  const [data, setData] = useState([]); // images that is being sent to server

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


  const handleChange = (event) => {
    preview.push(URL.createObjectURL(event.target.files[0]));
    // setServerImageOne(event.target.files[0]);
    // setServerImageTwo(event.target.files[1]);
    // setServerImageThree(event.target.files[2]);
    data.push(event.target.files);
  };
  // console.log(serverImageOne, serverImageTwo, serverImageThree)

  const Delete = (image) => {
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images];
    newImages.splice(currentIndex, 1);

    setImages(newImages);
    updateImages(newImages);
  };

  const onSubmit = async (event) => {
    const variables = {
      pname: pname,
      description: description,
      price: price,
      numberInStock: numberInStock,
      category: category,
      tag: tag,
    };
   
    // validateUser(variables);
    const fd = new FormData();
    // fd.append("file", data);
    // fd.append("file", serverImageTwo);
    // fd.append("file", serverImageThree);
    for (const a in variables) {
      fd.append(a, variables[a]);
      // console.log(a, variables[a]);
    }
    data.map(item => {
   for (let i = 0; i < 3; i++) {
     fd.append("file", {});
    // fd."file"
     console.log(item[i]);
   }
    })
 
    try {
      const response = await axios.post(UPLOAD_SERVER, fd);
      // console.log(response);
      toast.success(`${response.data.pname} has been uploaded successfully `);
      // setPname("");
      // setDescription("");
      // setPrice("");
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
        <div className="image-preview">
          {preview.map((image, index) => (
            <Roll left>
              <DropZone onDelete={Delete} image={image} key={index} />
            </Roll>
          ))}
        </div>
        <form>
          <UploadInput
            label="Image"
            type="file"
            name="file"
            onChange={handleChange}
            multiple="multiple"
          />
          <UploadInput label="Name" onChange={onPnameChange} value={pname} />
          <UploadInput
            label="Description"
            onChange={onDescriptionChange}
            value={description}
          />
          <UploadInput
            label="Price(₦)"
            onChange={onPriceChange}
            value={price}
          />
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
        </form>
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
