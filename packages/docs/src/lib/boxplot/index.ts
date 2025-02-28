import { type BoxplotChartOptions, type ChartTabularData, ScaleTypes } from '@carbon/charts'
import type { ChartTypes, Example } from '../types'

const vanilla = 'BoxplotChart'

export const chartTypes: ChartTypes = {
	vanilla,
	svelte: vanilla,
	react: vanilla,
	angular: 'ibm-boxplot-chart',
	vue: `Ccv${vanilla}`
}

const optionsHorizontal: BoxplotChartOptions = {
	title: 'Horizontal box plot',
	axes: {
		bottom: {
			mapsTo: 'value'
		},
		left: {
			scaleType: ScaleTypes.LABELS,
			mapsTo: 'group'
		}
	},
	height: '400px'
}

const optionsVertical: BoxplotChartOptions = {
	title: 'Vertical box plot',
	axes: {
		left: {
			mapsTo: 'value'
		},
		bottom: {
			scaleType: ScaleTypes.LABELS,
			mapsTo: 'group'
		}
	},
	height: '400px'
}

const data: ChartTabularData = [
	{ group: 'Q1', key: 'Monday', value: 65000 },
	{ group: 'Q1', key: 'Tuesday', value: 29123 },
	{ group: 'Q1', key: 'Wednesday', value: 35213 },
	{ group: 'Q1', key: 'Thursday', value: 51213 },
	{ group: 'Q1', key: 'Friday', value: 16932 },
	{ group: 'Q2', key: 'Monday', value: 32432 },
	{ group: 'Q2', key: 'Tuesday', value: 14312 },
	{ group: 'Q2', key: 'Wednesday', value: 66456 },
	{ group: 'Q2', key: 'Thursday', value: 21312 },
	{ group: 'Q2', key: 'Friday', value: 37234 },
	{ group: 'Q3', key: 'Monday', value: 5312 },
	{ group: 'Q3', key: 'Tuesday', value: 23232 },
	{ group: 'Q3', key: 'Wednesday', value: 34232 },
	{ group: 'Q3', key: 'Thursday', value: 12312 },
	{ group: 'Q3', key: 'Friday', value: 44234 },
	{ group: 'Q4', key: 'Monday', value: 32423 },
	{ group: 'Q4', key: 'Tuesday', value: 21313 },
	{ group: 'Q4', key: 'Wednesday', value: 64353 },
	{ group: 'Q4', key: 'Thursday', value: 24134 },
	{ group: 'Q4', key: 'Friday', value: 45134 }
]

export const examples: Example[] = [
	{
		options: optionsHorizontal,
		data,
		tags: ['test']
	},
	{
		options: optionsVertical,
		data,
		tags: ['test']
	}
]
