const walk = function(trees, parentVariables) {
  const key = 'evaluate';
  const variables = {};

  variables.list = {};
  variables.parent = null;

  const result = trees.reduce((resultHolder, tree) => {
    const value = tree[key](variables);

    resultHolder.push(value);

    return resultHolder;
  }, []);

  return result;
};

exports.walk = walk;