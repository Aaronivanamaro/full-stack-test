function extractArrays(urlFormat, urlInstance) {
  const arrFormat = urlFormat
    .split("/")
    .filter((item) => item !== "")
    .map((item) => (item.charAt(0) === ":" ? item.substr(1) : item));
  const [pathInstance, instanceQuery] = urlInstance.split("?");
  const arrInstance = pathInstance.split("/").filter((item) => item !== "");

  return { arrFormat, arrInstance, instanceQuery };
}

function buildObjectFromQuery(instanceQuery) {
  const queries = instanceQuery.split("&").map((item) => item.split("="));
  const entries = new Map(queries);
  const object = Object.fromEntries(entries);

  return object;
}

function buildObjectFromPath(arrFormat, arrInstance) {
  const object = {};

  for (let i = 0; i < arrFormat.length; i++) {
    if (arrFormat[i] !== arrInstance[i]) {
      const [key, value] = [arrFormat[i], arrInstance[i]];
      object[key] = value;
    }
  }

  return object;
}

function combineObjects(obj1, obj2) {
  const newObj = Object.assign(obj1, obj2);

  return newObj;
}

function urlParser(urlFormat, urlInstance) {
  if (
    urlFormat && urlInstance !== null &&
    urlFormat && urlInstance !== undefined &&
    urlFormat && urlInstance !== ""
  ) {
    const { arrFormat, arrInstance, instanceQuery } = extractArrays(urlFormat, urlInstance);
    const queryObj = buildObjectFromQuery(instanceQuery);
    const pathObj = buildObjectFromPath(arrFormat, arrInstance);
    const newObject = combineObjects(pathObj, queryObj);

    return newObject;

  } else {
    console.log("Please provide a urlFormat and urlInstance");
  }
}

module.exports = urlParser;