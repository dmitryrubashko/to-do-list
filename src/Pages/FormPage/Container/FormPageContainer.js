import {useState, useCallback, useEffect} from "react";
import Form from "../Components/Form";
import {useForm} from "../../../Hooks";
import {debounce} from "lodash";

const FormPageContainer = () => {

  const [formData, onFormChange] = useForm({
    email: '',
    password: '',
  });

  const [dataToDisplay, setDataToDisplay] = useState({});

  const handleSetDataToDisplay = useCallback((data) => {
    setDataToDisplay(data)
  }, [formData])

  const debouncedSetData = useCallback(debounce((data) => {
    handleSetDataToDisplay(data)
  }, 500), []);

  useEffect(() => {
    debouncedSetData(formData)
  }, [formData])

  const [isFormPrinted, setFormPrinted] = useState(false);

  return (
    <Form
      formData={formData}
      onFormChange={onFormChange}
      dataToDisplay = {dataToDisplay}
    />
  );
};

export default FormPageContainer;
