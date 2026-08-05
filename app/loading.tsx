"use client";

export default function Loading() {
  return (
    <div className="loading-container" role="status" aria-label="Loading portfolio">
      <span className="loading-spinner" aria-hidden="true" />
      <span className="loading-label">Loading</span>
    </div>
  );
}
