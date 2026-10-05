const activities = [
  {
    question: "Are these two graphs isomorphic?",
    correctAnswer: "Not Isomorphic",
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
    correctAnswer: "Not Isomorphic",
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
const activityProgress = document.getElementById("activity-progress");

let currentActivityIndex = 0;
let activityOrder = createActivityOrder();
let answered = false;

function createActivityOrder(previousOrder = []) {
  const questionIndices = activities.map((_, index) => index);
  let nextOrder;
  let alternatesAnswers;
  let repeatsPreviousOrder;

  do {
    nextOrder = shuffle(questionIndices);
    alternatesAnswers = nextOrder.length > 2 && nextOrder.every((index, position) =>
      position === 0 || activities[index].correctAnswer !== activities[nextOrder[position - 1]].correctAnswer
    );
    repeatsPreviousOrder = nextOrder.length === previousOrder.length && nextOrder.every((index, position) => index === previousOrder[position]);
  } while (alternatesAnswers || repeatsPreviousOrder);

  return nextOrder;
}

function renderActivityGraph(graphMatrix, labels, coords, colorClass, graphName) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 300 220");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "220");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "Graph diagram");
  svg.classList.add("activity-graph");
  svg.dataset.graph = graphName;
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
        line.classList.add("activity-edge");
        line.dataset.edge = `${i}-${j}`;
        svg.appendChild(line);
      }
    }
  }

  graphMatrix.forEach((row, index) => {
    for (let other = index + 1; other < row.length; other += 1) {
      if (graphMatrix[index][other] === 0) {
        const absentEdge = document.createElementNS(ns, "line");
        absentEdge.setAttribute("x1", coords[index].x);
        absentEdge.setAttribute("y1", coords[index].y);
        absentEdge.setAttribute("x2", coords[other].x);
        absentEdge.setAttribute("y2", coords[other].y);
        absentEdge.classList.add("activity-missing-edge");
        absentEdge.dataset.missingEdge = `${index}-${other}`;
        svg.appendChild(absentEdge);
      }
    }

    const vertex = document.createElementNS(ns, "g");
    vertex.classList.add("activity-vertex");
    vertex.dataset.vertexIndex = String(index);
    const node = document.createElementNS(ns, "circle");
    node.setAttribute("cx", coords[index].x);
    node.setAttribute("cy", coords[index].y);
    node.setAttribute("r", "16");
    node.setAttribute("fill", colorClass === "dark" ? "#17243a" : "#267c67");
    vertex.appendChild(node);

    const label = document.createElementNS(ns, "text");
    label.setAttribute("x", coords[index].x);
    label.setAttribute("y", coords[index].y + 5);
    label.setAttribute("fill", "#ffffff");
    label.setAttribute("font-size", "12");
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("font-family", "DM Sans, sans-serif");
    label.textContent = labels[index];
    vertex.appendChild(label);
    svg.appendChild(vertex);
  });

  return svg;
}

function loadActivity(index) {
  if (activityMappingTimer !== null) {
    window.clearTimeout(activityMappingTimer);
    activityMappingTimer = null;
  }
  const activity = activities[activityOrder[index]];
  activityQuestion.textContent = activity.question;
  activityProgress.textContent = `Question ${index + 1} of ${activityOrder.length}`;
  activityGraphs.innerHTML = "";
  answered = false;
  activityFeedback.replaceChildren();
  activityFeedback.classList.remove("correct", "incorrect");
  tryAnotherButton.style.display = "none";

  const leftPanel = document.createElement("div");
  leftPanel.innerHTML = "<p style='font-weight:700; margin-bottom:8px; color:#267c67;'>Graph 1</p>";
  leftPanel.appendChild(renderActivityGraph(activity.left, activity.labelsLeft, activity.leftCoords, "dark", "A"));

  const rightPanel = document.createElement("div");
  rightPanel.innerHTML = "<p style='font-weight:700; margin-bottom:8px; color:#267c67;'>Graph 2</p>";
  rightPanel.appendChild(renderActivityGraph(activity.right, activity.labelsRight, activity.rightCoords, "mint", "B"));

  activityGraphs.appendChild(leftPanel);
  activityGraphs.appendChild(rightPanel);

  answerIsomorphicButton.disabled = false;
  answerNotIsomorphicButton.disabled = false;
  answerIsomorphicButton.style.opacity = "1";
  answerNotIsomorphicButton.style.opacity = "1";
}

let activityMappingTimer = null;

function graphDegrees(matrix) {
  return matrix.map((row) => row.reduce((sum, connected) => sum + connected, 0));
}

function graphEdgeCount(matrix) {
  return matrix.reduce((count, row, vertex) =>
    count + row.slice(vertex + 1).reduce((rowCount, connected) => rowCount + connected, 0), 0);
}

function degreeSequence(degrees) {
  return [...degrees].sort((a, b) => b - a);
}

function findActivityIsomorphismMapping(graphA, graphB, degreesA, degreesB) {
  if (graphA.length !== graphB.length || graphEdgeCount(graphA) !== graphEdgeCount(graphB)) return null;
  const mapping = new Array(graphA.length).fill(-1);
  const usedB = new Set();

  function search(vertexA) {
    if (vertexA === graphA.length) return [...mapping];
    for (let vertexB = 0; vertexB < graphB.length; vertexB += 1) {
      if (usedB.has(vertexB) || degreesA[vertexA] !== degreesB[vertexB]) continue;
      const preservesAssignedEdges = mapping.every((mappedB, assignedA) =>
        mappedB === -1 || graphA[vertexA][assignedA] === graphB[vertexB][mappedB]);
      if (!preservesAssignedEdges) continue;

      mapping[vertexA] = vertexB;
      usedB.add(vertexB);
      const result = search(vertexA + 1);
      if (result) return result;
      mapping[vertexA] = -1;
      usedB.delete(vertexB);
    }
    return null;
  }

  return search(0);
}

function findClosestDegreeMapping(graphA, graphB, degreesA, degreesB) {
  const mapping = new Array(graphA.length).fill(-1);
  const usedB = new Set();
  let bestMapping = null;
  let bestMismatches = null;

  function search(vertexA) {
    if (vertexA === graphA.length) {
      const mismatches = [];
      for (let left = 0; left < graphA.length; left += 1) {
        for (let right = left + 1; right < graphA.length; right += 1) {
          const mappedLeft = mapping[left];
          const mappedRight = mapping[right];
          if (graphA[left][right] !== graphB[mappedLeft][mappedRight]) {
            mismatches.push({ left, right, mappedLeft, mappedRight, hasEdgeA: graphA[left][right] === 1, hasEdgeB: graphB[mappedLeft][mappedRight] === 1 });
          }
        }
      }
      if (bestMismatches === null || mismatches.length < bestMismatches.length) {
        bestMismatches = mismatches;
        bestMapping = [...mapping];
      }
      return;
    }

    for (let vertexB = 0; vertexB < graphB.length; vertexB += 1) {
      if (usedB.has(vertexB) || degreesA[vertexA] !== degreesB[vertexB]) continue;
      mapping[vertexA] = vertexB;
      usedB.add(vertexB);
      search(vertexA + 1);
      mapping[vertexA] = -1;
      usedB.delete(vertexB);
    }
  }

  search(0);
  return bestMapping ? { mapping: bestMapping, mismatches: bestMismatches } : null;
}

function makeActivityElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function addActivityStep(list, title, content) {
  const item = makeActivityElement("li", "activity-explanation-step");
  item.append(makeActivityElement("strong", "activity-step-title", title), content);
  list.appendChild(item);
  return item;
}

function getActivityGraphLabel(activity, graphName, index) {
  return activity[`labels${graphName}`][index];
}

