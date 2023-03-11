import { Toast } from "react-native-toast-message/lib/src/Toast";

export async function callApi<T>(url: string, method: string, body?: any): Promise<T> {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  
    if (!response.ok) {
      Toast.show({
        type:'error',
        text2: 'Ada kendala pada sistem'
      })
    }
  
    const data = await response.json() as T;
    return data;
  }