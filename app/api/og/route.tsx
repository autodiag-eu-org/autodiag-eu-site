import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

const SEVERITY_COLORS: Record<string, string> = {
  low: "#00c853",
  medium: "#ffab00",
  high: "#ff6d00",
  critical: "#e53935",
};

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") ?? "Diagnostic automobile intelligent";
  const description =
    searchParams.get("description") ??
    "Scan audio IA, lecture codes DTC, 677 vehicules europeens compatibles.";
  const code = searchParams.get("code");
  const severity = searchParams.get("severity") ?? "medium";

  const severityColor = SEVERITY_COLORS[severity] ?? SEVERITY_COLORS.medium;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "60px 80px",
          background: "#050510",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Gradient accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #00e5ff, #00c853)",
          }}
        />

        {/* Logo text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: "36px",
              fontWeight: 800,
              background: "linear-gradient(135deg, #00e5ff, #00c853)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            AutoDiag EU
          </span>
        </div>

        {/* DTC code badge */}
        {code ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "24px",
              padding: "12px 28px",
              borderRadius: "12px",
              background: `${severityColor}22`,
              border: `2px solid ${severityColor}`,
            }}
          >
            <span
              style={{
                fontSize: "48px",
                fontWeight: 800,
                color: severityColor,
                letterSpacing: "2px",
              }}
            >
              {code.toUpperCase()}
            </span>
          </div>
        ) : null}

        {/* Title */}
        <div
          style={{
            fontSize: code ? "40px" : "52px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: "20px",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "24px",
            color: "#8a90b0",
            lineHeight: 1.5,
            maxWidth: "850px",
          }}
        >
          {description}
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "18px", color: "#8a90b044" }}>
            autodiag.eu
          </span>
          <span style={{ fontSize: "18px", color: "#8a90b044" }}>
            Diagnostic auto intelligent
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
