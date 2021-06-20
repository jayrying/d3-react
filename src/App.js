import { useEffect, useRef } from "react";
import "./styles.css";
import * as d3 from "d3";

export default function App({ width = 600, height = 600 }) {
  const svgRef = useRef();
  useEffect(() => {
    d3.select(svgRef.current)
      .append("circle")
      .attr("r", 15)
      .attr("cx", width / 2)
      .attr("cy", height)
      .attr("fill", "red");
  }, [width, height, svgRef]);
  return (
    <svg ref={svgRef} className="container" width={width} height={height}></svg>
  );
}
