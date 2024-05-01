import { persona } from "../types/persona";
import GenericGPersona from "./GenericGPersona";

class GenericPersona<T extends persona> extends GenericGPersona<T> {

  constructor(baseURL: string) {
    super(baseURL);
  }

  async getData(path: string): Promise<T> {
    try {
      const response = await fetch(`${path}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json(); 
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async postData(path: String, data: T): Promise<T> {
    try {
      const response = await fetch(`${path}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), 
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json(); 
    } catch (error) {
      return Promise.reject(error); 
    }
  }
  async putData(path: String, data: T): Promise<T> {
    try {
      const response = await fetch(`${path}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Convierte los datos a JSON y los envía en el cuerpo de la solicitud
      });
  
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json(); // Retorna los datos en formato JSON
    } catch (error) {
      return Promise.reject(error); // Rechaza la promesa con el error
    }
  }
  async deleteData(path: string) {
    try {
      const response = await fetch(`${path}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.error(error); // Imprime el error en la consola
    }
  } 
}

export default GenericPersona;

/*
export async function getData<T>(path: string): Promise<T> {
    try {
      const response = await fetch(`${path}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json(); 
    } catch (error) {
      return Promise.reject(error);
    }
  }
  
  
  export async function postData<T>(path: string, data: T): Promise<T> {
    try {
      const response = await fetch(`${path}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), 
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json(); 
    } catch (error) {
      return Promise.reject(error); 
    }
  }
  
  // Función generica para actualizar datos mediante una solicitud PUT
  export async function putData<T>(path: string, data: T): Promise<T> {
    try {
      const response = await fetch(`${path}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Convierte los datos a JSON y los envía en el cuerpo de la solicitud
      });
  
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json(); // Retorna los datos en formato JSON
    } catch (error) {
      return Promise.reject(error); // Rechaza la promesa con el error
    }
  }
  
  // Función generica para eliminar datos mediante una solicitud DELETE
  export async function deleteData(path: string) {
    try {
      const response = await fetch(`${path}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.error(error); // Imprime el error en la consola
    }
  }
}*/