function clearActivityHighlights() {
  activityGraphs.querySelectorAll(".is-explanation-highlight, .is-explanation-edge, .is-explanation-missing").forEach((element) => {
    element.classList.remove("is-explanation-highlight", "is-explanation-edge", "is-explanation-missing");
  });
}

function highlightActivityVertices(vertexA, vertexB) {
  clearActivityHighlights();
  activityGraphs.querySelectorAll(`.activity-graph[data-graph="A"] [data-vertex-index="${vertexA}"], .activity-graph[data-graph="B"] [data-vertex-index="${vertexB}"]`).forEach((vertex) => {
    vertex.classList.add("is-explanation-highlight");
  });
}

function markActivityEdge(svg, edgeIndexA, edgeIndexB, exists) {
  const edgeKey = `${Math.min(edgeIndexA, edgeIndexB)}-${Math.max(edgeIndexA, edgeIndexB)}`;
  const edge = svg.querySelector(`[data-edge="${edgeKey}"]`);
  if (exists && edge) edge.classList.add("is-explanation-edge");
  else if (!exists) {
    const missingEdge = svg.querySelector(`[data-missing-edge="${edgeKey}"]`);
    if (missingEdge) missingEdge.classList.add("is-explanation-missing");
  }
}

function highlightActivityEdge(mismatch) {
  clearActivityHighlights();
  const leftSvg = activityGraphs.querySelector('.activity-graph[data-graph="A"]');
  const rightSvg = activityGraphs.querySelector('.activity-graph[data-graph="B"]');
  leftSvg.querySelectorAll(`[data-vertex-index="${mismatch.left}"], [data-vertex-index="${mismatch.right}"]`).forEach((vertex) => {
    vertex.classList.add("is-explanation-highlight");
  });
  rightSvg.querySelectorAll(`[data-vertex-index="${mismatch.mappedLeft}"], [data-vertex-index="${mismatch.mappedRight}"]`).forEach((vertex) => {
    vertex.classList.add("is-explanation-highlight");
  });
  markActivityEdge(leftSvg, mismatch.left, mismatch.right, mismatch.hasEdgeA);
  markActivityEdge(rightSvg, mismatch.mappedLeft, mismatch.mappedRight, mismatch.hasEdgeB);
}

function makeMappingButton(label, onClick) {
  const button = makeActivityElement("button", "activity-mapping-button", label);
  button.type = "button";
  button.addEventListener("click", onClick);
  return button;
}

function addVertexMappingDetails(activity, mapping, degreesA) {
  const detail = makeActivityElement("div", "activity-mapping-details");
  const mappingRows = makeActivityElement("ul", "activity-mapping-list");
  mapping.forEach((vertexB, vertexA) => {
    const row = makeActivityElement("li", "activity-mapping-row");
    const labelA = getActivityGraphLabel(activity, "Left", vertexA);
    const labelB = getActivityGraphLabel(activity, "Right", vertexB);
    row.append(
      makeActivityElement("span", "", `${labelA} → ${labelB}`),
      makeActivityElement("span", "activity-mapping-note", `both have degree ${degreesA[vertexA]}`),
      makeMappingButton("Highlight pair", () => highlightActivityVertices(vertexA, vertexB))
    );
    mappingRows.appendChild(row);
  });
  detail.appendChild(mappingRows);

  const animateButton = makeMappingButton("▶ Show vertex mapping", () => {
    if (activityMappingTimer !== null) window.clearTimeout(activityMappingTimer);
    let step = 0;
    const showNextPair = () => {
      if (step >= mapping.length) {
        activityMappingTimer = null;
        return;
      }
      highlightActivityVertices(step, mapping[step]);
      step += 1;
      activityMappingTimer = window.setTimeout(showNextPair, 700);
    };
    showNextPair();
  });
  detail.appendChild(animateButton);
  return detail;
}

function addEdgePreservationDetails(activity, mapping) {
  const edgeRows = makeActivityElement("ul", "activity-edge-mapping-list");
  const edgesA = [];
  for (let left = 0; left < activity.left.length; left += 1) {
    for (let right = left + 1; right < activity.left.length; right += 1) {
      if (activity.left[left][right] === 1) edgesA.push({ left, right, mappedLeft: mapping[left], mappedRight: mapping[right], hasEdgeA: true, hasEdgeB: activity.right[mapping[left]][mapping[right]] === 1 });
    }
  }
  edgesA.forEach((edge) => {
    const labelA = `${getActivityGraphLabel(activity, "Left", edge.left)}–${getActivityGraphLabel(activity, "Left", edge.right)}`;
    const labelB = `${getActivityGraphLabel(activity, "Right", edge.mappedLeft)}–${getActivityGraphLabel(activity, "Right", edge.mappedRight)}`;
    const row = makeActivityElement("li", "activity-edge-mapping-row");
    row.append(
      makeActivityElement("span", "", `${labelA} → ${labelB} ✓`),
      makeMappingButton("Highlight edges", () => highlightActivityEdge(edge))
    );
    edgeRows.appendChild(row);
  });
  return edgeRows;
}

function makeDegreeGroups(activity, degreesA, degreesB) {
  const groups = makeActivityElement("div", "activity-degree-groups");
  [["A", activity.labelsLeft, degreesA], ["B", activity.labelsRight, degreesB]].forEach(([graphName, labels, degrees]) => {
    const group = makeActivityElement("div", "activity-degree-group");
    group.appendChild(makeActivityElement("strong", "", `Graph ${graphName}`));
    const list = makeActivityElement("ul", "");
    degrees.forEach((degree, index) => {
      const item = makeActivityElement("li", "", `${labels[index]} → degree ${degree}`);
      item.dataset.graph = graphName;
      item.dataset.vertexIndex = String(index);
      list.appendChild(item);
    });
    group.appendChild(list);
    groups.appendChild(group);
  });
  return groups;
}

function getDegreeMismatch(degreesA, degreesB) {
  const countDegrees = (degrees) => degrees.reduce((counts, degree) => {
    counts.set(degree, (counts.get(degree) || 0) + 1);
    return counts;
  }, new Map());
  const countsA = countDegrees(degreesA);
  const countsB = countDegrees(degreesB);
  return [...new Set([...countsA.keys(), ...countsB.keys()])]
    .map((degree) => ({ degree, countA: countsA.get(degree) || 0, countB: countsB.get(degree) || 0 }))
    .find((entry) => entry.countA !== entry.countB) || null;
}

function highlightDegreeMismatch(graphName, degree, activity, degreesA, degreesB) {
  clearActivityHighlights();
  const svg = activityGraphs.querySelector(`.activity-graph[data-graph="${graphName}"]`);
  const degrees = graphName === "A" ? degreesA : degreesB;
  degrees.forEach((vertexDegree, index) => {
    if (vertexDegree === degree) svg.querySelector(`[data-vertex-index="${index}"]`)?.classList.add("is-explanation-highlight");
  });
}

function addFinalKeyIdea(feedback, isIsomorphic) {
  const keyIdea = makeActivityElement("aside", "activity-key-idea");
  keyIdea.append(
    makeActivityElement("strong", "", "Key Idea"),
    makeActivityElement("p", "", isIsomorphic
      ? "Same structure + a valid one-to-one mapping that preserves connections = Isomorphic."
      : "If no one-to-one mapping can preserve all connections, the graphs are Non-Isomorphic.")
  );
  feedback.appendChild(keyIdea);
}

