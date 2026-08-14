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

        const newXLine = document.createElement('div');
        newXLine.style.left = `${coord}px`;
        newXLine.style.width = `${size}px`;
        if (isMedian) newXLine.style.borderColor = 'var(--red)';
        newGrid.appendChild(newXLine);

        const newYLine = document.createElement('div');
        newYLine.style.top = `${coord}px`;
        newYLine.style.height = `${size}px`;
        if (isMedian) newXLine.style.borderColor = 'var(--blue)';
        newGrid.appendChild(newYLine);
    }

    return newGrid;
};
