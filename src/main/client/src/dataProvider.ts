import { DataProvider } from "@refinedev/core";
import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create();

// Add request interceptor for debugging
axiosInstance.interceptors.request.use((request) => {
  console.log('API Request:', request.method?.toUpperCase(), request.url, request.data);
  return request;
});

// Add response interceptor for debugging
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.status, error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const dataProvider = (): DataProvider => ({
  getList: async ({ resource }) => {
    const url = `/api/${resource}`;
    
    const { data } = await axiosInstance.get(url);
    
    return {
      data: Array.isArray(data) ? data : [],
      total: Array.isArray(data) ? data.length : 0,
    };
  },

  getOne: async ({ resource, id }) => {
    const url = `/api/${resource}/${id}`;
    const { data } = await axiosInstance.get(url);
    
    return {
      data,
    };
  },

  create: async ({ resource, variables }) => {
    const url = `/api/${resource}`;
    const { data } = await axiosInstance.post(url, variables);
    
    return {
      data,
    };
  },

  update: async ({ resource, id, variables }) => {
    const url = `/api/${resource}/${id}`;
    const { data } = await axiosInstance.put(url, variables);
    
    return {
      data,
    };
  },

  deleteOne: async ({ resource, id }) => {
    const url = `/api/${resource}/${id}`;
    await axiosInstance.delete(url);
    
    return {
      data: { id } as any,
    };
  },

  getApiUrl: () => "/api",

  // Optional methods
  getMany: async ({ resource, ids }) => {
    const requests = ids.map(id => axiosInstance.get(`/api/${resource}/${id}`));
    const responses = await Promise.all(requests);
    
    return {
      data: responses.map(response => response.data),
    };
  },

  createMany: async ({ resource, variables }) => {
    const requests = variables.map(vars => axiosInstance.post(`/api/${resource}`, vars));
    const responses = await Promise.all(requests);
    
    return {
      data: responses.map(response => response.data),
    };
  },

  updateMany: async ({ resource, ids, variables }) => {
    const requests = ids.map(id => 
      axiosInstance.put(`/api/${resource}/${id}`, variables)
    );
    const responses = await Promise.all(requests);
    
    return {
      data: responses.map(response => response.data),
    };
  },

  deleteMany: async ({ resource, ids }) => {
    const requests = ids.map(id => axiosInstance.delete(`/api/${resource}/${id}`));
    await Promise.all(requests);
    
    return {
      data: ids.map(id => ({ id })) as any,
    };
  },
});
