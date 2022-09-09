import axios, { AxiosResponse } from "axios";
import { Doc } from "./docModel";

const getDocs = async (depID: string) => {
  const response = await axios.get<Doc[]>(`/api/v1/files/daily/show/${depID}`);
  return response;
};

const getSentDocs = async (depID: string) => {
  const response = await axios.get<Doc[]>(`/api/v1/files/daily/sent/${depID}`);
  return response;
};

const sendDocs = async (checkedState: boolean[], selectedFileID: string) => {
  const response = await axios.post("api/v1/files/send", {
    checkedState,
    selectedFileID,
  });
  return response;
};

const setReadStatus = async (depID: string) => {
  const response = await axios.post(`/api/v1/files/notify/${depID}`);
  return response;
};

const setReadColor = async (fileID: string, depID: string) => {
  const response = await axios.post(`/api/v1/files/read/${fileID}/${depID}`);
  return response;
};

const removeDoc = async (fileID: string, depID: string) => {
  const response = await axios.delete(
    `/api/v1/files/remove/${fileID}/${depID}`
  );
  return response;
};

const addDaily = async (fileID: string, imp: boolean) => {
  var response: AxiosResponse<any, any>;
  imp
    ? (response = await axios.post(`/api/v1/files/daily/save/imp/${fileID}`))
    : (response = await axios.post(`/api/v1/files/daily/save/exp/${fileID}`));
  return response;
};

const getSearchedDocData = async (fileID: string) => {
  const response = await axios.get(`/api/v1/files/openFileSearch/${fileID}`);
  return response;
};

const getDocData = async (fileID: string) => {
  const response = await axios.get(`/api/v1/files/open/${fileID}`);
  return response;
};

const searchDocs = async (fileID: string, imp: boolean) => {
  var response: AxiosResponse<Doc[], any>;
  imp
    ? (response = await axios.get<Doc[]>(`/api/v1/files/imp/${fileID}`))
    : (response = await axios.get<Doc[]>(`/api/v1/files/exp/${fileID}`));
  return response;
};

const docService = {
  getDocs,
};

export default docService;
