import { FRAME_WIDTH, FRAME_HEIGHT } from "./frame";

export { FRAME_WIDTH, FRAME_HEIGHT };

export default function GridCanvas({ children, className = "" }) {
  return (
    <div
      className={`w-full bg-white bg-[url('/grid_background.svg')] bg-size-[1400px_1300px] bg-top-left bg-repeat ${className}`}
    >
      <div
        className="relative mx-auto w-full [container-type:inline-size] lg:aspect-[1440/1080]"
        style={{ maxWidth: FRAME_WIDTH }}
      >
        {children}
      </div>
    </div>
  );
}
