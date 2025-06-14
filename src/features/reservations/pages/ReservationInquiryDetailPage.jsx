import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InquiryDetailContent from "../components/InquiryDetailContent";
import useGetInquiryById from "../hooks/useGetInquiryById";

//TODO: 리팩토링 필요
export default function ReservationInquiryDetailPage() {
  const { id } = useParams();

  const [reservationNumber, setReservationNumber] = useState(null);

  const {
    data: inquiry,
    isLoading: loadingRequest,
    error: errorRequest,
  } = useGetInquiryById(id);

  useEffect(() => {
    if (inquiry?.reservation_number) {
      setReservationNumber(inquiry.reservation_number);
    }
  }, [inquiry?.reservation_number]);

  return (
    <main className="flex flex-col gap-5 px-10 py-5">
      <h1 className="mb-4 text-2xl font-bold">
        {/* {reservation.name ?? ""}님의 문의 */}
        00님의 문의
      </h1>
      <InquiryDetailContent
        id={id}
        inquiry={inquiry}
        reservationNumber={reservationNumber}
        loadingRequest={loadingRequest}
        errorRequest={errorRequest}
      />
    </main>
  );
}
