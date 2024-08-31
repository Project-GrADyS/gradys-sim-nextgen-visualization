import {connectToSocket} from "./socket.js"
import {update, finalizeVisualization, executeCommand, initializeThree} from "./visualization.js";

import "../style.css"
import {InitializationData, SimulationData, VisualizationCommand} from "./data";


function initialize(data: InitializationData) {
    initializeThree(data)
}

function updateData(data: SimulationData | VisualizationCommand) {
    if ("command" in data) {
        executeCommand(data)
    } else {
        update(data)
    }
}

function finalize() {
    finalizeVisualization()
}

connectToSocket(initialize, updateData, finalize).catch((_e) => console.error("Error connecting to socket"))
