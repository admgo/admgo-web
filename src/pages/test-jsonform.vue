<!--<script lang="ts">-->
<!--import { defineComponent } from 'vue'-->
<!--import { JsonForms, JsonFormsChangeEvent } from '@jsonforms/vue'-->
<!--import {-->
<!--  defaultStyles,-->
<!--  mergeStyles,-->
<!--  vanillaRenderers,-->
<!--} from '@/components/json-form-build/src'-->
<!--const myStyles = mergeStyles(defaultStyles, { control: { label: 'mylabel' } })-->
<!--const renderers = [...vanillaRenderers]-->

<!--const schema = {-->
<!--  title: 'Json Schema表单',-->
<!--  type: 'object',-->
<!--  properties: {-->
<!--    name: {-->
<!--      type: 'string',-->
<!--      minLength: 2,-->
<!--      default: 'adwa',-->
<!--      description: "The task's name",-->
<!--    },-->
<!--    description: {-->
<!--      title: 'Long Description',-->
<!--      type: 'string',-->
<!--    },-->
<!--    done: {-->
<!--      type: 'boolean',-->
<!--    },-->
<!--    dueDate: {-->
<!--      type: 'string',-->
<!--      format: 'date',-->
<!--      description: "The task's due date",-->
<!--    },-->
<!--    rating: {-->
<!--      type: 'integer',-->
<!--      maximum: 5,-->
<!--    },-->
<!--    recurrence: {-->
<!--      type: 'string',-->
<!--      enum: ['Never', 'Daily', 'Weekly', 'Monthly'],-->
<!--    },-->
<!--    recurrenceInterval: {-->
<!--      type: 'integer',-->
<!--      description: 'Days until recurrence',-->
<!--    },-->
<!--  },-->
<!--}-->

<!--const uischema = {-->
<!--  type: 'HorizontalLayout',-->
<!--  elements: [-->
<!--    {-->
<!--      type: 'VerticalLayout',-->
<!--      elements: [-->
<!--        {-->
<!--          type: 'Control',-->
<!--          scope: '#/properties/name',-->
<!--          options: {-->
<!--            placeholder: 'sad',-->
<!--            default: 'default',-->
<!--            enabled: false,-->
<!--          },-->
<!--          default: 'default',-->
<!--          enabled: false,-->
<!--        },-->
<!--        {-->
<!--          type: 'Control',-->
<!--          scope: '#/properties/description',-->
<!--          options: {-->
<!--            multi: true,-->
<!--          },-->
<!--        },-->
<!--        {-->
<!--          type: 'Control',-->
<!--          scope: '#/properties/done',-->
<!--        },-->
<!--      ],-->
<!--    },-->
<!--    {-->
<!--      type: 'VerticalLayout',-->
<!--      elements: [-->
<!--        {-->
<!--          type: 'Control',-->
<!--          scope: '#/properties/dueDate',-->
<!--        },-->
<!--        {-->
<!--          type: 'Control',-->
<!--          scope: '#/properties/rating',-->
<!--        },-->
<!--        {-->
<!--          type: 'Control',-->
<!--          scope: '#/properties/recurrence',-->
<!--        },-->
<!--        {-->
<!--          type: 'Control',-->
<!--          scope: '#/properties/recurrenceInterval',-->
<!--        },-->
<!--      ],-->
<!--    },-->
<!--  ],-->
<!--}-->

<!--export default defineComponent({-->
<!--  name: 'App',-->
<!--  components: {-->
<!--    JsonForms,-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      // freeze renderers for performance gains-->
<!--      renderers: Object.freeze(renderers),-->
<!--      data: {-->
<!--        // name: '',-->
<!--        description: 'Confirm if you have passed the subject\nHereby ...',-->
<!--        done: true,-->
<!--        recurrence: 'Daily',-->
<!--        rating: 3,-->
<!--      },-->
<!--      schema,-->
<!--      uischema,-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    onChange(event: JsonFormsChangeEvent) {-->
<!--      console.log(this.data)-->
<!--      console.log(event.data)-->
<!--      this.data = event.data-->
<!--    },-->
<!--  },-->
<!--  provide() {-->
<!--    return {-->
<!--      styles: myStyles,-->
<!--    }-->
<!--  },-->
<!--})-->
<!--</script>-->

<!--<template>-->
<!--  <JsonForms-->
<!--    :data="data"-->
<!--    :renderers="renderers"-->
<!--    :schema="schema"-->
<!--    :uischema="uischema"-->
<!--    @change="onChange"-->
<!--  >-->
<!--  </JsonForms>-->
<!--</template>-->
