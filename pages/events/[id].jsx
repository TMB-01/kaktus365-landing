import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import SingleEvent from "../../components/singleEvent";
import useHttpRequest from "../../hooks/useHttpRequest";

function EventData() {
  const router = useRouter();

  const { id } = router.query;
  console.log(id);

  const [process, makeRequest] = useHttpRequest();
  useEffect(() => {
    if (id) {
      makeRequest({
        method: "GET",
        path: `events/${id}`,
      });
    }
  }, [id]);

  return (
    <div>
      {/* EventData <br />
      <h1>{id}</h1> */}
      {/* <Link href={"/events"}>back</Link> */}
      {process.success && <SingleEvent event={process.data} />}
    </div>
  );
}

export default EventData;
