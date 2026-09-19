const activities = [
  {
    question: "Are these two graphs isomorphic?",
    correctAnswer: "Isomorphic",
    explanation: "Both graphs have 4 vertices and 4 edges, and the connections match after relabeling. One graph is simply a re-labeled version of the other.",
    left: [
      [0, 0, 1, 0],
      [0, 0, 1, 1],
      [1, 1, 0, 1],
      [0, 1, 1, 0]
    ],
    right: [
      [0, 1, 0, 1],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [1, 0, 1, 0]
    ],
    labelsLeft: ["A", "B", "C", "D"],
    labelsRight: ["1", "2", "3", "4"],
    leftCoords: [
      { x: 80, y: 55 },
      { x: 160, y: 55 },
      { x: 160, y: 120 },
      { x: 80, y: 120 }
    ],
    rightCoords: [
      { x: 80, y: 55 },
      { x: 160, y: 55 },
      { x: 160, y: 120 },
      { x: 80, y: 120 }
    ]
  },
  {
    question: "Are these two graphs isomorphic?",
    correctAnswer: "Not Isomorphic",
    explanation: "The first graph is a path of 4 vertices, while the second graph is a cycle of 4 vertices. Their connection patterns are different, so no relabeling can match them.",
    left: [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ],
    right: [
      [0, 1, 0, 1],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [1, 0, 1, 0]
    ],
    labelsLeft: ["A", "B", "C", "D"],
    labelsRight: ["1", "2", "3", "4"],
    leftCoords: [
      { x: 60, y: 60 },
      { x: 130, y: 60 },
      { x: 200, y: 60 },
      { x: 270, y: 60 }
    ],
    rightCoords: [
      { x: 80, y: 55 },
      { x: 160, y: 55 },
      { x: 160, y: 120 },
      { x: 80, y: 120 }
    ]
  },
  {
    question: "Are these two graphs isomorphic?",
    correctAnswer: "Isomorphic",
    explanation: "Both graphs have 5 vertices and the same degree pattern. A matching can align the vertices so that every edge remains an edge after relabeling.",
    left: [
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 0],
      [0, 1, 0, 1, 1],
      [1, 0, 1, 0, 0],
      [0, 0, 1, 0, 0]
    ],
    right: [
      [0, 1, 0, 0, 1],
      [1, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 1],
      [1, 0, 0, 1, 0]
    ],
    labelsLeft: ["A", "B", "C", "D", "E"],
    labelsRight: ["1", "2", "3", "4", "5"],
    leftCoords: [
      { x: 70, y: 40 },
      { x: 165, y: 40 },
      { x: 110, y: 110 },
      { x: 185, y: 165 },
      { x: 55, y: 165 }
    ],
    rightCoords: [
      { x: 80, y: 50 },
      { x: 170, y: 50 },
      { x: 215, y: 120 },
      { x: 120, y: 150 },
      { x: 40, y: 120 }
    ]
  },
  {
    question: "Are these two graphs isomorphic?",
    correctAnswer: "Not Isomorphic",
    explanation: "The left graph has a vertex of degree 3, while the right graph does not. Since degree sequence is different, the graphs cannot be isomorphic.",
    left: [
      [0, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 1, 1, 0]
    ],
    right: [
      [0, 1, 0, 1],
      [1, 0, 1, 1],
      [0, 1, 0, 1],
      [1, 1, 1, 0]
    ],
    labelsLeft: ["A", "B", "C", "D"],
    labelsRight: ["1", "2", "3", "4"],
    leftCoords: [
      { x: 110, y: 40 },
      { x: 70, y: 120 },
      { x: 160, y: 120 },
      { x: 110, y: 170 }
    ],
    rightCoords: [
      { x: 80, y: 45 },
      { x: 160, y: 45 },
      { x: 80, y: 120 },
      { x: 160, y: 120 }
    ]
  },
  {
    question: "Are these two graphs isomorphic?",
    correctAnswer: "Isomorphic",
    explanation: "They have the same number of vertices and edges, and the same adjacency pattern after matching vertices. The structure is the same even though the names differ.",
    left: [
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 0, 1, 1, 0]
    ],
    right: [
      [0, 1, 0, 0, 1],
      [1, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 1],
      [1, 0, 0, 1, 0]
    ],
    labelsLeft: ["A", "B", "C", "D", "E"],
    labelsRight: ["1", "2", "3", "4", "5"],
    leftCoords: [
      { x: 70, y: 60 },
      { x: 160, y: 35 },
      { x: 220, y: 120 },
      { x: 140, y: 170 },
      { x: 55, y: 140 }
    ],
    rightCoords: [
      { x: 90, y: 60 },
      { x: 180, y: 35 },
      { x: 210, y: 120 },
      { x: 120, y: 170 },
      { x: 40, y: 130 }
    ]
  },
  {
    question: "Are these two graphs isomorphic?",
    correctAnswer: "Not Isomorphic",
    explanation: "The left graph has a degree sequence with one vertex of degree 2 and one of degree 4, while the right graph has a different degree pattern. The connections cannot be matched one-to-one.",
    left: [
      [0, 1, 1, 0, 1],
      [1, 0, 1, 0, 0],
      [1, 1, 0, 1, 0],
      [0, 0, 1, 0, 1],
      [1, 0, 0, 1, 0]
    ],
    right: [
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 0],
      [0, 1, 0, 0, 0]
    ],
    labelsLeft: ["A", "B", "C", "D", "E"],
    labelsRight: ["1", "2", "3", "4", "5"],
    leftCoords: [
      { x: 65, y: 60 },
      { x: 135, y: 35 },
      { x: 215, y: 60 },
      { x: 215, y: 145 },
      { x: 65, y: 145 }
    ],
    rightCoords: [
      { x: 80, y: 40 },
      { x: 170, y: 40 },
      { x: 220, y: 110 },
      { x: 120, y: 170 },
      { x: 40, y: 110 }
    ]
  }
];

