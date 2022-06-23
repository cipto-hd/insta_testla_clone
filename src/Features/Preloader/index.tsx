import "./Preloader.css";

export const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <svg viewBox="0 0 1350 600" className="stroke-gray-50">
        <text x="50%" y="50%" fill="transparent" textAnchor="middle">
          Cipto Hadi
        </text>
      </svg>
    </div>
  );
};
