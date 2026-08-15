const createGrid = (size = 256, lines = 16) => {
    const newGrid = document.createElement('canvas');

    newGrid.classList.add('grid');
    newGrid.width = size;
    newGrid.height = size;

    for (let i = 0; i < lines - 1; i++) {
        const coord = size / lines;
        const isCenter = i === lines / 2;

        const newXLine = document.createElement('div');
        newXLine.classList.add('x-line');
        newXLine.style.left = `${coord}px`;
        newXLine.style.width = `${size}px`;
        newGrid.appendChild(newXLine);

        const newYLine = document.createElement('div');
        newYLine.classList.add('y-line');
        newYLine.style.top = `${coord}px`;
        newYLine.style.height = `${size}px`;
        newGrid.appendChild(newYLine);
    }

    return newGrid;
};
