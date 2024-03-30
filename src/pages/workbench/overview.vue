<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { VueFlow, useVueFlow, isEdge } from '@vue-flow/core'
import type { Elements } from '@vue-flow/core'
import { Button } from '@/components/ui/button'
import { Background } from '@vue-flow/background'
import { MiniMap } from '@vue-flow/minimap'
import { Controls } from '@vue-flow/controls'

const { onNodeDragStart, onNodeDrag, onNodeDragStop } = useVueFlow()
const elements = ref<Elements>([
  {
    id: '1',
    position: { x: 50, y: 50 },
    label: 'Start',
  },
  {
    id: '2',
    position: { x: 50, y: 250 },
    label: 'End',
  },
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
])

onMounted(() => {
  elements.value.push({
    id: 'e1-2',
    source: '1',
    target: '2',
  })
})
// bind listeners to the event handlers
onNodeDragStart((event) => {
  console.log('Node drag started', event)
})

onNodeDrag((event) => {
  console.log('Node dragged', event)
})

onNodeDragStop((event) => {
  console.log('Node drag stopped', event)
})

const { addNodes } = useVueFlow()

function generateRandomNode() {
  return {
    id: Math.random().toString(),
    position: { x: Math.random() * 500, y: Math.random() * 500 },
    label: 'Random Node',
    data: {
      hello: 'world',
    },
  }
}

function onAddNode() {
  // add a single node to the graph
  addNodes(generateRandomNode())
}

function onAddNodes() {
  // add multiple nodes to the graph
  addNodes(Array.from({ length: 10 }, generateRandomNode))
}
const toggleClass = () => {
  elements.value.forEach((el) => {
    if (isEdge(el)) {
      el.class = el.class === 'light' ? 'dark' : 'light'
    }
  })
}
</script>

<template>
  <div class="w-2/3 h-2/3 bg-gray-200">
    <VueFlow v-model="elements">
      <Button
        style="position: absolute; top: 10px; right: 10px"
        @click="toggleClass"
      >
        Toggle classes
      </Button>
      <MiniMap pannable zoomable />
      <Controls />
      <Background></Background>
    </VueFlow>
  </div>

  <Button type="button" @click="onAddNode()">Add a node</Button>
  <Button type="button" @click="onAddNodes()">Add multiple nodes</Button>
</template>
<style>
/* these are necessary styles for vue flow */
@import '@vue-flow/core/dist/style.css';

/* this contains the default theme, these are optional styles */
@import '@vue-flow/core/dist/theme-default.css';

/* import default minimap styles */
@import '@vue-flow/minimap/dist/style.css';

/* import default controls styles */
@import '@vue-flow/controls/dist/style.css';
</style>
