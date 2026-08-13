const API_URL = "http://localhost:5173/api/enquiry.php";

export const submitEnquiry = async (formData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to send enquiry");
  }

  return data;
};