const activityQuestion = document.getElementById("activity-question");
const activityGraphs = document.getElementById("activity-graphs");
const activityFeedback = document.getElementById("activity-feedback");
const answerIsomorphicButton = document.getElementById("answer-isomorphic");
const answerNotIsomorphicButton = document.getElementById("answer-not-isomorphic");
const tryAnotherButton = document.getElementById("try-another");

let currentActivityIndex = 0;
let answered = false;

function renderActivityGraph(graphMatrix, labels, coords, colorClass) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 300 220");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "220");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "Graph diagram");
  svg.style.background = "#f8f7f2";
  svg.style.border = "1px solid #d9e0df";
  svg.style.borderRadius = "10px";

  const ns = "http://www.w3.org/2000/svg";
  for (let i = 0; i < graphMatrix.length; i++) {
    for (let j = i + 1; j < graphMatrix.length; j++) {
      if (graphMatrix[i][j] === 1) {
        const line = document.createElementNS(ns, "line");
        line.setAttribute("x1", coords[i].x);
        line.setAttribute("y1", coords[i].y);
        line.setAttribute("x2", coords[j].x);
        line.setAttribute("y2", coords[j].y);
        line.setAttribute("stroke", "#17243a");
        line.setAttribute("stroke-width", "2");
        svg.appendChild(line);
      }
    }
  }

  graphMatrix.forEach((row, index) => {
    const node = document.createElementNS(ns, "circle");
    node.setAttribute("cx", coords[index].x);
    node.setAttribute("cy", coords[index].y);
    node.setAttribute("r", "16");
    node.setAttribute("fill", colorClass === "dark" ? "#17243a" : "#267c67");
    svg.appendChild(node);

    const label = document.createElementNS(ns, "text");
    label.setAttribute("x", coords[index].x);
    label.setAttribute("y", coords[index].y + 5);
    label.setAttribute("fill", "#ffffff");
    label.setAttribute("font-size", "12");
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("font-family", "DM Sans, sans-serif");
    label.textContent = labels[index];
    svg.appendChild(label);
  });

  return svg;
}

function loadActivity(index) {
  const activity = activities[index];
  activityQuestion.textContent = activity.question;
  activityGraphs.innerHTML = "";
  answered = false;
  activityFeedback.textContent = "";
  activityFeedback.style.color = "var(--ink)";
  tryAnotherButton.style.display = "none";

  const leftPanel = document.createElement("div");
  leftPanel.innerHTML = "<p style='font-weight:700; margin-bottom:8px; color:#267c67;'>Graph 1</p>";
  leftPanel.appendChild(renderActivityGraph(activity.left, activity.labelsLeft, activity.leftCoords, "dark"));

  const rightPanel = document.createElement("div");
  rightPanel.innerHTML = "<p style='font-weight:700; margin-bottom:8px; color:#267c67;'>Graph 2</p>";
  rightPanel.appendChild(renderActivityGraph(activity.right, activity.labelsRight, activity.rightCoords, "mint"));

  activityGraphs.appendChild(leftPanel);
  activityGraphs.appendChild(rightPanel);

  answerIsomorphicButton.disabled = false;
  answerNotIsomorphicButton.disabled = false;
  answerIsomorphicButton.style.opacity = "1";
  answerNotIsomorphicButton.style.opacity = "1";
}

function checkAnswer(selectedAnswer) {
  if (answered) return;
  const activity = activities[currentActivityIndex];
  answered = true;
  answerIsomorphicButton.disabled = true;
  answerNotIsomorphicButton.disabled = true;

  const isCorrect = selectedAnswer === activity.correctAnswer;
  activityFeedback.textContent = isCorrect ? "Correct! " + activity.explanation : "Incorrect. " + activity.explanation;
  activityFeedback.style.color = isCorrect ? "#267c67" : "#b2473d";
  tryAnotherButton.style.display = "inline-flex";
}

answerIsomorphicButton.addEventListener("click", () => checkAnswer("Isomorphic"));
answerNotIsomorphicButton.addEventListener("click", () => checkAnswer("Not Isomorphic"));
tryAnotherButton.addEventListener("click", () => {
  currentActivityIndex = (currentActivityIndex + 1) % activities.length;
  loadActivity(currentActivityIndex);
});

document.querySelectorAll('[data-exercise-answer]').forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-exercise-answer');
    const answerBlock = document.getElementById(targetId);
    if (!answerBlock) return;

    const isVisible = answerBlock.style.display === 'block';
    answerBlock.style.display = isVisible ? 'none' : 'block';
    button.textContent = isVisible ? 'Show Answer' : 'Hide Answer';
  });
});

