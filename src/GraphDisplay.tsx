import { Graph } from '@cosmograph/cosmos'
import { Component, onMount } from 'solid-js';
import {links, nodes} from "./genData.js"



export const GraphDisplay: Component = () => {

  let container: HTMLCanvasElement


  const config = {
    simulation: {
      repulsion: 0.5,
    },
    renderLinks: true,
    linkColor: link => link.color,
    nodeColor: node => node.color,
    events: {
      onClick: node => { console.log('Clicked node: ', node) },
    },
    /* ... */
  }

  onMount(() => {
    const graph = new Graph(container, config)

    graph.setData(nodes, links)
  });



  return (
    <div>
      <p>Graph</p>
    <canvas ref={container} id="graph" class="h-screen w-screen" />
    </div>
  );
}