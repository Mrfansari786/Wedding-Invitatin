import { useEffect, useRef } from "react";

type Props = {
  onComplete: () => void;
};

export default function ScratchCanvas({ onComplete }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawing = useRef(false);
  const completed = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    // Premium Gold Gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);

    gradient.addColorStop(0, "#E5C14A");
    gradient.addColorStop(0.5, "#D4AF37");
    gradient.addColorStop(1, "#8A6A1F");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Shine
    ctx.fillStyle = "rgba(255,255,255,.15)";
    ctx.fillRect(0, 0, width, 60);

    // Text
    ctx.fillStyle = "#111";
    ctx.textAlign = "center";

    const titleSize = width < 450 ? 22 : 30;

    ctx.font = `bold ${titleSize}px serif`;

    ctx.fillText("Scratch To Reveal ✨", width / 2, height / 2 - 10);

    ctx.font = "16px sans-serif";

    ctx.fillText(
      "Scratch gently with your finger",
      width / 2,
      height / 2 + 28
    );

    function scratch(x: number, y: number) {
      ctx.globalCompositeOperation = "destination-out";

      ctx.beginPath();
ctx.arc(x, y, 32, 0, Math.PI * 2);      ctx.fill();

      checkProgress();
    }

    function checkProgress() {
      if (completed.current) return;

      const pixels = ctx.getImageData(0, 0, width, height).data;

      let transparent = 0;

      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) transparent++;
      }

      const percent = transparent / (width * height);

if (percent > 0.40) {
  completed.current = true;

  // Mobile vibration
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }

  onComplete();
}
    }

    function getPosition(e: MouseEvent | TouchEvent) {
      const rect = canvas.getBoundingClientRect();

      if ("touches" in e) {
        return {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      }

      return {
        x: (e as MouseEvent).clientX - rect.left,
        y: (e as MouseEvent).clientY - rect.top,
      };
    }

    function start(e: MouseEvent | TouchEvent) {
      drawing.current = true;
      const p = getPosition(e);
      scratch(p.x, p.y);
    }

    function move(e: MouseEvent | TouchEvent) {
      if (!drawing.current) return;

      e.preventDefault();

      const p = getPosition(e);

      scratch(p.x, p.y);
    }

    function stop() {
      drawing.current = false;
    }

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);

    canvas.addEventListener("touchstart", start, {
      passive: false,
    });

    canvas.addEventListener("touchmove", move, {
      passive: false,
    });

    window.addEventListener("touchend", stop);

    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", stop);

      canvas.removeEventListener("touchstart", start);
      canvas.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", stop);
    };
  }, [onComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full rounded-[32px] touch-none"
    />
  );
}
