import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CupcakeDetails() {
  const { id } = useParams();

  const [cupcakeDetail, SetCupcakeDetail] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4000/cupcakes/${id}`).then((response) => {
      SetCupcakeDetail(response.data);
    });
  }, [id]);
  return (
    <div className="cupcake-container">
      <div className="cupcake">
        <img src={cupcakeDetail.url} alt="accessory" />
        <div className="cream">
          <div
            className="cream-1"
            style={{
              backgroundColor: cupcakeDetail.color1,
            }}
          />
          <div
            className="cream-2"
            style={{
              backgroundColor: cupcakeDetail.color2,
            }}
          />
          <div
            className="cream-3"
            style={{
              backgroundColor: cupcakeDetail.color3,
            }}
          />
        </div>
        <div className="bottom">
          <div className="bottom-in">
            <div className="face">
              <div className="eyes">
                <div className="left-eye" />
                <div className="right-eye" />
              </div>
              <div className="mouth" />
            </div>
          </div>
        </div>
      </div>

      <div className="cupcake-name">{cupcakeDetail.name}</div>
    </div>
  );
}

export default CupcakeDetails;
