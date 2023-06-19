<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
    <button @click="postReportPowerPoint()" class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
      <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
        <path
          d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
      </svg>
      <span class="hidden xs:block ml-2">Report</span>
    </button>
  </div>
</template>

<script>

import { post } from '../apis/index'
export default {
  name: 'Dashboard',
  methods: {
    async postReportPowerPoint() {
      console.log(await post("/report/powerpoint"));
    }
  }

}
</script>