const toolExamples = {
  "cycle-matching": {
    graphA: {
      vertices: [
        { id: "A1", label: "A1", x: 70, y: 60 },
        { id: "A2", label: "A2", x: 155, y: 35 },
        { id: "A3", label: "A3", x: 220, y: 90 },
        { id: "A4", label: "A4", x: 155, y: 160 }
      ],
      edges: [["A1", "A2"], ["A2", "A3"], ["A3", "A4"], ["A4", "A1"]]
    },
    graphB: {
      vertices: [
        { id: "B1", label: "B1", x: 70, y: 60 },
        { id: "B2", label: "B2", x: 155, y: 35 },
        { id: "B3", label: "B3", x: 220, y: 90 },
        { id: "B4", label: "B4", x: 155, y: 160 }
      ],
      edges: [["B1", "B2"], ["B2", "B3"], ["B3", "B4"], ["B4", "B1"]]
    }
  },
  "path-vs-cycle": {
    graphA: {
      vertices: [
        { id: "A1", label: "A1", x: 50, y: 100 },
        { id: "A2", label: "A2", x: 110, y: 100 },
        { id: "A3", label: "A3", x: 170, y: 100 },
        { id: "A4", label: "A4", x: 230, y: 100 }
      ],
      edges: [["A1", "A2"], ["A2", "A3"], ["A3", "A4"]]
    },
    graphB: {
      vertices: [
        { id: "B1", label: "B1", x: 80, y: 55 },
        { id: "B2", label: "B2", x: 160, y: 55 },
        { id: "B3", label: "B3", x: 160, y: 135 },
        { id: "B4", label: "B4", x: 80, y: 135 }
      ],
      edges: [["B1", "B2"], ["B2", "B3"], ["B3", "B4"], ["B4", "B1"]]
    }
  },
  "same-size-not-iso": {
    graphA: {
      vertices: [
        { id: "A1", label: "A1", x: 70, y: 60 },
        { id: "A2", label: "A2", x: 150, y: 60 },
        { id: "A3", label: "A3", x: 220, y: 100 },
        { id: "A4", label: "A4", x: 150, y: 150 },
        { id: "A5", label: "A5", x: 70, y: 150 }
      ],
      edges: [["A1", "A2"], ["A2", "A3"], ["A3", "A4"], ["A4", "A5"], ["A5", "A1"]]
    },
    graphB: {
      vertices: [
        { id: "B1", label: "B1", x: 80, y: 60 },
        { id: "B2", label: "B2", x: 210, y: 60 },
        { id: "B3", label: "B3", x: 210, y: 150 },
        { id: "B4", label: "B4", x: 80, y: 150 },
        { id: "B5", label: "B5", x: 145, y: 105 }
      ],
      edges: [["B1", "B2"], ["B2", "B3"], ["B3", "B4"], ["B4", "B1"], ["B1", "B5"]]
    }
  },
  "triangle-vs-star": {
    graphA: {
      vertices: [
        { id: "A1", label: "A1", x: 90, y: 70 },
        { id: "A2", label: "A2", x: 155, y: 140 },
        { id: "A3", label: "A3", x: 220, y: 70 }
      ],
      edges: [["A1", "A2"], ["A2", "A3"], ["A3", "A1"]]
    },
    graphB: {
      vertices: [
        { id: "B1", label: "B1", x: 80, y: 110 },
        { id: "B2", label: "B2", x: 150, y: 40 },
        { id: "B3", label: "B3", x: 220, y: 110 },
        { id: "B4", label: "B4", x: 150, y: 180 }
      ],
      edges: [["B1", "B2"], ["B2", "B3"], ["B2", "B4"], ["B1", "B2"]]
    }
  }
};

const toolGraphButtons = document.querySelectorAll(".tool-graph-button");
const toolActionButtons = document.querySelectorAll(".tool-action-button");
const graphSelect = document.getElementById("tool-example-select");
const toolLoadExampleButton = document.getElementById("tool-load-example");
const checkIsomorphismButton = document.getElementById("check-isomorphism");
const toolResult = document.getElementById("tool-result");

const toolState = {
  activeGraph: "A",
  selectedVertex: null,
  mode: "view"
};

const graphs = {
  A: { vertices: [], edges: [] },
  B: { vertices: [], edges: [] }
};

function cloneGraph(graph) {
  return {
    vertices: graph.vertices.map((vertex) => ({ ...vertex })),
    edges: graph.edges.map(([u, v]) => [u, v])
  };
}

function addGraphVertices(graphName, graphData) {
  graphs[graphName] = cloneGraph(graphData);
}

function formatEdge(edge) {
  return edge.join("-");
}

function getGraphVerticesById(graphName) {
  return graphs[graphName].vertices.map((vertex) => vertex.id);
}

function getConnectedVertices(graphName, vertexId) {
  const graph = graphs[graphName];
  const connected = [];
  graph.edges.forEach(([u, v]) => {
    if (u === vertexId) connected.push(v);
    if (v === vertexId) connected.push(u);
  });
  return connected;
}

function getVertexIndexById(graphName, vertexId) {
  return graphs[graphName].vertices.findIndex((vertex) => vertex.id === vertexId);
}

function graphToAdjacency(graph) {
  const ids = graph.vertices.map((vertex) => vertex.id);
  const indexMap = new Map(ids.map((id, index) => [id, index]));
  const matrix = Array.from({ length: ids.length }, () => Array(ids.length).fill(0));

  graph.edges.forEach(([u, v]) => {
    const i = indexMap.get(u);
    const j = indexMap.get(v);
    if (i !== undefined && j !== undefined) {
      matrix[i][j] = 1;
      matrix[j][i] = 1;
    }
  });

  return matrix;
}

function isSameDegreeSequence(matrixA, matrixB) {
  const degreesA = matrixA.map((row) => row.reduce((sum, value) => sum + value, 0));
  const degreesB = matrixB.map((row) => row.reduce((sum, value) => sum + value, 0));
  return degreesA.slice().sort((a, b) => a - b).join(",") === degreesB.slice().sort((a, b) => a - b).join(",");
}

function findIsomorphismMapping(graphA, graphB) {
  if (graphA.vertices.length !== graphB.vertices.length) return null;

  const matrixA = graphToAdjacency(graphA);
  const matrixB = graphToAdjacency(graphB);

  if (matrixA.length === 0) return [];
  if (!isSameDegreeSequence(matrixA, matrixB)) return null;

  const degreeA = matrixA.map((row) => row.reduce((sum, value) => sum + value, 0));
  const degreeB = matrixB.map((row) => row.reduce((sum, value) => sum + value, 0));

  const orderA = Array.from({ length: matrixA.length }, (_, index) => index).sort((i, j) => degreeA[i] - degreeA[j] || i - j);
  const orderB = Array.from({ length: matrixB.length }, (_, index) => index).sort((i, j) => degreeB[i] - degreeB[j] || i - j);
  const mapping = new Array(matrixA.length).fill(-1);

  function backtrack(position) {
    if (position === orderA.length) {
      for (let i = 0; i < matrixA.length; i++) {
        for (let j = 0; j < matrixA.length; j++) {
          if (matrixA[i][j] !== matrixB[mapping[i]][mapping[j]]) {
            return false;
          }
        }
      }
      return true;
    }

    const sourceIndex = orderA[position];
    const sourceDegree = degreeA[sourceIndex];

    for (const targetIndex of orderB) {
      if (mapping.includes(targetIndex)) continue;
      if (degreeB[targetIndex] !== sourceDegree) continue;

      let valid = true;
      for (let previous = 0; previous < position; previous++) {
        const previousSource = orderA[previous];
        const previousTarget = mapping[previousSource];

        if (previousTarget === -1) continue;
        if (matrixA[sourceIndex][previousSource] !== matrixB[targetIndex][previousTarget]) {
          valid = false;
          break;
        }
      }

      if (!valid) continue;

      mapping[sourceIndex] = targetIndex;
      if (backtrack(position + 1)) return true;
      mapping[sourceIndex] = -1;
    }

    return false;
  }

  return backtrack(0) ? mapping : null;
}

