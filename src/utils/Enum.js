export default function Enum(...names) {
  return names.reduce((enumMap, name) => ({...enumMap, [name]: name}), {});
};
