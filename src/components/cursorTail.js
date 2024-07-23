import { useEffect, useRef } from 'react';
import styles from './cursorTail.module.css'; // Adjust the import according to your setup

const CursorTail = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  const color = [
    "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e",
    "#ec805d", "#e36e5c", "#df685c", "#d5585c", "#d1525c",
    "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f",
    "#950f5f", "#830060", "#7c0060", "#680060", "#60005f",
    "#48005f", "#3d005e"
  ];

  useEffect(() => {
    const circles = circlesRef.current;
    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = color[index % color.length];
    });

    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animateCircles = () => {
      let { x, y } = coords.current;

      circles.forEach((circle, index) => {
        if (circle) {
          circle.style.left = `${x - 12}px`;
          circle.style.top = `${y - 12}px`;
          circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

          circle.x = x;
          circle.y = y;

          const nextCircle = circles[index + 1] || circles[0];
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;
        }
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [color]);

  return (
    <>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className={styles.circle}
          ref={(el) => circlesRef.current[i] = el}
        />
      ))}
    </>
  ;
};

export default CursorTail;
