import { useEffect, useRef, useState } from "react";

export default function StarCanvas() {
  const canvasRef = useRef(null);
  const [stars, setStars] = useState([]);
  const [zoom, setZoom] = useState(1);
  const wid = window.innerWidth;
  const hig = window.innerHeight;

  useEffect(() => {
    // CSV読み込み（色付き星データ）
    fetch('hipparcos_vmag_le5_northern_top300_with_color.csv')
      .then(res => res.text())
      .then(text => {
        const lines = text.trim().split('\n').slice(1);
        const newStars = lines.map(line => {
          const [id, x, y, brightness, color] = line.split(',');
          return {
            id: Number(id),
            x: Number(x),
            y: Number(y),
            brightness: Number(brightness),
            color: color.trim(),
            twinklePhase: Math.random() * Math.PI * 2 // ランダムな位相
          };
        });
        setStars(newStars);
      });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId;
    let shootingStars = [];

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();

      // 星の描画（瞬き効果）
      stars.forEach(star => {
        const correctedY = Math.sin((star.y - 0.5) * Math.PI);
        const x = star.x * canvas.width;
        const y = (1 - (correctedY + 1) / 2) * canvas.height;
        const radius = 0.7 + star.brightness * 2;

        // 時間に基づいてα値を計算（sin波で瞬く）
        const time = now / 1000;
        const alpha = 0.7 + 0.3 * Math.sin(time * 3 + star.twinklePhase); // α: 0.2〜1.0

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = alpha;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.globalAlpha = 1.0; // 戻す
      });

      // 流れ星の描画
      shootingStars.forEach((s, i) => {
        ctx.strokeStyle = "white";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - 30, s.y + 17);
        ctx.stroke();
        s.x -= 10;
        s.y += 5.8;

        if (s.x < -100 || s.y > canvas.height + 100) {
          shootingStars.splice(i, 1);
        }
      });
      // 大気圏を球面状に広げる
    const gradient = ctx.createRadialGradient(
        canvas.width / 2,    // 中心X（画面中央）
        canvas.height * 1.6, // 中心Y（画面の少し下）
        canvas.height * 0.5, // 内側半径（濃い部分）
        canvas.width / 2,    
        canvas.height * 3.7, 
        canvas.height * 3  // 外側半径（徐々に薄く）
    );
    gradient.addColorStop(0, "rgba(0, 120, 255, 0.5)");  // 濃い青
    gradient.addColorStop(1, "rgba(0, 0, 80, 0.0)");     // 透明

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    };

    const loop = () => {
      drawStars();
      animationFrameId = requestAnimationFrame(loop);
    };
    loop();

    const shootingInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        shootingStars.push({
          x: Math.random() * canvas.width + canvas.width / 2,
          y: Math.random() * canvas.height / 2,
        });
      }
    }, 2000);

    const handleScroll = (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      setZoom(prev => Math.min(Math.max(prev * delta, 0.5), 5));
    };
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(shootingInterval);
      window.removeEventListener("wheel", handleScroll);
    };
  }, [stars, zoom]);

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
}