function setResult(message) {
  toolResult.innerHTML = `<p>${message}</p>`;
}

function getActiveGraphName() {
  return toolState.activeGraph;
}

function updateGraphButtons() {
  toolGraphButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.graph === toolState.activeGraph);
  });
}

function updateActionButtons() {
  toolActionButtons.forEach((button) => {
    const isActive = button.dataset.action === toolState.mode;
    button.classList.toggle("active", isActive);
  });
}

function ensureGraphHasLabel(graphName, currentLabel) {
  const graph = graphs[graphName];
  const used = new Set(graph.vertices.map((vertex) => vertex.label));
  let label = currentLabel;
  let count = 1;
  while (used.has(label)) {
    label = `${currentLabel}${count}`;
    count += 1;
  }
  return label;
}

function addVertex() {
  const graphName = getActiveGraphName();
  const graph = graphs[graphName];
  const count = graph.vertices.length + 1;
  const baseLabel = graphName === "A" ? "A" : "B";
  const label = ensureGraphHasLabel(graphName, `${baseLabel}${count}`);
  const angle = (count * 2 * Math.PI) / Math.max(6, count + 2);
  const x = 150 + Math.cos(angle) * 70;
  const y = 110 + Math.sin(angle) * 60;

  graph.vertices.push({
    id: `${graphName}${Date.now()}${count}`,
    label,
    x,
    y
  });
  renderGraphs();
}

function removeVertex() {
  const graphName = getActiveGraphName();
  const graph = graphs[graphName];
  if (!toolState.selectedVertex) {
    setResult("Select a vertex on the active graph before removing it.");
    return;
  }

  const targetId = toolState.selectedVertex;
  graph.vertices = graph.vertices.filter((vertex) => vertex.id !== targetId);
  graph.edges = graph.edges.filter(([u, v]) => u !== targetId && v !== targetId);
  toolState.selectedVertex = null;
  renderGraphs();
  setResult(`${graphName === "A" ? "Graph A" : "Graph B"} updated.`);
}

function addEdge() {
  const graphName = getActiveGraphName();
  const graph = graphs[graphName];
  if (!toolState.selectedVertex) {
    setResult("Click one vertex, then click a second vertex to add an edge.");
    toolState.mode = "add-edge";
    updateActionButtons();
    return;
  }

  const firstId = toolState.selectedVertex;
  toolState.selectedVertex = null;
  setResult("Choose a second vertex to complete the edge.");
  toolState.mode = "add-edge";
  updateActionButtons();

  const graphSvg = document.getElementById(`graph-${graphName.toLowerCase()}-svg`);
  graphSvg.dataset.pendingFirst = firstId;
}

function removeEdge() {
  const graphName = getActiveGraphName();
  toolState.mode = "remove-edge";
  toolState.selectedVertex = null;
  updateActionButtons();
  setResult("Click two vertices to remove an edge.");
}

function clearGraph() {
  const graphName = getActiveGraphName();
  graphs[graphName] = { vertices: [], edges: [] };
  toolState.selectedVertex = null;
  renderGraphs();
  setResult(`${graphName === "A" ? "Graph A" : "Graph B"} has been cleared.`);
}

function handleGraphNodeClick(graphName, vertexId) {
  if (toolState.mode === "add-edge" || toolState.mode === "remove-edge") {
    const graph = graphs[graphName];
    const pendingId = document.getElementById(`graph-${graphName.toLowerCase()}-svg`).dataset.pendingFirst;

    if (toolState.mode === "add-edge") {
      const firstId = pendingId || toolState.selectedVertex;
      if (!firstId) {
        toolState.selectedVertex = vertexId;
        renderGraphs();
        setResult("First vertex selected. Click a second vertex to add a connection.");
        return;
      }
      if (firstId === vertexId) {
        toolState.selectedVertex = null;
        delete document.getElementById(`graph-${graphName.toLowerCase()}-svg`).dataset.pendingFirst;
        toolState.mode = "view";
        updateActionButtons();
        setResult("No edge was added because the same vertex was selected twice.");
        renderGraphs();
        return;
      }

      const edgeAlreadyExists = graph.edges.some(([u, v]) => (u === firstId && v === vertexId) || (u === vertexId && v === firstId));
      if (!edgeAlreadyExists) {
        graph.edges.push([firstId, vertexId]);
        setResult(`Edge added between ${firstId} and ${vertexId}.`);
      } else {
        setResult("That edge already exists.");
      }
    }

    if (toolState.mode === "remove-edge") {
      if (!toolState.selectedVertex) {
        toolState.selectedVertex = vertexId;
        setResult("First vertex selected. Click a second vertex to remove the edge.");
        renderGraphs();
        return;
      }

      const firstId = toolState.selectedVertex;
      if (firstId === vertexId) {
        toolState.selectedVertex = null;
        setResult("Select two different vertices to remove an edge.");
        renderGraphs();
        return;
      }

      graph.edges = graph.edges.filter(([u, v]) => !(u === firstId && v === vertexId) && !(u === vertexId && v === firstId));
      setResult(`Edge removed between ${firstId} and ${vertexId}.`);
      toolState.selectedVertex = null;
    }

    toolState.mode = "view";
    delete document.getElementById(`graph-${graphName.toLowerCase()}-svg`).dataset.pendingFirst;
    updateActionButtons();
    renderGraphs();
    return;
  }

  toolState.selectedVertex = vertexId;
  renderGraphs();
  setResult(`${graphName === "A" ? "Graph A" : "Graph B"} vertex ${vertexId} is selected.`);
}

