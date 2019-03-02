import { Req } from 'src/components/req';
const req = new Req();
/**
 * @param {Object} data - contain the url
 * @param {Function} cb - call with the recived data
 */
export async function findClients(data, cb) {
  try {
    const aList = await req.get(data);
    console.log(aList)
    // if Error return the error message
    if (aList.data.error) {
      cb([], { serverMessage: aList.data.error });
    } else {
      //return the data
      cb(aList.data, { serverMessage: '' });
    }
  } catch (error) {
    throw new Error('error in func onSubmitFind: \n' + error);
  }
}
/**
 * @summary update with value
 * @param {Object} data - contain the url and new data
 * @param {Function} cb - call with the recived data
 */

export async function updateClients(data, cb) {
  try {
    const res = await req.put(data);
    return res;
  } catch (error) {
    throw new Error('error in func onSubmitFind: \n' + error);
  }
}
/**
 * @summary update with value
 * @param {Object} id - contain the id of the client to delete
 * @param {Function} cb - call with the recived response
 */

export async function deleteClient(id, cb) {
  try {
    const res = await req.delete(id);
    cb(res);
    return res;
  } catch (error) {
    throw new Error('error in func onSubmitFind: \n' + error);
  }
}
