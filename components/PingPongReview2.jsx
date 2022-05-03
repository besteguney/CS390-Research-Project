import * as React from "react";
import { useRef, useEffect } from "react";
import * as d3 from 'd3';
import { Typography } from "@mui/material";
import { curveLinear, select } from "d3";

const PingPongReview2 = (props) =>{

  const wrapperRef = useRef();
  const svgRef = useRef();
  const height = 500;
  const width = 1200;
  const margin = { top: 40, right: 30, bottom: 100, left: 40 };

  // to make it dynamic

  const ping_pong_data = {author: 'jake', reviewer: 'emily', iterations: [ {
    no: 1, createdAt: "2021-01-08 09:01:24+00:00",
    mergedAt: "2021-01-08 21:47:43+00:00"
}, {
    no: 2, createdAt: "2021-01-11 06:49:24+00:00",
    mergedAt: "2021-01-11 14:21:55+00:00"
},
{
    no: 3, createdAt: "2021-01-12 23:49:18+00:00",
    mergedAt: "2021-01-13 00:10:49+00:00"
}
]}

const data = [ {x:"2021-01-08 09:01:24+00:00", y:props.author}, {x:"2021-01-08 21:47:43+00:00", y: props.reviewer}, {x:"2021-01-12 23:49:18+00:00", y:props.author}]

  useEffect(() =>{
  
  const svg = select(svgRef.current);
  const svgContent = svg.select('.content');

  const xscale = d3.scaleTime()
  .domain([new Date(d3.min(data.map((item) => item.x))), new Date(d3.max(data.map((d) => d.x)))]).range([margin.left, width - margin.right]).nice();

  const yscale = d3.scaleBand()
  .domain([props.author, props.reviewer])
  .range([0,400])

  const lineGenerator = d3.line()
  .x((d, index) => xscale(new Date(d.x)))
  .y((d, index) => yscale(d.y) + margin.top)
  .curve(curveLinear);

  const labels = [props.author, props.reviewer];

  svg
  .append('text')
  .attr("transform", `translate(${width - 20}, 20)`)
  .attr("text-anchor", "end")
  .style('font-size', '10px')
  .attr('fill', 'red')
  .text('Author: ' + props.author );

  svg
  .append('text')
  .attr("transform", `translate(${width - 20}, ${margin.top + 230})`)
  .attr("text-anchor", "end")
  .style('font-size', '10px')
  .attr('fill', 'red')
  .text('Reviewer: '  + labels[1]);
  


    svgContent
    .selectAll(".myLine")
    .data([data])
    .join("path")
    .attr("class", "myLine")
    .attr("stroke", 'red')
    .attr('stroke-width', 3)
    .attr("fill", "none")
    .attr("d", lineGenerator);

    const upperline = d3.axisBottom(xscale).ticks(10).tickSize(10).tickFormat((d,i) => d.getDay() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear());
    svg.select('.upper-axis').attr('transform', `translate(0,${margin.top})`).attr('stroke-width', '3').call(upperline);

    const bottomline = d3.axisTop(xscale).ticks(10).tickSize(10).tickFormat((d,i) => d.getDay() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear());
    svg.select('.lower-axis').attr('transform', `translate(0,${margin.top + 200} )`).attr('stroke-width', '3').call(bottomline);

    },[data])
    
    return <React.Fragment>
        <Typography style={{margin: 15}}>Ping Pong Review Analysis</Typography>
        <div ref={wrapperRef} width={width} height={height}>
            <svg ref={svgRef} width={width} height={height}>
                <g className="content"></g>
                <g className="upper-axis"></g>
                <g className="lower-axis"></g>
            </svg>
        </div>
    </React.Fragment>
};
export default PingPongReview2;