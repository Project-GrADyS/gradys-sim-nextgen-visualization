export interface InitializationData {
    nodes: string[]
    x_range: [number, number]
    y_range: [number, number]
    z_range: [number, number],
}

export interface SimulationData {
    positions: Array<[number, number, number]>
    simulation_time: number,
    real_time: number
    tracked_variables: Array<object>
}

export interface PaintNodeCommand {
    command: "paint_node"
    payload: {
        node_id: number,
        color: [number, number, number],
    }
}

export interface ShowNodeIdCommand {
    command: "show_node_id"
    payload: {
        node_id: number,
        show: boolean
    }
}

export interface PaintEnvironmentCommand {
    command: "paint_environment"
    payload: {
        color: [number, number, number]
    }
}

export interface ResizeNodesCommand {
    command: "resize_nodes"
    payload: {
        size: number
    }
}

export type VisualizationCommand = PaintNodeCommand | ShowNodeIdCommand | PaintEnvironmentCommand | ResizeNodesCommand;
