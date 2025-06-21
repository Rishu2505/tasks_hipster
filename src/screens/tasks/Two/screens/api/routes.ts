import axios from "axios";

export const fetchDrivingRoute = async (
  start: { lat: number; lng: number },
  end: { lat: number; lng: number }
) => {
  const url = `http://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`;

  try {
    const response = await axios.get(url);
    return response.data.routes[0]; // return the first available route
  } catch (error) {
    console.error("Error fetching route:", error);
    throw new Error("Failed to fetch route");
  }
};

export const fetchLocationResults = async (query: string) => {
  if (!query) return [];

  const response = await axios.get(
    `https://www.onemap.gov.sg/api/common/elastic/search?searchVal=${query}&returnGeom=Y&getAddrDetails=Y&pageNum=1`
  );

  return response.data.results || [];
};
