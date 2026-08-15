// ケバブ・スネーク・BEM対応
const toCamelCase = str => str.replace(/[-_]+([a-z])/g, (_, prefix) => prefix.toUpperCase());

const getElementsByPrimaryClass = () => {
    const classedElements = Array.from(document.querySelectorAll('*')).filter(el => el.className);
    const classedElementsRoster = classedElements.reduce((acc, el) => {
        const camelPrimaryClass = toCamelCase(el.classList[0]);

        acc[camelPrimaryClass] = el;

        return acc;
    });

    return classedElementsRoster;
};
