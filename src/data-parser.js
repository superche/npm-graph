export const parse = (packageLock) => {
  const { packages } = packageLock;
  const graphData = [];
  for (const packagePath in packages) {
    const { dependencies = {} } = packages[packagePath];
    for (const depName in dependencies) {
      if (packages[`${packagePath}/node_modules/${depName}`]) {
        // local scope
        graphData.push([packagePath, `${packagePath}/node_modules/${depName}`]);
      } else {
        // TODO: parent scope
        // root scope
        graphData.push([packagePath, `node_modules/${depName}`]);
      }
    }
  }
  return graphData;
};
export default parse;
