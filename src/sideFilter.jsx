import React, { useEffect } from "react";
import Checkbox from "./components/checkbox";
import InputSlider from "./components/input-slider";
import Sliders from "./components/slider";
import filter from "./sideFilter.module.css";

const SideFilter = () => {
  const [value, setValue] = React.useState([1, 100]);
  const [min, setMin] = React.useState(1000);
  const [max, setMax] = React.useState(12000);

  useEffect(() => {
    transform();
  }, [value]);

  const transform = () => {
    if (!value.length) {
      return;
    }
    setMin(Number(value[0]) * 1000);
    setMax(Number(value[1]) * 120);
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={filter.container}>
      <div className={filter.container__one}>
        <div className={filter.dl}>
          <div className={filter.dt}>Categories</div>
          <span>Scriptures</span>
          <span>Ladies</span>
          <span>Men</span>
          <span>Couples</span>
          <span>Boys</span>
          <span>Girls</span>
        </div>
      </div>
      <div className={filter.container__two}>
        <div className={filter.price}>
          <span>PRICE (₦)</span>
          <span>APPLY</span>
        </div>
        <Sliders value={value} handler={handleSliderChange} />
        <div className={filter.input}>
          <InputSlider minVal={min} maxValue={max} />
        </div>
      </div>
      <div className={filter.container__three}>
        <Checkbox />
      </div>
    </div>
  );
};

export default SideFilter;
