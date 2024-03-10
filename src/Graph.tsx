import { Orb } from '@memgraph/orb';
import { Component, onMount } from 'solid-js';

const nodes = [
  { id: 1, label: 'Orb' },
  { id: 2, label: 'Graph' },
  { id: 3, label: 'Canvas' },
];
const edges = [
  { id: 1, start: 1, end: 2, label: 'DRAWS' },
  { id: 2, start: 2, end: 3, label: 'ON' },
];

export const Graph: Component = () => {

  let container: HTMLDivElement

  onMount(() => {
    const orb = new Orb(container);

    orb.data.setup({ nodes, edges });

    orb.view.render(() => {
      orb.view.recenter();
    });
  });



  return (
    <div ref={container} id="graph" class="h-screen w-screen" />
  );
}