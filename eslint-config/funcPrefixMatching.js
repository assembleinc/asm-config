// Allows you to create rules for function naming

// JavaScript Naming Convention Best Practices
// Booleans: is, are, has
// Events: init, pre, post, on, handle
// Verbs: to, use, get, set, render, post, put, push, apply, calculate, compute

const rulePrefix = ["is", "has", "on", "handle", "to", "get", "render", "apply"];
const isValidName = (name, { prefix, exclude }) => {
  const isValid = (prefix) => name.indexOf(prefix) === 0;
  return exclude.some(isValid) || prefix.some(isValid);
};
const onFuncPrefixMatchingCreate = (context) => {
  const { options } = context;
  const {include = [], exclude = [] } = options[0]||{};
  return {
    Identifier: (node) => {
      if (node.parent.init &&
        node.parent.init.type === "ArrowFunctionExpression"
        // You can add more checks here
      ) {

      const { name } = node;
      const allPrefix = [...include, ...rulePrefix].sort();
      // Sorting is optional

      if (!isValidName(name, { prefix: allPrefix, exclude })) {
        context.report(node, `${name} should start with ${allPrefix.join(", ")}.`);
      }
     }
    },
  };
};
module.exports = { onFuncPrefixMatchingCreate };