function renderGraphs() {
  renderSingleGraph("A");
  renderSingleGraph("B");
  updateGraphButtons();
  updateActionButtons();
}

function renderSingleGraph(graphName) {
  const svg = document.getElementById(`graph-${graphName.toLowerCase()}-svg`);
  const graph = graphs[graphName];
  svg.innerHTML = "";

  const lineColour = "#17243a";
  const nodeColour = graphName === "A" ? "#17243a" : "#267c67";

  graph.edges.forEach(([u, v]) => {
    const from = graph.vertices.find((vertex) => vertex.id === u);
    const to = graph.vertices.find((vertex) => vertex.id === v);
    if (!from || !to) return;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", from.x);
    line.setAttribute("y1", from.y);
    line.setAttribute("x2", to.x);
    line.setAttribute("y2", to.y);
    line.setAttribute("stroke", lineColour);
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);
  });

  graph.vertices.forEach((vertex) => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "tool-node");
    if (toolState.selectedVertex === vertex.id && toolState.activeGraph === graphName) {
      g.classList.add("selected");
    }

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", vertex.x);
    circle.setAttribute("cy", vertex.y);
    circle.setAttribute("r", "16");
    circle.setAttribute("fill", nodeColour);
    circle.setAttribute("stroke", toolState.selectedVertex === vertex.id && toolState.activeGraph === graphName ? "#eb715f" : "#ffffff");
    circle.setAttribute("stroke-width", toolState.selectedVertex === vertex.id && toolState.activeGraph === graphName ? "3" : "2");

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", vertex.x);
    text.setAttribute("y", vertex.y + 5);
    text.setAttribute("fill", "#ffffff");
    text.setAttribute("font-size", "12");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("font-family", "DM Sans, sans-serif");
    text.textContent = vertex.label;

    g.appendChild(circle);
    g.appendChild(text);
    g.addEventListener("click", () => handleGraphNodeClick(graphName, vertex.id));
    svg.appendChild(g);
  });
}

function loadExample() {
  const exampleKey = graphSelect.value;
  const example = toolExamples[exampleKey];
  addGraphVertices("A", example.graphA);
  addGraphVertices("B", example.graphB);
  toolState.activeGraph = "A";
  toolState.selectedVertex = null;
  toolState.mode = "view";
  renderGraphs();
  setResult(`Loaded example: ${graphSelect.options[graphSelect.selectedIndex].text}.`);
}

function checkIsomorphism() {
  const mapping = findIsomorphismMapping(graphs.A, graphs.B);

  if (mapping) {
    const resultText = graphs.A.vertices.map((vertex, index) => `${vertex.label} → ${graphs.B.vertices[mapping[index]].label}`).join(", ");
    setResult(`<strong>Yes, the graphs are isomorphic.</strong><br>Vertex mapping: ${resultText}`);
    return;
  }

  const degreesA = graphToAdjacency(graphs.A).map((row) => row.reduce((sum, value) => sum + value, 0)).sort((a, b) => a - b);
  const degreesB = graphToAdjacency(graphs.B).map((row) => row.reduce((sum, value) => sum + value, 0)).sort((a, b) => a - b);

  if (degreesA.join(",") !== degreesB.join(",")) {
    setResult(`<strong>No, the graphs are not isomorphic.</strong><br>Reason: the degree patterns are different. Graph A has degrees ${degreesA.join(", ")}, while Graph B has degrees ${degreesB.join(", ")}.`);
    return;
  }

  setResult("<strong>No, the graphs are not isomorphic.</strong><br>Reason: no one-to-one vertex mapping preserves all adjacencies.");
}

toolGraphButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toolState.activeGraph = button.dataset.graph;
    toolState.selectedVertex = null;
    renderGraphs();
    setResult(`${toolState.activeGraph === "A" ? "Graph A" : "Graph B"} is selected for editing.`);
  });
});

toolActionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    toolState.mode = action;
    if (action === "add-vertex") {
      addVertex();
      return;
    }
    if (action === "remove-vertex") {
      removeVertex();
      return;
    }
    if (action === "add-edge") {
      addEdge();
      return;
    }
    if (action === "remove-edge") {
      removeEdge();
      return;
    }
    if (action === "clear-graph") {
      clearGraph();
      return;
    }
    updateActionButtons();
  });
});

toolLoadExampleButton.addEventListener("click", loadExample);
checkIsomorphismButton.addEventListener("click", checkIsomorphism);

const navLinks = document.querySelectorAll('.nav-links a[data-section-target], .brand[data-section-target]');
const sectionPanels = document.querySelectorAll('.section-panel');
const heroSection = document.querySelector('.hero');

function showSection(sectionId) {
  sectionPanels.forEach((panel) => {
    const isActive = panel.id === sectionId;
    panel.classList.toggle('active', isActive);
  });

  navLinks.forEach((link) => {
    const isActive = link.dataset.sectionTarget === sectionId;
    link.classList.toggle('is-active', isActive);
  });

  if (heroSection) {
    heroSection.style.display = sectionId === 'home' ? 'grid' : 'none';
  }

}

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    showSection(link.dataset.sectionTarget);
  });
});

const homeBrand = document.querySelector('.brand[data-section-target]');
if (homeBrand) {
  homeBrand.addEventListener('click', (event) => {
    event.preventDefault();
    showSection('home');
  });
}

const heroButton = document.querySelector('.hero .primary-button[data-section-target]');
if (heroButton) {
  heroButton.addEventListener('click', (event) => {
    event.preventDefault();
    showSection(heroButton.dataset.sectionTarget);
  });
}

