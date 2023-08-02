import React from "react";
import { MDBBadge, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export const HomeStats = ({ stats }) => {
  const navigate = useNavigate();

  return (
    <div class="card">
      <div class="card-header flex justify-between items-center">
        <h4 class="card-header-title flex-grow">Conversions</h4>

        <span class="text-muted me-3">Last year comparision:</span>

        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="cardToggle"
            data-toggle="chart"
            data-target="#conversionsChart"
            data-trigger="change"
            data-action="add"
            data-dataset="1"
          />
          <label class="form-check-label" for="cardToggle"></label>
        </div>
      </div>
      <div class="card-body">
        <div class="chart">
          <div class="chartjs-size-monitor" style={{ visibility: "hidden" }}>
            <div class="chartjs-size-monitor-expand">
              <div class=""></div>
            </div>
            <div class="chartjs-size-monitor-shrink">
              <div class=""></div>
            </div>
          </div>
          <canvas
            id="conversionsChart"
            class="chart-canvas chartjs-render-monitor"
            style={{
              display: "block",
              height: "300px",
              width: "534px",
              "box-sizing": "border-box",
            }}
            width="1068"
            height="600"
          ></canvas>
        </div>
      </div>
    </div>
  );
};
