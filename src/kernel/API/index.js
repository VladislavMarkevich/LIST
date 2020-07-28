//@flow

export const CallAPI = async (apiPath: ?string): any => {
  let ret = {};
  if (!apiPath) return ret;

  await fetch(apiPath)
    .then((response) => response.json())
    .then((result) => {
      ret = result;
    });
  return ret;
};