const exerciseBank = {
  easy: [
    {
      question: 'Are these graphs isomorphic?',
      options: ['Isomorphic', 'Not Isomorphic'],
      correct: 'Isomorphic',
      explanation: 'Both graphs are 4-cycles, so they have the same structure after relabeling.',
      left: [
        [0, 1, 0, 1],
        [1, 0, 1, 0],
        [0, 1, 0, 1],
        [1, 0, 1, 0]
      ],
      right: [
        [0, 1, 0, 1],
        [1, 0, 1, 0],
        [0, 1, 0, 1],
        [1, 0, 1, 0]
      ],
      labelsLeft: ['A', 'B', 'C', 'D'],
      labelsRight: ['1', '2', '3', '4'],
      leftCoords: [
        { x: 70, y: 55 },
        { x: 150, y: 55 },
        { x: 150, y: 120 },
        { x: 70, y: 120 }
      ],
      rightCoords: [
        { x: 80, y: 55 },
        { x: 160, y: 55 },
        { x: 160, y: 120 },
        { x: 80, y: 120 }
      ]
    },
    {
      question: 'Are these graphs isomorphic?',
      options: ['Isomorphic', 'Not Isomorphic'],
      correct: 'Not Isomorphic',
      explanation: 'The first graph is a path, while the second graph is a cycle. Their degree sequences are different, so they cannot match under a relabeling.',
      left: [
        [0, 1, 0, 0],
        [1, 0, 1, 0],
        [0, 1, 0, 1],
        [0, 0, 1, 0]
      ],
      right: [
        [0, 1, 0, 1],
        [1, 0, 1, 0],
        [0, 1, 0, 1],
        [1, 0, 1, 0]
      ],
      labelsLeft: ['A', 'B', 'C', 'D'],
      labelsRight: ['1', '2', '3', '4'],
      leftCoords: [
        { x: 60, y: 60 },
        { x: 130, y: 60 },
        { x: 200, y: 60 },
        { x: 270, y: 60 }
      ],
      rightCoords: [
        { x: 80, y: 55 },
        { x: 160, y: 55 },
        { x: 160, y: 120 },
        { x: 80, y: 120 }
      ]
    },
    {
      question: 'Are these graphs isomorphic?',
      options: ['Isomorphic', 'Not Isomorphic'],
      correct: 'Isomorphic',
      explanation: 'Both graphs are paths with three vertices, so each has the same degree pattern and same adjacency structure after relabeling.',
      left: [
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0]
      ],
      right: [
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0]
      ],
      labelsLeft: ['A', 'B', 'C'],
      labelsRight: ['1', '2', '3'],
      leftCoords: [
        { x: 80, y: 70 },
        { x: 150, y: 70 },
        { x: 220, y: 70 }
      ],
      rightCoords: [
        { x: 80, y: 70 },
        { x: 150, y: 70 },
        { x: 220, y: 70 }
      ]
    }
  ],
  medium: [
    {
      question: 'Are these graphs isomorphic?',
      options: ['Isomorphic', 'Not Isomorphic'],
      correct: 'Isomorphic',
      explanation: 'They share the same vertex count, edge count, and degree pattern. A matching can preserve every edge exactly.',
      left: [
        [0, 1, 0, 1, 0],
        [1, 0, 1, 0, 0],
        [0, 1, 0, 1, 1],
        [1, 0, 1, 0, 0],
        [0, 0, 1, 0, 0]
      ],
      right: [
        [0, 1, 0, 0, 1],
        [1, 0, 1, 0, 0],
        [0, 1, 0, 1, 1],
        [0, 0, 1, 0, 0],
        [1, 0, 1, 0, 0]
      ],
      labelsLeft: ['A', 'B', 'C', 'D', 'E'],
      labelsRight: ['1', '2', '3', '4', '5'],
      leftCoords: [
        { x: 70, y: 40 },
        { x: 160, y: 40 },
        { x: 110, y: 110 },
        { x: 185, y: 165 },
        { x: 55, y: 165 }
      ],
      rightCoords: [
        { x: 80, y: 50 },
        { x: 170, y: 50 },
        { x: 215, y: 120 },
        { x: 120, y: 150 },
        { x: 40, y: 120 }
      ]
    },
    {
      question: 'Are these graphs isomorphic?',
      options: ['Isomorphic', 'Not Isomorphic'],
      correct: 'Not Isomorphic',
      explanation: 'The left graph has a degree-3 centre, while the right graph is a path. Because their degree sequences differ, no relabeling can produce the same structure.',
      left: [
        [0, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 0]
      ],
      right: [
        [0, 1, 0, 0],
        [1, 0, 1, 0],
        [0, 1, 0, 1],
        [0, 0, 1, 0]
      ],
      labelsLeft: ['A', 'B', 'C', 'D'],
      labelsRight: ['1', '2', '3', '4'],
      leftCoords: [
        { x: 110, y: 40 },
        { x: 70, y: 120 },
        { x: 160, y: 120 },
        { x: 110, y: 170 }
      ],
      rightCoords: [
        { x: 80, y: 45 },
        { x: 160, y: 45 },
        { x: 80, y: 120 },
        { x: 160, y: 120 }
      ]
    },
    {
      question: 'Are these graphs isomorphic?',
      options: ['Isomorphic', 'Not Isomorphic'],
      correct: 'Not Isomorphic',
      explanation: 'One graph has a degree-4 vertex and the other does not. Since the degree pattern is different, they cannot be isomorphic.',
      left: [
        [0, 1, 1, 0, 1],
        [1, 0, 1, 0, 0],
        [1, 1, 0, 1, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 0, 1, 0]
      ],
      right: [
        [0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0],
        [1, 0, 1, 0, 0],
        [0, 1, 0, 0, 0]
      ],
      labelsLeft: ['A', 'B', 'C', 'D', 'E'],
      labelsRight: ['1', '2', '3', '4', '5'],
      leftCoords: [
        { x: 65, y: 60 },
        { x: 135, y: 35 },
        { x: 215, y: 60 },
        { x: 215, y: 145 },
        { x: 65, y: 145 }
      ],
      rightCoords: [
        { x: 80, y: 40 },
        { x: 170, y: 40 },
        { x: 220, y: 110 },
        { x: 120, y: 170 },
        { x: 40, y: 110 }
      ]
    }
  ],
  hard: [
    {
      question: 'Are these graphs isomorphic?',
      options: ['Isomorphic', 'Not Isomorphic'],
      correct: 'Isomorphic',
      explanation: 'Both graphs have 4 vertices and 5 edges, and the same cycle-plus-diagonal structure. A vertex mapping preserves every adjacency.',
      left: [
        [0, 1, 0, 1],
        [1, 0, 1, 1],
        [0, 1, 0, 1],
        [1, 1, 1, 0]
      ],
      right: [
        [0, 1, 0, 1],
        [1, 0, 1, 1],
        [0, 1, 0, 1],
        [1, 1, 1, 0]
      ],
      labelsLeft: ['A', 'B', 'C', 'D'],
      labelsRight: ['1', '2', '3', '4'],
      leftCoords: [
        { x: 90, y: 45 },
        { x: 160, y: 45 },
        { x: 205, y: 115 },
        { x: 105, y: 115 }
      ],
      rightCoords: [
        { x: 65, y: 45 },
        { x: 155, y: 45 },
        { x: 155, y: 125 },
        { x: 65, y: 125 }
      ]
    },
    {
      question: 'Are these graphs isomorphic?',
      options: ['Isomorphic', 'Not Isomorphic'],
      correct: 'Not Isomorphic',
      explanation: 'The first graph has a different connectivity pattern than the second. No mapping preserves all edge relationships, so the structures are not identical.',
      left: [
        [0, 1, 1, 0, 1],
        [1, 0, 1, 0, 0],
        [1, 1, 0, 1, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 0, 1, 0]
      ],
      right: [
        [0, 1, 0, 0, 1],
        [1, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 0, 1, 0]
      ],
      labelsLeft: ['A', 'B', 'C', 'D', 'E'],
      labelsRight: ['1', '2', '3', '4', '5'],
      leftCoords: [
        { x: 90, y: 55 },
        { x: 150, y: 35 },
        { x: 220, y: 80 },
        { x: 180, y: 150 },
        { x: 95, y: 140 }
      ],
      rightCoords: [
        { x: 55, y: 55 },
        { x: 145, y: 35 },
        { x: 225, y: 85 },
        { x: 190, y: 155 },
        { x: 80, y: 145 }
      ]
    },
    {
      question: 'Are these graphs isomorphic?',
      options: ['Isomorphic', 'Not Isomorphic'],
      correct: 'Isomorphic',
      explanation: 'Both are six-vertex graphs with the same arrangement of adjacency when vertices are matched correctly. The graph structure is the same even though the labels differ.',
      left: [
        [0, 1, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 1],
        [0, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [0, 1, 0, 0, 1, 0]
      ],
      right: [
        [0, 1, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 1],
        [0, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [0, 1, 0, 0, 1, 0]
      ],
      labelsLeft: ['A', 'B', 'C', 'D', 'E', 'F'],
      labelsRight: ['1', '2', '3', '4', '5', '6'],
      leftCoords: [
        { x: 85, y: 60 },
        { x: 150, y: 25 },
        { x: 220, y: 60 },
        { x: 220, y: 125 },
        { x: 150, y: 160 },
        { x: 85, y: 125 }
      ],
      rightCoords: [
        { x: 150, y: 30 },
        { x: 220, y: 70 },
        { x: 220, y: 145 },
        { x: 150, y: 180 },
        { x: 80, y: 145 },
        { x: 80, y: 70 }
      ]
    }
  ]
};

const quizSelectors = {
  difficultyScreen: document.getElementById('difficulty-screen'),
  questionScreen: document.getElementById('question-screen'),
  finishScreen: document.getElementById('finish-screen'),
  resultScreen: document.getElementById('result-screen'),
  quizDifficultyLabel: document.getElementById('quiz-difficulty-label'),
  quizProgress: document.getElementById('quiz-progress'),
  quizQuestionText: document.getElementById('quiz-question-text'),
  quizVisual: document.getElementById('quiz-visual'),
  quizOptions: document.getElementById('quiz-options'),
  quizScoreText: document.getElementById('quiz-score-text'),
  quizReview: document.getElementById('quiz-review'),
  submitTestButton: document.getElementById('submit-test-button')
};

const quizState = {
  difficulty: null,
  questions: [],
  answers: [],
  currentIndex: 0,
  score: 0
};

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderQuestionGraph(graphMatrix, labels, coords, colorClass = 'dark') {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 300 220');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '220');
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', 'Graph diagram');
  svg.style.background = '#f8f7f2';
  svg.style.border = '1px solid #d9e0df';
  svg.style.borderRadius = '10px';

  const ns = 'http://www.w3.org/2000/svg';
  for (let i = 0; i < graphMatrix.length; i += 1) {
    for (let j = i + 1; j < graphMatrix.length; j += 1) {
      if (graphMatrix[i][j] === 1) {
        const line = document.createElementNS(ns, 'line');
        line.setAttribute('x1', coords[i].x);
        line.setAttribute('y1', coords[i].y);
        line.setAttribute('x2', coords[j].x);
        line.setAttribute('y2', coords[j].y);
        line.setAttribute('stroke', '#17243a');
        line.setAttribute('stroke-width', '2');
        svg.appendChild(line);
      }
    }
  }

  graphMatrix.forEach((row, index) => {
    const node = document.createElementNS(ns, 'circle');
    node.setAttribute('cx', coords[index].x);
    node.setAttribute('cy', coords[index].y);
    node.setAttribute('r', '16');
    node.setAttribute('fill', colorClass === 'dark' ? '#17243a' : '#267c67');
    svg.appendChild(node);

    const label = document.createElementNS(ns, 'text');
    label.setAttribute('x', coords[index].x);
    label.setAttribute('y', coords[index].y + 5);
    label.setAttribute('fill', '#ffffff');
    label.setAttribute('font-size', '12');
    label.setAttribute('text-anchor', 'middle');
    label.setAttribute('font-family', 'DM Sans, sans-serif');
    label.textContent = labels[index];
    svg.appendChild(label);
  });

  return svg;
}

function getCurrentQuestion() {
  return quizState.questions[quizState.currentIndex];
}

function buildDifficultyPool(difficulty) {
  if (difficulty === 'quiz') {
    return shuffle([...exerciseBank.easy, ...exerciseBank.medium, ...exerciseBank.hard]);
  }
  return [...exerciseBank[difficulty]];
}

function showQuizScreen(screenName) {
  Object.entries(quizSelectors).forEach(([key, value]) => {
    if (key.endsWith('Screen')) {
      // no-op here; handled separately below
    }
  });

  quizSelectors.difficultyScreen.classList.toggle('active', screenName === 'difficulty');
  quizSelectors.questionScreen.classList.toggle('active', screenName === 'question');
  quizSelectors.finishScreen.classList.toggle('active', screenName === 'finish');
  quizSelectors.resultScreen.classList.toggle('active', screenName === 'result');
}

function startQuiz(difficulty) {
  quizState.difficulty = difficulty;
  quizState.currentIndex = 0;
  quizState.score = 0;

  const pool = buildDifficultyPool(difficulty);
  const questionLimit = difficulty === 'easy' ? 3 : difficulty === 'medium' ? 3 : difficulty === 'hard' ? 3 : 5;
  quizState.questions = shuffle(pool).slice(0, Math.min(questionLimit, pool.length));
  quizState.answers = new Array(quizState.questions.length).fill(null);

  showQuizScreen('question');
  renderQuestion();
}

function renderQuestion() {
  const question = getCurrentQuestion();
  if (!question) {
    showResult();
    return;
  }

  const total = quizState.questions.length;
  quizSelectors.quizDifficultyLabel.textContent = quizState.difficulty === 'quiz' ? 'Quiz' : quizState.difficulty.charAt(0).toUpperCase() + quizState.difficulty.slice(1);
  quizSelectors.quizProgress.textContent = `Question ${quizState.currentIndex + 1} of ${total}`;
  quizSelectors.quizQuestionText.textContent = question.question;
  quizSelectors.quizVisual.innerHTML = '';
  quizSelectors.quizOptions.innerHTML = '';

  const leftPanel = document.createElement('div');
  leftPanel.className = 'quiz-graph-panel';
  leftPanel.innerHTML = '<p style="margin:0 0 8px; font-weight:700; color:#267c67;">Graph 1</p>';
  leftPanel.appendChild(renderQuestionGraph(question.left, question.labelsLeft, question.leftCoords, 'dark'));

  const rightPanel = document.createElement('div');
  rightPanel.className = 'quiz-graph-panel';
  rightPanel.innerHTML = '<p style="margin:0 0 8px; font-weight:700; color:#267c67;">Graph 2</p>';
  rightPanel.appendChild(renderQuestionGraph(question.right, question.labelsRight, question.rightCoords, 'mint'));

  quizSelectors.quizVisual.appendChild(leftPanel);
  quizSelectors.quizVisual.appendChild(rightPanel);

  question.options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'quiz-option';
    button.textContent = option;
    button.dataset.option = option;
    button.addEventListener('click', () => handleAnswer(option));
    quizSelectors.quizOptions.appendChild(button);
  });
}

