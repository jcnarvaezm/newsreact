let __value = { data: {} };
const fetch = jest.fn(
  () =>
    new Promise((resolve, reject) => {
      resolve({
        ok: true,
        status: 200,
        json: () => {
          return __value;
        },
      });
    })
);
fetch.__setValue = (v) => (__value = v);
export default fetch;
