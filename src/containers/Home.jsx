import React from "react";
import Header from "../components/Header";
import { getHomeStats, getPictureUrl } from "../utils";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* <Header />
      <div className="row justify-between pl-6 mr-6 w-screen">
        <div class="card w-5/24">
          <div class="card-body">
            <div class="row align-items-center gx-0">
              <div class="col">
                <h6 class="text-uppercase text-muted mb-2">Value</h6>

                <span class="h2 mb-0">$24,500</span>

                <span class="badge bg-success-soft mt-n1">+3.5%</span>
              </div>
              <div class="col-auto">
                <span class="h2 fe fe-dollar-sign text-muted mb-0"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="card w-5/24">
          <div class="card-body">
            <div class="row align-items-center gx-0">
              <div class="col">
                <h6 class="text-uppercase text-muted mb-2">Value</h6>

                <span class="h2 mb-0">$24,500</span>

                <span class="badge bg-success-soft mt-n1">+3.5%</span>
              </div>
              <div class="col-auto">
                <span class="h2 fe fe-dollar-sign text-muted mb-0"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="card w-5/24">
          <div class="card-body">
            <div class="row align-items-center gx-0">
              <div class="col">
                <h6 class="text-uppercase text-muted mb-2">Value</h6>

                <span class="h2 mb-0">$24,500</span>

                <span class="badge bg-success-soft mt-n1">+3.5%</span>
              </div>
              <div class="col-auto">
                <span class="h2 fe fe-dollar-sign text-muted mb-0"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="card w-5/24">
          <div class="card-body">
            <div class="row align-items-center gx-0">
              <div class="col">
                <h6 class="text-uppercase text-muted mb-2">Value</h6>

                <span class="h2 mb-0">$24,500</span>

                <span class="badge bg-success-soft mt-n1">+3.5%</span>
              </div>
              <div class="col-auto">
                <span class="h2 fe fe-dollar-sign text-muted mb-0"></span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Home;
