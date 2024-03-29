import React, { useEffect, useState } from "react";
import Services from "../components/business/Services";
import Images from "../components/business/Images";
import { Outlet, useParams } from "react-router-dom";
import profile from "../assets/business/profile.jpeg";
import ServiceReview from "./ServiceReviews";
import StarRating from "../components/StarRating";
import write from "../assets/review/write.svg";
import axios from "../utility/Axios";
import { toast } from "react-toastify";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import RatingOnly from "../components/RatingOnly";
import ProfileSkeleton from "../utility/Loader";

const UserBusinessView = () => {
  const [rating, setRating] = useState(0);
  const [showTextarea, setShowTextarea] = useState(false);
  const [businessData, setBusinessData] = useState(null);
  const [services, setServices] = useState([]);
  const [image, setImage] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [loader, setLoader] = useState(false);
  const { id } = useParams();
  const queryClient = useQueryClient();



  const getBusiness = async () => {
    try {
      const response = await axios.get(`/businesses/${id}`);
      setBusinessData(response.data.data);
      setServices(response.data.data.services);
      setImage(response.data.data.image);
  
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching Business");
    }
  };

  // useEffect(() => {
  //   getBusiness()
  // }, [id])

  const { data, isLoading, error } = useQuery({
    queryKey: ["getBusiness"],
    queryFn: getBusiness,
  });

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleTextareaClick = () => {
    setShowTextarea(true);
  };

  const handleCancelClick = () => {
    setShowTextarea(false);
    setReviewText("");
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const {
    mutateAsync: mutateSubmitReview
  } = useMutation({
    mutationFn: async (reviewData) => {
      setLoader(true);
      try {
        const response = await axios.post(
          `reviews/${businessData?.slug}`,
          reviewData
        );
        return response.data;
      } catch (error) {
        throw new Error("Failed to submit review:", error);
        toast.error("Failed to submit review");
      }
    },
    mutationKey: ["submitReview"],
    onSuccess: () => {
      setLoader(false);
      toast.success("Review submitted successfully!");
      setReviewText("");
      setReviewerName("");
      setShowTextarea(false);
      queryClient.invalidateQueries({ queryKey: ["getBusiness"] });
    },
  });

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const reviewData = {
  //         reviewerName,
  //         reviewText,
  //         ratings: rating,
  //         selectedService
  //     }
  //     try {
  //         const response = await axios.post(`reviews/${businessData?.slug}`, reviewData);
  //         toast.success('Review submitted successfully!');
  //         setShowTextarea(false);
  //         setReviewText('');
  //     } catch (error) {
  //         console.error('Failed to submit review:', error);
  //     }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewData = {
      reviewerName,
      reviewText,
      ratings: rating,
      selectedService,
    };

    mutateSubmitReview(reviewData);
  };

  if (isLoading) {
    return(
      <div className="mt-40">
        <ProfileSkeleton />
      </div>
    )
  }

  const formattedRating = Number.isInteger(businessData?.averageRating) ? businessData?.averageRating.toString() : businessData?.averageRating.toFixed(1);


  return (
    <div className="px-6  py-6 lg:px-12 lg:py-[1.88rem] mt-20">
      <section className="md:flex items-center gap-8 md:gap-14">
        <img
          src={businessData?.logo.logoUrl}
          className="w-[305px] h-[249px]"
          alt="profile"
        />
        <div className=" pt-5  grid gap-5">
          <h4>{businessData?.businessName}</h4>
          <p>{businessData?.businessCategory}</p>
          <div className="flex items-center gap-2">
            <RatingOnly rating={businessData?.averageRating} />

            <p className="md:text-lg">{`${formattedRating} (${businessData?.reviewCount} reviews)`}</p>
          </div>
          <p>{businessData?.businessMail}</p>
          <h4>{businessData?.phoneNumber}</h4>
        </div>
      </section>

      <section className="grid gap-5 md:gap-10">
        <h2 className="text-xl md:text-2xl font-medium mt-8">Services</h2>
        <Services
          styleName={`grid gap-5 md:gap-10`}
          className={`border-[#A9A9A9] text-2xl rounded-[10px] py-4 pl-8 `}
          services={services}
        />
      </section>
      <section className="my-[43px]">
        <Images images={image} />
      </section>
      <h2 className="text-xl rounded-[10px] text-[#095EDC] font-medium mx-auto border w-fit shadow-sm mb-7 p-3 md:p-5">
        Reivews
      </h2>
      <section className="grid justify-center">
        <p className=" md:text-xl lg:text-2xl">
          Ratings and reviews are important to help others.
        </p>

        <div className="sm:flex items-center gap-3 md:gap-6 lg:gap-10 my-8">
          <p className="md:text-xl lg:text-2xl ">Tap to Rate:</p>
          <StarRating rating={rating} onRatingChange={handleRatingChange} />
        </div>

        {!showTextarea && (
          <div
            onClick={handleTextareaClick}
            className="flex items-center md:text-xl lg:text-2xl gap-3 md:gap-6 lg:gap-10 write"
          >
            <img src={write} className="w-10 h-10 " alt="write" />
            <p>Write a review</p>
          </div>
        )}

        <div className="grid gap-5 md:gap-10 my-8">
          <p className="md:text-xl lg:text-2xl ">Choose a service to review</p>
          <Services
            styleName={`flex justify-center items-center flex-wrap gap-5 md:gap-[53px]`}
            services={services}
            className={` py-4 px-3 rounded-[10px] text-[#095EDC] border-[#095EDC] active:bg-[#095EDC] `}
            onClick={handleServiceClick}
          />
        </div>

        {showTextarea && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={reviewerName}
              className="w-full p-2 rounded-md mb-3"
              onChange={(e) => setReviewerName(e.target.value)}
              placeholder="Your Name"
            />
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full p-2 rounded-md"
              placeholder="Enter your review"
            />
            <div className="flex gap-3 justify-center items-center">
              <button
                className="bg-[#095EDC] text-white px-4 py-2 rounded hover:bg-[#095EDC] focus:outline-none focus:shadow-outline-blue active:bg-[#095EDC] "
                type="submit"
                disabled={loader}
              >
               {loader ? 'submitting...' : 'submit'}
              </button>
              <button
                className="border-[#095EDC] border  px-4 py-2 rounded text-[#095EDC] focus:outline-none focus:shadow-outline-blue active:bg-[#095EDC] "
                type="button"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </section>
      <ServiceReview business={businessData?.slug} />
    </div>
  );
};

export default UserBusinessView;
