import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import ContainerBody from "./ContainerBody";

function FormPage() {

    const navigate = useNavigate();

    const checkBoxJsonResponse = [
        { id: 1, label: 'React' },
        { id: 2, label: 'Angular' },
        { id: 3, label: 'C#' },
        { id: 4, label: 'Java' },
        { id: 5, label: 'Ruby' },
        { id: 6, label: 'Python' }
    ];

    const selectBoxJsonResponse = [
        { id: 1, label: 'Sydney' },
        { id: 2, label: 'Mebourne' },
        { id: 3, label: 'Brisbane' },
        { id: 4, label: 'Adalaide' },
        { id: 5, label: 'perth' }
    ];

    const [formData, setFormData] = useState({
        "fullname": "",
        "dob": "",
        "preferredlocation": "",
        "programmingskill": null,
        "resumesummary": ""
    });

    const [checkBoxesValue, setCheckBoxesValue] = useState(checkBoxJsonResponse);
    const [selectBoxesValue, setSelectBoxesValue] = useState(selectBoxJsonResponse);


    useEffect(() => {
        /* 
        //if you want to fetch data before application ready
        function fetchApi() {
          fetch("https://api.example.com/submit")
            .then((response) => response.json())
            .then((data) => {  })
            .catch((error) => {
              console.log(error, "Unable to fetch data from server");
              setFetchMovieInStages(2);
            });
        } */
        //fetchApi();
    }, []);

    const handleSubmitButton = async (e) => {
        e.preventDefault();
        console.log("formData", formData);

        navigate(`/list`);

        //submit data in api
        /* try {
          const response = await fetch('https://api.example.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Add any additional headers required by your API
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            const responseData = await response.json();
            console.log('API Response:', responseData);
          } else {
            console.error('Error submitting form data:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error submitting form data:', error);
        } */

    }

    const handleInputChange = (e) => {
        //console.log("in handleInputChange",formData,e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCheckboxChange = (id) => {
        //console.log("in handleCheckboxChange",id);

        const mappingcheckbox = checkBoxesValue.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, isChecked: !checkbox.isChecked } : checkbox
        )

        setCheckBoxesValue(mappingcheckbox);

        const finalcheckboxval = mappingcheckbox.filter((checkval) =>
            (checkval.isChecked && checkval.isChecked === true ? checkval.label : "")
        )

        setFormData({
            ...formData,
            programmingskill: finalcheckboxval,
        });

    };



    return (
        <>
            <Header></Header>
            <ContainerBody handleCheckboxChange={handleCheckboxChange} handleInputChange={handleInputChange} handleSubmitButton={handleSubmitButton} formData={formData} checkBoxJsonResponse={checkBoxesValue} selectBoxJsonResponse={selectBoxesValue}></ContainerBody>
        </>
    );
}

export default FormPage;