function renderActivityExplanation(activity, selectedAnswer) {
  if (activityMappingTimer !== null) {
    window.clearTimeout(activityMappingTimer);
    activityMappingTimer = null;
  }
  clearActivityHighlights();
  const degreesA = graphDegrees(activity.left);
  const degreesB = graphDegrees(activity.right);
  const edgesA = graphEdgeCount(activity.left);
  const edgesB = graphEdgeCount(activity.right);
  const mapping = findActivityIsomorphismMapping(activity.left, activity.right, degreesA, degreesB);
  const isIsomorphic = mapping !== null;
  const degreeMismatch = getDegreeMismatch(degreesA, degreesB);
  const status = selectedAnswer === (isIsomorphic ? "Isomorphic" : "Not Isomorphic")
    ? `✓ Correct — The graphs are ${isIsomorphic ? "" : "Non-"}Isomorphic`
    : "✕ Incorrect Answer";
  activityFeedback.classList.toggle("correct", selectedAnswer === (isIsomorphic ? "Isomorphic" : "Not Isomorphic"));
  activityFeedback.classList.toggle("incorrect", selectedAnswer !== (isIsomorphic ? "Isomorphic" : "Not Isomorphic"));
  const heading = makeActivityElement("p", "activity-feedback-heading", status);
  activityFeedback.replaceChildren(heading);

  if (selectedAnswer !== (isIsomorphic ? "Isomorphic" : "Not Isomorphic")) {
    const correctAnswer = isIsomorphic ? "Isomorphic" : "Non-Isomorphic";
    const answerSummary = makeActivityElement("p", "activity-answer-summary");
    answerSummary.append(
      makeActivityElement("strong", "", `Your answer: ${selectedAnswer}`),
      makeActivityElement("strong", "", `Correct answer: ${correctAnswer}`)
    );
    activityFeedback.appendChild(answerSummary);
    let misunderstanding;
    if (isIsomorphic) {
      misunderstanding = "A valid one-to-one mapping exists. The mapping and preserved edges below show why the graphs are isomorphic.";
    } else if (degreeMismatch) {
      const degreeLabel = degreeMismatch.degree;
      const graphWithMore = degreeMismatch.countA > degreeMismatch.countB ? "A" : "B";
      const graphWithLess = graphWithMore === "A" ? "B" : "A";
      misunderstanding = `The degree pattern was overlooked: Graph ${graphWithMore} has more vertices of degree ${degreeLabel} than Graph ${graphWithLess}.`;
    } else {
      misunderstanding = "The matching counts or degrees do not guarantee isomorphism; the connections themselves must also be preserved.";
    }
    activityFeedback.appendChild(makeActivityElement("p", "activity-misunderstanding", `What was misunderstood: ${misunderstanding}`));
  }

  const steps = makeActivityElement("ol", "activity-explanation-steps");
  const vertexStep = makeActivityElement("div", "activity-step-content");
  const sameVertexCount = activity.left.length === activity.right.length;
  vertexStep.appendChild(makeActivityElement("p", "", `Graph A has ${activity.left.length} ${activity.left.length === 1 ? "vertex" : "vertices"} and Graph B has ${activity.right.length} ${activity.right.length === 1 ? "vertex" : "vertices"}. ${sameVertexCount ? "✓ The counts match." : "The counts differ, so no one-to-one mapping is possible."}`));
  addActivityStep(steps, "Step 1: Number of vertices", vertexStep);

  const edgeStep = makeActivityElement("div", "activity-step-content");
  const sameEdgeCount = edgesA === edgesB;
  edgeStep.appendChild(makeActivityElement("p", "", `Graph A has ${edgesA} ${edgesA === 1 ? "edge" : "edges"} and Graph B has ${edgesB} ${edgesB === 1 ? "edge" : "edges"}. ${sameEdgeCount ? "✓ The counts match." : "The counts differ, so the graphs cannot be isomorphic."}`));
  addActivityStep(steps, "Step 2: Number of edges", edgeStep);

  const degreeStep = makeActivityElement("div", "activity-step-content");
  degreeStep.appendChild(makeDegreeGroups(activity, degreesA, degreesB));
  const sameDegreeSequence = degreeSequence(degreesA).every((degree, index) => degree === degreeSequence(degreesB)[index]);
  degreeStep.appendChild(makeActivityElement("p", "activity-step-note", sameDegreeSequence
    ? "The degree patterns match. This is necessary for isomorphism, but by itself it does not prove the graphs are isomorphic."
    : "The degree patterns do not match. A vertex can only map to a vertex with the same degree."));
  degreeStep.appendChild(makeActivityElement("p", "activity-degree-sequences", `Degree sequence — Graph A: ${degreeSequence(degreesA).join(", ")}; Graph B: ${degreeSequence(degreesB).join(", ")}.`));
  if (degreeMismatch) {
    const mismatchGraph = degreeMismatch.countA > degreeMismatch.countB ? "A" : "B";
    const mismatchDegree = degreeMismatch.degree;
    const missingFrom = mismatchGraph === "A" ? "B" : "A";
    const mismatchLabels = mismatchGraph === "A" ? activity.labelsLeft : activity.labelsRight;
    const mismatchDegrees = mismatchGraph === "A" ? degreesA : degreesB;
    const vertexNames = mismatchDegrees.map((degree, index) => degree === mismatchDegree ? mismatchLabels[index] : null).filter(Boolean);
    degreeStep.appendChild(makeActivityElement("p", "activity-mismatch-note", `Graph ${mismatchGraph} has ${vertexNames.join(", ")} with degree ${mismatchDegree}, but Graph ${missingFrom} has only ${mismatchGraph === "A" ? degreeMismatch.countB : degreeMismatch.countA} vertex${(mismatchGraph === "A" ? degreeMismatch.countB : degreeMismatch.countA) === 1 ? "" : "es"} with that degree.`));
    const showMismatch = makeMappingButton("Highlight degree mismatch", () => {
      highlightDegreeMismatch(mismatchGraph, mismatchDegree, activity, degreesA, degreesB);
    });
    degreeStep.appendChild(showMismatch);
  }
  addActivityStep(steps, "Step 3: Degree of each vertex", degreeStep);

  if (isIsomorphic && mapping) {
    const mappingStep = makeActivityElement("div", "activity-step-content");
    mappingStep.appendChild(makeActivityElement("p", "", "This one-to-one mapping pairs each vertex with a vertex of the same degree:"));
    mappingStep.appendChild(addVertexMappingDetails(activity, mapping, degreesA));
    addActivityStep(steps, "Step 4: Vertex mapping", mappingStep);

    const edgeStepContent = makeActivityElement("div", "activity-step-content");
    edgeStepContent.appendChild(makeActivityElement("p", "", "Every edge in Graph A maps to an edge in Graph B. Select a row to highlight the matching connections."));
    edgeStepContent.appendChild(addEdgePreservationDetails(activity, mapping));
    addActivityStep(steps, "Step 5: Edge preservation", edgeStepContent);

    activityFeedback.appendChild(makeActivityElement("p", "activity-final-explanation", "Both graphs have the same number of vertices and edges, matching degree patterns, and a valid one-to-one mapping that preserves all connections. Therefore, the graphs are isomorphic."));
  } else {
    const structureStep = makeActivityElement("div", "activity-step-content");
    let mismatchDetails = null;
    if (sameVertexCount && sameEdgeCount && sameDegreeSequence) {
      const closest = findClosestDegreeMapping(activity.left, activity.right, degreesA, degreesB);
      structureStep.appendChild(makeActivityElement("p", "activity-step-note", "Both graphs have the same degree pattern, but degree sequence alone is not enough to prove isomorphism. The connections between the vertices are different."));
      if (closest && closest.mismatches.length) {
        mismatchDetails = closest.mismatches[0];
        const leftName = `${activity.labelsLeft[mismatchDetails.left]}–${activity.labelsLeft[mismatchDetails.right]}`;
        const rightName = `${activity.labelsRight[mismatchDetails.mappedLeft]}–${activity.labelsRight[mismatchDetails.mappedRight]}`;
        const leftRelation = mismatchDetails.hasEdgeA ? "is an edge" : "is not an edge";
        const rightRelation = mismatchDetails.hasEdgeB ? "is an edge" : "is not an edge";
        const candidateMapping = closest.mapping.map((mappedVertex, vertex) => `${activity.labelsLeft[vertex]} → ${activity.labelsRight[mappedVertex]}`).join(", ");
        structureStep.appendChild(makeActivityElement("p", "activity-step-note", `One degree-compatible candidate mapping is: ${candidateMapping}.`));
        structureStep.appendChild(makeActivityElement("p", "activity-mismatch-note", `For example, under one degree-compatible matching, ${leftName} ${leftRelation} in Graph A, but its mapped pair ${rightName} ${rightRelation} in Graph B. No degree-compatible one-to-one mapping preserves every connection.`));
        structureStep.appendChild(makeMappingButton("Highlight this connection mismatch", () => highlightActivityEdge(mismatchDetails)));
      } else {
        structureStep.appendChild(makeActivityElement("p", "activity-mismatch-note", "The graphs have matching basic counts and degrees, but the exhaustive adjacency check finds no one-to-one mapping that preserves every edge."));
      }
    } else if (!sameVertexCount) {
      structureStep.appendChild(makeActivityElement("p", "activity-mismatch-note", "A one-to-one mapping needs the same number of vertices. These graphs have different vertex counts, so no valid mapping exists."));
    } else if (!sameEdgeCount) {
      structureStep.appendChild(makeActivityElement("p", "activity-mismatch-note", "An isomorphism preserves every edge, so the total number of edges must match. These graphs have different edge counts."));
    } else if (degreeMismatch) {
      const mismatchGraph = degreeMismatch.countA > degreeMismatch.countB ? "A" : "B";
      const mismatchDegree = degreeMismatch.degree;
      const missingFrom = mismatchGraph === "A" ? "B" : "A";
      structureStep.appendChild(makeActivityElement("p", "activity-mismatch-note", `Graph ${mismatchGraph} contains a vertex of degree ${mismatchDegree}, but Graph ${missingFrom} does not have enough vertices of degree ${mismatchDegree}. No corresponding vertex is available, so the structure cannot be preserved.`));
    } else {
      structureStep.appendChild(makeActivityElement("p", "activity-mismatch-note", "Although the basic counts match, an exhaustive check of one-to-one vertex assignments finds no mapping that preserves all connections."));
    }
    addActivityStep(steps, "Step 4: Locate the structural mismatch", structureStep);
    activityFeedback.appendChild(steps);
    activityFeedback.appendChild(makeActivityElement("p", "activity-final-explanation", "At least one required property or connection fails to match, so no one-to-one mapping can preserve the full structure. Therefore, the graphs are non-isomorphic."));
  }

  if (isIsomorphic) activityFeedback.insertBefore(steps, activityFeedback.querySelector(".activity-final-explanation"));
  addFinalKeyIdea(activityFeedback, isIsomorphic);
}

