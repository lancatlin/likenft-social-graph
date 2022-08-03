import { API_PUBLIC } from './config';
import axios from 'axios';
const payloads = new Map();

function getClass(classId) {
  if (payloads.has(classId)) {
    return payloads.get(classId);
  }
  payloads.set(classId, axios.get(API_PUBLIC+'/likernft/purchase', {
    params: { class_id: classId, }
  })
  .then((res) => {
    payloads.delete(classId);
    return res;
  }));
  return payloads.get(classId);
}

export default getClass;
