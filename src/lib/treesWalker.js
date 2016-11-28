const walk = function(trees, variables) {
  const key = 'evaluate';

  const result = trees.reduce((resultHolder, tree) => {
    const value = tree[key](variables);

    resultHolder.push(value);

    return resultHolder;
  }, []);

  return result;
};

exports.walk = walk;