<script lang="ts">
	import {
		StackedAreaChart as StackedAreaChartCore,
		type StackedAreaChartOptions,
		type ChartTabularData
	} from '@carbon/charts'
	import BaseChart from './BaseChart.svelte'

	export let options: StackedAreaChartOptions
	export let data: ChartTabularData
	export let chart: StackedAreaChartCore | undefined = undefined
	export let ref: HTMLDivElement | undefined = undefined
</script>

<BaseChart
	{...$$restProps}
	Chart={StackedAreaChartCore}
	{options}
	{data}
	bind:ref
	bind:chart
	on:load
	on:update
	on:destroy />