function checkAnswer(selectedAnswer) {
  if (answered) return;
  const activity = activities[activityOrder[currentActivityIndex]];
  answered = true;
  answerIsomorphicButton.disabled = true;
  answerNotIsomorphicButton.disabled = true;

  renderActivityExplanation(activity, selectedAnswer);
  tryAnotherButton.style.display = "inline-flex";
}

answerIsomorphicButton.addEventListener("click", () => checkAnswer("Isomorphic"));
answerNotIsomorphicButton.addEventListener("click", () => checkAnswer("Not Isomorphic"));
tryAnotherButton.addEventListener("click", () => {
  if (currentActivityIndex + 1 >= activityOrder.length) {
    activityOrder = createActivityOrder(activityOrder);
    currentActivityIndex = 0;
  } else {
    currentActivityIndex += 1;
  }
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
  mode: "view",
  drag: null,
  suppressNodeClick: false
};

const GRAPH_VIEWBOX = { width: 300, height: 220 };
const GRAPH_NODE_RADIUS = 16;
const GRAPH_MIN_SPACING = 48;
let addedVertexId = 0;
const nextVertexNumbers = { A: 1, B: 1 };

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
  const graph = graphs[graphName];
  const labelPrefix = graphName;
  const labelPattern = new RegExp(`^${labelPrefix}\\d+$`);
  const usedLabels = new Set();
  let nextAvailable = 1;

  graph.vertices.forEach((vertex) => {
    if (!labelPattern.test(vertex.label) || usedLabels.has(vertex.label)) {
      while (usedLabels.has(`${labelPrefix}${nextAvailable}`)) nextAvailable += 1;
      vertex.label = `${labelPrefix}${nextAvailable}`;
    }
    usedLabels.add(vertex.label);
    nextAvailable = Math.max(nextAvailable, Number(vertex.label.slice(1)) + 1);
  });

  nextVertexNumbers[graphName] = Math.max(
    nextVertexNumbers[graphName],
    ...graph.vertices.map((vertex) => Number(vertex.label.slice(1)) + 1),
    1
  );
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
  ["A", "B"].forEach((graphName) => {
    document.getElementById(`graph-${graphName.toLowerCase()}-svg`).classList.toggle("placing", toolState.mode === "add-vertex" && toolState.activeGraph === graphName);
  });
}

function addVertex() {
  toolState.mode = "add-vertex";
  updateActionButtons();
  setResult("Click an empty spot in the active graph to place a vertex.");
}

function getNextVertexLabel(graphName, graph) {
  const labelPrefix = graphName;
  const highestExisting = graph.vertices.reduce((highest, vertex) => {
    const match = new RegExp(`^${labelPrefix}(\\d+)$`).exec(vertex.label);
    return match ? Math.max(highest, Number(match[1])) : highest;
  }, 0);
  const nextNumber = Math.max(nextVertexNumbers[graphName], highestExisting + 1);
  nextVertexNumbers[graphName] = nextNumber + 1;
  return `${labelPrefix}${nextNumber}`;
}

function getSvgPoint(svg, event) {
  const matrix = svg.getScreenCTM();
  if (!matrix) return null;

  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(matrix.inverse());
}

function placeVertexAt(graphName, x, y) {
  const graph = graphs[graphName];
  const safeX = Math.max(GRAPH_NODE_RADIUS, Math.min(GRAPH_VIEWBOX.width - GRAPH_NODE_RADIUS, x));
  const safeY = Math.max(GRAPH_NODE_RADIUS, Math.min(GRAPH_VIEWBOX.height - GRAPH_NODE_RADIUS, y));
  const tooClose = graph.vertices.some((vertex) => Math.hypot(vertex.x - safeX, vertex.y - safeY) < GRAPH_MIN_SPACING);

  if (tooClose) {
    setResult("That spot is too close to another vertex. Choose a different position.");
    return false;
  }

  addedVertexId += 1;
  const vertex = {
    id: `${graphName}-added-${addedVertexId}`,
    label: getNextVertexLabel(graphName, graph),
    x: safeX,
    y: safeY
  };
  graph.vertices.push(vertex);
  toolState.selectedVertex = vertex.id;
  toolState.mode = "view";
  renderGraphs();
  setResult(`Vertex ${vertex.label} added to Graph ${graphName}.`);
  return true;
}

function handleGraphCanvasClick(graphName, event) {
  if (toolState.mode !== "add-vertex") return;

  event.preventDefault();
  event.stopImmediatePropagation();
  const svg = event.currentTarget;
  const point = getSvgPoint(svg, event);
  if (point) placeVertexAt(graphName, point.x, point.y);
}

function startVertexDrag(graphName, event) {
  if (toolState.mode !== "view" || event.button !== 0) return;
  const node = event.target.closest(".tool-node");
  if (!node) return;

  const vertexId = node.dataset.vertexId;
  const svg = event.currentTarget;
  toolState.activeGraph = graphName;
  toolState.selectedVertex = vertexId;
  toolState.drag = { graphName, vertexId, pointerId: event.pointerId };
  toolState.suppressNodeClick = false;
  svg.setPointerCapture(event.pointerId);
  updateGraphButtons();
  renderSingleGraph(graphName);
}

