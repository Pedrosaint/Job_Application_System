// utils/cloudinaryHelper.ts

export const uploadImageToCloudinary = async (
  image: File | null
): Promise<string> => {
  if (!image) {
    return "";
  }

  const uploadPreset = "emmextella_ent"; // Your Cloudinary upload preset
  const cloudName = "emmextella"; // Your Cloudinary cloud name

  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", uploadPreset);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Error uploading image");
    }

    const data = await response.json();
    return data.secure_url; // Return the URL of the uploaded image
  } catch (error) {
    console.error("Error uploading image:", error);
    return ""; // In case of an error, return an empty string
  }
};
