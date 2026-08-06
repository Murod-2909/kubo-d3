"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import styles from "./StatRing.module.scss";

export default function StatRing({
  percent,
  display,
  label,
  source,
}: {
  percent: number;
  display: string;
  label: string;
  source: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const playedRef = useRef(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const svg = svgRef.current;
    const numberEl = numberRef.current;
    if (!wrap || !svg || !numberEl) return;

    const size = 120;
    const radius = size / 2 - 8;

    const root = d3.select(svg);
    root.attr("viewBox", `0 0 ${size} ${size}`);

    const arcGen = d3
      .arc<{ endAngle: number }>()
      .innerRadius(radius - 8)
      .outerRadius(radius)
      .startAngle(0)
      .cornerRadius(6);

    root.selectAll("*").remove();

    const g = root.append("g").attr("transform", `translate(${size / 2},${size / 2})`);

    // track
    g.append("path")
      .attr(
        "d",
        arcGen({ endAngle: Math.PI * 2 } as { endAngle: number })
      )
      .attr("fill", "rgba(255,255,255,0.08)");

    // animated progress arc
    const progressPath = g
      .append("path")
      .attr("fill", "#e8672f")
      .datum({ endAngle: 0 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !playedRef.current) {
            playedRef.current = true;
            const targetAngle = (Math.min(percent, 100) / 100) * Math.PI * 2;

            progressPath
              .transition()
              .duration(1400)
              .ease(d3.easeCubicOut)
              .attrTween("d", function (d: any) {
                const interpolate = d3.interpolate(d.endAngle, targetAngle);
                return (t: number) => {
                  d.endAngle = interpolate(t);
                  return arcGen(d) as string;
                };
              });

            d3.select(numberEl)
              .transition()
              .duration(1400)
              .ease(d3.easeCubicOut)
              .tween("text", function () {
                const interpolate = d3.interpolate(0, percent);
                return (t: number) => {
                  numberEl.textContent = Math.round(interpolate(t)) + "%";
                };
              });
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(wrap);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div className={styles.statRing} ref={wrapRef}>
      <div className={styles.ringVisual}>
        <svg ref={svgRef} className={styles.ringSvg} />
        <span className={styles.ringNumber} ref={numberRef}>
          0%
        </span>
      </div>
      <div className={styles.ringText}>
        <span className={styles.ringLabel}>{label}</span>
        <em className={styles.ringSource}>{source}</em>
      </div>
    </div>
  );
}
