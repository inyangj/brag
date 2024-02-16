const ImageInput = ({ prevFormData, setPrevFormData }) => {
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
  
      const reader = new FileReader();
      reader.onload = () => {
        setPrevFormData((prevFormData) => ({
          ...prevFormData,
          image: [...prevFormData.image, reader.result],
        }));
      };
      reader.readAsDataURL(file);
    };
  
    return (
      <>
        {Array.isArray(prevFormData.image) &&
          prevFormData?.image.length < 5 && (
            <div className="flex items-center justify-center bg-[#D9D9D9] border border-gray-300 p-4 w-32 h-32 md:w-48 md:h-48">
              <label htmlFor="image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="mx-auto h-8 w-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <p className="text-xs text-gray-500 mt-2">Add Image here</p>
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
          )}
      </>
    );
  };
  
  export default ImageInput;
  