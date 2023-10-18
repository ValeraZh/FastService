import { IDeliveryData } from "../DTO"

const baseUrl = import.meta.env.VITE_BASE_URL

const fetchDelivery = async (param: string) => {
  const request = await fetch(`${baseUrl}/delivery/check?search=${param}`);
  const response: IDeliveryData = await request.json();

  return response;
}

export default fetchDelivery;