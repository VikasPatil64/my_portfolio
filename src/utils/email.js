const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

export async function sendContactEmail(formData) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  console.log("=== EmailJS Debug ===");
  console.log("Service ID:", serviceId);
  console.log("Template ID:", templateId);
  console.log("Public Key:", publicKey);
  console.log("Form Data:", formData);

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS environment variables are missing. Check your .env.local file."
    );
  }

  try {
    const response = await fetch(EMAILJS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: formData,
      }),
    });

    const responseText = await response.text();

    console.log("Status:", response.status);
    console.log("Response:", responseText);

    if (!response.ok) {
      throw new Error(
        `EmailJS Error (${response.status}): ${responseText}`
      );
    }

    return true;
  } catch (error) {
    console.error("Email Send Failed:", error);
    throw error;
  }
}