function moveDraggedVertex(graphName, event) {
  const drag = toolState.drag;
  if (!drag || drag.graphName !== graphName || drag.pointerId !== event.pointerId) return;

  const point = getSvgPoint(event.currentTarget, event);
  if (!point) return;

  const x = Math.max(GRAPH_NODE_RADIUS, Math.min(GRAPH_VIEWBOX.width - GRAPH_NODE_RADIUS, point.x));
  const y = Math.max(GRAPH_NODE_RADIUS, Math.min(GRAPH_VIEWBOX.height - GRAPH_NODE_RADIUS, point.y));
  const graph = graphs[graphName];
  const vertex = graph.vertices.find((item) => item.id === drag.vertexId);
  if (!vertex) return;

  const overlaps = graph.vertices.some((other) => other.id !== vertex.id && Math.hypot(other.x - x, other.y - y) < GRAPH_MIN_SPACING);
  if (overlaps) return;
  if (Math.hypot(vertex.x - x, vertex.y - y) > 1) toolState.suppressNodeClick = true;

  vertex.x = x;
  vertex.y = y;
  renderSingleGraph(graphName);
}

function stopVertexDrag(graphName, event) {
  const drag = toolState.drag;
  if (!drag || drag.graphName !== graphName || drag.pointerId !== event.pointerId) return;

  toolState.drag = null;
  if (event.currentTarget.hasPointerCapture(event.pointerId)) {
    event.currentTarget.releasePointerCapture(event.pointerId);
  }
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
  if (toolState.suppressNodeClick) {
    toolState.suppressNodeClick = false;
    return;
  }

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
    g.dataset.vertexId = vertex.id;
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

["A", "B"].forEach((graphName) => {
  const svg = document.getElementById(`graph-${graphName.toLowerCase()}-svg`);
  svg.addEventListener("click", (event) => {
    if (toolState.suppressNodeClick) {
      toolState.suppressNodeClick = false;
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    handleGraphCanvasClick(graphName, event);
  }, true);
  svg.addEventListener("pointerdown", (event) => startVertexDrag(graphName, event));
  svg.addEventListener("pointermove", (event) => moveDraggedVertex(graphName, event));
  svg.addEventListener("pointerup", (event) => stopVertexDrag(graphName, event));
  svg.addEventListener("pointercancel", (event) => {
    stopVertexDrag(graphName, event);
    toolState.suppressNodeClick = false;
  });
});

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

  const matrixA = graphToAdjacency(graphs.A);
  const matrixB = graphToAdjacency(graphs.B);
  const degreesA = matrixA.map((row) => row.reduce((sum, value) => sum + value, 0));
  const degreesB = matrixB.map((row) => row.reduce((sum, value) => sum + value, 0));

  if (degreesA.slice().sort((a, b) => a - b).join(",") !== degreesB.slice().sort((a, b) => a - b).join(",")) {
    const vertexDegreeLines = (graph, degrees) => graph.vertices
      .map((vertex, index) => `&bull; ${vertex.label} &rarr; Degree ${degrees[index]}`)
      .join("<br>");
    setResult(`<strong>No, the graphs are not isomorphic.</strong><br><strong>Graph A:</strong><br>${vertexDegreeLines(graphs.A, degreesA)}<br><strong>Graph B:</strong><br>${vertexDegreeLines(graphs.B, degreesB)}<br><strong>Reason:</strong> The degree of corresponding vertices cannot be matched because the two graphs have different degree patterns.`);
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
  reviewDetailScreen: document.getElementById('review-detail-screen'),
  quizDifficultyLabel: document.getElementById('quiz-difficulty-label'),
  quizProgress: document.getElementById('quiz-progress'),
  quizQuestionText: document.getElementById('quiz-question-text'),
  quizVisual: document.getElementById('quiz-visual'),
  quizOptions: document.getElementById('quiz-options'),
  quizScoreText: document.getElementById('quiz-score-text'),
  quizCorrectCount: document.getElementById('quiz-correct-count'),
  quizIncorrectCount: document.getElementById('quiz-incorrect-count'),
  quizReview: document.getElementById('quiz-review'),
  reviewDetailProgress: document.getElementById('review-detail-progress'),
  reviewDetailContent: document.getElementById('review-detail-content'),
  previousReviewButton: document.getElementById('previous-review-button'),
  nextReviewButton: document.getElementById('next-review-button'),
  backToResultsButton: document.getElementById('back-to-results-button'),
  reviewListButton: document.getElementById('review-list-button'),
  submitTestButton: document.getElementById('submit-test-button')
};

const quizState = {
  difficulty: null,
  questions: [],
  answers: [],
  currentIndex: 0,
  score: 0,
  reviews: [],
  currentReviewIndex: 0
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
  svg.classList.add('review-graph-svg');
  svg.dataset.graph = colorClass === 'dark' ? 'A' : 'B';
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
        line.classList.add('review-graph-edge');
        line.dataset.edge = `${i}-${j}`;
        svg.appendChild(line);
      } else {
        const absentEdge = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        absentEdge.setAttribute('x1', coords[i].x);
        absentEdge.setAttribute('y1', coords[i].y);
        absentEdge.setAttribute('x2', coords[j].x);
        absentEdge.setAttribute('y2', coords[j].y);
        absentEdge.classList.add('review-graph-missing-edge');
        absentEdge.dataset.missingEdge = `${i}-${j}`;
        svg.appendChild(absentEdge);
      }
    }
  }

  graphMatrix.forEach((row, index) => {
    const node = document.createElementNS(ns, 'circle');
    node.setAttribute('cx', coords[index].x);
    node.setAttribute('cy', coords[index].y);
    node.setAttribute('r', '16');
    node.setAttribute('fill', colorClass === 'dark' ? '#17243a' : '#267c67');
    node.classList.add('review-graph-vertex');
    node.dataset.vertexIndex = String(index);
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
  quizSelectors.reviewDetailScreen.classList.toggle('active', screenName === 'review-detail');
}

function startQuiz(difficulty) {
  quizState.difficulty = difficulty;
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.reviews = [];
  quizState.currentReviewIndex = 0;

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
  quizSelectors.quizDifficultyLabel.textContent = quizState.difficulty === 'quiz' ? 'Challenge Mix' : quizState.difficulty.charAt(0).toUpperCase() + quizState.difficulty.slice(1);
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
  const correctCount = quizState.score;
  const incorrectCount = quizState.questions.length - correctCount;
  quizSelectors.quizScoreText.textContent = `Score: ${correctCount}/${quizState.questions.length}`;
  quizSelectors.quizCorrectCount.textContent = String(correctCount);
  quizSelectors.quizIncorrectCount.textContent = String(incorrectCount);
  quizSelectors.quizReview.innerHTML = '';

  quizState.reviews = quizState.questions.map((question, index) => createQuizReviewData(
    question,
    quizState.answers[index],
    index
  ));

  quizState.reviews.forEach((review, index) => {
    const reviewItem = document.createElement('article');
    reviewItem.className = `review-item ${review.isCorrect ? 'review-correct' : 'review-incorrect'}`;
    reviewItem.tabIndex = 0;
    reviewItem.setAttribute('role', 'button');
    reviewItem.setAttribute('aria-label', `Review question ${index + 1}, ${review.isCorrect ? 'correct' : 'incorrect'}`);

    const heading = document.createElement('div');
    heading.className = 'review-item-heading';
    const headingLabel = document.createElement('strong');
    headingLabel.textContent = `Question ${index + 1}`;
    const resultLabel = document.createElement('span');
    resultLabel.textContent = review.isCorrect ? '✓ Correct' : '✕ Incorrect';
    heading.append(headingLabel, resultLabel);

    const answerSummary = document.createElement('p');
    answerSummary.className = 'review-answer';
    const userAnswer = document.createElement('span');
    userAnswer.textContent = `Your answer: ${review.selectedAnswer || 'No answer'}`;
    answerSummary.appendChild(userAnswer);
    if (!review.isCorrect) {
      const correctAnswer = document.createElement('span');
      correctAnswer.textContent = `Correct answer: ${review.question.correct === 'Not Isomorphic' ? 'Non-Isomorphic' : review.question.correct}`;
      answerSummary.appendChild(correctAnswer);
    }

    const viewExplanation = document.createElement('button');
    viewExplanation.className = 'view-explanation-button';
    viewExplanation.type = 'button';
    viewExplanation.textContent = 'View Explanation';
    viewExplanation.addEventListener('click', () => openQuizReview(index));
    reviewItem.addEventListener('click', (event) => {
      if (event.target !== viewExplanation) openQuizReview(index);
    });
    reviewItem.addEventListener('keydown', (event) => {
      if (event.target === reviewItem && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        openQuizReview(index);
      }
    });

    reviewItem.append(heading, answerSummary, viewExplanation);
    quizSelectors.quizReview.appendChild(reviewItem);
  });
}

function createQuizReviewData(question, selectedAnswer, index) {
  const degreesA = graphDegrees(question.left);
  const degreesB = graphDegrees(question.right);
  const mapping = findActivityIsomorphismMapping(question.left, question.right, degreesA, degreesB);
  const isIsomorphic = mapping !== null;
  const degreeMismatch = getDegreeMismatch(degreesA, degreesB);
  const closest = !isIsomorphic && question.left.length === question.right.length &&
    graphEdgeCount(question.left) === graphEdgeCount(question.right) &&
    degreeSequence(degreesA).join(',') === degreeSequence(degreesB).join(',')
    ? findClosestDegreeMapping(question.left, question.right, degreesA, degreesB)
    : null;

  return {
    question,
    index,
    selectedAnswer,
    isCorrect: selectedAnswer === question.correct,
    degreesA,
    degreesB,
    edgesA: graphEdgeCount(question.left),
    edgesB: graphEdgeCount(question.right),
    isIsomorphic,
    mapping,
    degreeMismatch,
    closest,
    explanation: question.explanation
  };
}

let reviewAnimationTimer = null;

function clearReviewGraphHighlights() {
  quizSelectors.reviewDetailContent.querySelectorAll('.is-review-highlight, .is-review-edge, .is-review-missing').forEach((element) => {
    element.classList.remove('is-review-highlight', 'is-review-edge', 'is-review-missing');
  });
}

function highlightReviewPair(review, vertexA, vertexB) {
  clearReviewGraphHighlights();
  const graphA = quizSelectors.reviewDetailContent.querySelector('.review-graph-svg[data-graph="A"]');
  const graphB = quizSelectors.reviewDetailContent.querySelector('.review-graph-svg[data-graph="B"]');
  graphA.querySelector(`[data-vertex-index="${vertexA}"]`).classList.add('is-review-highlight');
  graphB.querySelector(`[data-vertex-index="${vertexB}"]`).classList.add('is-review-highlight');
}

function highlightReviewConnection(mismatch) {
  clearReviewGraphHighlights();
  const root = quizSelectors.reviewDetailContent;
  const graphA = root.querySelector('.review-graph-svg[data-graph="A"]');
  const graphB = root.querySelector('.review-graph-svg[data-graph="B"]');
  [mismatch.left, mismatch.right].forEach((vertex) => graphA.querySelector(`[data-vertex-index="${vertex}"]`).classList.add('is-review-highlight'));
  [mismatch.mappedLeft, mismatch.mappedRight].forEach((vertex) => graphB.querySelector(`[data-vertex-index="${vertex}"]`).classList.add('is-review-highlight'));

  const edgeKeyA = `${Math.min(mismatch.left, mismatch.right)}-${Math.max(mismatch.left, mismatch.right)}`;
  const edgeKeyB = `${Math.min(mismatch.mappedLeft, mismatch.mappedRight)}-${Math.max(mismatch.mappedLeft, mismatch.mappedRight)}`;
  const edgeA = graphA.querySelector(`[data-edge="${edgeKeyA}"]`);
  const edgeB = graphB.querySelector(`[data-edge="${edgeKeyB}"]`);
  if (mismatch.hasEdgeA && edgeA) edgeA.classList.add('is-review-edge');
  if (mismatch.hasEdgeB && edgeB) edgeB.classList.add('is-review-edge');
  if (!mismatch.hasEdgeA) graphA.querySelector(`[data-missing-edge="${edgeKeyA}"]`).classList.add('is-review-missing');
  if (!mismatch.hasEdgeB) graphB.querySelector(`[data-missing-edge="${edgeKeyB}"]`).classList.add('is-review-missing');
}

function makeReviewStep(container, title, content) {
  const step = document.createElement('section');
  step.className = 'review-explanation-step';
  const heading = document.createElement('h4');
  heading.textContent = title;
  step.append(heading, content);
  container.appendChild(step);
}

function makeReviewText(text, className = '') {
  const paragraph = document.createElement('p');
  paragraph.className = className;
  paragraph.textContent = text;
  return paragraph;
}

function renderReviewDegreeLists(review) {
  const groups = document.createElement('div');
  groups.className = 'review-degree-groups';
  [
    { name: 'Graph A', labels: review.question.labelsLeft, degrees: review.degreesA },
    { name: 'Graph B', labels: review.question.labelsRight, degrees: review.degreesB }
  ].forEach(({ name, labels, degrees }) => {
    const group = document.createElement('div');
    group.className = 'review-degree-group';
    const heading = document.createElement('strong');
    heading.textContent = name;
    const list = document.createElement('ul');
    degrees.forEach((degree, index) => {
      const item = document.createElement('li');
      item.textContent = `${labels[index]} → degree ${degree}`;
      list.appendChild(item);
    });
    group.append(heading, list);
    groups.appendChild(group);
  });
  return groups;
}

function renderQuizReviewDetail(index) {
  const review = quizState.reviews[index];
  if (!review) return;
  if (reviewAnimationTimer !== null) {
    window.clearTimeout(reviewAnimationTimer);
    reviewAnimationTimer = null;
  }
  quizState.currentReviewIndex = index;
  quizSelectors.reviewDetailProgress.textContent = `Question ${index + 1} of ${quizState.reviews.length}`;
  quizSelectors.previousReviewButton.disabled = index === 0;
  quizSelectors.nextReviewButton.disabled = index === quizState.reviews.length - 1;
  const root = quizSelectors.reviewDetailContent;
  root.replaceChildren();

  const title = document.createElement('h3');
  title.textContent = `Question ${index + 1}`;
  const question = document.createElement('p');
  question.className = 'review-detail-question';
  question.textContent = review.question.question;
  const answers = document.createElement('div');
  answers.className = `review-detail-answers ${review.isCorrect ? 'review-correct' : 'review-incorrect'}`;
  answers.append(
    makeReviewText(`Your answer: ${review.selectedAnswer || 'No answer'}`),
    makeReviewText(`Correct answer: ${review.question.correct === 'Not Isomorphic' ? 'Non-Isomorphic' : review.question.correct}`)
  );
  root.append(title, question);
  if (!review.isCorrect) {
    const correction = review.isIsomorphic
      ? 'Your answer missed a valid one-to-one mapping. The mapping and edge checks below show how every connection is preserved; for “Non-Isomorphic” to be correct, at least one connection would need to fail under every possible mapping.'
      : review.degreeMismatch
        ? `Your answer missed a degree mismatch: Graph ${review.degreeMismatch.countA > review.degreeMismatch.countB ? 'A' : 'B'} has a different number of vertices with degree ${review.degreeMismatch.degree}, so no structure-preserving mapping is possible. For “Isomorphic” to be correct, both graphs would need matching degree counts and matching connections.`
        : 'Your answer missed a difference in the connections. Equal vertex counts and degree patterns do not guarantee isomorphism; every edge must be preserved. For “Isomorphic” to be correct, a one-to-one mapping would need to preserve all of these connections.';
    root.appendChild(makeReviewText(correction, 'review-correction-note'));
  }

  const graphPair = document.createElement('div');
  graphPair.className = 'review-detail-graphs';
  [
    { name: 'Graph A', matrix: review.question.left, labels: review.question.labelsLeft, coords: review.question.leftCoords, color: 'dark' },
    { name: 'Graph B', matrix: review.question.right, labels: review.question.labelsRight, coords: review.question.rightCoords, color: 'mint' }
  ].forEach((graph) => {
    const panel = document.createElement('div');
    panel.className = 'quiz-graph-panel';
    const graphTitle = document.createElement('strong');
    graphTitle.textContent = graph.name;
    panel.append(graphTitle, renderQuestionGraph(graph.matrix, graph.labels, graph.coords, graph.color));
    graphPair.appendChild(panel);
  });
  root.append(answers, graphPair);

  const why = document.createElement('section');
  why.className = `review-why ${review.isCorrect ? 'review-correct' : 'review-incorrect'}`;
  const whyTitle = document.createElement('h4');
  whyTitle.textContent = 'Why?';
  const explanationSteps = document.createElement('div');
  explanationSteps.className = 'review-explanation-steps';
  why.append(whyTitle, makeReviewText(review.explanation, 'review-original-explanation'));

  makeReviewStep(explanationSteps, '1. Number of vertices', makeReviewText(
    `Graph A has ${review.question.left.length} vertices; Graph B has ${review.question.right.length} vertices. ${review.question.left.length === review.question.right.length ? 'The counts match.' : 'The counts differ, so no one-to-one mapping is possible.'}`
  ));
  makeReviewStep(explanationSteps, '2. Number of edges', makeReviewText(
    `Graph A has ${review.edgesA} edges; Graph B has ${review.edgesB} edges. ${review.edgesA === review.edgesB ? 'The counts match.' : 'The counts differ, so the graphs are non-isomorphic.'}`
  ));

  const degreeContent = document.createElement('div');
  degreeContent.className = 'review-step-content';
  degreeContent.append(
    renderReviewDegreeLists(review),
    makeReviewText(`Degree pattern — Graph A: ${[...review.degreesA].sort((a, b) => b - a).join(', ')}; Graph B: ${[...review.degreesB].sort((a, b) => b - a).join(', ')}.`),
    makeReviewText(review.degreeMismatch
      ? `The degree patterns differ: Graph ${review.degreeMismatch.countA > review.degreeMismatch.countB ? 'A' : 'B'} has a different number of vertices with degree ${review.degreeMismatch.degree}.`
      : 'The degree patterns match. This is necessary for isomorphism, but does not by itself prove the structures match.')
  );
  if (review.degreeMismatch) {
    const graphName = review.degreeMismatch.countA > review.degreeMismatch.countB ? 'A' : 'B';
    const degrees = graphName === 'A' ? review.degreesA : review.degreesB;
    const graphSvg = graphName === 'A'
      ? root.querySelector('.review-graph-svg[data-graph="A"]')
      : root.querySelector('.review-graph-svg[data-graph="B"]');
    const highlight = document.createElement('button');
    highlight.className = 'review-nav-button';
    highlight.type = 'button';
    highlight.textContent = 'Highlight degree mismatch';
    highlight.addEventListener('click', () => {
      clearReviewGraphHighlights();
      degrees.forEach((degree, vertex) => {
        if (degree === review.degreeMismatch.degree) graphSvg.querySelector(`[data-vertex-index="${vertex}"]`).classList.add('is-review-highlight');
      });
    });
    degreeContent.appendChild(highlight);
  }
  makeReviewStep(explanationSteps, '3. Degree of each vertex and degree pattern', degreeContent);

  if (review.isIsomorphic && review.mapping) {
    const mappingContent = document.createElement('div');
    mappingContent.className = 'review-step-content';
    const mappingList = document.createElement('ul');
    mappingList.className = 'review-mapping-list';
    review.mapping.forEach((mappedVertex, vertexA) => {
      const item = document.createElement('li');
      const mappingText = document.createElement('span');
      mappingText.textContent = `${review.question.labelsLeft[vertexA]} → ${review.question.labelsRight[mappedVertex]} (both degree ${review.degreesA[vertexA]})`;
      const highlight = document.createElement('button');
      highlight.className = 'review-nav-button';
      highlight.type = 'button';
      highlight.textContent = 'Highlight';
      highlight.addEventListener('click', () => highlightReviewPair(review, vertexA, mappedVertex));
      item.append(mappingText, highlight);
      mappingList.appendChild(item);
    });
    const animate = document.createElement('button');
    animate.className = 'review-nav-button';
    animate.type = 'button';
    animate.textContent = '▶ Show Mapping';
    animate.addEventListener('click', () => {
      if (reviewAnimationTimer !== null) window.clearTimeout(reviewAnimationTimer);
      let pairIndex = 0;
      const showPair = () => {
        if (pairIndex >= review.mapping.length) {
          reviewAnimationTimer = null;
          return;
        }
        highlightReviewPair(review, pairIndex, review.mapping[pairIndex]);
        pairIndex += 1;
        reviewAnimationTimer = window.setTimeout(showPair, 700);
      };
      showPair();
    });
    mappingContent.append(mappingList, animate);
    makeReviewStep(explanationSteps, '4. Vertex mapping', mappingContent);

    const edgeContent = document.createElement('div');
    edgeContent.className = 'review-step-content';
    const edgeList = document.createElement('ul');
    edgeList.className = 'review-mapping-list';
    for (let left = 0; left < review.question.left.length; left += 1) {
      for (let right = left + 1; right < review.question.left.length; right += 1) {
        if (review.question.left[left][right] !== 1) continue;
        const mappedLeft = review.mapping[left];
        const mappedRight = review.mapping[right];
        const item = document.createElement('li');
        const edgeText = document.createElement('span');
        edgeText.textContent = `${review.question.labelsLeft[left]}–${review.question.labelsLeft[right]} → ${review.question.labelsRight[mappedLeft]}–${review.question.labelsRight[mappedRight]} ✓`;
        const highlight = document.createElement('button');
        highlight.className = 'review-nav-button';
        highlight.type = 'button';
        highlight.textContent = 'Highlight edges';
        highlight.addEventListener('click', () => highlightReviewConnection({
          left, right, mappedLeft, mappedRight, hasEdgeA: true, hasEdgeB: true
        }));
        item.append(edgeText, highlight);
        edgeList.appendChild(item);
      }
    }
    edgeContent.append(makeReviewText('Every edge in Graph A maps to an edge in Graph B.', ''), edgeList);
    makeReviewStep(explanationSteps, '5. Edge preservation', edgeContent);
  } else if (review.closest) {
    const mismatch = review.closest.mismatches[0];
    const mismatchContent = document.createElement('div');
    mismatchContent.className = 'review-step-content';
    if (mismatch) {
      const mapText = review.closest.mapping.map((mappedVertex, vertexA) =>
        `${review.question.labelsLeft[vertexA]} → ${review.question.labelsRight[mappedVertex]}`).join(', ');
      const relationA = mismatch.hasEdgeA ? 'is an edge' : 'is not an edge';
      const relationB = mismatch.hasEdgeB ? 'is an edge' : 'is not an edge';
      mismatchContent.append(
        makeReviewText(`The degree-compatible candidate mapping is ${mapText}.`),
        makeReviewText(`${review.question.labelsLeft[mismatch.left]}–${review.question.labelsLeft[mismatch.right]} ${relationA} in Graph A, while the mapped pair ${review.question.labelsRight[mismatch.mappedLeft]}–${review.question.labelsRight[mismatch.mappedRight]} ${relationB} in Graph B.`)
      );
      const highlight = document.createElement('button');
      highlight.className = 'review-nav-button';
      highlight.type = 'button';
      highlight.textContent = 'Highlight connection mismatch';
      highlight.addEventListener('click', () => highlightReviewConnection(mismatch));
      mismatchContent.appendChild(highlight);
    } else {
      mismatchContent.appendChild(makeReviewText('No degree-compatible one-to-one mapping preserves every connection.'));
    }
    makeReviewStep(explanationSteps, '4. Exact structural mismatch', mismatchContent);
    if (review.degreesA.length === review.degreesB.length && review.edgesA === review.edgesB &&
      [...review.degreesA].sort((a, b) => b - a).join(',') === [...review.degreesB].sort((a, b) => b - a).join(',')) {
      mismatchContent.insertBefore(makeReviewText('Both graphs have the same degree pattern, but degree sequence alone is not enough to prove isomorphism. Their connections are different.'), mismatchContent.firstChild);
    }
  } else {
    makeReviewStep(explanationSteps, '4. Exact structural mismatch', makeReviewText(
      !review.degreeMismatch && review.question.left.length === review.question.right.length && review.edgesA === review.edgesB
        ? 'The counts and degree patterns alone do not show the mismatch. The exhaustive adjacency check finds that no one-to-one mapping preserves every connection.'
        : 'The counts or degree patterns differ, so no mapping can preserve the graph structure.'
    ));
  }
  why.appendChild(explanationSteps);
  why.appendChild(makeReviewText(review.isIsomorphic
    ? 'Therefore, the graphs have the same structure and are isomorphic.'
    : 'Therefore, no one-to-one mapping can preserve all the connections, so the graphs are non-isomorphic.', 'review-final-explanation'));

  const keyIdea = document.createElement('aside');
  keyIdea.className = 'review-key-idea';
  const keyIdeaTitle = document.createElement('strong');
  keyIdeaTitle.textContent = 'Key Idea';
  const keyIdeaText = document.createElement('p');
  keyIdeaText.textContent = review.isIsomorphic
    ? 'Same structure + a valid one-to-one mapping that preserves connections = Isomorphic.'
    : 'If no one-to-one mapping can preserve all connections, the graphs are Non-Isomorphic.';
  keyIdea.append(keyIdeaTitle, keyIdeaText);
  why.appendChild(keyIdea);
  root.appendChild(why);
  showQuizScreen('review-detail');
}

function openQuizReview(index) {
  renderQuizReviewDetail(index);
}

function showResultsFromReview() {
  if (reviewAnimationTimer !== null) {
    window.clearTimeout(reviewAnimationTimer);
    reviewAnimationTimer = null;
  }
  showQuizScreen('result');
}

function navigateQuizReview(offset) {
  const nextIndex = quizState.currentReviewIndex + offset;
  if (nextIndex < 0 || nextIndex >= quizState.reviews.length) return;
  renderQuizReviewDetail(nextIndex);
}

function restartQuiz() {
  showQuizScreen('difficulty');
  quizState.questions = [];
  quizState.answers = [];
  quizState.reviews = [];
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

quizSelectors.backToResultsButton.addEventListener('click', showResultsFromReview);
quizSelectors.reviewListButton.addEventListener('click', showResultsFromReview);
quizSelectors.previousReviewButton.addEventListener('click', () => navigateQuizReview(-1));
quizSelectors.nextReviewButton.addEventListener('click', () => navigateQuizReview(1));

showQuizScreen('difficulty');
showSection('home');

loadExample();
loadActivity(currentActivityIndex);

const mappingAnimations = new Map();

function getMappingState(card) {
  if (!mappingAnimations.has(card)) {
    mappingAnimations.set(card, { timer: null, step: 0, paused: false });
  }
  return mappingAnimations.get(card);
}

function resetMapping(card) {
  const state = getMappingState(card);
  if (state.timer !== null) window.clearInterval(state.timer);
  state.timer = null;
  state.step = 0;
  state.paused = false;
  card.classList.remove('is-complete');
  card.querySelector('.mapping-output').classList.remove('is-visible');
  card.querySelectorAll('.mapping-row, .graph-vertex').forEach((element) => {
    element.classList.remove('is-current', 'is-revealed', 'is-highlighted');
  });
  const pauseButton = card.querySelector('[data-map-action="pause"]');
  pauseButton.setAttribute('aria-pressed', 'false');
  pauseButton.textContent = 'Pause';
}

function advanceMapping(card) {
  const state = getMappingState(card);
  const rows = [...card.querySelectorAll('.mapping-row')];
  if (state.step >= rows.length) {
    card.classList.add('is-complete');
    card.querySelector('.mapping-output').classList.add('is-visible');
    rows.forEach((row) => row.classList.add('is-revealed'));
    card.querySelectorAll('.graph-vertex').forEach((vertex) => vertex.classList.remove('is-highlighted'));
    if (state.timer !== null) window.clearInterval(state.timer);
    state.timer = null;
    state.paused = false;
    const pauseButton = card.querySelector('[data-map-action="pause"]');
    pauseButton.setAttribute('aria-pressed', 'false');
    pauseButton.textContent = 'Pause';
    return;
  }

  rows.forEach((row) => row.classList.remove('is-current'));
  card.querySelectorAll('.graph-vertex').forEach((vertex) => vertex.classList.remove('is-highlighted'));
  const row = rows[state.step];
  row.classList.add('is-current');
  card.querySelector('.mapping-output').classList.add('is-visible');
  const [leftLabel, rightLabel] = [...row.querySelectorAll('span')].map((label) => label.textContent.toLowerCase());
  card.querySelector(`[data-vertex="${leftLabel}"]`).classList.add('is-highlighted');
  card.querySelector(`[data-vertex="${rightLabel}"]`).classList.add('is-highlighted');
  if (state.step > 0) rows[state.step - 1].classList.add('is-revealed');
  state.step += 1;
}

function startMapping(card) {
  resetMapping(card);
  const state = getMappingState(card);
  advanceMapping(card);
  state.timer = window.setInterval(() => advanceMapping(card), 850);
}

document.querySelectorAll('#examples .example-card').forEach((card) => {
  card.querySelectorAll('[data-map-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const state = getMappingState(card);
      if (button.dataset.mapAction === 'show' || button.dataset.mapAction === 'replay') {
        startMapping(card);
        return;
      }
      if (state.timer === null && !state.paused) return;
      state.paused = !state.paused;
      button.setAttribute('aria-pressed', String(state.paused));
      button.textContent = state.paused ? 'Resume' : 'Pause';
      if (state.paused) {
        window.clearInterval(state.timer);
        state.timer = null;
      } else {
        state.timer = window.setInterval(() => advanceMapping(card), 850);
      }
    });
  });
});

document.querySelectorAll('#examples [data-degree-action]').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.example-card');
    card.classList.add('degree-example', 'is-explained');
    card.querySelector('.interactive-explanation').innerHTML =
      '<strong>Degree(A1) = 3.</strong> Graph B has no vertex with degree 3. A corresponding vertex must have the same degree, so A1 has no possible match.';
  });
});

document.querySelectorAll('#examples [data-difference-action]').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.example-card');
    card.classList.add('show-difference');
    card.querySelector('.interactive-explanation').textContent =
      'The highlighted cycle edges would need to connect the two separate triangles. Those matching edges are missing in Graph B, so the connections cannot all be preserved.';
  });
});
