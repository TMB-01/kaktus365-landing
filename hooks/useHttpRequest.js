import { useState } from "react";
import { makeRequest as httpRequest } from "../utils/makeRequest";

const useHttpRequest = (props) => {
  // const {
  //   onLoading,
  //   onSuccess,
  //   onError,
  //   onFinal,
  //   cleanTimeout,
  //   log = false,
  // } = props;

  const defaultState = {
    loading: false,
    success: false,
    error: false,
    data: null,
  };

  const [process, setProcess] = useState(defaultState);

  const makeRequest = (data) => {
    console.log(data);
    setProcess({
      loading: true,
      success: false,
      error: false,
      data: null,
    });
    props?.onLoading?.();

    httpRequest(data)
      .then((res) => {
        setProcess({
          loading: false,
          success: true,
          error: false,
          data: res.data,
        });
        props?.onSuccess?.(res);

        // console.log(res);
      })
      .catch((err) => {
        setProcess({
          loading: false,
          success: false,
          error: true,
          data: err,
        });

        // console.log(err?.response);
        props?.onError?.(err);
      })
      .finally(() => {
        // console.log(
        //   "final ",
        //   props,
        //   props?.cleanTimeout,
        //   props && props?.cleanTimeout
        // );
        if (props && props?.cleanTimeout) {
          setTimeout(() => {
            setProcess(defaultState);
            props?.onFinal?.();
          }, props?.cleanTimeout);
        } else {
          props?.onFinal?.();
        }
      });
  };
  return [process, makeRequest, () => setProcess(defaultState)];
};

export default useHttpRequest;
