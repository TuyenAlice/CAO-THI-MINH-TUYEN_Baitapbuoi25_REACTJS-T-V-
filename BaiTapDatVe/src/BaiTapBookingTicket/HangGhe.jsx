import React from "react";

export const HangGhe = ({ hangGhe }) => {
  const renderGhe = () => {
    return hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disable = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }

      return (
        <button
          onClick={() => {}}
          disabled={disable}
          key={index}
          className={`ghe ${cssGheDaDat}`}
          style={{
            marginLeft: "25px",
            padding: "10px",
            backgroundColor: ghe.daDat ? "red" : "green",
          }}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderHangGhe = () => {
    if (soHangGhe === 0)
      return (
        <div>
          {hangGhe.hang} {renderGhe()}
        </div>
      );
  };

  return (
    <div className="text-light text-start ml-5 mt-5 fs-6">
      <div>{renderHangGhe}</div>
    </div>
  );
};
