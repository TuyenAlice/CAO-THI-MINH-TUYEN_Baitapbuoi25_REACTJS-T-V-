import React from "react";
import "./Bookingticket.css";
import { ThongTinDatGhe } from "./ThongTinDatGhe";
import danhsachGheData from "../Data/danhSachGhe.json";
import { HangGhe } from "./HangGhe";

export const BookingTicket = () => {
  const renderHangghe = () => {
    return danhsachGheData.map((hangGhe, index) => {
      return (
        <div key={index} soHangGhe={index}>
          <HangGhe hangGhe={hangGhe} />
        </div>
      );
    });
  };

  return (
    <div>
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url(./img/bookingTicket/bgmovie.jpg)",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <div className="container mt-3">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning fs-1">ĐẶT VÉ XEM PHIM</div>
                <div className="fs-6 text-light">Màn hình</div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
                {/* hàng ghế */}
                {renderHangghe()}
              </div>
              <div className="col-4">
                <div className="text-light fs-3">DANH SÁCH GHẾ BẠN CHỌN </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
