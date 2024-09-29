import React from "react";

export const ThongTinDatGhe = () => {
  return (
    <div>
      {/* button  */}
      <div className="mt-5">
        <button className="gheDuocChon "></button>
        <span className="text-light"> Ghế đã đặt</span>
        <br />
        <button className="gheDangChon  mt-2"></button>

        <span className="text-light"> Ghế đang đặt</span>
        <br />
        <button className="ghe mt-2 " style={{ marginLeft: "0" }}></button>
        <span className="text-light "> Ghế chưa đặt</span>
      </div>
      {/* tabble  */}
      <div>
        <div class="table-responsive mt-5">
          <table className="table " border="2">
            <thead>
              <tr className="text-light fs-3">
                <th scope="col">Số ghế</th>
                <th scope="col">Giá</th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-light">
                <th scope="col">Số ghế</th>
                <th scope="col">Giá</th>
                <th scope="col"> </th>
              </tr>
              <tr className="text-light">
                <th scope="col">Số ghế</th>
                <th scope="col">Giá</th>
                <th scope="col"> </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
