import React from "react";
import "./HowItWorks.scss";

export default function HowItWorks() {
  return (
    <div className="timeline">
      <div className="timeline__event animated fadeInUp delay-3s timeline__event--type1">
        <div className="timeline__event__icon">
          <img src="/icon-1.png" alt="Icon" width="80px" />
        </div>
        <div className="timeline__event__date" style={{ color: "white" }}>
          1
        </div>
        <div className="timeline__event__content">
          <div className="timeline__event__title">Upload Your Resume:</div>
          <div className="timeline__event__description">
            <p>
            Share your current resume, CV, or PDF of your LinkedIn profile.
            </p>
          </div>
        </div>
      </div>

      {/* Repeat the structure for other steps */}
      {/* Example for Step 2 */}
      <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
        <div className="timeline__event__icon">
          <img src="/icon-2.png" alt="Icon" width="80px" />
        </div>
        <div className="timeline__event__date" style={{ color: "white" }}>
          2
        </div>
        <div className="timeline__event__content">
          <div className="timeline__event__title">AI Evaluation:</div>
          <div className="timeline__event__description">
            <p>
            Our AI analyzes your profile against management program criteria.
            </p>
          </div>
        </div>
      </div>

      <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
        <div className="timeline__event__icon">
          <img src="/icon-3.png" alt="Icon" width="80px" />
        </div>
        <div style={{ color: "white" }} className="timeline__event__date">
          3
        </div>
        <div className="timeline__event__content">
          <div className="timeline__event__title">Complete a Brief Form:</div>
          <div className="timeline__event__description">
            <p style={{ paddingTop: "15px", paddingBottom: "15px" }}>
            Provide a few key details to customize your report.
            </p>
          </div>
        </div>
      </div>

      <div className="timeline__event animated fadeInUp timeline__event--type1">
        <div className="timeline__event__icon">
          <img src="/icon-4.png" alt="Icon" width="80px" />
        </div>
        <div style={{ color: "white" }} className="timeline__event__date">
          4
        </div>
        <div className="timeline__event__content">
          <div className="timeline__event__title">
          Get Your Report:
          </div>
          <div className="timeline__event__description">
            <p>
            Receive a detailed analysis of your management program readiness.
            </p>
          </div>
        </div>
      </div>

      <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
        <div className="timeline__event__icon">
          <img src="/icon-5.png" alt="Icon" width="80px" />
        </div>
        <div style={{ color: "white" }} className="timeline__event__date">
          5
        </div>
        <div className="timeline__event__content">
          <div className="timeline__event__title">
          Expert Consultation:
          </div>
          <div className="timeline__event__description">
            <p>
            Discuss your results with an expert career advisor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
