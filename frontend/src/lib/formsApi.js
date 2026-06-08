import axios from 'axios';

const apiBase = import.meta.env.VITE_API_URL || '';

export async function submitEnquiry(payload) {
  const res = await axios.post(`${apiBase}/api/forms/enquiry`, payload);
  return res.data;
}

export async function submitContact(payload) {
  const res = await axios.post(`${apiBase}/api/forms/contact`, payload);
  return res.data;
}

export async function submitCareer(formData) {
  const res = await axios.post(`${apiBase}/api/forms/career`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
}
