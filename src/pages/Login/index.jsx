import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="login-page">
      {/* ── HEADER WITH HANGING TOOLS & LOGO ── */}
      <div className="login-header">
        {/* Hanging tools from top (expanded) */}
        <div className="hanging-tools">
          <div className="hanging-pair hanging-overlap">
            <img
              className="hanging-tool tool-pliers"
              style={{ width: "64px", height: "96px", objectFit: "contain" }}
              src="/assets/tools/nose pliers_3D.png"
              alt="Nose pliers"
            />
            <img
              className="hanging-tool tool-pliers2"
              style={{ width: "60px", height: "94px", objectFit: "contain" }}
              src="/assets/tools/Pliers_3D.png"
              alt="Pliers"
            />
          </div>

          <div className="hanging-pair hanging-overlap">
            <img
              className="hanging-tool tool-spatula"
              style={{ width: "52px", height: "82px", objectFit: "contain" }}
              src="/assets/tools/spatula_3D.png"
              alt="Spatula"
            />
            <img
              className="hanging-tool tool-roller"
              style={{ width: "58px", height: "88px", objectFit: "contain" }}
              src="/assets/tools/Roller_3D.png"
              alt="Roller"
            />
          </div>
          <img
            className="hanging-tool tool-sprocket"
            style={{ width: "72px", height: "100px", objectFit: "contain" }}
            src="/assets/tools/sprocket_3D.png"
            alt="Sprocket"
          />
          <img
            className="hanging-tool tool-clamp"
            style={{ width: "66px", height: "98px", objectFit: "contain" }}
            src="/assets/tools/clamp_3D.png"
            alt="Clamp"
          />
          <img
            className="hanging-tool tool-caliper"
            style={{ width: "58px", height: "92px", objectFit: "contain" }}
            src="/assets/tools/caliper_3D.png"
            alt="Caliper"
          />
          <img
            className="hanging-tool tool-grinder"
            style={{ width: "78px", height: "104px", objectFit: "contain" }}
            src="/assets/tools/Angle grinder_3D.png"
            alt="Grinder"
          />
          <img
            className="hanging-tool tool-drill"
            style={{ width: "60px", height: "96px", objectFit: "contain" }}
            src="/assets/tools/Electric drill_3D.png"
            alt="Drill"
          />
          <img
            className="hanging-tool tool-saw"
            style={{ width: "74px", height: "110px", objectFit: "contain" }}
            src="/assets/tools/Saw_3D.png"
            alt="Saw"
          />
          <img
            className="hanging-tool tool-saw2"
            style={{ width: "64px", height: "98px", objectFit: "contain" }}
            src="/assets/tools/SawTwo_3D.png"
            alt="SawTwo"
          />
          <img
            className="hanging-tool tool-saw3"
            style={{ width: "66px", height: "100px", objectFit: "contain" }}
            src="/assets/tools/SawThree_3D.png"
            alt="SawThree"
          />
          <div className="hanging-pair hanging-overlap">
            <img
              className="hanging-tool tool-clamp-pair"
              style={{ width: "66px", height: "98px", objectFit: "contain" }}
              src="/assets/tools/clamp_3D.png"
              alt="Clamp"
            />
            <img
              className="hanging-tool tool-caliper-pair"
              style={{ width: "58px", height: "92px", objectFit: "contain" }}
              src="/assets/tools/caliper_3D.png"
              alt="Caliper"
            />
          </div>
          <img
            className="hanging-tool tool-wrench"
            style={{ width: "68px", height: "100px", objectFit: "contain" }}
            src="/assets/tools/Wrench_3D.png"
            alt="Wrench"
          />
          <img
            className="hanging-tool tool-adjustable"
            style={{ width: "62px", height: "98px", objectFit: "contain" }}
            src="/assets/tools/Adjustable_3D.png"
            alt="Adjustable wrench"
          />
          <div className="hanging-pair hanging-overlap">
            <img
              className="hanging-tool tool-meter"
              style={{ width: "54px", height: "90px", objectFit: "contain" }}
              src="/assets/tools/Meter_3D.png"
              alt="Meter"
            />
            <img
              className="hanging-tool tool-file"
              style={{ width: "50px", height: "90px", objectFit: "contain" }}
              src="/assets/tools/file tool_3D.png"
              alt="File tool"
            />
          </div>
          <img
            className="hanging-tool tool-level"
            style={{ width: "70px", height: "96px", objectFit: "contain" }}
            src="/assets/tools/Spirit Level_3D.png"
            alt="Spirit Level"
          />
          <img
            className="hanging-tool tool-equerre"
            style={{ width: "60px", height: "92px", objectFit: "contain" }}
            src="/assets/tools/WORKPRO Equerre_3D.png"
            alt="Equerre"
          />
          <img
            className="hanging-tool tool-ladder"
            style={{ width: "56px", height: "100px", objectFit: "contain" }}
            src="/assets/tools/Ladder_3D.png"
            alt="Ladder"
          />
          <div className="hanging-pair">
            <img
              className="hanging-tool tool-cutter"
              style={{ width: "56px", height: "96px", objectFit: "contain" }}
              src="/assets/tools/Cutter_3D.png"
              alt="Cutter"
            />
            <img
              className="hanging-tool tool-file-dup"
              style={{ width: "50px", height: "90px", objectFit: "contain" }}
              src="/assets/tools/file tool_3D.png"
              alt="File tool"
            />
          </div>

          {/* Extra pairs for more variety */}
          <div className="hanging-pair">
            <img
              className="hanging-tool tool-grinder-pair"
              style={{ width: "78px", height: "104px", objectFit: "contain" }}
              src="/assets/tools/Angle grinder_3D.png"
              alt="Grinder"
            />
            <img
              className="hanging-tool tool-drill-pair"
              style={{ width: "60px", height: "96px", objectFit: "contain" }}
              src="/assets/tools/Electric drill_3D.png"
              alt="Drill"
            />
          </div>
        </div>

        {/* Logo overlapping the boundary */}
        <div className="login-logo-container">
          {/* Hammer = T */}
          <img
            className="logo-tool tool-hammer"
            src="/assets/tools/Hammer_3D.png"
            alt="T"
          />

          {/* Sprocket = o */}
          <img
            className="logo-tool tool-sprocket"
            src="/assets/tools/sprocket_3D.png"
            alt="o"
          />

          {/* Sprocket = o */}
          <img
            className="logo-tool tool-sprocket-second"
            src="/assets/tools/sprocket_3D.png"
            alt="o"
          />

          {/* Saw = l */}
          <img
            className="logo-tool tool-saw"
            src="/assets/tools/Saw_3D.png"
            alt="l"
          />

          {/* Screwdriver = i */}
          <img
            className="logo-tool tool-screwdriver"
            src="/assets/tools/flathead screwdriver_3D.png"
            alt="i"
          />
        </div>
      </div>

      {/* ── LOGIN FORM CONTAINER ── */}
      <div className="login-sheet">
        {/* Decorative tools on top of the white sheet (mirrors header) */}
        {/* footer-tools removed to avoid duplicating the logo/group */}
        <h2 className="login-title">Iniciar sesión</h2>

        <div className="login-form-group">
          <div className="login-input-wrapper">
            <input
              type="text"
              placeholder="Código de estudiante"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>

        <div className="login-form-group">
          <div className="login-input-wrapper">
            <input
              type={show ? "text" : "password"}
              placeholder="Contraseña"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              autoComplete="new-password"
            />
            <button
              type="button"
              className="login-toggle-password"
              onClick={() => setShow((s) => !s)}
              aria-label="Toggle password visibility"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8A9BE0"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          </div>
        </div>

        <div className="login-forgot-link">
          <a href="#" onClick={(e) => e.preventDefault()}>
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <button className="btn-login-submit" onClick={() => navigate("/home")}>
          Ingresar
        </button>

        <button
          className="btn-login-biometric"
          onClick={(e) => e.preventDefault()}
        >
          Ingresar con biometría
        </button>
      </div>
    </div>
  );
}
