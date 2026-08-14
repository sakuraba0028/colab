// BEM対応
const toCamelCase = str => str.replace(/[-_]+([a-z])/g, (_, prefix) => prefix.toUpperCase());

const getElementsByPrimaryClass = () => {
    const classedElements = Array.from(document.querySelectorAll('*');
    const classedElementsRoster = classedElements.reduce((acc, el) => {
        const camelPrimaryClass = el.classList[0];

        acc[camelPrimaryClass] = el;

        return acc;
    });

    return classedElementsRoster;
};

const createGrid = (size = 256, line = 15) => {
    if (line % 2 != 1) return;

    const newGrid = document.createElement('canvas');
    newGrid.width = size;
    newGrid.height = size;

    for (let i = 0; i < line; i++) {
        const coord = i * size / (line + 1);
        const isMedian = i === (line + 1) / 2;

        const newXAxis = document.createElement('div');
        newXAxis.style.left = `${coord}px`;
        newXAxis.style.width = `${size}px`;
        if (isMedian) newXAxis.style.borderColor = 'var(--red)';
        newGrid.appendChild(newXAxis);

        const newYAxis = document.createElement('div');
        newYAxis.style.top = `${coord}px`;
        newYAxis.style.height = `${size}px`;
        if (isMedian) newXAxis.style.borderColor = 'var(--blue)';
        newGrid.appendChild(newYAxis);
    }

    return newGrid;
};
