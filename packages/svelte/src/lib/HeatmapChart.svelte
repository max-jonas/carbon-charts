<script lang="ts">
	import {
		HeatmapChart as HeatmapChartCore,
		type HeatmapChartOptions,
		type ChartTabularData
	} from '@carbon/charts'
	import BaseChart from './BaseChart.svelte'

	export let options: HeatmapChartOptions
	export let data: ChartTabularData
	export let chart: HeatmapChartCore | undefined = undefined
	export let ref: HTMLDivElement | undefined = undefined
</script>

<BaseChart
	{...$$restProps}
	Chart={HeatmapChartCore}
	{options}
	{data}
	bind:ref
	bind:chart
	on:load
	on:update
	on:destroy />
