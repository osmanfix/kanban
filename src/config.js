const Types = {
	BACKLOG: 'backlog',
    READY: 'ready',
    PROGRESS: 'inProgress',
    FINISHED: 'finished'
}

const LCOPY = {
	[Types.BACKLOG]: 'Backlog',
    [Types.READY]: 'Ready',
	[Types.PROGRESS]: 'In progress',
    [Types.FINISHED]: 'Finished'
}

export { Types, LCOPY }