function handleAnswer(selectedOption) {
  if (quizState.answers[quizState.currentIndex] !== null) return;

  quizState.answers[quizState.currentIndex] = selectedOption;
  document.querySelectorAll('.quiz-option').forEach((button) => {
    button.disabled = true;
    button.classList.toggle('selected', button.dataset.option === selectedOption);
  });
  moveToNextQuestion();
}

function moveToNextQuestion() {
  quizState.currentIndex += 1;
  if (quizState.currentIndex < quizState.questions.length) {
    renderQuestion();
    return;
  }
  showQuizScreen('finish');
}

function submitTest() {
  quizState.score = quizState.questions.reduce((score, question, index) => {
    return score + (quizState.answers[index] === question.correct ? 1 : 0);
  }, 0);

  showQuizScreen('result');
  quizSelectors.quizScoreText.textContent = `${quizState.score}/${quizState.questions.length} Correct`;
  quizSelectors.quizReview.innerHTML = '';

  quizState.questions.forEach((question, index) => {
    const selectedAnswer = quizState.answers[index];
    const isCorrect = selectedAnswer === question.correct;
    const reviewItem = document.createElement('article');
    reviewItem.className = `review-item ${isCorrect ? 'review-correct' : 'review-incorrect'}`;

    const heading = document.createElement('div');
    heading.className = 'review-item-heading';
    const headingLabel = document.createElement('strong');
    headingLabel.textContent = `Question ${index + 1}`;
    const resultLabel = document.createElement('span');
    resultLabel.textContent = isCorrect ? 'Correct' : 'Incorrect';
    heading.append(headingLabel, resultLabel);

    const prompt = document.createElement('p');
    prompt.className = 'review-question';
    prompt.textContent = question.question;

    const answerSummary = document.createElement('p');
    answerSummary.className = 'review-answer';
    answerSummary.innerHTML = `<strong>Your answer:</strong> ${selectedAnswer || 'No answer'}<br><strong>Correct answer:</strong> ${question.correct}`;

    reviewItem.append(heading, prompt, answerSummary);

    if (!isCorrect) {
      const reasoning = document.createElement('p');
      reasoning.className = 'review-reasoning';
      reasoning.innerHTML = `<strong>Why:</strong> ${question.explanation}`;
      reviewItem.appendChild(reasoning);
    }

    quizSelectors.quizReview.appendChild(reviewItem);
  });
}

function restartQuiz() {
  showQuizScreen('difficulty');
  quizState.questions = [];
  quizState.answers = [];
  quizState.currentIndex = 0;
  quizState.score = 0;
}

document.querySelectorAll('.difficulty-button').forEach((button) => {
  button.addEventListener('click', () => startQuiz(button.dataset.difficulty));
});

if (quizSelectors.submitTestButton) {
  quizSelectors.submitTestButton.addEventListener('click', submitTest);
}

const restartQuizButton = document.getElementById('restart-quiz-button');
if (restartQuizButton) {
  restartQuizButton.addEventListener('click', restartQuiz);
}

showQuizScreen('difficulty');
showSection('home');

loadExample();
loadActivity(currentActivityIndex);
