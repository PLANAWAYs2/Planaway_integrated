import { useState, useEffect } from "react";
import {
  PEContents,
  PEContentTitle,
  PEMap,
  PEMapWrapper,
  OpenDetailBtn,
  PEInputWrapper,
} from "./PlanEditor2Style";
import PE2OpenDetail from "./PE2OpenDetail";
import PE2CityInput from "./PE2CityInput";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const PlanEditor2 = ({ inputCountry }) => {
  const API_KEY = "AIzaSyDedTPh8y0kQKaWqEGKnPwXAMXhLeENOHU";

  const [inputItems, setInputItems] = useState([
    {
      countryId: 0,
      id: 0,
      city: "",
      days: 0,
    },
  ]);

  const [detailPlanOpen, setDetailPlanOpen] = useState(false);
  const [dayDetails, setDayDetails] = useState([]);
  const [inputAddId, setInputAddId] = useState(1);
  const [totalDays, setTotalDays] = useState([
    {
      id: 0,
      sum: 0,
    },
  ]);

  const toggleDetailPlan = () => {
    setDetailPlanOpen(!detailPlanOpen);
  };

  const toggleDayPlan = (day) => {
    setDayDetails((prevDetails) =>
      prevDetails.map((detail, index) =>
        index === day ? { ...detail, toggle: !detail.toggle } : detail
      )
    );
  };

  const AddInput = (cId) => {
    const input = {
      countryId: cId,
      id: inputAddId,
      city: "",
      days: 0,
    };
    setInputItems([...inputItems, input]);
    setInputAddId(inputAddId + 1);
  };

  const DeleteInput = (id) => {
    setInputItems(inputItems.filter((item) => item.id !== id));
  };

  const onChange = (e, cId, id) => {
    const { name, value } = e.target;

    setInputItems(
      inputItems.map((item) => {
        if (item.countryId === cId && item.id === id) {
          return { ...item, [name]: value };
        } else {
          return item;
        }
      })
    );
  };

  useEffect(() => {
    console.log("totalday: ", totalDays);
  }, [totalDays]);

  const onChangeDetail = (e, cId, day) => {
    const { name, value } = e.target;

    setDayDetails(
      dayDetails.map((detail) => {
        if (detail.countryId === cId && detail.day === day) {
          return { ...detail, [name]: value };
        } else {
          return detail;
        }
      })
    );
  };

  useEffect(() => {
    const calculateTotalDays = () => {
      const sums = {};

      // 각 countryId에 대한 일 수 합계 계산
      inputItems.forEach((item) => {
        const { countryId, days } = item;
        sums[countryId] = (sums[countryId] || 0) + parseInt(days);
      });

      // 합계를 totalDays 상태에 저장
      setTotalDays(
        Object.keys(sums).map((countryId) => ({
          id: parseInt(countryId),
          sum: sums[countryId],
        }))
      );
    };

    calculateTotalDays();
  }, [inputItems]);

  useEffect(() => {
    console.log(totalDays);
    let updatedDetails = [];

    totalDays.forEach(({ id, sum }) => {
      updatedDetails = [
        ...updatedDetails,
        ...Array.from({ length: sum }, (_, index) => ({
          countryId: id,
          day: index + 1,
          content: "",
          detail: "",
          toggle: false,
        })),
      ];
    });

    setDayDetails(updatedDetails);
  }, [totalDays]);

  return (
    <PEContents>
      {inputCountry.map((country, index) => (
        <div key={index}>
          <PEContentTitle>
            <FontAwesomeIcon icon={faLocationArrow} size="lg" />
            <h4>
              {index + 1}번째 여행지, {inputCountry[index]?.item?.country}
            </h4>
          </PEContentTitle>
          <PEMapWrapper>
            <PEMap>
              <iframe
                key={index}
                width="616px"
                height="378px"
                frameborder="0"
                src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${inputCountry[index]?.item?.country}&zoom=6`}
              />
            </PEMap>

            <PEInputWrapper>
              <PE2CityInput
                inputItems={inputItems.filter(
                  (item) => item.countryId === inputCountry[index]?.id
                )}
                AddInput={() => AddInput(inputCountry[index].id)}
                DeleteInput={DeleteInput}
                onChange={onChange}
              />

              <OpenDetailBtn onClick={toggleDetailPlan}>
                {detailPlanOpen ? "상세계획 닫기" : "상세계획 열기"}
              </OpenDetailBtn>
            </PEInputWrapper>
          </PEMapWrapper>

          {detailPlanOpen && (
            <PE2OpenDetail
              inputItems={inputItems.filter(
                (item) => inputCountry[index]?.id === item.countryId
              )}
              dayDetails={dayDetails.filter(
                (item) => inputCountry[index]?.id === item.countryId
              )}
              onChange={onChange}
              onChangeDetail={onChangeDetail}
              toggleDayPlan={toggleDayPlan}
            />
          )}
        </div>
      ))}
    </PEContents>
  );
};

export default PlanEditor2;
