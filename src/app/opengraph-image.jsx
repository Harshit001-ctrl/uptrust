import { ImageResponse } from "next/og";
import { site } from "../config/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
          background: "#ffffff",
        }}
      >
        <div style={{ fontSize: 32, color: "#111111", marginBottom: 24 }}>
          {site.name}
        </div>
        <div
          style={{
            fontSize: 110,
            lineHeight: 1.05,
            fontWeight: 800,
            color: "#FF4200",
            textTransform: "uppercase",
          }}
        >
          Bold design that performs
        </div>
        <div style={{ fontSize: 30, color: "#333333", marginTop: 32 }}>
          Identity · Experience · Motion
        </div>
      </div>
    ),
    size,
  );
}
